<template>
	<main>
		<TheHeader :isFreeTool="false" :menuItems="[
			{ label: 'Services', link: '#services' },
			{ label: 'Testimonials', link: '#testimonials' },
			{ label: 'Pricing', link: '#pricing' },
			{ label: 'FAQ', link: '#faq' },
			{ label: 'Contact', link: '#contact' },
			{ label: 'Opensource Sales AI Tool', link: '/freetool' }
		]" />
		<Section class="bg-white !pt-12 !pb-8 sm:!pt-16 sm:!pb-12">
			<Container class="space-y-12 sm:space-y-16">
				<div class="w-full text-center space-y-4 sm:space-y-6">
					<div class="space-y-3 sm:space-y-4">
						<Title class="text-2xl lg:text-6xl font-medium" v-html="content.hero.title.blue + content.hero.title.black">
						</Title>
						<SubTitle class="w-full max-w-2xl mx-auto text-slate-700 text-sm lg:text-lg" v-html="content.hero.subtitle">
						</SubTitle>
					</div>
					
				</div>
				
				<div class="space-y-4 text-center">
					<Button :isPrimary="true" :buttonText="'Let\'s find your highest-leverage sales automation'" :whatButton="'free_strategy'" />
					<p class="text-slate-700 font-medium text-base italic -mt-3">Completely free, no obligation to hire me</p>
					
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
			class="bg-white overflow-hidden space-y-8 border-t border-slate-200 !py-8 sm:!py-12"
		>
			<Container>
				<div class="w-full max-w-2xl space-y-4 mx-auto text-center">
					<h2 class="text-xl lg:text-3xl font-display tracking-tight text-center">{{ content.services.subtitle }}</h2>
				</div>
			</Container>

			<TasksSlider />
		</Section>

		<Section id="testimonials" class="bg-slate-50 !py-8 sm:!py-12">
			<Container class="space-y-8">
				<div class="w-full max-w-2xl space-y-4 mx-auto text-center">
					<h2 class="text-xl lg:text-3xl font-display tracking-tight text-center">{{ content.testimonials.title }}</h2>
				</div>
				<Testimonials />

				<div class="text-center">
					<Button :isPrimary="true" :buttonText="'Let\'s find your highest-leverage sales automation'" :whatButton="'free_strategy'" />
				</div>
				
			</Container>
		</Section>

		<Section id="pricing" class="bg-slate-900">
			<Container class="text-white space-y-16">
				<PricingCards />
			</Container>
		</Section>

		<Section class="bg-primary-600 bg-[url('/imgs/featured-bg-1.jpg')] bg-cover bg-center bg-no-repeat bg-fixed">
			<Container class="text-center text-white">
				<div class="w-full max-w-lg mx-auto space-y-6">
					<Title>Let's find your easiest wins with AI.</Title>
					<SubTitle class="text-white">
						I'll personally audit your current sales flow (website, CRM, and outreach process) and show you where automation can save time and increase conversions. No calls, no commitments. Just clear next steps you can use right away.
					</SubTitle>
					<Button :isPrimary="false" :buttonText="'Let\'s find your highest-leverage sales automation'" :whatButton="'free_strategy'" />
				</div>
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

		<Section id="contact" class="bg-gradient-to-br from-primary-600 to-primary-800">
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
						<img src="/myphoto.jpg" alt="User image" class="max-w-full h-auto" style="border-radius: 3.5rem;">
					</div>
					</div>
				</div>
				<div class="w-full max-w-2xl space-y-4 mx-auto text-center text-base">
					<SubTitle v-text="'Have questions or requests? E-mail Vitor directly'" />
					<SubTitle class="text-white-700 underline">
						<a href="mailto:vitor@verditlabs.com?Subject=Contact%20via%20VerditLabs&Body=I%20have%20a%20request.%20Looking%20forward%20to%20your%20response." class="text-white-700 hover:underline">
            				vitor@verditlabs.com
						</a>
					</SubTitle>
					<SubTitle class="text-white-700">
						<a href="https://x.com/vitorpepz" target="_blank" rel="noopener noreferrer" class="text-white-700 hover:underline">
							Follow Vitor on Twitter →
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
import Button from '../components/Button.vue';
import Testimonials from "../components/Testimonials.vue"
import PricingCards from "../components/PricingCards.vue"
import Title from "../components/Title.vue"
import { ref } from "vue"
import SubTitle from "../components/SubTitle.vue"
import TasksSlider from "../components/TasksSlider.vue"
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
