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
    "revision": "a71a4160acc771fdd80bb68946b5238d"
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
    "revision": "aab5f7f53a7b4fe0a06fa26532ec1de5"
  },
  {
    "url": "api-reference/index.html",
    "revision": "2950f8ed231773283b5cf6a3ed963554"
  },
  {
    "url": "api-reference/integration-vue/index.html",
    "revision": "48e04415a433b18fdd91f9bf95f0363a"
  },
  {
    "url": "api-reference/plugin-autoplay/index.html",
    "revision": "067f29eb6dd96eeff19724ea83115d7a"
  },
  {
    "url": "api-reference/plugin-custom-events/index.html",
    "revision": "fb8da0e85649678466ffe62de853467c"
  },
  {
    "url": "api-reference/plugin-mouse-drag/index.html",
    "revision": "dd2220d33c29e7cf3a55a5bde809c4b4"
  },
  {
    "url": "api-reference/plugin-scroll-snap-fallback/index.html",
    "revision": "2eefd84b713868e4f35ed05bc367cd58"
  },
  {
    "url": "apple-touch-icon.png",
    "revision": "815d34c8e80ecf432b4c8b8b84c25ec0"
  },
  {
    "url": "assets/css/0.styles.b5a73a5d.css",
    "revision": "d988edde76d6da4ffec1800badb2241b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.6d75d474.js",
    "revision": "b940afb58aec39fff9c2711461e42d88"
  },
  {
    "url": "assets/js/11.c2db89b2.js",
    "revision": "90d40d9675efa41bf6681d155ed7f162"
  },
  {
    "url": "assets/js/12.100471b4.js",
    "revision": "0e6fb89139512d68fa738fe706242b26"
  },
  {
    "url": "assets/js/13.5054a249.js",
    "revision": "ffb7139d4b705efefb81bebf2f9fcc0b"
  },
  {
    "url": "assets/js/14.24df26f1.js",
    "revision": "57ff02993e77f81415c1c1a68e2b6d45"
  },
  {
    "url": "assets/js/15.14907ee7.js",
    "revision": "04eb222367a5fc224f8729d99af62b5a"
  },
  {
    "url": "assets/js/16.ea0bf8d3.js",
    "revision": "db9b6aa334e862642880e6b184c03d93"
  },
  {
    "url": "assets/js/17.cab41e2b.js",
    "revision": "ea7b08207491db98b4d717044167ebe8"
  },
  {
    "url": "assets/js/18.da546410.js",
    "revision": "d942de2104af68ee67b7500071e79b4b"
  },
  {
    "url": "assets/js/19.ecd13a28.js",
    "revision": "148d91995e79521c70519628239b6af8"
  },
  {
    "url": "assets/js/2.a1d499ac.js",
    "revision": "1a25c7fd877304df8ac192c45feeb5c9"
  },
  {
    "url": "assets/js/20.057e7b41.js",
    "revision": "5bfc48f704995270412b678ac3f911d1"
  },
  {
    "url": "assets/js/21.f769e23b.js",
    "revision": "8ae571fee1973fe4f2ea1f246e323405"
  },
  {
    "url": "assets/js/22.c37e5ac2.js",
    "revision": "31ad2a5a535e783c8f2a8ec5c6e0ecc0"
  },
  {
    "url": "assets/js/23.6f0d768d.js",
    "revision": "5274a83ec4b7f853b0e0e3eda4193bc2"
  },
  {
    "url": "assets/js/24.869b9471.js",
    "revision": "58dd31f5a9f15ac3d7891d61fac48266"
  },
  {
    "url": "assets/js/25.81fe7e31.js",
    "revision": "aaafce005042a71a1a7db1279ad78afa"
  },
  {
    "url": "assets/js/26.9119f025.js",
    "revision": "faf29f15242ec7ea64d219cd2e831858"
  },
  {
    "url": "assets/js/27.5d8a5323.js",
    "revision": "cd097bde8bc67266ea615beafc3c45da"
  },
  {
    "url": "assets/js/3.bd74832f.js",
    "revision": "055a60ec62f490dd0933dbc154ed11a0"
  },
  {
    "url": "assets/js/4.b71548aa.js",
    "revision": "cfcf04bbd1677cab6590ba36afe51342"
  },
  {
    "url": "assets/js/5.19d9ca9c.js",
    "revision": "b77a77931dfcfdb8a22d033f11c38ae9"
  },
  {
    "url": "assets/js/6.5cae4048.js",
    "revision": "02e78bd85e8a40371a740f92a5c41ffb"
  },
  {
    "url": "assets/js/7.9a103d79.js",
    "revision": "58ae319a761511ba49c3f9026009e9cc"
  },
  {
    "url": "assets/js/8.070f10a0.js",
    "revision": "2dbd4b40584d840ac3c3d660a26a654e"
  },
  {
    "url": "assets/js/9.e4277af5.js",
    "revision": "eccbe09aae39d373ce2fbd324009e256"
  },
  {
    "url": "assets/js/app.67a95779.js",
    "revision": "82b497d31660ad434985e427448351b4"
  },
  {
    "url": "CHANGELOG/index.html",
    "revision": "77f343f225057024c7efed554bbf0ce1"
  },
  {
    "url": "contribution/index.html",
    "revision": "b3419e4dfe24ff5a4ba56ca8c5a0771f"
  },
  {
    "url": "ecosystem/index.html",
    "revision": "cc9d4046d8fd8c975502a60569b85392"
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
    "revision": "9f71395f2d3e84a62fe6745cf06ccd36"
  },
  {
    "url": "guide/installation/index.html",
    "revision": "d34253cfa14373aa57bdb37fcebb4c25"
  },
  {
    "url": "guide/usage/index.html",
    "revision": "1cfd01ce3667c9518db45abb1fded37b"
  },
  {
    "url": "index.html",
    "revision": "23f4333a79a85d0dd02832667c12cea0"
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
