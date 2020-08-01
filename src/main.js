import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueDragscroll from 'vue-dragscroll'
import VModal from 'vue-js-modal'
import '@/assets/bootstrap-grid.css'

// Firebase app is always required and must be first
import firebase from 'firebase/app'
// Add additional services that you want to use
import 'firebase/auth'
// import "firebase/database";
import 'firebase/storage'
import 'firebase/firestore'
// import 'firebase/messaging'
// import 'firebase/functions'

// Flamelink app is always required
import flamelink from 'flamelink/app'
// Add additional modules that you want to use
import 'flamelink/content'
import 'flamelink/storage'

// import 'flamelink/settings'
// import 'flamelink/navigation'
// import 'flamelink/users'

import wb from './registerServiceWorker'

Vue.prototype.$workbox = wb

const firebaseConfig = {
	apiKey: 'AIzaSyDCG_NW0-VXjG98jwhAxfk1Sslq3WfVzyM',
	authDomain: 'dscadmu.firebaseapp.com',
	databaseURL: 'https://dscadmu.firebaseio.com',
	projectId: 'dscadmu',
	storageBucket: 'dscadmu.appspot.com',
	messagingSenderId: '984531054480',
	appId: '1:984531054480:web:35eb68a682714b4541cd15',
	measurementId: 'G-0MVFMPX3S1',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

export const app = flamelink({
	firebaseApp, // required
	dbType: 'cf', // can be either 'rtdb' or 'cf' for Realtime DB or Cloud Firestore
	env: 'production', // optional, default shown
	locale: 'en-US', // optional, default shown
	precache: true, // optional, default shown. Currently it only precaches "schemas" for better performance
})

Vue.config.productionTip = false
Vue.use(VueDragscroll)
Vue.use(VModal)

new Vue({
	router,
	render: h => h(App),
}).$mount('#app')