import { createWebHashHistory, routerKey } from 'vue-router'
import { createRouter, } from 'vue-router';

import HomePage from '@/views/home.vue'
import TeladeLogin from '@/components/TelaDeLogin.vue';
import HelloWorld from '@/components/HelloWorld.vue';
import TelaDeCadastro from '@/components/TelaDeCadastro.vue';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: HomePage },
    { path: '/login', component: TeladeLogin},
    { path: '/helloWorld', component: HelloWorld},
    { path: '/cadastro', component: TelaDeCadastro}
  ]
})
const isFirstTIme = true

export default router

