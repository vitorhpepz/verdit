// Analytics service for centralized tracking

// Check if Amplitude is available and ready
const isAmplitudeReady = () => {
    return typeof window !== 'undefined' && window.amplitudeReady === true;
}

// Track page views
export const trackPageView = (pageName, properties = {}) => {
    if (!isAmplitudeReady()) {
        console.warn('Amplitude not ready, skipping page view tracking');
        return;
    }

    try {
        const defaultProperties = {
            url: window.location.pathname,
            referrer: document.referrer,
            title: document.title,
            timestamp: new Date().toISOString()
        }

        // Use the correct Amplitude API method
        window.amplitude.logEvent('page_view', { ...defaultProperties, ...properties });
    } catch (error) {
        console.error('Error tracking page view:', error);
    }
}

// Track button clicks
export const trackButtonClick = (properties) => {
    if (!isAmplitudeReady()) {
        console.warn('Amplitude not ready, skipping button click tracking');
        return;
    }

    try {
        window.amplitude.logEvent('button_click', properties);
    } catch (error) {
        console.error('Error tracking button click:', error);
    }
}

// Track form submissions
export const trackFormSubmission = (formName, properties = {}) => {
    if (!isAmplitudeReady()) {
        console.warn('Amplitude not ready, skipping form submission tracking');
        return;
    }

    try {
        const defaultProperties = {
            form_name: formName,
            url: window.location.pathname,
            timestamp: new Date().toISOString()
        }

        window.amplitude.logEvent('form_submission', { ...defaultProperties, ...properties });
    } catch (error) {
        console.error('Error tracking form submission:', error);
    }
}

// Track menu item clicks
export const trackMenuItemClick = (menuItem, properties = {}) => {
    if (!isAmplitudeReady()) {
        console.warn('Amplitude not ready, skipping menu item click tracking');
        return;
    }

    try {
        const defaultProperties = {
            menu_item: menuItem,
            url: window.location.pathname,
            timestamp: new Date().toISOString()
        }

        window.amplitude.logEvent('menu_click', { ...defaultProperties, ...properties });
    } catch (error) {
        console.error('Error tracking menu item click:', error);
    }
}

// Track scroll depth
export const trackScrollDepth = (depth) => {
    if (!isAmplitudeReady()) {
        console.warn('Amplitude not ready, skipping scroll depth tracking');
        return;
    }

    try {
        window.amplitude.logEvent('scroll_depth', { depth });
    } catch (error) {
        console.error('Error tracking scroll depth:', error);
    }
}

// Track time spent on page
export const trackTimeSpent = (duration) => {
    if (!isAmplitudeReady()) {
        console.warn('Amplitude not ready, skipping time spent tracking');
        return;
    }

    try {
        window.amplitude.logEvent('time_spent', { duration });
    } catch (error) {
        console.error('Error tracking time spent:', error);
    }
}

// Track chat interactions
export const trackChatInteraction = (action, properties = {}) => {
    if (!isAmplitudeReady()) {
        console.warn('Amplitude not ready, skipping chat interaction tracking');
        return;
    }

    try {
        const defaultProperties = {
            action,
            url: window.location.pathname,
            timestamp: new Date().toISOString()
        }

        window.amplitude.logEvent('chat_interaction', { ...defaultProperties, ...properties });
    } catch (error) {
        console.error('Error tracking chat interaction:', error);
    }
}

// Track user heartbeat for "Current Live Users" metric
export const trackHeartbeat = () => {
    if (!isAmplitudeReady()) {
        console.warn('Amplitude not ready, skipping heartbeat tracking');
        return;
    }

    try {
        const properties = {
            url: window.location.pathname,
            timestamp: new Date().toISOString()
        }
        
        window.amplitude.logEvent('heartbeat', properties);
    } catch (error) {
        console.error('Error tracking heartbeat:', error);
    }
}

// Initialize heartbeat tracking
export const initHeartbeatTracking = () => {
    if (!isAmplitudeReady()) {
        console.warn('Amplitude not ready, skipping heartbeat tracking initialization');
        return;
    }
    
    // Send initial heartbeat
    trackHeartbeat();
    
    // Send heartbeat every 30 seconds
    setInterval(trackHeartbeat, 30000);
}

// Initialize scroll depth tracking
export const initScrollDepthTracking = () => {
    if (!isAmplitudeReady()) {
        console.warn('Amplitude not ready, skipping scroll depth tracking initialization');
        return;
    }

    let maxScroll = 0;
    const scrollThresholds = [25, 50, 75, 100];
    const trackedThresholds = new Set();

    window.addEventListener('scroll', () => {
        const scrollPercent = Math.round((window.scrollY + window.innerHeight) / document.documentElement.scrollHeight * 100);
        
        if (scrollPercent > maxScroll) {
            maxScroll = scrollPercent;
            
            // Track when user reaches new thresholds
            scrollThresholds.forEach(threshold => {
                if (scrollPercent >= threshold && !trackedThresholds.has(threshold)) {
                    trackedThresholds.add(threshold);
                    trackScrollDepth(threshold);
                }
            });
        }
    });
}

// Initialize time spent tracking
export const initTimeSpentTracking = () => {
    if (!isAmplitudeReady()) {
        console.warn('Amplitude not ready, skipping time spent tracking initialization');
        return;
    }

    const startTime = Date.now();
    const timeIntervals = [30, 60, 120, 300]; // Track at 30s, 1min, 2min, 5min
    const trackedIntervals = new Set();

    const checkTimeSpent = () => {
        const timeSpent = Math.floor((Date.now() - startTime) / 1000);
        
        timeIntervals.forEach(interval => {
            if (timeSpent >= interval && !trackedIntervals.has(interval)) {
                trackedIntervals.add(interval);
                trackTimeSpent(interval);
            }
        });
    }

    // Check every 5 seconds
    setInterval(checkTimeSpent, 5000);
} 