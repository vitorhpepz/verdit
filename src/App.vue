<template>
	<div class="text-slate-900 bg-white min-h-screen">
		<component :is="currentView" />
	</div>
</template>

<script setup>
import { computed } from 'vue'
import Home from './views/Home.vue'
import FreeTool from './views/FreeTool.vue'
import PrivacyPolicy from './views/PrivacyPolicy.vue'

const currentView = computed(() => {
	const path = window.location.pathname.replace(/\/+$/, '') || '/'

	if (path === '/freetool') {
		return FreeTool
	}

	if (path === '/privacy-policy') {
		return PrivacyPolicy
	}

	return Home
})
</script>
