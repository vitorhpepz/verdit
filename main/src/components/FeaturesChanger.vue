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

			<div class="relative aspect-video sm:w-full sm:h-auto rounded-xl overflow-hidden">
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
			<div class="relative w-full max-w-5xl h-64 sm:h-[700px] overflow-hidden rounded-xl sm:-mr-96">
  <Transition
    enter-from-class="-translate-y-full"
    leave-to-class="translate-y-full"
    class="transition-transform duration-1000"
  >
    <img
      :key="selectedFeatureIndex"
      :src="features[selectedFeatureIndex].img"
      :alt="features[selectedFeatureIndex].label"
      class="absolute inset-0 w-full h-full object-cover"
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
    label: "AI Integration for Legacy Systems",
    description:
      "Enhance your legacy systems with AI capabilities. Whether it's Java, Cobol, PHP, .NET, JavaScript, Python, web, or smartphone applications, we adapt to your environment and elevate your existing infrastructure.",
    img: `${__BASE_PATH__}/imgs/features/legacy.jpg`,
  },
  {
    label: "AI Consulting & Strategy",
    description:
      "Our expert consultants provide strategic insights and guidance, helping you navigate the AI landscape and harness its potential to drive innovation and growth.",
    img: `${__BASE_PATH__}/imgs/features/consulting.jpg`,
  },
  {
    label: "MVP App Development",
    description:
      "We specialize in creating Minimum Viable Product (MVP) applications that accelerate your time-to-market, allowing you to validate ideas quickly and efficiently.",
    img: `${__BASE_PATH__}/imgs/features/mvp.jpg`,
  },
  {
    label: "Robotic Process Automation (RPA) Systems",
    description:
      "We design and implement RPA systems to automate repetitive tasks, improve efficiency, and reduce operational costs, driving productivity across your organization.",
    img: `${__BASE_PATH__}/imgs/features/flow.jpg`,
  },
]);
</script>
