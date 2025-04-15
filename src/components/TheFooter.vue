<template>
	<footer class="py-14 text-slate-500 bg-slate-50">
		<Container class="flex flex-col gap-10">
			<div class="flex flex-col items-center gap-6">
				<nav class="flex flex-col sm:flex-row items-center justify-center gap-3">
					<a
						v-for="menu in menuItems"
						v-text="menu.label"
						:href="menu.link"
						class="rounded-lg py-1.5 px-3 transition-colors duration-300 hover:bg-slate-100"
					/>
				</nav>
			</div>
			<hr />
			<div class="flex items-center text-center justify-between flex-col sm:flex-row gap-4">
				<p v-text="content.footer.companyName" />
				<p v-text="content.footer.tagline" />
			</div>
		</Container>
	</footer>
</template>

<script setup>
import Container from "./Container.vue";
import content from '../content.json'

const props = defineProps({
	menuItems: Array,
});
</script>
