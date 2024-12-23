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
	{ label: "Nossos serviços", link: "#services" },
	{ label: "Depoimentos", link: "#testimonials" },
	{ label: "Contato", link: "#contact" },
	{ label: "Serviços de Blockchain", link: "/crypto/" },
	{ label: "Agentic", link: "/agentic/" },
	{ label: "English 🇺🇸🇬🇧", link: "/" },
])
</script>
