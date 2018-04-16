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
    "revision": "b889971c551902dfcaa35b11234fb6d3"
  },
  {
    "url": "build/stbutton/jjwaydxy.es5.js",
    "revision": "7c5039bbec6aaa7b55f25c9d69b2bfe6"
  },
  {
    "url": "build/stbutton/jjwaydxy.js",
    "revision": "b2cbbd794f3f17a2cf527cc9a2210e0d"
  },
  {
    "url": "build/stbutton/jjwaydxy.sc.es5.js",
    "revision": "f96afca6b0bdde3f5aad5f8c756d88fc"
  },
  {
    "url": "build/stbutton/jjwaydxy.sc.js",
    "revision": "7167d20e30ad9745f5a2694e28a028ec"
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
