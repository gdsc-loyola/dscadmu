import { Workbox } from 'workbox-window'

let wb

if ('serviceWorker' in navigator) {
	wb = new Workbox(`https://dscadmu.org/service-worker.js`)

	wb.addEventListener('controlling', () => {
		window.location.reload()
	})

	wb.register()
} else {
	wb = null
}

export default wb
