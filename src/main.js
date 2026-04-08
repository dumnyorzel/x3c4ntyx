import 'primeicons/primeicons.css';
import './style.css';
import './flags.css';

import { createApp } from 'vue';
import { createWebHistory, createRouter } from 'vue-router';
import PrimeVue from 'primevue/config';
import ConfirmationService from 'primevue/confirmationservice';
import DialogService from 'primevue/dialogservice';
import ToastService from 'primevue/toastservice';

import App from './App.vue';
import AppState from './plugins/appState.js';
import ThemeSwitcher from './components/ThemeSwitcher.vue';
import Noir from './presets/Noir.js';

import HomePage from './components/HomePage.vue';
import TextAutofocus from './components/TextAutofocus.vue';
import TextManualfocus from './components/TextManualfocus.vue';
import SearchAutofocus from './components/SearchAutofocus.vue';
import SearchManualfocus from './components/SearchManualfocus.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/text-autofocus', component: TextAutofocus },
  { path: '/text-manualfocus', component: TextManualfocus },
  { path: '/search-autofocus', component: SearchAutofocus },
  { path: '/search-manualfocus', component: SearchManualfocus },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);

app.use(router);
app.use(PrimeVue, {
  theme: {
    preset: Noir,
    options: {
      prefix: 'p',
      darkModeSelector: '.p-dark',
      cssLayer: false,
    },
  },
});
app.use(AppState);
app.use(ConfirmationService);
app.use(ToastService);
app.use(DialogService);

app.component('ThemeSwitcher', ThemeSwitcher);

app.mount('#app');
