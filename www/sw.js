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
    "revision": "b639f22005fc2d49e0797cce5f1b94d5"
  },
  {
    "url": "build/stbutton/rjfdppwp.es5.js",
    "revision": "0b458c3f81fb0053c6151d186edf1384"
  },
  {
    "url": "build/stbutton/rjfdppwp.js",
    "revision": "138f5b09f1a775212db3fc97fc300550"
  },
  {
    "url": "build/stbutton/rjfdppwp.sc.es5.js",
    "revision": "3071fd95c9ea8e5552b1983f44c15096"
  },
  {
    "url": "build/stbutton/rjfdppwp.sc.js",
    "revision": "28528b3ce28337655a232cd5add04ff3"
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
