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
    "url": "build/mycomponent.js",
    "revision": "1b9abf5e5f415d7752b0ee64c2bb2726"
  },
  {
    "url": "build/mycomponent/mycomponent.l09ggdbn.js",
    "revision": "e4b496018ea155b84d4d15b052e53168"
  },
  {
    "url": "build/mycomponent/mycomponent.q5501jbq.js",
    "revision": "3f33962edc7df8f871dd3801a662cf6c"
  },
  {
    "url": "build/mycomponent/o70a0g6k.es5.js",
    "revision": "8345feeb358caccd32a1e618af120c2c"
  },
  {
    "url": "build/mycomponent/o70a0g6k.js",
    "revision": "826b0367b9fb40b95906585eb3906ed8"
  },
  {
    "url": "build/mycomponent/o70a0g6k.sc.es5.js",
    "revision": "8345feeb358caccd32a1e618af120c2c"
  },
  {
    "url": "build/mycomponent/o70a0g6k.sc.js",
    "revision": "826b0367b9fb40b95906585eb3906ed8"
  },
  {
    "url": "index.html",
    "revision": "383334994515348d07f8c9d25f4c15a4"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
