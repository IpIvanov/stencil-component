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
    "revision": "e90422c6f77e0332627324e51e916524"
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
    "url": "build/stbutton/x42owxtg.es5.js",
    "revision": "1a04b35989f223c2a638a0cf0fc2930b"
  },
  {
    "url": "build/stbutton/x42owxtg.js",
    "revision": "8fe906dbbdac1f97449938aada2ceb4a"
  },
  {
    "url": "index.html",
    "revision": "df013e50e01e742f31f0156bdfe94031"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
