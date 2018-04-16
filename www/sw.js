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
    "revision": "81b54ae6fb4220d861768dbc7b23a067"
  },
  {
    "url": "build/stbutton/gnfqjfqc.es5.js",
    "revision": "e2e87e8ce4c98955a57f48db26fbcc81"
  },
  {
    "url": "build/stbutton/gnfqjfqc.js",
    "revision": "dd86a24aca05fcc602e54b78cda0d335"
  },
  {
    "url": "build/stbutton/gnfqjfqc.sc.es5.js",
    "revision": "3f7767aeaf7c2e2eac0884cc13428177"
  },
  {
    "url": "build/stbutton/gnfqjfqc.sc.js",
    "revision": "882dd365aafd957309677e87e3d96296"
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
