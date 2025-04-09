<template>
	<div class="flex flex-col justify-center items-center lg:items-stretch lg:flex-row gap-8">
		<div
			v-for="pricing in content.pricing.plans"
			class="group w-full max-w-xl lg:max-w-sm p-6 sm:p-8 rounded-3xl flex flex-col gap-6 sm:gap-10 transition-all duration-300 border-2 border-transparent hover:border-white hover:shadow-2xl hover:-translate-y-4"
			:class="{ 'bg-primary-600': pricing.recommended }"
		>
			<h3 v-text="pricing.price" class="font-display text-5xl" />
			<div class="space-y-2">
				<p v-text="pricing.name" class="text-lg font-display" />
				<p
					v-if="pricing.description"
					v-text="pricing.description"
					class="group-hover:text-white transition-colors duration-300"
					:class="{ 'text-slate-500': !pricing.recommended }"
				/>
			</div>
			<Button
				v-text="'Get started'"
				class="text-sm w-full transition-colors duration-300 border-white"
				:class="{ 'bg-white text-slate-900': pricing.recommended }"
			/>
			<div class="flex flex-col gap-4 text-sm">
				<div
					v-for="feature in pricing.features"
					class="flex items-center gap-4 group-hover:text-white transition-colors duration-300"
					:class="{ 'text-slate-400': !pricing.recommended }"
				>
					<IconCheck class="w-4" />
					<span v-text="feature" />
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import Button from "./Button.vue"
import IconCheck from "./icons/IconCheck.vue"
import content from '../content.json'
</script>
