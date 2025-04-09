<template>
	<div class="text-slate-900 bg-white min-h-screen">
		<TheHeader :menuItems="menuItems" />
		<TheMain />
		<TheFooter :menuItems="menuItems" />
	</div>
</template>

<script setup>
import TheHeader from "./components/TheHeader.vue"
import TheMain from "./components/TheMain.vue"
import TheFooter from "./components/TheFooter.vue"
import { ref } from "vue"

const menuItems = ref([
	{ label: "Our Services", link: "#services" },
	{ label: "Testimonials", link: "#testimonials" },
	{ label: "Pricing", link: "#pricing" },
	{ label: "FAQ", link: "#faq" },
	{ label: "About Us", link: "#contact" },
	// { label: "Blockchain Services", link: "/crypto/" },
	// { label: "Agentic", link: "/agentic/" },
	// { label: "Português 🇧🇷🇵🇹", link: "/pt/" },
])
</script>
