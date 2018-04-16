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
    "revision": "177b543460a2870f3294e3e5bb1d475d"
  },
  {
    "url": "build/stbutton/sng6ma4y.es5.js",
    "revision": "6d6d6c6377428b0f652cc49afc9ae318"
  },
  {
    "url": "build/stbutton/sng6ma4y.js",
    "revision": "a7d789a2358a592c973243e3b65eff9e"
  },
  {
    "url": "build/stbutton/sng6ma4y.sc.es5.js",
    "revision": "6de91675bec5f88902a22b215eac14f1"
  },
  {
    "url": "build/stbutton/sng6ma4y.sc.js",
    "revision": "8a1b708c310e3b793decac8eb39e2b28"
  },
  {
    "url": "build/stbutton/stbutton.aevlngvn.js",
    "revision": "afc0bd19f1324e78cf852753f221c398"
  },
  {
    "url": "build/stbutton/stbutton.qlmn2a5s.js",
    "revision": "4ddddb2ab95b87bc81961fb26795fc87"
  },
  {
    "url": "index.html",
    "revision": "df013e50e01e742f31f0156bdfe94031"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
