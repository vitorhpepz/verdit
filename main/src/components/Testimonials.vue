<template>
	<div class="sm:columns-2 lg:columns-3">
		<div v-for="testimonial in testimonials" class="inline-block w-full pt-4">
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
import { ref } from "vue"

const testimonials = ref([
  {
    name: "Mark Kempton",
    job: "SAS PointsPrizes",
    src: `${__BASE_PATH__}/imgs/testimonials/mark.jpeg`,
    text: "…super responsive, highly professional — we’re already planning the next project.",
  },
  {
    name: "Eric Plotts",
    job: "MoveRocket.com",
    src: `${__BASE_PATH__}/imgs/testimonials/eric.jpeg`,
    text: "Vitor is a great guy, smart, honest, and hard working. One of the best guys I've ever worked with. Thanks for being awesome Vitor!",
  },
  {
    name: "Brandon Priest",
    job: "WgmiLabs.com",
    src: `${__BASE_PATH__}/imgs/testimonials/brandon.jpeg`,
    text: "Amazing experience with Vitor!! Will continue to work with him longterm.",
  },
  {
    name: "Jacobo Escobar",
    job: "Founder, Web3 Gaming Platform",
    src: `${__BASE_PATH__}/imgs/testimonials/jacobo.jpeg`,
    text: "Vitor is amazing! He did exactly what needed to be done and was fun to work with. He is very good at communication when we needed anything or had questions... The project was a huge success and we'll continue working together on this project for smaller portions of it.",
  },
  {
    name: "Gary Nezri",
    job: "Gnla Transportation LLC",
    src: `${__BASE_PATH__}/imgs/testimonials/peter-renolds.webp`,
    text: "I have never known a better and more professional developer in my life. A person who has enthusiasm, drive, is trustworthy, has perfect English, understands everything and understands your assignment immediately... If you're looking for someone you won't have to worry about and he will solve everything for you, you definitely won't find a better consultant.",
  }
]);
</script>
