<template>
	<div class="text-slate-900 bg-white min-h-screen">
		<router-view></router-view>
		<TheFooter :menuItems="$route.path === '/' ? [
			{ label: 'Services', link: '#services' },
			{ label: 'Testimonials', link: '#testimonials' },
			{ label: 'Pricing', link: '#pricing' },
			{ label: 'FAQ', link: '#faq' },
			{ label: 'Contact', link: '#contact' },
			{ label: 'Free Tool', link: '/freetool' }
		] : []" />
	</div>
</template>

<script setup>
import TheFooter from "./components/TheFooter.vue"
import content from './content.json'
import { useRoute } from 'vue-router'
import { trackPageView, initScrollDepthTracking, initTimeSpentTracking, initHeartbeatTracking } from './services/analytics'
import { onMounted } from 'vue'

const $route = useRoute()

// Track page views
const trackCurrentPage = () => {
    trackPageView($route.path, {
        page_name: $route.name || $route.path,
        is_free_tool: $route.path === '/freetool'
    })
}

// Initialize tracking when Amplitude is ready
const initTracking = () => {
    // Check if Amplitude is ready
    if (typeof window !== 'undefined' && window.amplitudeReady) {
        console.log('Amplitude is ready, initializing tracking');
        trackCurrentPage();
        initScrollDepthTracking();
        initTimeSpentTracking();
        initHeartbeatTracking();
    } else {
        console.log('Amplitude not ready yet, waiting...');
        // Wait for Amplitude to be ready
        window.addEventListener('amplitudeReady', () => {
            console.log('Amplitude is now ready, initializing tracking');
            trackCurrentPage();
            initScrollDepthTracking();
            initTimeSpentTracking();
            initHeartbeatTracking();
        });
    }
}

// Initialize tracking on mount
onMounted(() => {
    initTracking();
})
</script>
