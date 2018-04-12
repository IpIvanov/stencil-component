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
    "url": "assets/icon/favicon.ico",
    "revision": "d2f619d796fbe8bed6200da2691aa5b6"
  },
  {
    "url": "assets/icon/icon.png",
    "revision": "b96ad6e1e0b755c8cd45e6aec40bca25"
  },
  {
    "url": "build/app.js",
    "revision": "259a273b249789161afb85e34b46eaa9"
  },
  {
    "url": "build/app/5tm4poyt.es5.js",
    "revision": "43dc3554815f462a949c8ff3e9e0212f"
  },
  {
    "url": "build/app/5tm4poyt.js",
    "revision": "20c13f36438cdd30511ee76e44819995"
  },
  {
    "url": "build/app/app.amidjviq.js",
    "revision": "c0d8ebb92b07631920dbf51cdf55bad6"
  },
  {
    "url": "build/app/app.sje2ksse.js",
    "revision": "d5395105023ecc178506374a762de3a9"
  },
  {
    "url": "build/app/at3rgw4r.es5.js",
    "revision": "e848179b3bb61750272b224443d10ff0"
  },
  {
    "url": "build/app/at3rgw4r.js",
    "revision": "3543e34fecef943048f7254d76be3f7a"
  },
  {
    "url": "build/app/chunk1.es5.js",
    "revision": "b4112d97ee19937d56d357446d85070c"
  },
  {
    "url": "build/app/chunk1.js",
    "revision": "062a09e8f97dc59680f969fc9ab041d8"
  },
  {
    "url": "build/app/loettoy3.es5.js",
    "revision": "341012f0e5919e03a63ef7878f559096"
  },
  {
    "url": "build/app/loettoy3.js",
    "revision": "b9c0b704c6a7571852e1884c41388781"
  },
  {
    "url": "index.html",
    "revision": "94baffa705382c768167495aaa2ddb81"
  },
  {
    "url": "manifest.json",
    "revision": "0c129721ede7cd25304ebdd238d774ad"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
