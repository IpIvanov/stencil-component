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
    "revision": "49ef6797ba0053a5433c4a36a7851eee"
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
    "url": "build/stbutton/vyi89vft.es5.js",
    "revision": "b19b95e499d250904bb7ef632ec15d0b"
  },
  {
    "url": "build/stbutton/vyi89vft.js",
    "revision": "b31bf6e4684b556bc3133faacbc94b7e"
  },
  {
    "url": "index.html",
    "revision": "f61a568867aa39da0ed262fbcfed3c88"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
