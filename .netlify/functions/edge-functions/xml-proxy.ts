// Netlify helpfully redirects www.* request to the non-www version. This breaks resolving XSLs for our schemas if strict CORS is used.
// the entries in _redirects don't solve this since it happens at the edge, instead rewrite the request to not use a 301 redirect

/** Validate and normalise path segments from the request suffix.
 *  Returns the joined safe path string, or null if any segment is invalid. */
function validatePathSegments(rest: string): string | null {
  const segments = rest.split("/");
  for (const seg of segments) {
    // Reject empty segments, dot-traversal, and any percent-encoded slash (%2F / %2f)
    if (seg === "" || seg === "." || seg === "..") return null;
    if (/%2f/i.test(seg)) return null;
    let decoded: string;
    try {
      decoded = decodeURIComponent(seg);
    } catch {
      return null;
    }
    // After decoding, reject traversal components that sneak through encoding
    if (decoded === "" || decoded === "." || decoded === "..") return null;
    if (decoded.includes("/")) return null;
  }
  return segments.join("/");
}

export default async (request: Request) => {
  const url = new URL(request.url);
  const path = url.pathname;

  let upstream: string | null = null;

  if (path.startsWith("/xml-stylesheet/")) {
    const safe = validatePathSegments(path.slice("/xml-stylesheet/".length));
    if (!safe) {
      return new Response("Bad Request: invalid path", { status: 400 });
    }
    upstream =
      "https://raw.githubusercontent.com/OpenMS/OpenMS/develop/share/OpenMS/XSL/" +
      safe;
  } else if (path.startsWith("/xml-schema/")) {
    const safe = validatePathSegments(path.slice("/xml-schema/".length));
    if (!safe) {
      return new Response("Bad Request: invalid path", { status: 400 });
    }
    upstream =
      "https://raw.githubusercontent.com/OpenMS/OpenMS/develop/share/OpenMS/SCHEMAS/" +
      safe;
  }

  if (!upstream) {
    return;
  }

  const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Vary": "Origin",
    "Access-Control-Allow-Methods": "GET, HEAD, OPTIONS",
  };

  if (request.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: corsHeaders });
  }

  let upstreamRes: Response;
  try {
    upstreamRes = await fetch(upstream, {
      method: request.method === "HEAD" ? "HEAD" : "GET",
      headers: { "User-Agent": "openms-netlify-edge" },
    });
  } catch {
    return new Response("Bad gateway", { status: 502, headers: corsHeaders });
  }

  if (!upstreamRes.ok) {
    return new Response(`Upstream error: ${upstreamRes.status}`, {
      status: upstreamRes.status,
      headers: corsHeaders,
    });
  }

  const headers = new Headers(upstreamRes.headers);

  for (const [k, v] of Object.entries(corsHeaders)) headers.set(k, v);
  if (path.startsWith("/xml-stylesheet/")) {
    headers.set("Content-Type", "text/xsl; charset=utf-8");
  } else if (path.endsWith(".xsd")) {
    headers.set("Content-Type", "application/xml; charset=utf-8");
  }

  return new Response(request.method === "HEAD" ? null : upstreamRes.body, {
    status: 200,
    headers,
  });
};

export const config = {
  path: ["/xml-stylesheet/*", "/xml-schema/*"],
};