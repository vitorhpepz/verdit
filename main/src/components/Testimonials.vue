<template>
	<div class="sm:columns-2 lg:columns-3">
		<div v-for="testimonial in content.testimonials.items" class="inline-block w-full pt-4">
			<figure class="relative p-6 rounded-2xl bg-white shadow-xl flex flex-col gap-6">
				<IconQuotes class="absolute left-6 top-6 text-slate-100" />
				<blockquote v-text="testimonial.text" class="relative text-lg tracking-tight leading-relaxed" />
				<hr />
				<figcaption class="flex items-center justify-between gap-4">
					<div class="space-y-1">
						<h3 v-text="testimonial.name" class="font-display" />
						<p v-text="testimonial.job" class="text-sm text-slate-500" />
					</div>
					<img :src="testimonial.src" :alt="testimonial.name" class="w-14 aspect-square rounded-full" />
				</figcaption>
			</figure>
		</div>
	</div>
</template>

<script lang="ts" setup>
import IconQuotes from "./icons/IconQuotes.vue"
import content from '../content.json'
</script>
