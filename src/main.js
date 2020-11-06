import { createApp } from 'vue'
import App from './App.vue'
import Navigation from './components/Navigation.vue'
import router from './router'

const app = createApp(App)

//Register global components
app.component('Navigation', Navigation)

//Mount application
app.use(router).mount('#app')