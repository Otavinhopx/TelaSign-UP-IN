/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

import { registerPlugins } from '@/plugins'
import App from './App.vue'
import { createApp } from 'vue'
import router from '@/router/index'
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  // firebase creds
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp)

const app = createApp(App)

app.use(router)

registerPlugins(app)

app.mount('#app')

export { auth }