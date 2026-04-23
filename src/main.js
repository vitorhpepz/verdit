import { createApp } from 'vue'
import App from './App.vue'

import './main.css'

const LANDING_PAGE_TALLY_FORM_ID = 'nGYAdZ'
const GOOGLE_ADS_SEND_TO = 'AW-18056474257/q1rqCL2VnpscEJHd_6FD'

function gtagSendEvent(url, eventParameters = {}) {
  if (!window.gtag) {
    return false
  }

  const callback = function () {
    if (typeof url === 'string') {
      window.location = url
    }
  }

  window.gtag('event', 'conversion', {
    send_to: GOOGLE_ADS_SEND_TO,
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

  if (!payload || payload.formId !== LANDING_PAGE_TALLY_FORM_ID) {
    return
  }

  gtagSendEvent(undefined, {
    value: 1.0,
    currency: 'BRL',
    form_id: payload.formId,
    form_name: payload.formName,
    submission_id: payload.id,
    debug_mode: isPrivateNetworkHost
  })
})

app.mount('#app')
trackPageView(window.location.pathname + window.location.search + window.location.hash)
