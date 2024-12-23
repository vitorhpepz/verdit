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
    name: "Eric Plotts",
    job: "MoveRocket.com",
    src: `${__BASE_PATH__}/imgs/testimonials/eric.jpeg`,
    text: "Vitor is one of the best. He's a great guy, smart, honest, and hard working. One of the best guys I've ever worked with. Thanks for being awesome Vitor!",
  },
  {
    name: "Mark Kempton",
    job: "SAS PointsPrizes",
    src: `${__BASE_PATH__}/imgs/testimonials/mark.jpeg`,
    text: "Vitor is a veteran at deploying ERC-721 smart contracts. He worked closely with us to design/deploy the contract, and then to deeply integrate it into our game platform. In particular, he has a lot of experience when it comes to minimizing gas fees. Excellent responsiveness to all our messages and highly professional. We will be very likely to hire him again in the future",
  },
  {
    name: "Brandon Priest",
    job: "WgmiLabs.com",
    src: `${__BASE_PATH__}/imgs/testimonials/brandon.jpeg`,
    text: "Amazing experience with Vitor!! Will continue to work with him longterm.",
  },
  {
    name: "Jacobo Escobar",
    job: "Founder of HappyLand Gummy Bears",
    src: `${__BASE_PATH__}/imgs/testimonials/jacobo.jpeg`,
    text: "Vitor is amazing! He did exactly what needed to be done and was fun to work with. He is very good at communication when we needed anything or had questions. He was very proficient and knows a lot about creating a smart-contract on the Ethereum Blockchain. The project was a huge success and we'll continue working together on this project for smaller portions of it. Grateful to have met him and is a great asset to the development community as well as the Crypto/NFT space.",
  },
  {
    name: "Gary Nezri",
    job: "Gnla Transportation LLC",
    src: `${__BASE_PATH__}/imgs/testimonials/peter-renolds.webp`,
    text: "I have never known a better and more professional developer in my life. A person who has enthusiasm, drive, is trustworthy, has perfect English, understands everything and understands your assignment immediately. We made a mistake during the assignment and despite that he made us a second contract. It was our mistake and he didn't want us to pay anything extra. If you're looking for someone you won't have to worry about and he will solve everything for you, you definitely won't find a better developer for an NFT project on Upwork. And most importantly, you don't have to be afraid to trust him.",
  }
]);
</script>
