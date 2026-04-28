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
						<p class="text-base"><strong>Last updated:</strong> April 28, 2026</p>
						<p>
							VerditLabs is operated by Vitor Pepicon. This policy explains what data we collect, how we use it, and the rights you have over it. If anything here is unclear, email <a href="mailto:vitor@verditlabs.com" class="text-primary-600 hover:text-primary-700 underline">vitor@verditlabs.com</a> and I'll answer personally.
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
						<div class="space-y-3">
							<p><strong>From website visitors:</strong> we use Google Analytics and Google Ads tags to understand how visitors find and use our site and to measure the performance of advertising campaigns. These tools collect pages visited, approximate location, device type, referral source, and a unique identifier stored in cookies. Google may use this data to build advertising audiences and serve ads to you on other sites within its network.</p>
							<p>We use Cookiebot to manage your cookie preferences. When you first visit the site, you can accept, reject, or customize which categories of cookies are set. You can change your choice at any time by clicking the Cookiebot icon in the bottom-left corner of any page.</p>
							<p>You can also opt out of Google Analytics tracking using <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" class="text-primary-600 hover:text-primary-700 underline">Google's browser add-on</a> and manage ad personalization in your <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer" class="text-primary-600 hover:text-primary-700 underline">Google Ads settings</a>.</p>
						</div>
						<p><strong>From prospects we contact on behalf of clients:</strong> business contact information sourced from public business directories, professional networking sites, and licensed B2B data providers. This typically includes name, job title, business email address, company name, company size, and publicly available information about the company's hiring activity.</p>
						<p><strong>From clients:</strong> name, business email, company information, and any data you share with us during our engagement (CRM exports, outreach templates, ideal client criteria).</p>
						<p>We do not collect sensitive personal information as defined under state privacy laws. This includes government identifiers (Social Security numbers, driver's license numbers, passport numbers); financial account numbers, payment card numbers, or account credentials; precise geolocation; racial or ethnic origin; religious beliefs; union membership; genetic or biometric data; health, sex life, or sexual orientation information; the contents of mail, email, or text messages; and citizenship or immigration status. If we ever begin collecting any of this information, we'll update this policy and obtain opt-in consent where required.</p>
					</section>

					<section class="space-y-3">
						<h2 class="font-display text-2xl text-slate-900">How we use this data</h2>
						<p>We use prospect data to send relevant B2B outreach to people whose professional role matches what our clients offer. The outreach is tied to the recipient's professional responsibilities, not their personal life.</p>
						<p>We use client data to deliver the services you've hired us for.</p>
						<p>If you reply to our outreach, we may add your contact information and reply content to our CRM to manage the conversation.</p>
						<p>We don't sell, rent, or share prospect or client data with anyone outside the vendors listed below. Website visitor data collected through Google Analytics and Google Ads tags is handled separately, as described above and in the California residents section. We don't use your data to train AI models.</p>
					</section>

					<section class="space-y-3">
						<h2 class="font-display text-2xl text-slate-900">Data minimization</h2>
						<p>We limit our collection of personal data to what is reasonably necessary and proportionate to the purposes described in this policy. We don't collect, retain, or use personal data for purposes that aren't disclosed here, and we don't collect more data than we need to send relevant outreach on behalf of our clients.</p>
					</section>

					<section class="space-y-3">
						<h2 class="font-display text-2xl text-slate-900">Universal opt-out signals</h2>
						<p>We honor the Global Privacy Control (GPC) browser signal automatically across every jurisdiction where it applies. If your browser sends GPC, we treat it as a valid opt-out of sale and sharing of personal information for cross-context behavioral advertising, and as an opt-out of targeted advertising under state laws that recognize universal opt-out mechanisms - including California, Colorado, Connecticut, Delaware, Maryland, Minnesota, Montana, Nebraska, New Hampshire, New Jersey, Oregon, and Texas. You don't need to take any further action; the signal itself is the request.</p>
						<p>If you also use the Cookiebot banner to set preferences, GPC takes precedence: a GPC signal overrides an "accept all" choice in Cookiebot for advertising-related cookies.</p>
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
						<h2 class="font-display text-2xl text-slate-900">Our outbound emails</h2>
						<p>Every commercial email we send includes our valid postal address, accurately identifies the sender, uses a non-deceptive subject line, and contains a working opt-out mechanism. We honor opt-outs within 10 business days and usually the same day.</p>
					</section>

					<section class="space-y-3">
						<h3 class="font-display text-xl text-slate-900">How to opt out</h3>
						<p>Two ways, either works:</p>
						<ul class="list-disc space-y-2 pl-6">
							<li>Reply to any email with "stop," "unsubscribe," or any similar message</li>
							<li>Email <a href="mailto:vitor@verditlabs.com" class="text-primary-600 hover:text-primary-700 underline">vitor@verditlabs.com</a></li>
						</ul>
					</section>

					<section class="space-y-3">
						<h2 class="font-display text-2xl text-slate-900">Your rights</h2>
						<p>Anyone we've contacted or collected data about can:</p>
						<ul class="list-disc space-y-2 pl-6">
							<li>Ask what data we hold about them</li>
							<li>Ask us to correct it</li>
							<li>Ask us to delete it</li>
							<li>Ask us to stop contacting them</li>
							<li>Ask for a portable copy of their data, where applicable state law provides that right</li>
						</ul>
						<p>To exercise any of these rights, email <a href="mailto:vitor@verditlabs.com" class="text-primary-600 hover:text-primary-700 underline">vitor@verditlabs.com</a> with your request. We'll confirm receipt within 10 business days and respond substantively within 45 days. If we need more time because of the complexity or volume of requests, we may extend this period by an additional 45 days, and we'll let you know within the original 45-day window. We won't penalize you for exercising these rights.</p>
						<p>To verify your identity before fulfilling a request, we'll match the email address you contact us from against the data we hold. For deletion or access requests where the match isn't clear, we may ask for additional information sufficient to confirm you are the person the data relates to. We won't ask for more than is necessary.</p>
						<p>If we deny your request, we'll explain why in writing. You can appeal by replying to our denial within 60 days. We'll review the appeal and respond within 60 days of receiving it, with a written explanation of the action taken and the reasons for that decision. If we deny the appeal, we'll provide you with a way to contact your state attorney general if you believe your rights have not been respected.</p>
						<p>You can designate an authorized agent to submit a request on your behalf. For California residents, the agent must provide either (1) a power of attorney under California Probate Code sections 4000-4465, or (2) signed written permission from you authorizing the agent to act, plus proof of the agent's identity. We may also contact you directly to verify your identity and confirm you authorized the request. For residents of other states, we'll ask for similar written proof of authorization.</p>
					</section>

					<section class="space-y-3">
						<h3 class="font-display text-xl text-slate-900">California residents</h3>
						<p>The California Consumer Privacy Act (CCPA) gives California residents specific rights over their personal information. This applies to business contacts as well as consumers, since California's B2B exemption sunset in January 2023.</p>
						<p><strong>Categories of personal information we collect:</strong></p>
						<ul class="list-disc space-y-2 pl-6">
							<li><em>Identifiers</em> - name, business email address</li>
							<li><em>Professional or employment-related information</em> - job title, employer, company size, publicly available information about the company's hiring activity</li>
							<li><em>Internet or network activity</em> (website visitors only) - pages visited, device type, approximate location</li>
						</ul>
						<p><strong>Sources of this information:</strong> public business directories, professional networking sites, licensed B2B data providers, our website analytics, and information clients share with us.</p>
						<p><strong>Purposes:</strong> sending relevant B2B outreach on behalf of our clients, delivering contracted services to clients, and operating our website.</p>
						<p>We do not sell personal information for money. However, our use of Google Ads tags may constitute "sharing" of personal information for cross-context behavioral advertising as the CCPA defines that term. You can opt out of this sharing at any time by adjusting your cookie preferences through the Cookiebot icon in the bottom-left corner of any page, or by enabling Global Privacy Control in your browser (see "Universal opt-out signals" above). We do not use or disclose sensitive personal information for purposes that would trigger the right to limit, but the right exists and you can invoke it.</p>
						<p>You have the right to know, access, correct, and delete your personal information, the right to opt out of sale or sharing, the right to limit use of sensitive personal information, and the right to non-discrimination for exercising any of these rights.</p>
					</section>

					<section class="space-y-3">
						<h3 class="font-display text-xl text-slate-900">Texas residents</h3>
						<p>The Texas Data Privacy and Security Act gives Texas residents the rights to access, correct, delete, and obtain a copy of their personal data, plus the right to opt out of processing for targeted advertising, sale of personal data, or profiling that produces legal effects. We don't sell personal data or engage in profiling that produces legal effects, but the rights apply.</p>
					</section>

					<section class="space-y-3">
						<h3 class="font-display text-xl text-slate-900">Other US states</h3>
						<p>Residents of Colorado, Connecticut, Delaware, Florida, Indiana, Iowa, Kentucky, Maryland, Minnesota, Montana, Nebraska, New Hampshire, New Jersey, Oregon, Rhode Island, Tennessee, Utah, and Virginia have rights under their state's comprehensive privacy law. Depending on the state, these may include the right to access, correct, delete, and obtain a portable copy of personal data, plus the right to opt out of targeted advertising, sale of personal data, and profiling that produces legal or similarly significant effects. Many of these laws contain exemptions for personal data collected in a business-to-business context, but we'll respond to good-faith requests regardless of whether the law technically applies to us.</p>
						<p>Where state law requires opt-in consent before processing sensitive personal data, we don't process sensitive personal data and so don't rely on consent for that purpose.</p>
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
							539 W Commerce St, Suite 1728, Dallas, TX 75208
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
