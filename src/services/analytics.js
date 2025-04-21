// Analytics service for centralized tracking

// Check if Amplitude is available
const isAmplitudeAvailable = () => typeof amplitude !== 'undefined'

// Track page views
export const trackPageView = (pageName, properties = {}) => {
    if (!isAmplitudeAvailable()) return

    const defaultProperties = {
        url: window.location.pathname,
        referrer: document.referrer,
        title: document.title,
        timestamp: new Date().toISOString()
    }

    amplitude.track('page_view', { ...defaultProperties, ...properties })
}

// Track button clicks
export const trackButtonClick = (properties) => {
    if (!isAmplitudeAvailable()) return
    amplitude.track('button_click', properties)
}

// Track form submissions
export const trackFormSubmission = (formName, properties = {}) => {
    if (!isAmplitudeAvailable()) return

    const defaultProperties = {
        form_name: formName,
        url: window.location.pathname,
        timestamp: new Date().toISOString()
    }

    amplitude.track('form_submission', { ...defaultProperties, ...properties })
}

// Track menu item clicks
export const trackMenuItemClick = (menuItem, properties = {}) => {
    if (!isAmplitudeAvailable()) return

    const defaultProperties = {
        menu_item: menuItem,
        url: window.location.pathname,
        timestamp: new Date().toISOString()
    }

    amplitude.track('menu_click', { ...defaultProperties, ...properties })
}

// Track scroll depth
export const trackScrollDepth = (depth) => {
    if (!isAmplitudeAvailable()) return
    amplitude.track('scroll_depth', { depth })
}

// Track time spent on page
export const trackTimeSpent = (duration) => {
    if (!isAmplitudeAvailable()) return
    amplitude.track('time_spent', { duration })
}

// Track chat interactions
export const trackChatInteraction = (action, properties = {}) => {
    if (!isAmplitudeAvailable()) return

    const defaultProperties = {
        action,
        url: window.location.pathname,
        timestamp: new Date().toISOString()
    }

    amplitude.track('chat_interaction', { ...defaultProperties, ...properties })
}

// Initialize scroll depth tracking
export const initScrollDepthTracking = () => {
    if (!isAmplitudeAvailable()) return

    let maxScroll = 0
    const scrollThresholds = [25, 50, 75, 100]
    const trackedThresholds = new Set()

    window.addEventListener('scroll', () => {
        const scrollPercent = Math.round((window.scrollY + window.innerHeight) / document.documentElement.scrollHeight * 100)
        
        if (scrollPercent > maxScroll) {
            maxScroll = scrollPercent
            
            // Track when user reaches new thresholds
            scrollThresholds.forEach(threshold => {
                if (scrollPercent >= threshold && !trackedThresholds.has(threshold)) {
                    trackedThresholds.add(threshold)
                    trackScrollDepth(threshold)
                }
            })
        }
    })
}

// Initialize time spent tracking
export const initTimeSpentTracking = () => {
    if (!isAmplitudeAvailable()) return

    const startTime = Date.now()
    const timeIntervals = [30, 60, 120, 300] // Track at 30s, 1min, 2min, 5min
    const trackedIntervals = new Set()

    const checkTimeSpent = () => {
        const timeSpent = Math.floor((Date.now() - startTime) / 1000)
        
        timeIntervals.forEach(interval => {
            if (timeSpent >= interval && !trackedIntervals.has(interval)) {
                trackedIntervals.add(interval)
                trackTimeSpent(interval)
            }
        })
    }

    // Check every 5 seconds
    setInterval(checkTimeSpent, 5000)
} 