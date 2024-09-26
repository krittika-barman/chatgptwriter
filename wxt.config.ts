import { defineConfig } from 'wxt';

export default defineConfig({
  manifest: {
    "manifest_version": 3,
    "name": "LinkedIn AI Reply",
  "version": "1.0",
    "action": {
    "default_popup": "index.html"
  },
    "permissions": ["activeTab", "scripting"],
    "content_scripts": [
    {
      "matches": ["https://www.linkedin.com/*"],
      "js": ["contentScript.js"],
      "css": ["styles.css"]
    }
  ]
  },
});



