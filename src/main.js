import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'

import './main.css'

const GA4_MEASUREMENT_ID = 'G-4BFEK93YCL'
const LANDING_PAGE_TALLY_FORM_ID = 'nGYAdZ'

function gtagSendEvent(url, eventParameters = {}) {
  const callback = function () {
    if (typeof url === 'string') {
      window.location = url
    }
  }

  window.gtag('event', 'conversion_event_default', {
    event_callback: callback,
    event_timeout: 2000,
    ...eventParameters
  })

  return false
}

const app = createApp(App)
const hostname = window.location.hostname
const isPrivateNetworkHost =
  hostname === 'localhost' ||
  hostname === '127.0.0.1' ||
  hostname.startsWith('192.168.') ||
  hostname.startsWith('10.') ||
  /^172\.(1[6-9]|2\d|3[0-1])\./.test(hostname)

function trackPageView(path) {
  if (!window.gtag) {
    return
  }

  window.gtag('event', 'page_view', {
    page_path: path,
    page_location: `${window.location.origin}${path}`,
    page_title: document.title,
    debug_mode: isPrivateNetworkHost
  })
}

router.afterEach((to) => {
  trackPageView(to.fullPath)
})

window.addEventListener('message', (event) => {
  if (typeof event.data !== 'string' || !event.data.includes('Tally.FormSubmitted')) {
    return
  }

  let payload

  try {
    payload = JSON.parse(event.data).payload
  } catch (error) {
    console.error('Failed to parse Tally submission payload', error)
    return
  }

  if (!payload || payload.formId !== LANDING_PAGE_TALLY_FORM_ID || !window.gtag) {
    return
  }

  gtagSendEvent(undefined, {
    form_id: payload.formId,
    form_name: payload.formName,
    submission_id: payload.id,
    debug_mode: isPrivateNetworkHost
  })
})

app.use(router)
router.isReady().then(() => {
  trackPageView(router.currentRoute.value.fullPath)
  app.mount('#app')
})
