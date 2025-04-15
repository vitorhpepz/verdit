<template>
	<div class="text-slate-900 bg-white min-h-screen">
		<router-view></router-view>
		<TheFooter :menuItems="content.header.menuItems" />
	</div>
</template>

<script setup>
import TheFooter from "./components/TheFooter.vue"
import content from './content.json'
</script>
