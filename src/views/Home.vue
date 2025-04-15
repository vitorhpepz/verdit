<template>
	<main>
		<TheHeader :isFreeTool="false" :menuItems="[
			{ label: 'Services', link: '#services' },
			{ label: 'Testimonials', link: '#testimonials' },
			{ label: 'Pricing', link: '#pricing' },
			{ label: 'FAQ', link: '#faq' },
			{ label: 'Contact', link: '#contact' },
			{ label: 'Free Tool', link: '/freetool' }
		]" />
		<Section class="bg-white">
			<Container class="space-y-12 sm:space-y-20">
				<div class="w-full max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
					<div class="space-y-4 sm:space-y-6">
						<Title class="lg:text-7xl font-medium">
							<span class="text-primary-600">{{ content.hero.title.blue }}</span>
							<span class="text-slate-900"> {{ content.hero.title.black }}</span>
						</Title>
						<SubTitle class="w-full max-w-2xl mx-auto text-slate-700">
							{{ content.hero.subtitle }}
						</SubTitle>
					</div>
				</div>
				
				<div class="space-y-4 text-center">
					<BuyButton :isPrimary="true" text="Get My Free AI Sales Roadmap" />
					<p class="text-slate-700 font-medium text-base italic">Walk Away With a Custom Plan — Even if You Don't Hire Me</p>
					<div class="h-8"></div>
					<p class="font-display">{{ content.hero.trustedBy.prefix }}</p>
					<div class="flex items-center justify-center gap-10 sm:gap-14 flex-wrap">
						<img v-for="partner in partners" :src="partner.src" :alt="partner.name" class="h-10 sm:h-12" />
					</div>
					<p class="font-display">{{ content.hero.trustedBy.suffix }}</p>					
				</div>
				
			</Container>
		</Section>

		<Section
			id="services"
			class="bg-primary-600 bg-[url('/imgs/featured-bg-2.jpg')] bg-cover bg-no-repeat space-y-12 overflow-hidden"
		>
			<Container class="space-y-16">
				<div class="space-y-6 text-center text-white">
					<Title>{{ content.services.subtitle }}</Title>
					<SubTitle class="text-white">
						You get a system that works the way you do
					</SubTitle>
				</div>
					<FeaturesChanger />
				
				<div class="text-center">
					<BuyButton :isPrimary="false" />
				</div>
				
			</Container>
		</Section>

		<Section id="testimonials" class="bg-slate-50">
			<Container class="space-y-16">
				<div class="w-full max-w-2xl space-y-4 mx-auto text-center">
					<Title>{{ content.testimonials.title }}</Title>
					<SubTitle>
						{{ content.testimonials.subtitle }}
					</SubTitle>
				</div>
				<Testimonials />

				<div class="text-center">
					<SubTitle class="text-white-700">
						⭐ Rated Top 1% on Upwork — 100+ projects delivered.
					</SubTitle>
					<br><br>
					<BuyButton :isPrimary="true" />
				</div>
				
			</Container>
		</Section>

		<Section class="bg-primary-600 bg-[url('/imgs/featured-bg-1.jpg')] bg-cover bg-center bg-no-repeat bg-fixed">
			<Container class="text-center text-white">
				<div class="w-full max-w-lg mx-auto space-y-6">
					<Title>Get Your AI Sales Automation Roadmap Today</Title>
					<SubTitle class="text-white">
						Discover exactly how AI can streamline your sales. No guesswork - just clear, actionable steps.
					</SubTitle>
					<BuyButton :isPrimary="false" />
				</div>
			</Container>
		</Section>

		<Section id="pricing" class="bg-slate-900">
			<Container class="text-white space-y-16">
				<PricingCards />
			</Container>
		</Section>

		<Section id="faq" class="bg-slate-50 bg-[url('/imgs/bg-faq.jpg')] bg-contain bg-right bg-no-repeat">
			<Container class="space-y-16">
				<div class="w-full max-w-2xl space-y-4">
					<Title>{{ content.faq.title }}</Title>
				</div>

				<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
					<div v-for="faq in content.faq.items" class="space-y-1 sm:space-y-4 w-full">
						<h3 class="font-display text-lg">{{ faq.question }}</h3>
						<p class="text-sm">{{ faq.answer }}</p>
					</div>
				</div>
			</Container>
		</Section>

		<Section id="contact" class="bg-primary-600 bg-[url('/imgs/featured-bg-1.jpg')] bg-cover bg-center bg-no-repeat bg-fixed">
			<Container class="text-center text-white">
				
				<div class="max-w-4xl mx-auto p-4">
					<div class="flex flex-col lg:flex-row items-start lg:items-center lg:justify-start mb-6">
					<!-- Text Section -->
					<div class="lg:w-3/5 w-full lg:pr-4 flex flex-col justify-start text-left">
						<Title class="mb-6 text-left">{{ content.about.title }}</Title>
						<SubTitle class="text-white mb-4 text-left" v-for="paragraph in content.about.content">
							{{ paragraph }}
						</SubTitle>
					</div>
					
					<!-- Image Section -->
					<div class="flex items-center justify-end lg:w-2/5 w-full mt-4 lg:mt-0">
						<img src="/myphoto.jpeg" alt="User image" class="max-w-full h-auto" style="border-radius: 3.5rem;">
					</div>
					</div>
				</div>
				<div class="w-full max-w-2xl space-y-4 mx-auto text-center text-base">
					<SubTitle v-text="'Have questions or requests? E-mail Vitor directly'" />
					<SubTitle class="text-white-700 underline">
						<a href="mailto:vitor@verdit.site?Subject=Contact%20via%20Verdit&Body=I%20have%20a%20request.%20Looking%20forward%20to%20your%20response." class="text-white-700 hover:underline">
            				vitor@verdit.site
						</a>
					</SubTitle>

				</div>
			</Container>
		</Section>
	</main>
</template>

<script setup>
import Container from "../components/Container.vue"
import Section from "../components/Section.vue"
import Button from "../components/Button.vue"
import BuyBlock from '../components/BuyBlock.vue';
import BuyButton from '../components/BuyButton.vue';
import Testimonials from "../components/Testimonials.vue"
import PricingCards from "../components/PricingCards.vue"
import IconTextDecoration2 from "../components/icons/IconTextDecoration2.vue"
import IconPlay from "../components/icons/IconPlay.vue"
import FeaturesChanger from "../components/FeaturesChanger.vue"
import Title from "../components/Title.vue"
import { ref } from "vue"
import SubTitle from "../components/SubTitle.vue"
import content from '../content.json'
import TheHeader from "../components/TheHeader.vue"

const partners = ref([
	{
		name: "Inwave",
		src: `${__BASE_PATH__}/imgs/partners/inwave.png`,
	},
	{
		name: "Petrobras",
		src: `${__BASE_PATH__}/imgs/partners/br.png`,
	},
	{
		name: "Ambidados",
		src: `${__BASE_PATH__}/imgs/partners/ambidados.png`,
	},
	{
		name: "MyBI",
		src: `${__BASE_PATH__}/imgs/partners/mybi.png`,
	},
])
</script> 