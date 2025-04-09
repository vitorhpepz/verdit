<template>
	<div class="text-slate-900 bg-white min-h-screen">
		<TheHeader :menuItems="content.header.menuItems" />
		<TheMain />
		<TheFooter :menuItems="content.header.menuItems" />
	</div>
</template>

<script setup>
import TheHeader from "./components/TheHeader.vue"
import TheMain from "./components/TheMain.vue"
import TheFooter from "./components/TheFooter.vue"
import content from './content.json'
</script>
