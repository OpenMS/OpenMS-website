// Netlify helpfully redirects www.* request to the non-www version. This breaks resolving XSLs for our schemas if strict CORS is used.
// the entries in _redirects don't solve this since it happens at the edge, instead rewrite the request to not use a 301 redirect

export default async (request: Request) => {
  const url = new URL(request.url);
  const path = url.pathname;

  let upstream: string | null = null;

  if (path.startsWith("/xml-stylesheet/")) {
    const rest = path.slice("/xml-stylesheet/".length);
    upstream =
      "https://raw.githubusercontent.com/OpenMS/OpenMS/develop/share/OpenMS/XSL/" +
      rest;
  } else if (path.startsWith("/xml-schema/")) {
    const rest = path.slice("/xml-schema/".length);
    upstream =
      "https://raw.githubusercontent.com/OpenMS/OpenMS/develop/share/OpenMS/SCHEMAS/" +
      rest;
  }

  if (!upstream) {
    return;
  }

  const upstreamRes = await fetch(upstream, {
    headers: { "User-Agent": "openms-netlify-edge" },
  });

  if (!upstreamRes.ok) {
    return new Response(`Upstream error: ${upstreamRes.status}`, {
      status: upstreamRes.status,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Vary": "Origin",
      },
    });
  }

  const headers = new Headers(upstreamRes.headers);

  headers.set("Access-Control-Allow-Origin", "*");
  headers.set("Vary", "Origin");
  headers.set("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS");
  if (path.startsWith("/xml-stylesheet/")) {
    headers.set("Content-Type", "text/xsl; charset=utf-8");
  } else if (path.endsWith(".xsd")) {
    headers.set("Content-Type", "application/xml; charset=utf-8");
  }

  return new Response(upstreamRes.body, {
    status: 200,
    headers,
  });
};

export const config = {
  path: ["/xml-stylesheet/*", "/xml-schema/*"],
};