module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/vue-timeit/'
      : '/',

    pwa: {
      name: 'Time-it',
      themeColor: '#4DBA87',
      msTileColor: '#000000',
      appleMobileWebAppCapable: 'yes',
      appleMobileWebAppStatusBarStyle: 'black',
  
      // configure the workbox plugin
      workboxPluginMode: 'InjectManifest',
      workboxOptions: {
        // swSrc is required in InjectManifest mode.
        swSrc: 'dev/sw.js',
        // ...other Workbox options...
      },
      manifestPath: 'manifest.json',
      iconPaths: {
        favicon32: 'public/img/icons/favicon-32x32.png',
        favicon16: 'public/img/icons/favicon-16x16.png',
        appleTouchIcon: 'public/img/icons/apple-touch-icon-152x152.png',
        maskIcon: 'public/img/icons/safari-pinned-tab.svg',
        msTileImage: 'public/img/icons/msapplication-icon-144x144.png'
      }
  }
}