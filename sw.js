if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,n)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const r=e=>a(e,c),o={module:{uri:c},exports:t,require:r};s[c]=Promise.all(i.map((e=>o[e]||r(e)))).then((e=>(n(...e),t)))}}define(["./workbox-1bb06f5e"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"1400dbf1b36d310485731a5905a35f82"},{url:"/_next/static/5dw1bxRCp_JgZycw_qkdl/_buildManifest.js",revision:"94929621f97c71592fad4b61b4f264d9"},{url:"/_next/static/5dw1bxRCp_JgZycw_qkdl/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/143-d1505eff170c7655.js",revision:"5dw1bxRCp_JgZycw_qkdl"},{url:"/_next/static/chunks/203.2b4c1ee4fbe3a7cf.js",revision:"2b4c1ee4fbe3a7cf"},{url:"/_next/static/chunks/218.57a830a2c55ba802.js",revision:"57a830a2c55ba802"},{url:"/_next/static/chunks/225-509b222f0360e2ce.js",revision:"5dw1bxRCp_JgZycw_qkdl"},{url:"/_next/static/chunks/4bd1b696-648fdcc35fdc5053.js",revision:"5dw1bxRCp_JgZycw_qkdl"},{url:"/_next/static/chunks/517-a5915ee09152b967.js",revision:"5dw1bxRCp_JgZycw_qkdl"},{url:"/_next/static/chunks/app/_not-found/page-555cdb29706b939f.js",revision:"5dw1bxRCp_JgZycw_qkdl"},{url:"/_next/static/chunks/app/api/send-email/route-46111c26c3d7fe3b.js",revision:"5dw1bxRCp_JgZycw_qkdl"},{url:"/_next/static/chunks/app/layout-f23e2b5f7c31882a.js",revision:"5dw1bxRCp_JgZycw_qkdl"},{url:"/_next/static/chunks/app/page-418d36a646da9bd4.js",revision:"5dw1bxRCp_JgZycw_qkdl"},{url:"/_next/static/chunks/framework-6b27c2b7aa38af2d.js",revision:"5dw1bxRCp_JgZycw_qkdl"},{url:"/_next/static/chunks/main-0ac545eed5ef336c.js",revision:"5dw1bxRCp_JgZycw_qkdl"},{url:"/_next/static/chunks/main-app-fda9fb7a870aefb8.js",revision:"5dw1bxRCp_JgZycw_qkdl"},{url:"/_next/static/chunks/pages/_app-430fec730128923e.js",revision:"5dw1bxRCp_JgZycw_qkdl"},{url:"/_next/static/chunks/pages/_error-2d7241423c4a35ba.js",revision:"5dw1bxRCp_JgZycw_qkdl"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-cdbdd001e0db7015.js",revision:"5dw1bxRCp_JgZycw_qkdl"},{url:"/_next/static/css/0cd484117825fbeb.css",revision:"0cd484117825fbeb"},{url:"/_next/static/css/aa15fe3776697b1b.css",revision:"aa15fe3776697b1b"},{url:"/assets/icons/globe.svg",revision:"2aaafa6a49b6563925fe440891e32717"},{url:"/assets/icons/icon-192x192.png",revision:"03a3c042d5f4a4387d00fbd43e117e01"},{url:"/assets/icons/icon-512x512.png",revision:"a6194fa4596c36f7e8e4c52f465882ff"},{url:"/assets/icons/icon.png",revision:"7aa0f55fd903cae7435f2a3414b6f97e"},{url:"/assets/icons/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/assets/icons/vercel.svg",revision:"c0af2f507b369b085b35ef4bbe3bcf1e"},{url:"/assets/icons/window.svg",revision:"a2760511c65806022ad20adf74370ff3"},{url:"/assets/images/Frame-1.webp",revision:"64e9ce20dfe8f47a647b9ebb7fc1a8cb"},{url:"/assets/images/Frame-2.webp",revision:"081e5462df9c55e9b45922e8946b39a2"},{url:"/assets/images/Frame-3.webp",revision:"a2a979ce1414cc0d5e3c8386da1dce80"},{url:"/assets/images/Frame-4.webp",revision:"6e16ae163f9ec3c457b6f956bea0e795"},{url:"/assets/images/Frame-5.webp",revision:"78e55512ad74b2f5ea6fdfa9f562f172"},{url:"/assets/images/Frame-6.webp",revision:"a0af8040647383a7730a4f8f617008ad"},{url:"/assets/images/Frame-7.webp",revision:"1840515e869f90af9f6b30268e91546c"},{url:"/assets/images/Frame-8.webp",revision:"9a65d4027395743e96d25436256f8b6d"},{url:"/assets/images/Frame-9.webp",revision:"4e8732d4c51caa095479f6e5b0fa1207"},{url:"/assets/images/Frame.webp",revision:"f057545d74109754e2b44b4b8ba2fb53"},{url:"/assets/images/Images.webp",revision:"e38bbecb3f989c5b4aef322a7934061b"},{url:"/assets/images/Mindsparks.webp",revision:"9881acbd7a13acd23f462f48570473e6"},{url:"/assets/images/Template_01.webp",revision:"a9d118043292d8f4c40aee53699ed90b"},{url:"/assets/images/buncabe.webp",revision:"2c494b7a8a01bc8dece0719121614069"},{url:"/assets/images/file.svg",revision:"d09f95206c3fa0bb9bd9fefabfd0ea71"},{url:"/assets/images/michi.webp",revision:"3c6ed2a94e885b2dfde24d3ca5967cb3"},{url:"/manifest.json",revision:"c9d8ac8429c3daccbe8b57a27d945db4"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
