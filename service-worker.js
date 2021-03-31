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
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "a389e05950230608b2d4875a21274311"
  },
  {
    "url": "android-chrome-192x192.png",
    "revision": "99866d603fbab750d1ff66b609618fc3"
  },
  {
    "url": "android-chrome-512x512.png",
    "revision": "6108f7d8a8daf428fa8e702e296a0864"
  },
  {
    "url": "api-reference/core/index.html",
    "revision": "975a8aac4ce971e82c20402362d54d36"
  },
  {
    "url": "api-reference/index.html",
    "revision": "1082b606b9b42442193d1aef62f4894c"
  },
  {
    "url": "api-reference/plugin-autoplay/index.html",
    "revision": "18fe125b8c170dfee6ebc70348f5a64a"
  },
  {
    "url": "api-reference/plugin-custom-events/index.html",
    "revision": "bd58e32daf764d8714be75c845f676e1"
  },
  {
    "url": "api-reference/plugin-mouse-drag/index.html",
    "revision": "74a9361a8973ff7a68f446aef121e227"
  },
  {
    "url": "api-reference/plugin-scroll-snap-fallback/index.html",
    "revision": "9707b1aecfb3da4d8202bac01e85c326"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "815d34c8e80ecf432b4c8b8b84c25ec0"
  },
  {
    "url": "assets/css/0.styles.1ac6cb22.css",
    "revision": "21cd909263220b58fd88250141211235"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.0410b9df.js",
    "revision": "49fe71b3b1a25abbd2a8a827258b7e03"
  },
  {
    "url": "assets/js/11.e0c7a336.js",
    "revision": "66731f5f71fc84760127d32c538f810f"
  },
  {
    "url": "assets/js/12.1bd6a1c2.js",
    "revision": "4d756c6b57357f24c2655d35a8258248"
  },
  {
    "url": "assets/js/13.868057f3.js",
    "revision": "e18abfa91b963a372b95c300763c997e"
  },
  {
    "url": "assets/js/14.991ff816.js",
    "revision": "61fe3ba0435d6da3cf7575e07a27a5a8"
  },
  {
    "url": "assets/js/15.b393cadf.js",
    "revision": "c6ea3032780bbe39ee256e2f0df87d16"
  },
  {
    "url": "assets/js/16.0a5ca09f.js",
    "revision": "8465d03f50450c32bf5e9dc3b68f5226"
  },
  {
    "url": "assets/js/17.2d23f2cd.js",
    "revision": "d5003442f4004a18ee9eb29b7820ee4a"
  },
  {
    "url": "assets/js/18.bfeaae96.js",
    "revision": "6ed414f3f11bf52befc551628d836964"
  },
  {
    "url": "assets/js/19.d33455d1.js",
    "revision": "4dc95eb39374e95e3912ebcfbb1deb77"
  },
  {
    "url": "assets/js/2.dd88b603.js",
    "revision": "dac3ebdad7b6eb2f4466c1d368771565"
  },
  {
    "url": "assets/js/20.bdb37436.js",
    "revision": "79c856a8cfa08946e70f45ea2d7b9817"
  },
  {
    "url": "assets/js/21.037754b4.js",
    "revision": "ff6f0a5148ca07e9643ebb9e552367b6"
  },
  {
    "url": "assets/js/22.34cb04ad.js",
    "revision": "713cc2e1d9431bb5e2a278a7522bd8a3"
  },
  {
    "url": "assets/js/23.bc6dd9e3.js",
    "revision": "83fea126eb7b19d44028b9941bab08ac"
  },
  {
    "url": "assets/js/24.20776577.js",
    "revision": "77e61210ffe8ec5fd9535337a40da8f3"
  },
  {
    "url": "assets/js/25.20df4ac6.js",
    "revision": "a4d683ef68e3530adf2d915e461088a7"
  },
  {
    "url": "assets/js/26.bb5b9e7b.js",
    "revision": "05cc3be145d6b806a2fce7fda371f92e"
  },
  {
    "url": "assets/js/3.273db0a8.js",
    "revision": "061f82b59a433c7daf421950e08aaf39"
  },
  {
    "url": "assets/js/4.cd86141d.js",
    "revision": "1057d0fad896486e5d5731a739e6b842"
  },
  {
    "url": "assets/js/5.90d92c9f.js",
    "revision": "5bafcfd97723dcec29e75d967a147132"
  },
  {
    "url": "assets/js/6.1d513af8.js",
    "revision": "112201b9491aa7ae4fb34cca7f406138"
  },
  {
    "url": "assets/js/7.ac438a86.js",
    "revision": "0dfe4fe392ea646b156e5a09cbc79200"
  },
  {
    "url": "assets/js/8.0bf62ed6.js",
    "revision": "5192a78199efd97326d8eeeb8faa2461"
  },
  {
    "url": "assets/js/9.d2202761.js",
    "revision": "1a0ae6471734daf0e254eb6dc83e4d2a"
  },
  {
    "url": "assets/js/app.6edad98a.js",
    "revision": "074023132590dfa25e2eaaa4f2f89fff"
  },
  {
    "url": "CHANGELOG/index.html",
    "revision": "6fdbbd5d79e8415798ce7e125907049d"
  },
  {
    "url": "contribution/index.html",
    "revision": "2194b806d00c2c207fda24f0b71f282e"
  },
  {
    "url": "ecosystem/index.html",
    "revision": "50d16c9d6beed9d3efee8b0f35692e21"
  },
  {
    "url": "favicon-16x16.png",
    "revision": "2901e4f062ec96c8e1be019581fe3de8"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "bb80bf2aff9dc997ba2136245c56e770"
  },
  {
    "url": "guide/index.html",
    "revision": "d9513a058f7396c654de1ccbebc5cc58"
  },
  {
    "url": "guide/installation/index.html",
    "revision": "a9bfea08ebe919b89ba12879bb6a540b"
  },
  {
    "url": "guide/usage/index.html",
    "revision": "6c1d7a5b019d29c18e5fe6e9b3cdbba0"
  },
  {
    "url": "index.html",
    "revision": "4a805350b83c3b0cc8c8e68336fe6c1c"
  },
  {
    "url": "logo.jpg",
    "revision": "85c8a5d8d293ba0087bc0aff9714b0c1"
  },
  {
    "url": "logo.svg",
    "revision": "7a424c76e4fd34957ba14636ce37bf6d"
  },
  {
    "url": "mstile-150x150.png",
    "revision": "d61095d12c87835e67131f5e68f3922f"
  },
  {
    "url": "safari-pinned-tab.svg",
    "revision": "3a498fab85e168832cd725bd1b9d53e6"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
