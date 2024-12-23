<template>
	<main>
		<Section class="bg-white">
			<Container class="space-y-24 sm:space-y-36">
				<div class="w-full max-w-4xl mx-auto text-center space-y-6 sm:space-y-10">
					<div class="space-y-4 sm:space-y-6">
						<Title class="lg:text-7xl font-medium">
							Empowering Innovation with
							<span class="text-primary-600">Blockchain Solutions</span>
						</Title>
						<SubTitle class="w-full max-w-2xl mx-auto text-slate-700">
							Transforming Ideas into Secure, Scalable, and Decentralized Applications.
						</SubTitle>
					</div>
					<!-- <div class="flex items-center justify-center flex-col sm:flex-row gap-4 sm:gap-6">
						<Button v-text="'Get 6 months for free'" class="bg-slate-900 hover:bg-slate-700 text-white" />
						<Button class="group flex items-center gap-3 hover:border-slate-600">
							<IconPlay class="w-4 text-primary-600 group-hover:animate-pulse" />
							<span v-text="'Watch video'" />
						</Button>
					</div> -->
				</div>
				<div class="space-y-6 text-center">
					<p class="font-display">Trusted by</p>
					<div class="flex items-center justify-center gap-10 sm:gap-14 flex-wrap">
						<img v-for="partner in partners" :src="partner.src" :alt="partner.name" class="h-10 sm:h-12" />
					</div>
					<p class="font-display">...and dozens more!</p>
					<br><br>
					<BuyButton :isPrimary="true" />
				</div>
				
			</Container>
		</Section>

		<Section
			id="services"
			class="bg-primary-600 bg-[url('/imgs/featured-bg-2.jpg')] bg-cover bg-no-repeat space-y-12 overflow-hidden"
		>
			<Container class="space-y-16">
				<div class="space-y-6 text-center text-white">
					<Title v-text="'Comprehensive Blockchain Services'" class="md:text-5xl" />
					<SubTitle class="text-white">
						Tailored Solutions to Meet Your Unique Needs:
					</SubTitle>
				</div>
					<FeaturesChanger />
					<!-- <div style="margin-top: 80px; display: flex; justify-content: center; align-items: center;">
 
						<video class="responsive-video" autoplay loop muted playsinline>
							<source src="/agentic_141224.mp4" type="video/mp4">
							Your browser does not support the video tag.
						</video>
					</div>
				</div> -->
				
				<div class="text-center">
					<BuyButton :isPrimary="false" />
				</div>
				
			</Container>
		</Section>

		<!-- <Section id="features" class="bg-white overflow-hidden space-y-16">
			<Container>
				<div class="w-full max-w-2xl space-y-4 mx-auto text-center">
					<Title v-text="'Simplify everyday business tasks.'" />
					<SubTitle class="text-slate-700">
						Because you'd probably be a little confused if we suggested you complicate your everyday
						business tasks instead.
					</SubTitle>
				</div>
			</Container>

			<TasksSlider />

			<div class="max-w-full mx-auto p-4">
				<ul class="list-disc list-inside lg:w-1/2 w-full mx-auto text-lg">
				<li class="mb-4">
					<strong>One-Click Efficiency:</strong> Instantly capture ongoing conversations and generate tailored responses with just a single click.
				</li>
				<li class="mb-4">
					<strong>Context-Aware Intelligence:</strong> Effortlessly instruct the AI about the specifics of your business and the different roles it will perform. It crafts persuasive, customized replies that effectively engage your clients. Example:
					<em>Respond to clients and inquiries to promote a $1,000 refrigerator. Highlight its spaciousness and grey design. Suggest responses that encourage moving forward with the purchase.</em> It will learn from communication examples you provide as well.
				</li>
				<li class="mb-4">
					<strong>Works seamlessly with any website on Chrome:</strong> Salesforce, Gmail, Instagram, LinkedIn, WhatsApp, and more.
				</li>
				<li class="mb-4">
					<strong>Seamlessly switches roles:</strong> Acting as a sales representative for leads, tech support, customer service agent, and more.
				</li>
				<li class="mb-4">
					<strong>Review the generated response before sending it:</strong> Ensure every message is perfect and tailored to your client’s needs.
				</li>
				<li class="mb-4">
					<strong>Save valuable mental energy:</strong> Work longer hours, maintain sharper focus, and ultimately close more deals without burning out.
				</li>
				<li class="mb-4">
					<strong>No copy and paste back and forth:</strong> Switching to other apps, or remembering keystroke combinations. Just click a button directly on the Chrome interface.
				</li>
				</ul>
			</div>
		</Section> -->

		<Section id="testimonials" class="bg-slate-50">
			<Container class="space-y-16">
				<div class="w-full max-w-2xl space-y-4 mx-auto text-center">
					<Title>{{ 'What Our Clients Say' }}</Title>
					<SubTitle>
						Real Feedback from Businesses Thriving with Our Solutions
					</SubTitle>
				</div>
				<Testimonials />

				<div class="text-center">
					<SubTitle class="text-white-700 underline">
						<a href="https://www.upwork.com/freelancers/~01ef5120bd178f9fcc">More testimonials about our lead developer clicking here
						</a>
					</SubTitle>
					<br><br>
					<BuyButton :isPrimary="true" />
				</div>
				
			</Container>
		</Section>


		<Section id="contact" class="bg-primary-600 bg-[url('/imgs/featured-bg-1.jpg')] bg-cover bg-center bg-no-repeat bg-fixed">
			<Container class="text-center text-white">
				
				<div class="max-w-4xl mx-auto p-4">
					<div class="flex flex-col lg:flex-row items-center lg:items-center lg:justify-start mb-6">
					<!-- Text Section -->
					<div class="lg:w-3/5 w-full lg:pr-4 flex flex-col justify-center">
						<Title class="mb-2">“I know it sounds a bit corny, but developing software has been my calling and passion for the past 19 years. And seeing my clients grow and succeed is incredibly rewarding. What can I say? It's an awesome job.”</Title>
						<SubTitle class="text-white mb-4">
						Vitor, Founder and Lead Developer at Verdit Consulting
						</SubTitle>
						
					</div>
					
					<!-- Image Section -->
					<div class="flex justify-center lg:w-2/5 w-full mt-4 lg:mt-0">
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
					<SubTitle>
						"I’d be delighted to speak with you!"
					</SubTitle>

				</div>
			</Container>
		</Section>

		<!-- <Section id="pricing" class="bg-slate-900">
			<Container class="text-white space-y-16">
				<div class="text-center space-y-6">
					<Title>
						<span class="relative">
							<IconTextDecoration2 />
							<span v-text="'Simple pricing,'" class="relative" />
						</span>
						for everyone.
					</Title>
					<SubTitle class="text-slate-400">
						It doesn't matter what size your business is, our software won't work well for you.
					</SubTitle>
				</div>

				<PricingCards />
			</Container>
		</Section> -->

		<!-- <Section id="faq" class="bg-slate-50 bg-[url('/imgs/bg-faq.jpg')] bg-contain bg-right bg-no-repeat">
			<Container class="space-y-16">
				<div class="w-full max-w-2xl space-y-4">
					<Title v-text="'Frequently asked questions'" />
					<SubTitle class="text-slate-700">
						If you can't find what you're looking for, email our support team and if you're lucky someone
						will get back to you.
					</SubTitle>
				</div>

				<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
					<div v-for="faq in faqs" class="space-y-1 sm:space-y-4 w-full">
						<h3 v-text="faq.question" class="font-display text-lg" />
						<p v-text="faq.answer" class="text-sm" />
					</div>
				</div>
			</Container>
		</Section> -->
	</main>
</template>

<script setup>
import Container from "./Container.vue"
import Section from "./Section.vue"
import Button from "./Button.vue"
import BuyBlock from './BuyBlock.vue';
import BuyButton from './BuyButton.vue';
import Testimonials from "./Testimonials.vue"
import PricingCards from "./PricingCards.vue"
import IconTextDecoration2 from "./icons/IconTextDecoration2.vue"
import IconPlay from "./icons/IconPlay.vue"
import FeaturesChanger from "./FeaturesChanger.vue"
import Title from "./Title.vue"
import { ref } from "vue"
import SubTitle from "./SubTitle.vue"
import TasksSlider from "./TasksSlider.vue"

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

const faqs = ref([
	{
		question: "Does TaxPal handle VAT?",
		answer: "Well no, but if you move your company offshore you can probably ignore it.",
	},
	{
		question: "Can I pay for my subscription via purchase order?",
		answer: "Absolutely, we are happy to take your money in all forms.",
	},
	{
		question: "How do I apply for a job at TaxPal?",
		answer: "We only hire our customers, so subscribe for a minimum of 6 months and then let's talk.",
	},
	{
		question: "What was that testimonial about tax fraud all about?",
		answer: "TaxPal is just a software application, ultimately your books are your responsibility.",
	},
	{
		question: "TaxPal sounds horrible but why do I still feel compelled to purchase?",
		answer: "This is the power of excellent visual design. You just can't resist it, no matter how poorly it actually functions.",
	},
	{
		question: "I found other companies called TaxPal, are you sure you can use this name?",
		answer: "Honestly not sure at all. We haven't actually incorporated or anything, we just thought it sounded cool and made this website.",
	},
	{
		question: "How do you generate reports?",
		answer: "You just tell us what data you need a report for, and we get our kids to create beautiful charts for you using only the finest crayons.",
	},
	{
		question: "Can we expect more inventory features?",
		answer: "In life it's really better to never expect anything at all.",
	},
	{
		question: "I lost my password, how do I get into my account?",
		answer: "Send us an email and we will send you a copy of our latest password spreadsheet so you can find your information.",
	},
])
</script>
