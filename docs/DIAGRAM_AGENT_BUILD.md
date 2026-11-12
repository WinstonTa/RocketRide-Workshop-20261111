# Diagram agent — production Vite build

Run: https://github.com/WinstonTa/RocketRide-Workshop-20261111/actions/runs/43154610550
Commit tested: e210a5d515af780a91b13209ee08169021de43fb

Node: v22.23.4
Yarn: 1.22.22

Command: yarn run v1.22.22
$ yarn --cwd ./excalidraw-app build:app
$ cross-env VITE_APP_GIT_SHA=$VERCEL_GIT_COMMIT_SHA cross-env VITE_APP_ENABLE_TRACKING=true vite build
[log] [36mvite v5.0.12 [32mbuilding for production...[36m[39m
[log] transforming...
[log] [32m✓[39m 1498 modules transformed.
[log] rendering chunks...
[log] computing gzip size...
[log] [2mbuild/[22m[32mfonts/Excalifont/Excalifont-Regular-623ccf21b21ef6b3a0d87738f77eb071.woff2          [39m[1m[2m    0.82 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/ComicShanns/ComicShanns-Regular-6e066e8de2ac57ea9283adb9c24d7f0c.woff2        [39m[1m[2m    1.29 kB[22m[1m[22m
[log] [2mbuild/[22m[32mmanifest.webmanifest                                                                [39m[1m[2m    1.36 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Lilita/Lilita-Regular-i7dPIFZ9Zz-WBtRtedDbYE98RXi4EwSsbg.woff2                [39m[1m[2m    1.42 kB[22m[1m[22m
[log] [2mbuild/[22m[2massets/[22m[32mmermaid-chunks-DA-Q52Mr.json                                                 [39m[1m[2m    1.89 kB[22m[1m[22m[2m │ gzip:   0.95 kB[22m
[log] [2mbuild/[22m[32mfonts/Excalifont/Excalifont-Regular-3f2c5db56cc93c5a6873b1361d730c16.woff2          [39m[1m[2m    2.10 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Excalifont/Excalifont-Regular-349fac6ca4700ffec595a7150a0d1e1d.woff2          [39m[1m[2m    2.66 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/ComicShanns/ComicShanns-Regular-dc6a8806fa96795d7b3be5026f989a17.woff2        [39m[1m[2m    2.82 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Nunito/Nunito-Regular-XRXI3I6Li01BKofiOc5wtlZ2di8HDIkhdTs3j6zbXWjgevT5.woff2  [39m[1m[2m    6.12 kB[22m[1m[22m
[log] [2mbuild/[22m[32mindex.html                                                                          [39m[1m[2m    6.91 kB[22m[1m[22m[2m │ gzip:   2.33 kB[22m
[log] [2mbuild/[22m[32mfonts/Nunito/Nunito-Regular-XRXI3I6Li01BKofiOc5wtlZ2di8HDIkhdTA3j6zbXWjgevT5.woff2  [39m[1m[2m    8.39 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Excalifont/Excalifont-Regular-41b173a47b57366892116a575a43e2b6.woff2          [39m[1m[2m    8.71 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/ComicShanns/ComicShanns-Regular-fcb0fc02dcbee4c9846b3e2508668039.woff2        [39m[1m[2m    9.86 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Lilita/Lilita-Regular-i7dPIFZ9Zz-WBtRtedDbYEF8RXi4EwQ.woff2                   [39m[1m[2m   10.68 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Nunito/Nunito-Regular-XRXI3I6Li01BKofiOc5wtlZ2di8HDIkhdTk3j6zbXWjgevT5.woff2  [39m[1m[2m   11.10 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Excalifont/Excalifont-Regular-be310b9bcd4f1a43f571c46df7809174.woff2          [39m[1m[2m   12.22 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Excalifont/Excalifont-Regular-b9dcf9d2e50a1eaf42fc664b50a3fd0d.woff2          [39m[1m[2m   13.30 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Nunito/Nunito-Regular-XRXI3I6Li01BKofiOc5wtlZ2di8HDIkhdTo3j6zbXWjgevT5.woff2  [39m[1m[2m   15.48 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Nunito/Nunito-Regular-XRXI3I6Li01BKofiOc5wtlZ2di8HDIkhdTQ3j6zbXWjgeg.woff2    [39m[1m[2m   16.48 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-7eb9fffd1aa890d07d0f88cc82e6cfe4.woff2                [39m[1m[2m   17.25 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/ComicShanns/ComicShanns-Regular-279a7b317d12eb88de06167bd672b4b4.woff2        [39m[1m[2m   17.49 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Excalifont/Excalifont-Regular-a88b72a24fb54c9f94e3b5fdaa7481c9.woff2          [39m[1m[2m   24.96 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-59e9ff77b0efaf684bc09274fb6908c9.woff2                [39m[1m[2m   26.05 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-145aa02cdd91946e67dc934e1acffe75.woff2                [39m[1m[2m   37.41 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-c4a687ac4f0c2766eefc9f77ed99cddf.woff2                [39m[1m[2m   38.42 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-ec181b795ac1fb5a50d700b6e996d745.woff2                [39m[1m[2m   39.52 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-cfb211578629b7e8153b37240de6a9d5.woff2                [39m[1m[2m   44.46 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-2b7441d46298788ac94e610ffcc709b6.woff2                [39m[1m[2m   46.55 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-f8ee5d36068a42b51d0e4a1116cfcec1.woff2                [39m[1m[2m   47.28 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-74e2263a91439c25b91d5132ce9f4d62.woff2                [39m[1m[2m   47.54 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-b7d203b051eff504ff59ddca7576b6a9.woff2                [39m[1m[2m   48.15 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-79d494361ae093b69e74ee9dbe65bfd4.woff2                [39m[1m[2m   48.74 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-739bc1a567439c7cffcd1614644593d2.woff2                [39m[1m[2m   49.49 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-08e0dc436ad0ad61ba5558db0674d762.woff2                [39m[1m[2m   49.74 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-72252d73220fa3cd856677888cee1635.woff2                [39m[1m[2m   49.97 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-9d81066dd2b337c938df6e90380a00dc.woff2                [39m[1m[2m   50.17 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-5a1ce3117cfe90c48e8fb4a9a00f694d.woff2                [39m[1m[2m   50.22 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-dac48066b5883d8b4551fc584f0c2a3e.woff2                [39m[1m[2m   50.23 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-8d3bcabb847b56243b16afe62adaaf21.woff2                [39m[1m[2m   50.36 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-cf6ff4e0f491ca0cf3038187a997b9b4.woff2                [39m[1m[2m   50.61 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-0facdf1ea213ba40261022f5d5ed4493.woff2                [39m[1m[2m   50.66 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-4806e761d750087c2d734fc64596eaff.woff2                [39m[1m[2m   50.70 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-450da755d5bcb70906e1295e559b9602.woff2                [39m[1m[2m   51.33 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-cdbce89e82cc1ab53a2decbf5819278f.woff2                [39m[1m[2m   51.42 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-9592bfc861f07bcb8d75c196b370e548.woff2                [39m[1m[2m   51.57 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-3756e81d3e149cf6099163ee79944fec.woff2                [39m[1m[2m   51.60 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-1ee544f0f1dac422545c505baa788992.woff2                [39m[1m[2m   51.73 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-2b77e8ebfb2367ab2662396a60e7d320.woff2                [39m[1m[2m   52.49 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-733171b4ffcd17ea1fe1c0ba627173bf.woff2                [39m[1m[2m   52.60 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-938d90c10ff8c20386af7f242c05d6b0.woff2                [39m[1m[2m   52.64 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-a1f916d6039285c4ffb900cd654e418f.woff2                [39m[1m[2m   52.88 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-15dc6d811c9cd078f9086a740d5a1038.woff2                [39m[1m[2m   53.17 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-33432927cd87d40cfe393c7482bf221f.woff2                [39m[1m[2m   53.22 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-670ba603758d94268e8606f240a42e12.woff2                [39m[1m[2m   53.52 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-e656f091b9dc4709722c9f4b84d3c797.woff2                [39m[1m[2m   53.56 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-0b5d723fdc4e249c140f0909e87d03b4.woff2                [39m[1m[2m   53.67 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-0986d134c05864f5025962eef9f994a0.woff2                [39m[1m[2m   53.76 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-353f33792a8f60dc69323ddf635a269e.woff2                [39m[1m[2m   54.16 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-be549ab72f0719d606a5c01e2c0219b6.woff2                [39m[1m[2m   54.44 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-7ccce86603f80a099ddb0cb21d4ae3e3.woff2                [39m[1m[2m   54.44 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-dbea1af6dcd9860be40c3d18254338f5.woff2                [39m[1m[2m   54.47 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-642b26e2e5f5fb780b51b593dbc8c851.woff2                [39m[1m[2m   54.54 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-5330a2119a716e4e7224ed108b085dac.woff2                [39m[1m[2m   54.60 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-3717077e38f98d89eae729b6c14e56dc.woff2                [39m[1m[2m   54.63 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-7a07ddc0f0c0f5f4a9bad6ee3dda66b5.woff2                [39m[1m[2m   54.72 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-9cfb2a77a4e45025105ad29a1748b90d.woff2                [39m[1m[2m   54.72 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-23f228f3999c01983860012330e4be08.woff2                [39m[1m[2m   54.73 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-7718fe60986d8b42b1be9c5ace5ccf25.woff2                [39m[1m[2m   54.87 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-aa5c9ca6cf4fba00433b7aa3fa10671a.woff2                [39m[1m[2m   54.89 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-968cffdc8ee679da094e77ebf50f58ef.woff2                [39m[1m[2m   54.96 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-9544732d2e62d1a429674f8ee41b5d3a.woff2                [39m[1m[2m   55.05 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-06c77b8c66e51ed6c63ccb502dd8b8af.woff2                [39m[1m[2m   55.11 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-f2b54d4e7be0eaefe1c2c56836fa5368.woff2                [39m[1m[2m   55.18 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-54acdfc2166ad7fcbd074f75fd4a56ba.woff2                [39m[1m[2m   55.29 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-6fe5c5973cc06f74b2387a631ea36b88.woff2                [39m[1m[2m   55.70 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-093b9ef39a46ceae95a1df18a0a3a326.woff2                [39m[1m[2m   55.71 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-e5f453bb04da18eed01675eeebd88bf8.woff2                [39m[1m[2m   55.83 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-cd145ce4a0ea18469358df53c207bc1b.woff2                [39m[1m[2m   55.96 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-ac9ceb44437becc3e9c4dbfebab7fc2d.woff2                [39m[1m[2m   55.99 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-1fdc0c67ed57263a80fd108c1f6ccf24.woff2                [39m[1m[2m   56.00 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-13ae07ed2e272d26d59bc0691cd7117a.woff2                [39m[1m[2m   56.14 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Virgil/Virgil-Regular.woff2                                                   [39m[1m[2m   56.16 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-7ab2bed91166a9dca83a5ebfbe2a7f38.woff2                [39m[1m[2m   56.23 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-91ddb2969bf2d31ba02ad82998d1314c.woff2                [39m[1m[2m   56.28 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-99a16ef6a64934d5781933dbd9c46b2e.woff2                [39m[1m[2m   56.30 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-5d2898fbc097a7e24c6f38d80587621e.woff2                [39m[1m[2m   56.35 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-e11567fd2accf9957cd0d3c2be937d87.woff2                [39m[1m[2m   56.44 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-6f3256af8454371776bc46670d33cc65.woff2                [39m[1m[2m   56.50 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-aa0d470430e6391eca720c7cfa44446f.woff2                [39m[1m[2m   56.53 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-4f50e5136e136527280bc902c5817561.woff2                [39m[1m[2m   56.58 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-21430ee05a1248901da8d0de08744d47.woff2                [39m[1m[2m   56.66 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-c40533fdf4cc57177b12803598af7e59.woff2                [39m[1m[2m   56.69 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-87599f94b6cc129d505b375798d0d751.woff2                [39m[1m[2m   56.75 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-c16ed9740b85badf16e86ea782a3062f.woff2                [39m[1m[2m   56.80 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-d2666cbed13462c5dc36fa2f15c202ca.woff2                [39m[1m[2m   56.82 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-a0ca5df4258213d7fc9fce80f65ce760.woff2                [39m[1m[2m   56.84 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-20cc1bbf50e7efb442756cb605672c1f.woff2                [39m[1m[2m   56.93 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-684d65f1793cac449dde5d59cb3c47fb.woff2                [39m[1m[2m   56.99 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-5572b3513ba8df57a3d5d7303ee6b11b.woff2                [39m[1m[2m   57.02 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-70e811fd7994e61f408c923de6ddd078.woff2                [39m[1m[2m   57.03 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-12b52b58eb3df36804b9a654ec9ee194.woff2                [39m[1m[2m   57.15 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-761d05e3cd968cf574166867998ef06a.woff2                [39m[1m[2m   57.28 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-1e6fd68f1f3902ce48ce8c69df385622.woff2                [39m[1m[2m   57.38 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-cf2cc71752631e579e35b0e423bf2638.woff2                [39m[1m[2m   57.42 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-774d4f764a1299da5d28ec2f2ffe0d69.woff2                [39m[1m[2m   57.50 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-56a32a7689abd0326e57c10c6c069bb4.woff2                [39m[1m[2m   57.70 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-51502f1206be09c565f1547c406e9558.woff2                [39m[1m[2m   57.74 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-98f2ad84457de7f3740d9920b8fa8667.woff2                [39m[1m[2m   57.78 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-3c9de2ae0ea4bc91a510942dfa4be8d2.woff2                [39m[1m[2m   58.04 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-2d43040e86ff03ba677f6f9c04cd0805.woff2                [39m[1m[2m   58.09 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-2adbc89c11e65905393d3dfc468b9d5b.woff2                [39m[1m[2m   58.26 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-95429962233afd82db1c27df1500a28c.woff2                [39m[1m[2m   58.35 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-5a7fac4b8b23a6e4e5ba0c9bf1756c91.woff2                [39m[1m[2m   58.40 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-019d66dcad46dc156b162d267f981c20.woff2                [39m[1m[2m   58.58 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-ba3de316d63c7e339987b16f41a0b879.woff2                [39m[1m[2m   58.73 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-f0f13b5c60e0af5553bd359f5513be1b.woff2                [39m[1m[2m   58.78 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-b1220a3c61f85cc0408deedb4c5f57a2.woff2                [39m[1m[2m   58.92 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-e480d9c614742d05f0e78f274f1e69e6.woff2                [39m[1m[2m   58.96 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-58fd02350d0bc52cf1ca3bb32ce9766e.woff2                [39m[1m[2m   58.97 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-e2ead7ea7da0437f085f42ffc05f8d13.woff2                [39m[1m[2m   58.97 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-5b0ed6971aaab9c8ad563230bd5471a7.woff2                [39m[1m[2m   58.98 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-4a0fdb40036e87b40aa08dd30584cb85.woff2                [39m[1m[2m   59.28 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-e4bca6cfa53e499cae0a6be4894a90e9.woff2                [39m[1m[2m   59.35 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-7197d6fda6cba7c3874c53d6381ca239.woff2                [39m[1m[2m   59.46 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-2cf96d082d35ea3d8106851223ad0d16.woff2                [39m[1m[2m   59.52 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-60a41c7e1c68f22424e6d22df544bc82.woff2                [39m[1m[2m   59.58 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-4bfaa8ffa64c5ee560aa2daba7c9cbd3.woff2                [39m[1m[2m   59.83 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-544fc28abe2c5c30e62383fd4dac255f.woff2                [39m[1m[2m   59.88 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-7e929f262f30c8ee78bf398150b1a7cd.woff2                [39m[1m[2m   59.98 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-b5c1596551c256e0e9cf02028595b092.woff2                [39m[1m[2m   60.13 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-e3fcf5180fd466c8915c4e8069491054.woff2                [39m[1m[2m   60.61 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-9eb5a99df4e76ac3363453ac9ca288b1.woff2                [39m[1m[2m   60.80 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-36925dfe329a45086cbb7fc5c20d45ac.woff2                [39m[1m[2m   60.90 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-112c051027b2d766c19a519f6ee1f4f7.woff2                [39m[1m[2m   61.16 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-b6d128682ee29e471486354d486a1b90.woff2                [39m[1m[2m   61.38 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-603aefd23e350ba7eb124273e3c9bcf1.woff2                [39m[1m[2m   61.51 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-903bb6865f3452e2fda42e3a25547bc5.woff2                [39m[1m[2m   61.53 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-d3716376641d615e2995605b29bca7b6.woff2                [39m[1m[2m   61.64 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-ee8bae97908d5147b423f77ad0d3c1bb.woff2                [39m[1m[2m   61.72 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-73e309718fd16cea44b4d54a33581811.woff2                [39m[1m[2m   61.81 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-c1f94158256bb1f3bf665b053d895af9.woff2                [39m[1m[2m   62.24 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-982b630266d87db93d2539affb1275c6.woff2                [39m[1m[2m   62.29 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-726303e0774b4e678bff8c2deb6ca603.woff2                [39m[1m[2m   62.38 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-56467a5c8840c4d23a60b2f935114848.woff2                [39m[1m[2m   62.45 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-4aca6a43e59aceee2166b0c7e4e85ef1.woff2                [39m[1m[2m   62.67 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-a365e82ed54697a52f27adcea1315fe8.woff2                [39m[1m[2m   62.77 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-11c345711937f0ba4b8f7b6b919c8440.woff2                [39m[1m[2m   62.79 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-0f626226ba1272e832aea87bafd9720e.woff2                [39m[1m[2m   62.82 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-24476a126f129212beb33f66853ea151.woff2                [39m[1m[2m   62.84 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-a4c34be6d42152e64b0df90bc4607f64.woff2                [39m[1m[2m   62.92 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-c8b71798409ccc126ee264a00aadcf21.woff2                [39m[1m[2m   63.21 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-57862b464a55b18c7bf234ce22907d73.woff2                [39m[1m[2m   63.26 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-2a26d20a23b00898ce82f09d2ee47c3f.woff2                [39m[1m[2m   63.39 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-cbaaefaaf326668277aa24dfa93c4d28.woff2                [39m[1m[2m   63.47 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-70c2eb8d64e71a42a834eb857ea9df51.woff2                [39m[1m[2m   63.52 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-069e77aac84590e2e991d0a0176d34f2.woff2                [39m[1m[2m   63.96 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-8c2f33cee3993174f7e87c28e4bf42ee.woff2                [39m[1m[2m   64.16 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-bafff7a14c27403dcc6cf1432e8ea836.woff2                [39m[1m[2m   64.20 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-6ae5b42180ad70b971c91e7eefb8eba2.woff2                [39m[1m[2m   64.30 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-c69f61a4ab18d0488c8d1fc12e7028e8.woff2                [39m[1m[2m   64.32 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-79f007c1c6d07557120982951ea67998.woff2                [39m[1m[2m   64.32 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-13d2887ec8ee73c43acdabc52a05af7b.woff2                [39m[1m[2m   64.44 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-93fc8f28a33234bcadf1527cafabd502.woff2                [39m[1m[2m   64.54 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-66493ba5a8367f2928812f446f47b56a.woff2                [39m[1m[2m   64.59 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-1b611157cd46bb184d4fa4dae2d6a2b8.woff2                [39m[1m[2m   64.83 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-671a2c20b1eb9e4ef8a192833940e319.woff2                [39m[1m[2m   64.87 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-3cc70dbb64df5b21f1326cc24dee2195.woff2                [39m[1m[2m   64.94 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-7e4bde7e9c7f84cd34d8a845e384c746.woff2                [39m[1m[2m   65.00 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-97f7f48ce90c9429bf32ae51469db74d.woff2                [39m[1m[2m   65.02 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-09850c4077f3fffe707905872e0e2460.woff2                [39m[1m[2m   65.05 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-8f476c4c99813d57cbe6eca4727388ad.woff2                [39m[1m[2m   65.08 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-69c09cc5fa3e55c74fc4821f76909cc3.woff2                [39m[1m[2m   65.17 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-7494dc504ae00ee9cd0505f990f88c5d.woff2                [39m[1m[2m   65.46 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-ce4884f96f11589608b76b726a755803.woff2                [39m[1m[2m   65.55 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-a203b91dad570bf05a58c3c3ddb529bf.woff2                [39m[1m[2m   65.68 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/CascadiaCode/CascadiaCode-Regular.woff2                                       [39m[1m[2m   65.73 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-25b7f38e18f035f96cb5e547bd2bd08c.woff2                [39m[1m[2m   65.84 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-0fa55a080fcd0f9dc2e0b0058b793df8.woff2                [39m[1m[2m   65.88 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-04b718e5623574919c8b0dea5f301444.woff2                [39m[1m[2m   65.93 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-a004ddfcb26e67bd6e678c8ed19e25ce.woff2                [39m[1m[2m   66.01 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-24a21c1e4449222e8d1898d69ff3a404.woff2                [39m[1m[2m   66.07 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-4ddc14ed3eb0c3e46364317dfc0144a3.woff2                [39m[1m[2m   66.14 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-a7accba310e821da5505f71c03b76bdb.woff2                [39m[1m[2m   66.15 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-b96d9226ce77ec94ceca043d712182e6.woff2                [39m[1m[2m   66.24 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-543fa46ace099a7099dad69123399400.woff2                [39m[1m[2m   66.36 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-29cec36cd205b211da97acabaa62f055.woff2                [39m[1m[2m   66.50 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-72536a3d71b694a0d53dd90ddceae41e.woff2                [39m[1m[2m   67.27 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-f5d079153c99a25b9be5b8583c4cc8a7.woff2                [39m[1m[2m   67.66 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-8e9f97f01034820170065b2921b4fb5e.woff2                [39m[1m[2m   67.73 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-4a38cc3e9cf104e69ba246d37f8cf135.woff2                [39m[1m[2m   67.89 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-b358f7a51ece39a3247942b1feabdb29.woff2                [39m[1m[2m   67.92 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-41521fade99856108931b4768b1b2648.woff2                [39m[1m[2m   68.21 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-23ad2d71b280f00b1363b95b7bea94eb.woff2                [39m[1m[2m   68.32 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-4dc6d5f188d5c96d44815cd1e81aa885.woff2                [39m[1m[2m   68.58 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-4535823663ad81405188a528d8f2b1a2.woff2                [39m[1m[2m   68.59 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-4ee10ae43505e2e0bc62656ced49c0fa.woff2                [39m[1m[2m   68.76 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-10a7ae9a371830a80c3d844acf1c02d7.woff2                [39m[1m[2m   68.91 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-23686f7f29da6e8008c36dd3a80c83d6.woff2                [39m[1m[2m   68.95 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-3e1f8f654357353bf0e04ba5c34b5f7f.woff2                [39m[1m[2m   69.02 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-5935a5775af3d5c6307ac667bd9ae74e.woff2                [39m[1m[2m   69.34 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-f56414bf9bced67990def8660e306759.woff2                [39m[1m[2m   69.36 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-2e33e8dc771ef5e1d9127d60a6b73679.woff2                [39m[1m[2m   69.78 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-095c169f3314805276f603a362766abd.woff2                [39m[1m[2m   69.97 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-583d166e56ba0de4b77eabb47ef67839.woff2                [39m[1m[2m   70.36 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/LiberationSans/LiberationSans-Regular.woff2                                   [39m[1m[2m   70.67 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-8de5b863cb50dfefdd07cb11c774d579.woff2                [39m[1m[2m   70.72 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-95bfd249da4902577b4b7d76ebdd0b44.woff2                [39m[1m[2m   70.94 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-3eaa538115d76932653c21d8dc28f207.woff2                [39m[1m[2m   70.94 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-bd77e3c7f9e0b072d96af37f73d1aa32.woff2                [39m[1m[2m   71.26 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-452225341522a7942f0f6aab1a5c91a3.woff2                [39m[1m[2m   71.64 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-b57aaedfd8ebdf3931f25119dc6a5eb2.woff2                [39m[1m[2m   71.98 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-20e7bf72fa05de9adf7dbcc7bf51dde6.woff2                [39m[1m[2m   72.22 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-6e092f71c1e634059ada0e52abadce67.woff2                [39m[1m[2m   72.24 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-52a84a22fd1369bffeaf21da2d6158dc.woff2                [39m[1m[2m   72.44 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-866fa7613df6b3fd272bcfd4530c0bb9.woff2                [39m[1m[2m   73.00 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-5a45d991244d4c7140217e1e5f5ca4f4.woff2                [39m[1m[2m   73.12 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-5882ffa04f32584d26109137e2da4352.woff2                [39m[1m[2m   73.29 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-d0cf73942fea1c74edbdf0b3011f4656.woff2                [39m[1m[2m   73.39 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-173945821411c09f70c95f98d590e697.woff2                [39m[1m[2m   73.58 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-3e63ed8162808a9e425ed80a8bc79114.woff2                [39m[1m[2m   73.70 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-e51ef413167c6e14e0c0fdcc585f2fc9.woff2                [39m[1m[2m   73.90 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-395c35dd584b56b0789f58a0559beaf1.woff2                [39m[1m[2m   73.93 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-60a3089806700d379f11827ee9843b6b.woff2                [39m[1m[2m   73.98 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-cb17fc3db95f6d139afc9d31a8e93293.woff2                [39m[1m[2m   74.18 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-203b0e569e3b14aac86a003dc3fa523e.woff2                [39m[1m[2m   75.22 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-0f7fb1e0d5015bb1371343153ecf7ce3.woff2                [39m[1m[2m   75.56 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-4095eb84ef3874e2600247bee0b04026.woff2                [39m[1m[2m   76.20 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-c99eda15fc26a2941579560f76c3a5cf.woff2                [39m[1m[2m   76.56 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-7f855356ab893b0d2b9c1c83b8116f0e.woff2                [39m[1m[2m   77.42 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-b6fd38ca30869792244804b04bc058da.woff2                [39m[1m[2m   77.47 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-829615148e6357d826b9242eb7fbbd1e.woff2                [39m[1m[2m   80.18 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-51a0e808bbc8361236ac521a119758a3.woff2                [39m[1m[2m   81.56 kB[22m[1m[22m
[log] [2mbuild/[22m[32mfonts/Xiaolai/Xiaolai-Regular-f6032fc06eb20480f096199713f70885.woff2                [39m[1m[2m   84.02 kB[22m[1m[22m
[log] [2mbuild/[22m[2massets/[22m[35mindex-DS47UZ-b.css                                                           [39m[1m[2m  209.53 kB[22m[1m[22m[2m │ gzip:  33.58 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mbug-issue-template-BID_ABWq.js                                               [39m[1m[2m    0.18 kB[22m[1m[22m[2m │ gzip:   0.16 kB[22m[2m │ map:     0.41 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mRVARI57O-CXmrUIiS.js                                                         [39m[1m[2m    0.21 kB[22m[1m[22m[2m │ gzip:   0.19 kB[22m[2m │ map:     0.57 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36msubset-worker.chunk-CVR6pt27.js                                              [39m[1m[2m    0.42 kB[22m[1m[22m[2m │ gzip:   0.31 kB[22m[2m │ map:     1.91 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mV44WA6U7-B0Nym5FC.js                                                         [39m[1m[2m    0.42 kB[22m[1m[22m[2m │ gzip:   0.33 kB[22m[2m │ map:     0.99 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36m5THPTBWS-D57irc_4.js                                                         [39m[1m[2m    0.52 kB[22m[1m[22m[2m │ gzip:   0.35 kB[22m[2m │ map:     1.54 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mNT5JY5WP-DW7NVBPX.js                                                         [39m[1m[2m    0.54 kB[22m[1m[22m[2m │ gzip:   0.39 kB[22m[2m │ map:     1.31 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mG3MDBVQH-EkdejvdW.js                                                         [39m[1m[2m    0.61 kB[22m[1m[22m[2m │ gzip:   0.39 kB[22m[2m │ map:     1.82 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mbrowser-BoFBZK10.js                                                          [39m[1m[2m    0.63 kB[22m[1m[22m[2m │ gzip:   0.45 kB[22m[2m │ map:     0.44 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mG6GPDDNC-2jrY9iqw.js                                                         [39m[1m[2m    0.64 kB[22m[1m[22m[2m │ gzip:   0.47 kB[22m[2m │ map:     1.62 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mDKTLEL5E-B7ILCVTH.js                                                         [39m[1m[2m    0.87 kB[22m[1m[22m[2m │ gzip:   0.45 kB[22m[2m │ map:     2.33 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36m7XWI72E6-DzVIUaXJ.js                                                         [39m[1m[2m    0.99 kB[22m[1m[22m[2m │ gzip:   0.54 kB[22m[2m │ map:     2.78 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36m4LWW3ZNH-cq6qHrdD.js                                                         [39m[1m[2m    1.02 kB[22m[1m[22m[2m │ gzip:   0.63 kB[22m[2m │ map:     2.75 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mbundler-helpers-DA6W-a70.js                                                  [39m[1m[2m    1.06 kB[22m[1m[22m[2m │ gzip:   0.65 kB[22m[2m │ map:     0.11 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mYIK6JTN6-CflxyOAp.js                                                         [39m[1m[2m    1.49 kB[22m[1m[22m[2m │ gzip:   0.84 kB[22m[2m │ map:     3.31 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36m7WLXJQOR-CHhKreq0.js                                                         [39m[1m[2m    2.00 kB[22m[1m[22m[2m │ gzip:   1.00 kB[22m[2m │ map:     2.81 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mQQW2P742-Cm5qF5Hd.js                                                         [39m[1m[2m    2.01 kB[22m[1m[22m[2m │ gzip:   1.11 kB[22m[2m │ map:     4.89 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36m75JW6PN6-CIx5RcrF.js                                                         [39m[1m[2m    2.21 kB[22m[1m[22m[2m │ gzip:   1.12 kB[22m[2m │ map:     5.88 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mFTXIJQGB-nrHdCfp7.js                                                         [39m[1m[2m    2.63 kB[22m[1m[22m[2m │ gzip:   1.14 kB[22m[2m │ map:     5.07 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mroundRect-0PYZxl1G.js                                                        [39m[1m[2m    3.10 kB[22m[1m[22m[2m │ gzip:   1.12 kB[22m[2m │ map:    12.98 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mer-C7JRzxQk.js                                                               [39m[1m[2m    3.27 kB[22m[1m[22m[2m │ gzip:   1.62 kB[22m[2m │ map:    14.59 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mquadrant-CtTXzHLJ.js                                                         [39m[1m[2m    3.51 kB[22m[1m[22m[2m │ gzip:   1.70 kB[22m[2m │ map:    17.10 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mCodeMirrorEditor-BpWPjxA0.js                                                 [39m[1m[2m    3.70 kB[22m[1m[22m[2m │ gzip:   1.64 kB[22m[2m │ map:    13.45 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mhelpers-C98AZoLf.js                                                          [39m[1m[2m    3.95 kB[22m[1m[22m[2m │ gzip:   1.83 kB[22m[2m │ map:    16.94 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mEXE5EH6O-nNCEPinJ.js                                                         [39m[1m[2m    4.01 kB[22m[1m[22m[2m │ gzip:   1.92 kB[22m[2m │ map:     8.95 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mtransformToExcalidrawSkeleton-BhBsKKQ3.js                                    [39m[1m[2m    4.03 kB[22m[1m[22m[2m │ gzip:   1.57 kB[22m[2m │ map:    15.33 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mS63OEDPG-C81orfGq.js                                                         [39m[1m[2m    4.14 kB[22m[1m[22m[2m │ gzip:   1.96 kB[22m[2m │ map:    10.56 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mrandom-username.esm-__vdrxyo.js                                              [39m[1m[2m    4.35 kB[22m[1m[22m[2m │ gzip:   1.93 kB[22m[2m │ map:     7.57 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mgantt-CIj26a4k.js                                                            [39m[1m[2m    4.70 kB[22m[1m[22m[2m │ gzip:   2.09 kB[22m[2m │ map:    19.66 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mtimeline-DU_gviY6.js                                                         [39m[1m[2m    4.93 kB[22m[1m[22m[2m │ gzip:   2.37 kB[22m[2m │ map:    22.76 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mclass-BzsAY4PK.js                                                            [39m[1m[2m    5.23 kB[22m[1m[22m[2m │ gzip:   2.25 kB[22m[2m │ map:    23.84 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mY5LQLG3M-EpMakM9B.js                                                         [39m[1m[2m    5.35 kB[22m[1m[22m[2m │ gzip:   2.63 kB[22m[2m │ map:    12.94 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mCGIZI67J-BsPeWNq8.js                                                         [39m[1m[2m    5.53 kB[22m[1m[22m[2m │ gzip:   2.81 kB[22m[2m │ map:    13.66 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mworkbox-window.prod.es5-B9K5rw8f.js                                          [39m[1m[2m    5.78 kB[22m[1m[22m[2m │ gzip:   2.40 kB[22m[2m │ map:    13.61 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mHPNUA7RO-ws8NaPiS.js                                                         [39m[1m[2m    6.20 kB[22m[1m[22m[2m │ gzip:   3.13 kB[22m[2m │ map:    16.30 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36msequence-COpB_oQG.js                                                         [39m[1m[2m    6.83 kB[22m[1m[22m[2m │ gzip:   2.94 kB[22m[2m │ map:    35.30 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mUGRSUGA2-Cxi1jK0R.js                                                         [39m[1m[2m    6.85 kB[22m[1m[22m[2m │ gzip:   3.30 kB[22m[2m │ map:    16.20 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mSG5TVYLW-Ccu9Iwal.js                                                         [39m[1m[2m    7.50 kB[22m[1m[22m[2m │ gzip:   3.48 kB[22m[2m │ map:    18.71 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mGH6G3TJC-BjgZRXJy.js                                                         [39m[1m[2m    7.82 kB[22m[1m[22m[2m │ gzip:   3.60 kB[22m[2m │ map:    19.23 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36m6BEWHPQE-Dw8zIur4.js                                                         [39m[1m[2m    7.98 kB[22m[1m[22m[2m │ gzip:   3.64 kB[22m[2m │ map:    19.98 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mstate-BHOYKTJ2.js                                                            [39m[1m[2m    8.08 kB[22m[1m[22m[2m │ gzip:   3.31 kB[22m[2m │ map:    37.65 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36m24BXRY42-Bun-eCbs.js                                                         [39m[1m[2m    8.86 kB[22m[1m[22m[2m │ gzip:   4.04 kB[22m[2m │ map:    21.38 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36m4FHPYW2L-3CyPUP3T.js                                                         [39m[1m[2m    9.25 kB[22m[1m[22m[2m │ gzip:   4.33 kB[22m[2m │ map:    23.23 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mLF3NJQAX-n2wWC_oo.js                                                         [39m[1m[2m    9.81 kB[22m[1m[22m[2m │ gzip:   4.52 kB[22m[2m │ map:    24.65 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mBGW36YJW-DQNxLbq-.js                                                         [39m[1m[2m    9.99 kB[22m[1m[22m[2m │ gzip:   4.99 kB[22m[2m │ map:    23.71 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mlocales/uz-UZ.json-BtHvIecr.js                                               [39m[1m[2m   11.05 kB[22m[1m[22m[2m │ gzip:   3.96 kB[22m[2m │ map:     0.10 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mqrcode.chunk-DRz-_p9I.js                                                     [39m[1m[2m   11.07 kB[22m[1m[22m[2m │ gzip:   4.35 kB[22m[2m │ map:    48.27 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mlocales/zh-HK.json-C8tRjMaj.js                                               [39m[1m[2m   11.56 kB[22m[1m[22m[2m │ gzip:   5.22 kB[22m[2m │ map:     0.10 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mVINGRCPA-ulwFq5NR.js                                                         [39m[1m[2m   11.72 kB[22m[1m[22m[2m │ gzip:   5.16 kB[22m[2m │ map:    26.81 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mlocales/kk-KZ.json-D-e4begV.js                                               [39m[1m[2m   12.36 kB[22m[1m[22m[2m │ gzip:   5.32 kB[22m[2m │ map:     0.10 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mP67P66DB-C7n3WpXo.js                                                         [39m[1m[2m   12.45 kB[22m[1m[22m[2m │ gzip:   5.52 kB[22m[2m │ map:    31.19 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36m6PIGVMFT-DwUxGS3b.js                                                         [39m[1m[2m   12.47 kB[22m[1m[22m[2m │ gzip:   3.28 kB[22m[2m │ map:    38.26 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mWQ63CJYP-CsF1MvOk.js                                                         [39m[1m[2m   12.62 kB[22m[1m[22m[2m │ gzip:   5.86 kB[22m[2m │ map:    32.64 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mlocales/kaa.json-BLLasIBU.js                                                 [39m[1m[2m   12.75 kB[22m[1m[22m[2m │ gzip:   4.99 kB[22m[2m │ map:     0.10 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mG76NGGFM-XWAvdsTK.js                                                         [39m[1m[2m   12.92 kB[22m[1m[22m[2m │ gzip:   5.67 kB[22m[2m │ map:    38.52 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mflowchart-B-AtIEX4.js                                                        [39m[1m[2m   13.33 kB[22m[1m[22m[2m │ gzip:   5.59 kB[22m[2m │ map:    76.64 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mlocales/da-DK.json-BV0lj8ZC.js                                               [39m[1m[2m   13.44 kB[22m[1m[22m[2m │ gzip:   5.37 kB[22m[2m │ map:     0.10 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mlocales/az-AZ.json-B66SPiLd.js                                               [39m[1m[2m   13.52 kB[22m[1m[22m[2m │ gzip:   5.60 kB[22m[2m │ map:     0.10 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mVBUCM3YD-D90Pv5D3.js                                                         [39m[1m[2m   13.77 kB[22m[1m[22m[2m │ gzip:   6.04 kB[22m[2m │ map:    41.83 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mPFLLLM7K-DOFJyxPu.js                                                         [39m[1m[2m   13.82 kB[22m[1m[22m[2m │ gzip:   5.76 kB[22m[2m │ map:    33.48 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mlocales/my-MM.json-WXG_2Z19.js                                               [39m[1m[2m   14.09 kB[22m[1m[22m[2m │ gzip:   6.24 kB[22m[2m │ map:     0.10 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mJAD36DTZ-C9T4IM06.js                                                         [39m[1m[2m   15.18 kB[22m[1m[22m[2m │ gzip:   6.63 kB[22m[2m │ map:    39.32 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mN7OWWQHY-BUXnxE3P.js                                                         [39m[1m[2m   15.34 kB[22m[1m[22m[2m │ gzip:   6.56 kB[22m[2m │ map:    40.44 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mLRZCOFJZ-BSA6PhwS.js                                                         [39m[1m[2m   15.47 kB[22m[1m[22m[2m │ gzip:   6.24 kB[22m[2m │ map:    37.89 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mlocales/lt-LT.json-DfPALQtd.js                                               [39m[1m[2m   15.49 kB[22m[1m[22m[2m │ gzip:   6.45 kB[22m[2m │ map:     0.11 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mlocales/bn-BD.json-Do1Dizr8.js                                               [39m[1m[2m   16.17 kB[22m[1m[22m[2m │ gzip:   7.56 kB[22m[2m │ map:     0.11 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mlocales/bn-IN.json-BzkOElTe.js                                               [39m[1m[2m   16.17 kB[22m[1m[22m[2m │ gzip:   7.56 kB[22m[2m │ map:     0.11 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mlocales/th-TH.json-CgbtlUWN.js                                               [39m[1m[2m   16.51 kB[22m[1m[22m[2m │ gzip:   8.03 kB[22m[2m │ map:     0.10 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mlocales/zh-CN.json-4Man5Bck.js                                               [39m[1m[2m   17.11 kB[22m[1m[22m[2m │ gzip:  11.31 kB[22m[2m │ map:     0.11 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mlocales/si-LK.json-CxQDr7x2.js                                               [39m[1m[2m   17.30 kB[22m[1m[22m[2m │ gzip:   7.81 kB[22m[2m │ map:     0.10 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36m5XYWFMKW-PyWnTwUr.js                                                         [39m[1m[2m   17.31 kB[22m[1m[22m[2m │ gzip:   7.45 kB[22m[2m │ map:    42.72 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mlocales/zh-TW.json-DFBDH5kG.js                                               [39m[1m[2m   17.48 kB[22m[1m[22m[2m │ gzip:  11.71 kB[22m[2m │ map:     0.12 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mlocales/nn-NO.json-BZRLEPOa.js                                               [39m[1m[2m   17.91 kB[22m[1m[22m[2m │ gzip:   7.39 kB[22m[2m │ map:     0.11 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mlocales/pa-IN.json-RgYUY6GG.js                                               [39m[1m[2m   18.13 kB[22m[1m[22m[2m │ gzip:   8.81 kB[22m[2m │ map:     0.11 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mlocales/ko-KR.json-BD_cqbAC.js                                               [39m[1m[2m   19.06 kB[22m[1m[22m[2m │ gzip:  11.03 kB[22m[2m │ map:     0.11 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mlocales/bg-BG.json-Dh5YdxU_.js                                               [39m[1m[2m   19.71 kB[22m[1m[22m[2m │ gzip:   9.22 kB[22m[2m │ map:     0.11 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mlocales/ja-JP.json-BUdCYAJM.js                                               [39m[1m[2m   19.76 kB[22m[1m[22m[2m │ gzip:  11.82 kB[22m[2m │ map:     0.11 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mlocales/kab-KAB.json-Cv0U1FA9.js                                             [39m[1m[2m   19.82 kB[22m[1m[22m[2m │ gzip:   8.20 kB[22m[2m │ map:     0.11 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mN5NF2FGY-BVtHuUnY.js                                                         [39m[1m[2m   19.83 kB[22m[1m[22m[2m │ gzip:   7.84 kB[22m[2m │ map:    46.88 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mlocales/lv-LV.json-Bh9Gl053.js                                               [39m[1m[2m   19.90 kB[22m[1m[22m[2m │ gzip:   8.36 kB[22m[2m │ map:     0.11 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mlocales/km-KH.json-KQpz5gtA.js                                               [39m[1m[2m   20.02 kB[22m[1m[22m[2m │ gzip:   9.84 kB[22m[2m │ map:     0.11 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mlocales/hu-HU.json-CnVfheph.js                                               [39m[1m[2m   20.23 kB[22m[1m[22m[2m │ gzip:   8.71 kB[22m[2m │ map:     0.11 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mlocales/fi-FI.json-xpzHrUn1.js                                               [39m[1m[2m   20.46 kB[22m[1m[22m[2m │ gzip:   8.46 kB[22m[2m │ map:     0.11 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mDNNCRC2E-ITRMrTkh.js                                                         [39m[1m[2m   21.14 kB[22m[1m[22m[2m │ gzip:   8.07 kB[22m[2m │ map:    51.00 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mlocales/ku-TR.json-DtSVYCRu.js                                               [39m[1m[2m   21.33 kB[22m[1m[22m[2m │ gzip:   9.83 kB[22m[2m │ map:     0.11 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mlocales/gl-ES.json-BlQFfDxp.js                                               [39m[1m[2m   21.49 kB[22m[1m[22m[2m │ gzip:   8.55 kB[22m[2m │ map:     0.11 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mlocales/vi-VN.json-Bslih59-.js                                               [39m[1m[2m   21.52 kB[22m[1m[22m[2m │ gzip:   9.45 kB[22m[2m │ map:     0.11 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mWL6DNKX4-BETsq0sj.js                                                         [39m[1m[2m   21.66 kB[22m[1m[22m[2m │ gzip:   9.22 kB[22m[2m │ map:    58.42 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mlocales/cs-CZ.json-C-9gQH-I.js                                               [39m[1m[2m   22.01 kB[22m[1m[22m[2m │ gzip:   9.64 kB[22m[2m │ map:     0.11 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mlocales/ar-SA.json-C_3OfhwP.js                                               [39m[1m[2m   23.19 kB[22m[1m[22m[2m │ gzip:  11.09 kB[22m[2m │ map:     0.11 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mlocales/ta-IN.json-Be_X1UcN.js                                               [39m[1m[2m   23.54 kB[22m[1m[22m[2m │ gzip:  10.88 kB[22m[2m │ map:     0.11 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mlocales/fa-IR.json-Bp26kTi7.js                                               [39m[1m[2m   23.79 kB[22m[1m[22m[2m │ gzip:  11.31 kB[22m[2m │ map:     0.11 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mlocales/oc-FR.json-BT5oEH_z.js                                               [39m[1m[2m   23.95 kB[22m[1m[22m[2m │ gzip:   9.33 kB[22m[2m │ map:     0.11 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mlocales/nb-NO.json-uTl3z3i9.js                                               [39m[1m[2m   24.20 kB[22m[1m[22m[2m │ gzip:   9.65 kB[22m[2m │ map:     0.11 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mJ77NQRCJ-BotfhdZJ.js                                                         [39m[1m[2m   24.63 kB[22m[1m[22m[2m │ gzip:  10.22 kB[22m[2m │ map:    62.89 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mlocales/mr-IN.json-CMloh6w7.js                                               [39m[1m[2m   24.69 kB[22m[1m[22m[2m │ gzip:  12.27 kB[22m[2m │ map:     0.11 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mlocales/hi-IN.json-43l6ZJCS.js                                               [39m[1m[2m   25.03 kB[22m[1m[22m[2m │ gzip:  12.27 kB[22m[2m │ map:     0.11 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mlocales/he-IL.json-CeI47FXj.js                                               [39m[1m[2m   25.11 kB[22m[1m[22m[2m │ gzip:  12.08 kB[22m[2m │ map:     0.11 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mlocales/ca-ES.json-DHcJnGlF.js                                               [39m[1m[2m   25.90 kB[22m[1m[22m[2m │ gzip:  10.10 kB[22m[2m │ map:     0.11 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mlocales/el-GR.json-C0tUEWau.js                                               [39m[1m[2m   26.28 kB[22m[1m[22m[2m │ gzip:  12.03 kB[22m[2m │ map:     0.11 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mlocales/uk-UA.json-DNa6oz2i.js                                               [39m[1m[2m   27.19 kB[22m[1m[22m[2m │ gzip:  12.77 kB[22m[2m │ map:     0.11 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mlocales/pl-PL.json-QkRZaXXz.js                                               [39m[1m[2m   27.29 kB[22m[1m[22m[2m │ gzip:  11.08 kB[22m[2m │ map:     0.11 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mlocales/tr-TR.json-B2dYerS_.js                                               [39m[1m[2m   28.24 kB[22m[1m[22m[2m │ gzip:  11.34 kB[22m[2m │ map:     0.11 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mlocales/sk-SK.json-K2OBo4zq.js                                               [39m[1m[2m   28.47 kB[22m[1m[22m[2m │ gzip:  11.69 kB[22m[2m │ map:     0.11 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mOT7W3RNY-CAKCc0g4.js                                                         [39m[1m[2m   28.53 kB[22m[1m[22m[2m │ gzip:  11.85 kB[22m[2m │ map:    76.79 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mPVFCHRLY-CztdcycK.js                                                         [39m[1m[2m   28.55 kB[22m[1m[22m[2m │ gzip:  12.05 kB[22m[2m │ map:    76.99 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mlocales/sv-SE.json-CkMqCEdU.js                                               [39m[1m[2m   28.78 kB[22m[1m[22m[2m │ gzip:  11.21 kB[22m[2m │ map:     0.11 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mlocales/nl-NL.json-CUCg1KjX.js                                               [39m[1m[2m   28.86 kB[22m[1m[22m[2m │ gzip:  10.95 kB[22m[2m │ map:     0.12 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mlocales/id-ID.json-DSwPcG6y.js                                               [39m[1m[2m   28.88 kB[22m[1m[22m[2m │ gzip:  10.75 kB[22m[2m │ map:     0.11 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mlocales/eu-ES.json-DLFyqHoF.js                                               [39m[1m[2m   28.93 kB[22m[1m[22m[2m │ gzip:  10.85 kB[22m[2m │ map:     0.11 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mlocales/sl-SI.json-CHgOKoNt.js                                               [39m[1m[2m   29.05 kB[22m[1m[22m[2m │ gzip:  11.44 kB[22m[2m │ map:     0.11 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mIX6Z2TVR-CBEOCsKk.js                                                         [39m[1m[2m   29.51 kB[22m[1m[22m[2m │ gzip:  11.72 kB[22m[2m │ map:    76.73 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mlocales/ru-RU.json-CCWdKmrX.js                                               [39m[1m[2m   29.56 kB[22m[1m[22m[2m │ gzip:  13.35 kB[22m[2m │ map:     0.11 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mlocales/pt-BR.json-COimuEej.js                                               [39m[1m[2m   29.81 kB[22m[1m[22m[2m │ gzip:  11.16 kB[22m[2m │ map:     0.11 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mlocales/es-ES.json-Bp3ZJYm4.js                                               [39m[1m[2m   30.13 kB[22m[1m[22m[2m │ gzip:  11.36 kB[22m[2m │ map:     0.11 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mlocales/de-CH.json-D1VGX01-.js                                               [39m[1m[2m   30.59 kB[22m[1m[22m[2m │ gzip:  11.37 kB[22m[2m │ map:     0.11 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mlocales/de-DE.json-CktmeeHs.js                                               [39m[1m[2m   30.59 kB[22m[1m[22m[2m │ gzip:  11.37 kB[22m[2m │ map:     0.11 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mlocales/pt-PT.json-aDMkHHOa.js                                               [39m[1m[2m   30.61 kB[22m[1m[22m[2m │ gzip:  11.36 kB[22m[2m │ map:     0.11 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mlocales/it-IT.json-D3S60WEu.js                                               [39m[1m[2m   30.77 kB[22m[1m[22m[2m │ gzip:  11.45 kB[22m[2m │ map:     0.11 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mlocales/ro-RO.json-BR1q4T8H.js                                               [39m[1m[2m   30.86 kB[22m[1m[22m[2m │ gzip:  11.65 kB[22m[2m │ map:     0.11 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mE67EBMDD-b5f0ui5G.js                                                         [39m[1m[2m   31.11 kB[22m[1m[22m[2m │ gzip:  11.93 kB[22m[2m │ map:    76.09 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mlocales/fr-FR.json-CzAs2G34.js                                               [39m[1m[2m   31.83 kB[22m[1m[22m[2m │ gzip:  11.69 kB[22m[2m │ map:     0.11 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mpica-SjKYHIqK.js                                                             [39m[1m[2m   32.65 kB[22m[1m[22m[2m │ gzip:  13.02 kB[22m[2m │ map:   123.92 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mHQRGC5D7-EMMIgq64.js                                                         [39m[1m[2m   32.71 kB[22m[1m[22m[2m │ gzip:  12.89 kB[22m[2m │ map:    81.95 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mV67O4WWV-Cx0PDp2k.js                                                         [39m[1m[2m   35.95 kB[22m[1m[22m[2m │ gzip:  13.49 kB[22m[2m │ map:    87.63 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mEFYWJBJK-Dj4eYI37.js                                                         [39m[1m[2m   38.58 kB[22m[1m[22m[2m │ gzip:  16.87 kB[22m[2m │ map:   120.16 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mindex-ChGp7972.js                                                            [39m[1m[2m   40.06 kB[22m[1m[22m[2m │ gzip:  12.59 kB[22m[2m │ map:   177.65 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mPUAMC4MJ-Dvf_jtkE.js                                                         [39m[1m[2m   42.51 kB[22m[1m[22m[2m │ gzip:  16.25 kB[22m[2m │ map:   103.88 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mXOYAOB3S-Ob36wuMJ.js                                                         [39m[1m[2m   43.73 kB[22m[1m[22m[2m │ gzip:  16.63 kB[22m[2m │ map:   107.03 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36m64PMEAB3-ChWfr_so.js                                                         [39m[1m[2m   45.41 kB[22m[1m[22m[2m │ gzip:  16.99 kB[22m[2m │ map:   108.83 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mimage-blob-reduce.esm-B6b2_-a4.js                                            [39m[1m[2m   45.99 kB[22m[1m[22m[2m │ gzip:  16.82 kB[22m[2m │ map:   176.23 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mindex-BFNtuejR.js                                                            [39m[1m[2m   56.20 kB[22m[1m[22m[2m │ gzip:  22.83 kB[22m[2m │ map:   187.11 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mcodemirror.chunk-CLhMQAUm.js                                                 [39m[1m[2m  289.17 kB[22m[1m[22m[2m │ gzip:  94.13 kB[22m[2m │ map: 1,406.11 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mfirebaseSDK-BRg0yXND.js                                                      [39m[1m[2m  359.37 kB[22m[1m[22m[2m │ gzip:  87.73 kB[22m[2m │ map: 1,715.28 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36msubset-shared.chunk-D3ioWSie.js                                              [39m[1m[33m1,823.88 kB[39m[22m[2m │ gzip: 738.71 kB[22m[2m │ map: 1,983.48 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mindex-La2RbFEA.js                                                            [39m[1m[33m2,004.86 kB[39m[22m[2m │ gzip: 644.12 kB[22m[2m │ map: 9,141.09 kB[22m
[info] 
[36mPWA v0.21.1[39m
mode      [35mgenerateSW[39m
precache  [32m17 entries[39m [2m(2300.48 KiB)[22m
files generated
  [2mbuild/sw.js.map[22m
  [2mbuild/sw.js[22m
  [2mbuild/workbox-3631b453.js.map[22m
  [2mbuild/workbox-3631b453.js[22m
[log] [32m✓ built in 46.99s[39m
Done in 65.60s.
Exit: 0

~~~text
[log] [2mbuild/[22m[2massets/[22m[36mlocales/uk-UA.json-DNa6oz2i.js                                               [39m[1m[2m   27.19 kB[22m[1m[22m[2m │ gzip:  12.77 kB[22m[2m │ map:     0.11 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mlocales/pl-PL.json-QkRZaXXz.js                                               [39m[1m[2m   27.29 kB[22m[1m[22m[2m │ gzip:  11.08 kB[22m[2m │ map:     0.11 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mlocales/tr-TR.json-B2dYerS_.js                                               [39m[1m[2m   28.24 kB[22m[1m[22m[2m │ gzip:  11.34 kB[22m[2m │ map:     0.11 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mlocales/sk-SK.json-K2OBo4zq.js                                               [39m[1m[2m   28.47 kB[22m[1m[22m[2m │ gzip:  11.69 kB[22m[2m │ map:     0.11 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mOT7W3RNY-CAKCc0g4.js                                                         [39m[1m[2m   28.53 kB[22m[1m[22m[2m │ gzip:  11.85 kB[22m[2m │ map:    76.79 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mPVFCHRLY-CztdcycK.js                                                         [39m[1m[2m   28.55 kB[22m[1m[22m[2m │ gzip:  12.05 kB[22m[2m │ map:    76.99 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mlocales/sv-SE.json-CkMqCEdU.js                                               [39m[1m[2m   28.78 kB[22m[1m[22m[2m │ gzip:  11.21 kB[22m[2m │ map:     0.11 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mlocales/nl-NL.json-CUCg1KjX.js                                               [39m[1m[2m   28.86 kB[22m[1m[22m[2m │ gzip:  10.95 kB[22m[2m │ map:     0.12 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mlocales/id-ID.json-DSwPcG6y.js                                               [39m[1m[2m   28.88 kB[22m[1m[22m[2m │ gzip:  10.75 kB[22m[2m │ map:     0.11 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mlocales/eu-ES.json-DLFyqHoF.js                                               [39m[1m[2m   28.93 kB[22m[1m[22m[2m │ gzip:  10.85 kB[22m[2m │ map:     0.11 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mlocales/sl-SI.json-CHgOKoNt.js                                               [39m[1m[2m   29.05 kB[22m[1m[22m[2m │ gzip:  11.44 kB[22m[2m │ map:     0.11 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mIX6Z2TVR-CBEOCsKk.js                                                         [39m[1m[2m   29.51 kB[22m[1m[22m[2m │ gzip:  11.72 kB[22m[2m │ map:    76.73 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mlocales/ru-RU.json-CCWdKmrX.js                                               [39m[1m[2m   29.56 kB[22m[1m[22m[2m │ gzip:  13.35 kB[22m[2m │ map:     0.11 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mlocales/pt-BR.json-COimuEej.js                                               [39m[1m[2m   29.81 kB[22m[1m[22m[2m │ gzip:  11.16 kB[22m[2m │ map:     0.11 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mlocales/es-ES.json-Bp3ZJYm4.js                                               [39m[1m[2m   30.13 kB[22m[1m[22m[2m │ gzip:  11.36 kB[22m[2m │ map:     0.11 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mlocales/de-CH.json-D1VGX01-.js                                               [39m[1m[2m   30.59 kB[22m[1m[22m[2m │ gzip:  11.37 kB[22m[2m │ map:     0.11 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mlocales/de-DE.json-CktmeeHs.js                                               [39m[1m[2m   30.59 kB[22m[1m[22m[2m │ gzip:  11.37 kB[22m[2m │ map:     0.11 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mlocales/pt-PT.json-aDMkHHOa.js                                               [39m[1m[2m   30.61 kB[22m[1m[22m[2m │ gzip:  11.36 kB[22m[2m │ map:     0.11 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mlocales/it-IT.json-D3S60WEu.js                                               [39m[1m[2m   30.77 kB[22m[1m[22m[2m │ gzip:  11.45 kB[22m[2m │ map:     0.11 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mlocales/ro-RO.json-BR1q4T8H.js                                               [39m[1m[2m   30.86 kB[22m[1m[22m[2m │ gzip:  11.65 kB[22m[2m │ map:     0.11 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mE67EBMDD-b5f0ui5G.js                                                         [39m[1m[2m   31.11 kB[22m[1m[22m[2m │ gzip:  11.93 kB[22m[2m │ map:    76.09 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mlocales/fr-FR.json-CzAs2G34.js                                               [39m[1m[2m   31.83 kB[22m[1m[22m[2m │ gzip:  11.69 kB[22m[2m │ map:     0.11 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mpica-SjKYHIqK.js                                                             [39m[1m[2m   32.65 kB[22m[1m[22m[2m │ gzip:  13.02 kB[22m[2m │ map:   123.92 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mHQRGC5D7-EMMIgq64.js                                                         [39m[1m[2m   32.71 kB[22m[1m[22m[2m │ gzip:  12.89 kB[22m[2m │ map:    81.95 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mV67O4WWV-Cx0PDp2k.js                                                         [39m[1m[2m   35.95 kB[22m[1m[22m[2m │ gzip:  13.49 kB[22m[2m │ map:    87.63 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mEFYWJBJK-Dj4eYI37.js                                                         [39m[1m[2m   38.58 kB[22m[1m[22m[2m │ gzip:  16.87 kB[22m[2m │ map:   120.16 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mindex-ChGp7972.js                                                            [39m[1m[2m   40.06 kB[22m[1m[22m[2m │ gzip:  12.59 kB[22m[2m │ map:   177.65 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mPUAMC4MJ-Dvf_jtkE.js                                                         [39m[1m[2m   42.51 kB[22m[1m[22m[2m │ gzip:  16.25 kB[22m[2m │ map:   103.88 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mXOYAOB3S-Ob36wuMJ.js                                                         [39m[1m[2m   43.73 kB[22m[1m[22m[2m │ gzip:  16.63 kB[22m[2m │ map:   107.03 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36m64PMEAB3-ChWfr_so.js                                                         [39m[1m[2m   45.41 kB[22m[1m[22m[2m │ gzip:  16.99 kB[22m[2m │ map:   108.83 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mimage-blob-reduce.esm-B6b2_-a4.js                                            [39m[1m[2m   45.99 kB[22m[1m[22m[2m │ gzip:  16.82 kB[22m[2m │ map:   176.23 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mindex-BFNtuejR.js                                                            [39m[1m[2m   56.20 kB[22m[1m[22m[2m │ gzip:  22.83 kB[22m[2m │ map:   187.11 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mcodemirror.chunk-CLhMQAUm.js                                                 [39m[1m[2m  289.17 kB[22m[1m[22m[2m │ gzip:  94.13 kB[22m[2m │ map: 1,406.11 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mfirebaseSDK-BRg0yXND.js                                                      [39m[1m[2m  359.37 kB[22m[1m[22m[2m │ gzip:  87.73 kB[22m[2m │ map: 1,715.28 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36msubset-shared.chunk-D3ioWSie.js                                              [39m[1m[33m1,823.88 kB[39m[22m[2m │ gzip: 738.71 kB[22m[2m │ map: 1,983.48 kB[22m
[log] [2mbuild/[22m[2massets/[22m[36mindex-La2RbFEA.js                                                            [39m[1m[33m2,004.86 kB[39m[22m[2m │ gzip: 644.12 kB[22m[2m │ map: 9,141.09 kB[22m
[warn] [33m
(!) Some chunks are larger than 500 kB after minification. Consider:
- Using dynamic import() to code-split the application
- Use build.rollupOptions.output.manualChunks to improve chunking: https://rollupjs.org/configuration-options/#output-manualchunks
- Adjust chunk size limit for this warning via build.chunkSizeWarningLimit.[39m
[warn] Browserslist: browsers data (caniuse-lite) is 21 months old. Please run:
  npx update-browserslist-db@latest
  Why you should do it regularly: https://github.com/browserslist/update-db#readme
[info] 
[36mPWA v0.21.1[39m
mode      [35mgenerateSW[39m
precache  [32m17 entries[39m [2m(2300.48 KiB)[22m
files generated
  [2mbuild/sw.js.map[22m
  [2mbuild/sw.js[22m
  [2mbuild/workbox-3631b453.js.map[22m
  [2mbuild/workbox-3631b453.js[22m
[log] [32m✓ built in 48.34s[39m
Done in 50.18s.
~~~
