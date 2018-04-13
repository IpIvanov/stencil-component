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
    "revision": "1eade743d632f51bc10a2564dae41d0b"
  },
  {
    "url": "build/stbutton/7xubkh3c.es5.js",
    "revision": "ab23b51ae1cd473c75b84c33d627af68"
  },
  {
    "url": "build/stbutton/7xubkh3c.js",
    "revision": "a7c61a445dff29f9f329384bc8da19ef"
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
    "revision": "06b82bf677362552982f7f842a17c37e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
