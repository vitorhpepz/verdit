<template>
	<div>
		<!-- MOBILE -->
		<div class="xl:hidden bg-white/10 border border-white/25 rounded-xl backdrop-blur-md sm:overflow-hidden">
			<div class="p-8 sm:p-10 text-center text-white space-y-6">
				<div class="flex items-center justify-center gap-4 flex-wrap font-display text-lg tracking-widest">
					<button
						v-for="(feature, index) in features"
						v-text="feature.label"
						@click.prevent="selectedFeatureIndex = index"
						class="py-1.5 px-4 rounded-full hover:bg-white/20 transition-colors duration-300"
						:class="{ '!bg-white text-primary-600': selectedFeatureIndex === index }"
					/>
				</div>
				<p v-text="features[selectedFeatureIndex].description" class="text-lg" />
			</div>

			<div class="relative h-[450px] aspect-video sm:w-full sm:h-auto rounded-xl overflow-hidden">
				<Transition
					enter-from-class="translate-y-full opacity-0"
					leave-to-class="translate-y-full opacity-0"
					class="transition-all duration-1000"
				>
					<img
						:key="selectedFeatureIndex"
						:src="features[selectedFeatureIndex].img"
						:alt="features[selectedFeatureIndex].label"
						class="rounded-xl absolute h-full w-full object-cover object-top"
					/>
				</Transition>
			</div>
		</div>

		<!-- DESKTOP -->
		<div class="hidden xl:flex items-center justify-end">
			<div class="flex flex-col gap-2 text-white translate-x-1 w-full max-w-lg">
				<button
					v-for="(feature, index) in features"
					@click.prevent="selectedFeatureIndex = index"
					class="p-6 rounded-l-xl border border-transparent transition-colors duration-300 hover:bg-white/5 text-left space-y-2"
					:class="{ '!bg-white/10 border-white/20': selectedFeatureIndex === index }"
				>
					<span v-text="feature.label" class="text-lg font-display" />
					<p v-text="feature.description" class="text-sm" />
				</button>
			</div>
			<div class="relative w-full max-w-5xl h-[700px] -mr-96 overflow-hidden rounded-xl">
				<Transition
					enter-from-class="-translate-y-full "
					leave-to-class="translate-y-full "
					class="transition-transform duration-1000"
				>
					<img
						:key="selectedFeatureIndex"
						:src="features[selectedFeatureIndex].img"
						:alt="features[selectedFeatureIndex].label"
						class="absolute w-full h-full object-cover"
					/>
				</Transition>
			</div>
		</div>
	</div>
</template>

<script setup>
import { ref } from "vue"

const selectedFeatureIndex = ref(0)
const features = ref([
	{
		label: "One-Click efficiency",
		description:
			"It instantly understands the context of the conversation on the screen and generates tailored responses, with just a single click.",
		img: "/imgs/features/payroll.webp",
	},
	{
		label: "Easy to train",
		description:
			"Effortlessly instruct the AI about the specifics of your business and the different roles it will perform. It crafts persuasive, customized replies that effectively engages your clients.",
		img: "/imgs/features/expenses.webp",
	},
	{
		label: "Works seamlessly with any website on Chrome",
		description:
			"Salesforce, Gmail, Instagram, LinkedIn, WhatsApp, and more. Seamlessly switches roles, acting as a sales representative for leads, tech support, customer service agent, and more.",
		img: "/imgs/features/vat-returns.webp",
	},
	{
		label: "Save valuable mental energy",
		description:
			"Work longer hours, maintain sharper focus, and ultimately close more deals without burning out.",
		img: "/imgs/features/reporting.webp",
	},
])
</script>
