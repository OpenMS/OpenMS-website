# Matomo Analytics Setup

This document explains how to enable Matomo web analytics tracking for the OpenMS website.

## Current Status

The Matomo tracking infrastructure has been implemented but requires configuration to be enabled.

## Files Modified

1. **layouts/partials/analytics.html** - Contains the Matomo tracking code
2. **config.yaml** - Contains the Matomo configuration parameters (currently commented out)

## How to Enable Matomo Tracking

To enable Matomo tracking, edit `config.yaml` and uncomment the `matomo` section under `params`, then fill in the correct values:

```yaml
params:
  matomo:
    url: "https://your-matomo-server.com/"  # Your Matomo server URL (must end with /)
    siteId: "1"  # Your Matomo site ID number
```

### Finding Your Matomo Configuration

1. **Matomo Server URL**: This is the URL where your Matomo instance is hosted. It should end with a `/`.
   - Example: `https://analytics.example.com/`
   - Example: `https://example.com/matomo/`

2. **Site ID**: This is the numeric ID assigned to your website in Matomo.
   - You can find this in your Matomo dashboard under Settings > Websites > Manage

## Where the Tracking Code is Placed

The Matomo tracking code is inserted via the `{{ partial "analytics.html" . }}` call in `layouts/_default/baseof.html` at line 58, which places it just before the closing `</body>` tag.

This follows Matomo's recommended practices for tracking code placement.

## Testing

After configuring the Matomo parameters:

1. Build the site locally: `make serve`
2. Visit the site in your browser
3. Check your browser's developer tools (Network tab) to verify that `matomo.js` is being loaded from your configured URL
4. Check your Matomo dashboard to verify that visits are being tracked

## Privacy Considerations

Don't forget to update the privacy policy (`content/en/privacy.md`) to mention that Matomo analytics is being used to track website visitors.

## Existing Analytics

Note that there is also Piwik Pro tracking code currently hardcoded in `layouts/_default/baseof.html` (lines 25-34). You may want to review whether both tracking systems are needed.
