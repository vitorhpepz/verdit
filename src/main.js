import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'

import './main.css'

const app = createApp(App)

// Track page views
router.afterEach((to) => {
  if (window.gtag) {
    window.gtag('config', 'G-4BFEK93YCL', {
      page_path: to.fullPath
    })
  }
})

app.use(router)
app.mount('#app')
