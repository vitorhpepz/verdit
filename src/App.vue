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

const $route = useRoute()
</script>
