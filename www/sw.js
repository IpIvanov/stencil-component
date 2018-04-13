/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/YYPcyY
 */

importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/3.0.0-alpha.6/workbox-sw.js"
);

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "build/stbutton.js",
    "revision": "151c46683b309ec9928ee3f7636fa758"
  },
  {
    "url": "build/stbutton/efwwr1il.es5.js",
    "revision": "731f71bcca5d3e9a7a1db8daf73ef966"
  },
  {
    "url": "build/stbutton/efwwr1il.js",
    "revision": "40a0b9ffae00275c74cc4179ca625890"
  },
  {
    "url": "build/stbutton/stbutton.p9iqk0wt.js",
    "revision": "74deb0f3f186c06e55f3085705656cc4"
  },
  {
    "url": "build/stbutton/stbutton.w13x5mdg.js",
    "revision": "f148de4b32095101d8fb837bbe9216c7"
  },
  {
    "url": "index.html",
    "revision": "8b24fe51cf53d8597870909571ff2829"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});