'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "f1b4e0117b065c61fa746aae861f42d3",
"index.html": "20372c77adf3f604a07e9403e43f3454",
"/": "20372c77adf3f604a07e9403e43f3454",
"main.dart.js": "e2529414f618e5079866569f660d54e1",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "3c88409f835c76c600832a37d744ebf5",
"assets/AssetManifest.json": "419845fd30bcc0713597ed6478a58498",
"assets/NOTICES": "7894afb4c17f00973e368a28d28a6bdc",
"assets/FontManifest.json": "7ac4d30f47a51cf21c0d7c9996be6ff5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/im_gallery_photo1.png": "8836c09160e377c9c213466b74da27f7",
"assets/assets/images/im_gallery_photo2.png": "8bde154c874b3e86f3ceb7169d474b70",
"assets/assets/images/im_gallery_photo3.png": "7c8eb35e85947cfbf2e90f128f3db6a6",
"assets/assets/images/im_gallery_photo7.png": "a53e1c0ed2a5b26325c934612d3898c8",
"assets/assets/images/im_gallery_photo6.png": "3e033187cebc38606839854bd6af6210",
"assets/assets/images/im_gallery_photo4.png": "90f92fd5d1002990e73234f96ad9be93",
"assets/assets/images/im_gallery_photo5.png": "fe331a1eb00e2048e5cd7b78850f2cda",
"assets/assets/images/im_background.png": "61293f0b2e0920efa5848085d50d3e7e",
"assets/assets/images/im_gallery_photo12.png": "29831eacf6218b33de948d94dbb319fa",
"assets/assets/images/im_gallery_photo13.png": "8bde154c874b3e86f3ceb7169d474b70",
"assets/assets/images/im_gallery_photo11.png": "3bde297345aaef819e465bdcc7bddb6a",
"assets/assets/images/im_gallery_photo10.png": "fa6b9e1abb149eac8555d7870043e1fc",
"assets/assets/images/im_gallery_photo8.png": "c425a7ad874e204d3f7d1f791b85ff6d",
"assets/assets/images/im_gallery_photo9.png": "afd641cfc2f538559ac9c73ea7b90036",
"assets/assets/icons/ic_favorite.svg": "c987e4ae6701c622eef8c3563aa84362",
"assets/assets/icons/ic_check_list.svg": "22c5c25a902ae52c5c40fe2fd509aa52",
"assets/assets/icons/ic_wifi.svg": "042319b815309bac353640fbd2226087",
"assets/assets/icons/ic_card.svg": "fa6d113a971dcf752c492a547bf6b741",
"assets/assets/icons/ant-design_wifi-outlined.svg": "e9d88f62cb40c0a091357b7d9bd8d46e",
"assets/assets/icons/ic_connect_object.svg": "9365d0be983cb76b83f7530edbbd464e",
"assets/assets/icons/Vector.svg": "8d61729cf687506b5b39a12f9283f0ba",
"assets/assets/icons/ic_round-tv.svg": "5db4e34d216bab879831b58817219fa1",
"assets/assets/icons/ic_fluent_table.svg": "38f5740529921b3ab19787c1dcd53ac6",
"assets/assets/icons/ic_location.svg": "533132a21f08452cf581c4c7acaf468a",
"assets/assets/icons/ic_barcode.svg": "1e0c8b690aca0d265d0a4126a2fb87d8",
"assets/assets/icons/ic_close.svg": "7019d65e5b59b9e5d6bc45a4d6f9da48",
"assets/assets/icons/ic_phone_iphone.svg": "259c6d99f46f107b1c2ac5c909a48ce4",
"assets/assets/icons/ic_calendar.svg": "00a1bddae96c6636c6145ef56230e0ac",
"assets/assets/icons/ic_pencil.svg": "9714bd774622376c9bf987010aaad59f",
"assets/assets/icons/ic_coffee_cup.svg": "cf38a8c4a8f5b8a98f753dabd9a29039",
"assets/assets/icons/ic_filtr.svg": "5474def77ef2343318b85861a5102be0",
"assets/assets/icons/ic_car.svg": "732faf78532b44e9c9fb892dd91a6291",
"assets/assets/icons/ic_round_tv.svg": "7d79bee685e254980689f5587ba1eba2",
"assets/assets/icons/ic_gift.svg": "a9de37e2044567c7a6f1b4d41c586ba9",
"assets/assets/icons/ic_exit_to_app.svg": "91284ccee9a0fee2248f8ddfc182c4c6",
"assets/assets/icons/ic_chat_processing.svg": "d63d7534b4a4bd1467f325d12e81b35b",
"assets/assets/icons/ic_calendar_text.svg": "f7fe66960f0003eeebf28b9db9a6d05e",
"assets/assets/icons/ic_warning.svg": "7cd3568e09d3dddb0aeb82c85a9d70e3",
"assets/assets/icons/ic_add_photo.svg": "acd563e3d15d0064e06726c0eb46e6cd",
"assets/assets/icons/ic_location_outline.svg": "ff284f7e42248165130ab5023871cfa4",
"assets/assets/icons/ic_arrow_back_ios.svg": "ef817a8d8e821626ce9e6eeb4bfe6f3d",
"assets/assets/icons/Frame.svg": "04ce41e22aa9d86e007dffef29fb679f",
"assets/assets/icons/ic_question.svg": "69e6b70f5b96b7d58844dc626a443b1a",
"assets/assets/icons/mdi_billiards-rack.svg": "c9ae14860fa1eba6c148dc9e80f78ad8",
"assets/assets/icons/fluent_vehicle-car-24-regular.svg": "f4dbce0e63495e3a6075ae814ac3716e",
"assets/assets/icons/fluent_vehicle-car-24-regular%2520(1).svg": "283068386cb1952c43c7d6026c28be82",
"assets/assets/lottie/loading_lottie.json": "6d404c3af778b4234e6f21346d3265e6",
"assets/assets/fonts/inter/Inter-Medium.ttf": "e5f18cb987385760e628a9671f975412",
"assets/assets/fonts/inter/Inter-Regular.ttf": "851660f90f21dba5ec35b1765fdd426a",
"assets/assets/fonts/poppins/Poppins-ExtraLight.ttf": "6f8391bbdaeaa540388796c858dfd8ca",
"assets/assets/fonts/poppins/Poppins-ThinItalic.ttf": "01555d25092b213d2ea3a982123722c9",
"assets/assets/fonts/poppins/Poppins-ExtraLightItalic.ttf": "a9bed017984a258097841902b696a7a6",
"assets/assets/fonts/poppins/Poppins-BoldItalic.ttf": "19406f767addf00d2ea82cdc9ab104ce",
"assets/assets/fonts/poppins/Poppins-Light.ttf": "fcc40ae9a542d001971e53eaed948410",
"assets/assets/fonts/poppins/Poppins-Medium.ttf": "bf59c687bc6d3a70204d3944082c5cc0",
"assets/assets/fonts/poppins/Poppins-SemiBoldItalic.ttf": "9841f3d906521f7479a5ba70612aa8c8",
"assets/assets/fonts/poppins/Poppins-ExtraBoldItalic.ttf": "8afe4dc13b83b66fec0ea671419954cc",
"assets/assets/fonts/poppins/Poppins-ExtraBold.ttf": "d45bdbc2d4a98c1ecb17821a1dbbd3a4",
"assets/assets/fonts/poppins/Poppins-BlackItalic.ttf": "e9c5c588e39d0765d30bcd6594734102",
"assets/assets/fonts/poppins/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/poppins/Poppins-LightItalic.ttf": "0613c488cf7911af70db821bdd05dfc4",
"assets/assets/fonts/poppins/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/poppins/Poppins-Black.ttf": "14d00dab1f6802e787183ecab5cce85e",
"assets/assets/fonts/poppins/Poppins-Thin.ttf": "9ec263601ee3fcd71763941207c9ad0d",
"assets/assets/fonts/poppins/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/fonts/poppins/Poppins-Italic.ttf": "c1034239929f4651cc17d09ed3a28c69",
"assets/assets/fonts/poppins/Poppins-MediumItalic.ttf": "cf5ba39d9ac24652e25df8c291121506",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
