module.exports = {
  pwa: {
    workboxPluginMode: "InjectManifest",
    workboxOptions: {
      swSrc: "src/registerServiceWorker.js"
    },
    msTileColor: "#2f80ed",
    appleMobileWebAppCache: "yes"
  }
};
