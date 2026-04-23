<template>
	<main>
		<TheHeader :menuItems="[
			{ label: 'Services', link: '/#services' },
			{ label: 'Testimonials', link: '/#testimonials' },
			{ label: 'Pricing', link: '/#pricing' },
			{ label: 'FAQ', link: '/#faq' },
			{ label: 'Contact', link: '/#contact' }
		]" />

		<Section class="bg-white">
			<Container>
				<article class="mx-auto max-w-3xl space-y-8 text-slate-700">
					<header class="space-y-4">
						<Title class="text-3xl lg:text-5xl">Privacy Policy</Title>
						<p class="text-base"><strong>Last updated:</strong> April 23, 2026</p>
						<p>
							VerditLabs is operated by Vitor Pepicon as a sole proprietorship based in Brazil. This policy explains what data we collect, how we use it, and the rights you have over it. If anything here is unclear, email <a href="mailto:vitor@verditlabs.com" class="text-primary-600 hover:text-primary-700 underline">vitor@verditlabs.com</a> and I'll answer personally.
						</p>
					</header>

					<section class="space-y-3">
						<h2 class="font-display text-2xl text-slate-900">Who this policy covers</h2>
						<p>This policy applies to:</p>
						<ul class="list-disc space-y-2 pl-6">
							<li>Visitors to verditlabs.com</li>
							<li>Prospects we contact through outbound email as part of our services for clients</li>
							<li>Clients who engage VerditLabs directly</li>
						</ul>
					</section>

					<section class="space-y-3">
						<h2 class="font-display text-2xl text-slate-900">What data we collect</h2>
						<p><strong>From website visitors:</strong> standard analytics data (pages visited, approximate location, device type). We don't use tracking pixels or third-party ad networks.</p>
						<p><strong>From prospects we contact on behalf of clients:</strong> business contact information sourced from public business directories, professional networking sites, and licensed B2B data providers. This typically includes name, job title, business email address, company name, company size, and publicly available information about the company's hiring activity. We do not collect sensitive personal information.</p>
						<p><strong>From clients:</strong> name, business email, company information, and any data you share with us during our engagement (CRM exports, outreach templates, ideal client criteria).</p>
					</section>

					<section class="space-y-3">
						<h2 class="font-display text-2xl text-slate-900">How we use this data</h2>
						<p>We use prospect data to send relevant B2B outreach to people whose professional role matches what our clients offer. Our legal basis for this is legitimate interest: the outreach is tied to the recipient's professional responsibilities, not their personal life.</p>
						<p>We use client data to deliver the services you've hired us for.</p>
						<p>We don't sell, rent, or share prospect or client data with anyone outside the vendors listed below. We don't use your data to train AI models.</p>
					</section>

					<section class="space-y-3">
						<h2 class="font-display text-2xl text-slate-900">Vendors who process data on our behalf</h2>
						<p>We use the following third-party tools to run our service. Each operates under a Data Processing Addendum that restricts them to processing data only for our business purposes:</p>
						<ul class="list-disc space-y-2 pl-6">
							<li><strong>Smartlead</strong> — email sending and campaign management</li>
							<li><strong>Enrichment providers</strong> (such as Apollo, Clay, or similar) — prospect research and data verification</li>
							<li><strong>CRM platforms</strong> (such as HubSpot, Bullhorn, or the CRM our client uses) — pipeline and contact management</li>
						</ul>
						<p>If you're a client, we'll tell you specifically which tools are in use for your engagement.</p>
					</section>

					<section class="space-y-3">
						<h2 class="font-display text-2xl text-slate-900">How long we keep data</h2>
						<p>Prospect data is retained only as long as it's useful for active outreach, and no longer than 24 months from collection. If you unsubscribe or ask us to stop contacting you, we keep a suppression record (just your email address) so we don't contact you again. We don't add you back.</p>
						<p>Client data is retained for the duration of the engagement plus 12 months for accounting and reference purposes.</p>
					</section>

					<section class="space-y-3">
						<h2 class="font-display text-2xl text-slate-900">Your rights</h2>
						<p>Anyone we've contacted or collected data about can:</p>
						<ul class="list-disc space-y-2 pl-6">
							<li>Ask what data we hold about them</li>
							<li>Ask us to correct it</li>
							<li>Ask us to delete it</li>
							<li>Ask us to stop contacting them</li>
						</ul>
						<p><strong>If you're in Texas</strong>, the Texas Data Privacy and Security Act gives you these rights explicitly, plus the right to opt out of processing for targeted advertising, sale of personal data, or profiling that produces legal effects. We don't do any of those things, but the right applies.</p>
						<p><strong>If you're in California</strong>, the California Consumer Privacy Act gives you similar rights. We don't sell or share your personal information as CCPA defines those terms.</p>
						<p><strong>If you're in the EU or UK</strong>, GDPR gives you rights to access, correction, deletion, objection, and data portability.</p>
						<p>To exercise any of these rights, email <a href="mailto:vitor@verditlabs.com" class="text-primary-600 hover:text-primary-700 underline">vitor@verditlabs.com</a> with your request. We'll respond within 30 days. We won't penalize you for exercising these rights.</p>
					</section>

					<section class="space-y-3">
						<h2 class="font-display text-2xl text-slate-900">How to opt out of outbound emails</h2>
						<p>Three ways, any of them works:</p>
						<ol class="list-decimal space-y-2 pl-6">
							<li>Use the one-click unsubscribe button shown by Gmail, Outlook, or your email client at the top of the message</li>
							<li>Reply to any email with "stop," "unsubscribe," or any similar message</li>
							<li>Email <a href="mailto:vitor@verditlabs.com" class="text-primary-600 hover:text-primary-700 underline">vitor@verditlabs.com</a></li>
						</ol>
						<p>We honor opt-outs within 10 business days and usually the same day.</p>
					</section>

					<section class="space-y-3">
						<h2 class="font-display text-2xl text-slate-900">Data security</h2>
						<p>Data is stored in the systems listed above, all of which use industry-standard encryption and access controls. We limit access to data to what's needed to run the service.</p>
					</section>

					<section class="space-y-3">
						<h2 class="font-display text-2xl text-slate-900">Children's data</h2>
						<p>Our services are for businesses. We don't knowingly collect data from anyone under 18.</p>
					</section>

					<section class="space-y-3">
						<h2 class="font-display text-2xl text-slate-900">Changes to this policy</h2>
						<p>If we make meaningful changes, we'll update the "Last updated" date at the top and, where appropriate, notify affected parties.</p>
					</section>

					<section class="space-y-3">
						<h2 class="font-display text-2xl text-slate-900">Contact</h2>
						<address class="not-italic">
							Vitor Pepicon<br>
							VerditLabs<br>
							<a href="mailto:vitor@verditlabs.com" class="text-primary-600 hover:text-primary-700 underline">vitor@verditlabs.com</a><br>
							Rua Leonardo Mota 400/501, Meireles, Fortaleza, Ceará, Brazil
						</address>
					</section>
				</article>
			</Container>
		</Section>
	</main>
</template>

<script setup>
import Container from "../components/Container.vue"
import Section from "../components/Section.vue"
import TheHeader from "../components/TheHeader.vue"
import Title from "../components/Title.vue"
</script>
