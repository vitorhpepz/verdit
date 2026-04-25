<template>
	<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
		<div
			v-for="pricing in content.pricing.plans"
			class="group w-full p-6 sm:p-8 rounded-3xl flex flex-col gap-6 sm:gap-10 transition-all duration-300 border-2 border-transparent hover:border-white hover:shadow-2xl hover:-translate-y-4"
			:class="{ 'bg-primary-600': pricing.recommended }"
		>
			<p
				v-if="pricing.badge"
				v-text="pricing.badge"
				class="text-base sm:text-lg uppercase tracking-[0.2em] text-center font-semibold"
				:class="{ 'text-white': pricing.recommended, 'text-slate-400': !pricing.recommended }"
			/>
			<h3 v-text="pricing.price" class="font-display text-5xl text-center" />
			<div class="space-y-2">
				<p v-text="pricing.name" class="text-lg font-display text-center" />
				<p
					v-if="pricing.description"
					v-text="pricing.description"
					class="group-hover:text-white transition-colors duration-300 text-center"
					:class="{ 'text-slate-500': !pricing.recommended }"
				/>
			</div>
			<Button
				:whatButton="getWhatButton(pricing.price)"
				v-text="pricing.cta || 'Get started'"
				:isPrimary="pricing.recommended"
				:isPricingCard="true"
				class="w-full transition-all duration-300 hover:scale-105"
			/>
			<div class="flex flex-col gap-4 text-base sm:text-sm">
				<div
					v-for="feature in pricing.features"
					:key="typeof feature === 'string' ? feature : feature.heading"
					class="space-y-3"
				>
					<p
						v-if="isFeatureGroup(feature)"
						v-text="feature.heading"
						class="font-display text-base"
						:class="{ 'text-white': pricing.recommended, 'text-slate-200': !pricing.recommended }"
					/>
					<div
						v-for="item in isFeatureGroup(feature) ? feature.items : [feature]"
						:key="item"
						class="flex items-start gap-4 group-hover:text-white transition-colors duration-300"
						:class="{ 'text-slate-400': !pricing.recommended }"
					>
						<IconCheck class="w-4 mt-1 flex-shrink-0" />
						<span v-text="item" />
					</div>
				</div>
			</div>
			<p
				v-if="pricing.bottomLine"
				v-text="pricing.bottomLine"
				class="text-base sm:text-sm leading-relaxed"
				:class="{ 'text-white': pricing.recommended, 'text-slate-300': !pricing.recommended }"
			/>
		</div>
	</div>
</template>

<script setup>
import Button from "./Button.vue"
import IconCheck from "./icons/IconCheck.vue"
import content from '../content.json'

function getWhatButton(price) {
	return price.toLowerCase().replace(/[^a-z0-9]/g, '_')
}

function isFeatureGroup(feature) {
	return typeof feature === 'object' && feature !== null && Array.isArray(feature.items)
}
</script>
