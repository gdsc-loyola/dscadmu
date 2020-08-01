const { GenerateSW } = require('workbox-webpack-plugin')

module.exports = {
	publicPath: './',
	configureWebpack: {
		plugins: [new GenerateSW()],
	},
	pwa: {
		themeColor: '#2f80ed',
		msTileColor: '#2f80ed',
		appleMobileWebAppCache: 'yes',
		manifestOptions: {
			background_color: '#fff',
		},
	},
}
