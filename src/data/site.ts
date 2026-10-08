// Site-wide configuration
// Cloudflare Turnstile site key — get it from https://dash.cloudflare.com/?to=/:account/turnstile
// Create a widget for libertysmilecenter.com (add localhost + 127.0.0.1 as hostnames for dev testing)
export const TURNSTILE_SITE_KEY = '0x4AAAAAAFRy4sBpt46-Mov8';

// n8n webhook that receives form submissions (contact + appointment)
export const FORMS_WEBHOOK_URL = 'https://ain8n.innovexitsolutions.com/webhook/liberty-smile-center-contact';
