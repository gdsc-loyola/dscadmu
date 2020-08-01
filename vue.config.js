module.exports = {
  pwa: {
    workboxPluginMode: "InjectManifest",
    workboxOptions: {
      swSrc: "src/service-worker.js"
    },
    msTileColor: "#2f80ed",
    appleMobileWebAppCache: "yes"
  }
};
