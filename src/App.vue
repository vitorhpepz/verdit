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
import { useRoute, onBeforeRouteUpdate } from 'vue-router'
import { trackPageView, initScrollDepthTracking, initTimeSpentTracking } from './services/analytics'
import { onMounted, watch } from 'vue'

const $route = useRoute()

// Track page views
const trackCurrentPage = () => {
    trackPageView($route.path, {
        page_name: $route.name || $route.path,
        is_free_tool: $route.path === '/freetool'
    })
}

// Initialize tracking on mount
onMounted(() => {
    trackCurrentPage()
    initScrollDepthTracking()
    initTimeSpentTracking()
})

// Track page views on route changes
onBeforeRouteUpdate((to, from) => {
    trackPageView(to.path, {
        page_name: to.name || to.path,
        is_free_tool: to.path === '/freetool',
        from_page: from.path
    })
})
</script>
