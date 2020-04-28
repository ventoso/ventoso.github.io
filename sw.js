const workboxVersion = '5.0.0';

importScripts(`https://storage.googleapis.com/workbox-cdn/releases/${workboxVersion}/workbox-sw.js`);

workbox.core.setCacheNameDetails({
    prefix: "Ventoso"
});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

workbox.precaching.precacheAndRoute([{"revision":"180c607a979bd72102e8b16ea07622b6","url":"./404.html"},{"revision":"59999924dbbd6f160cade7eaf769d8c0","url":"./about.html"},{"revision":"f82325a6059a8fc3680b82a5e157deef","url":"./archives/2020/02/index.html"},{"revision":"dc7ab56f826320f6b8d15e6468244a7f","url":"./archives/2020/03/index.html"},{"revision":"459fb558df10aae2b1139c370aa37f6b","url":"./archives/2020/04/index.html"},{"revision":"ab6009372059696156a23f223722c3a1","url":"./archives/2020/index.html"},{"revision":"e4ce02f924740b8688489a7a3e92ac9c","url":"./archives/index.html"},{"revision":"8458d99957e6a2bc36c9f93f6c8342f6","url":"./categories/Something/index.html"},{"revision":"6aca8b8f7ce40ca93a2df7ab572a8669","url":"./categories/何为折腾/index.html"},{"revision":"5c6f8d97c29105513aaa6fee0ebe1625","url":"./css/style.css"},{"revision":"cac4832c7b6c0b49e14336523e429e8e","url":"./index.html"},{"revision":"245a3c07d313760430336fa9c2246ce3","url":"./js/app.js"},{"revision":"016ff1b5f1275fdcf27e54a0f5538052","url":"./lib/iconfont/demo_index.html"},{"revision":"62292da8d78b5edf73d2b5141d5abf1b","url":"./lib/iconfont/demo.css"},{"revision":"583cdcc43f014a975b74dcd23b3c1569","url":"./lib/iconfont/iconfont.css"},{"revision":"354b47fea6fcb842361b2d6830fce4d7","url":"./lib/iconfont/iconfont.js"},{"revision":"95ed7cb26bc61669451291eaa0921e86","url":"./lib/iconfont/iconfont.json"},{"revision":"73dc51905c6b6f43adeb0f271fcec93e","url":"./lib/iconfont/iconfont.woff2"},{"revision":"d389b2b31b53bb186544e5962cdf8393","url":"./lib/mdui_043tiny/css/mdui.css"},{"revision":"5ca7c5765e979aecb069d1125dcb3664","url":"./lib/mdui_043tiny/js/mdui.js"},{"revision":"0a99d3b6ad6c272abd20aa207405126b","url":"./page/2/index.html"},{"revision":"5e8c937b4a4aa0c7cc8fefaec56fbe45","url":"./page/3/index.html"},{"revision":"598a7e0d4ee390df80f52f4e8d33b573","url":"./posts/22a18a6.html"},{"revision":"3eb62e7e3b24bcef168e1b12b439286a","url":"./posts/2cce625e.html"},{"revision":"70f6623ee3d2be9483ce4cdabe8370ab","url":"./posts/2d8fd6c9.html"},{"revision":"ce1b6d55f7f687ea61d09677203f7edc","url":"./posts/3106519f.html"},{"revision":"8f48b9b28d823faba734101fce6a6f7e","url":"./posts/51356.html"},{"revision":"071274f77461de3e9cb7a6e6e91962c1","url":"./posts/7ecb09b6.html"},{"revision":"91e3adb0f864a8b269be6bac39dcc232","url":"./posts/884712ce.html"},{"revision":"257658fbf6bd60ab4dac648928771aa7","url":"./posts/8ac9d56f.html"},{"revision":"e572735f9aba25766b214ca03449f9cb","url":"./posts/a100e53a.html"},{"revision":"b20bae9ae384c0b546c93b44b7da9eea","url":"./posts/e7f3d2da.html"},{"revision":"e84f001929fe3f1420621c246ed6a5f4","url":"./posts/ef14aad6.html"},{"revision":"28776b73167b132cce4f9a83e8256ebc","url":"./PY.html"},{"revision":"1b3fd155036cadf975bce221e64c51d8","url":"./tags/arch/index.html"},{"revision":"21b7949baec9e1aaef5318716c73c1b9","url":"./tags/C语言/index.html"},{"revision":"81296afe3e9f280d9a23d249bd8bc925","url":"./tags/gulp/index.html"},{"revision":"781459ae6fe84b02c9d09a30c1f8afd7","url":"./tags/hexo/index.html"},{"revision":"6666b0dcc1ea745894bdc036123d8469","url":"./tags/linux/index.html"},{"revision":"d44fa2d40427df7caa3918d523e2a526","url":"./tags/manjaro/index.html"},{"revision":"b4203abaac76870c82aa0e8cde86e5dc","url":"./tags/sharlist/index.html"},{"revision":"1255f826ed9e8f5dc6ef8066e98a4bad","url":"./tags/something/index.html"},{"revision":"e2ba8c439868dcf7a3d8ca250f6af556","url":"./tags/云存储/index.html"},{"revision":"f29b1101b79a15500a3532c09b276d05","url":"./tags/优化/index.html"},{"revision":"7a25dd20f7bef61c0e7c8f26a6d807b8","url":"./tags/加速/index.html"},{"revision":"040bd2adb6038ef9aa72850002169ee4","url":"./tags/天翼云/index.html"},{"revision":"aa8c8a09ba4ec490d63a1df3dae93eb5","url":"./tags/手机/index.html"},{"revision":"3eaee838f86634f060bd74c144d1698e","url":"./tags/折腾笔记/index.html"},{"revision":"9a050f890d542cb6d23a648dd4f125a5","url":"./tags/随心/index.html"}]);

workbox.precaching.cleanupOutdatedCaches();

// Images
workbox.routing.registerRoute(
    /\.(?:png|jpg|jpeg|gif|bmp|webp|svg|ico)$/,
    new workbox.strategies.CacheFirst({
        cacheName: "images",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

// Fonts
workbox.routing.registerRoute(
    /\.(?:eot|ttf|woff|woff2)$/,
    new workbox.strategies.CacheFirst({
        cacheName: "fonts",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

// Google Fonts
workbox.routing.registerRoute(
    /^https:\/\/fonts\.googleapis\.com/,
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets"
    })
);
workbox.routing.registerRoute(
    /^https:\/\/fonts\.gstatic\.com/,
    new workbox.strategies.CacheFirst({
        cacheName: 'google-fonts-webfonts',
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

// Static Libraries
workbox.routing.registerRoute(
    /^https:\/\/cdn\.jsdelivr\.net/,
    new workbox.strategies.CacheFirst({
        cacheName: "static-libs",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

// External Images
workbox.routing.registerRoute(
    /^https:\/\/raw\.githubusercontent\.com\/reuixiy\/hugo-theme-meme\/master\/static\/icons\/.*/,
    new workbox.strategies.CacheFirst({
        cacheName: "external-images",
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 1000,
                maxAgeSeconds: 60 * 60 * 24 * 30
            }),
            new workbox.cacheableResponse.CacheableResponsePlugin({
                statuses: [0, 200]
            })
        ]
    })
);

workbox.googleAnalytics.initialize(); 
