<template>
  <main>
    <TheHeader :isFreeTool="true" :buttonText="'Get tool from GitHub'" :menuItems="[
      { label: 'About', link: '#about' },
      { label: 'Features', link: '#features' },
      { label: 'Our Consultancy Services', link: '/' },
      { label: 'Twitter', link: 'https://x.com/vitorpepz' }
    ]" />
    <Section class="bg-white">
      <Container class="space-y-12 sm:space-y-20">
        <div class="w-full max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
          <div class="space-y-4 sm:space-y-6">
            <Title class="lg:text-7xl font-medium">
              <span class="text-primary-600">Opensource</span>
              <span class="text-slate-900"> Sales AI Tool</span>
            </Title>
            <SubTitle class="w-full max-w-2xl mx-auto text-slate-700">
              Save time answering clients on WhatsApp, email, Instagram, LinkedIn and more. Your AI-powered assistant for sales and business growth.
            </SubTitle>
          </div>
          <div class="text-center mt-6">
            <Button :isPrimary="true" buttonText="Get tool from GitHub" :isFreeTool="true" :tallyOpen="'31BZpM'" :whatButton="'free_strategy'" />
          </div>
          <div style="margin-top: 40px; display: flex; justify-content: center; align-items: center;">
            <video class="responsive-video" autoplay loop muted playsinline>
              <source src="/agentic_141224.mp4" type="video/mp4">
              Your browser does not support the video tag.
            </video>
          </div>
          <div class="text-sm text-slate-600 mt-4">
            Needs OpenAI API key. The interaction in the video costs $0.05 USD in API costs. For more details, visit the 
            <a href="https://openai.com/api/pricing/" target="_blank" rel="noopener noreferrer" class="text-primary-600 hover:text-primary-700">
              OpenAI API Pricing page
            </a>.
          </div>
          <div class="text-center mt-6">
            <Button :isPrimary="true" buttonText="Get tool from GitHub" :isFreeTool="true" :tallyOpen="'31BZpM'" :whatButton="'free_strategy'" />
          </div>
        </div>
      </Container>
    </Section>

    <Section id="about" class="bg-gradient-to-br from-primary-600 to-primary-800">
      <Container class="text-center">
        <div class="w-full max-w-2xl mx-auto space-y-6">
          <div class="text-left space-y-4 text-white text-lg">
            <p>
              Hi! I'm Vitor (<a href="https://x.com/vitorpepz" target="_blank" rel="noopener noreferrer" class="text-white hover:text-white/80 underline">@vitorpepz</a>), and I built <a href="https://verdit.site/freetool" target="_blank" rel="noopener noreferrer" class="text-white hover:text-white/80 underline">verdit.site/freetool</a>, a Chrome extension that helps you craft professional responses to client inquiries using OpenAI GPT. I built it for myself to save me time answering clients FAQs and more. You can use it on WhatsApp, email, Instagram, LinkedIn or any website.
            </p>
            <p>
              The software works by internally getting the html content from the page where the conversation is happening, then converting it to Markdown and submitting it to GPT-4.1 together with the instructions. It will then try to post the content on the answer box (if no text appears but you see the green OK, you'll need to past it manually (Ctrl/Cmd + V)) so you can review the answer before sending.
            </p>
            <p>
              I found it super useful to answer the FAQs from clients, but it also worked well with other requests - you can save the instructions for GPT with the FAQs, and it will more than often guess correctly a perfect good answer for that client, keeping the tone/voice of the FAQs you provided it.
            </p>
            <p>
              It is MIT licensed, so you're free to build on top of it or even commercialize if you want so.
            </p>
            <p>
              I hope it is useful for you! I'd love to hear your thoughts and ideas! (<a href="https://x.com/vitorpepz" target="_blank" rel="noopener noreferrer" class="text-white hover:text-white/80 underline">@vitorpepz</a>)
            </p>
          </div>
        </div>
      </Container>
    </Section>

    <Section id="features" class="bg-white">
      <Container>
        <div class="w-full max-w-2xl space-y-4 mx-auto text-center mb-16">
          <Title class="text-slate-900">Powerful Features</Title>
          <SubTitle class="text-slate-700">
            Everything you need to automate your sales communication and boost productivity
          </SubTitle>
        </div>
        <div class="max-w-full mx-auto p-4">
          <ul class="list-disc list-inside lg:w-1/2 w-full mx-auto text-lg text-slate-700">
            <li class="mb-4">
              <strong>📝 FAQ Automation:</strong> Save time by providing your FAQs to GPT, and it will automatically generate responses that match your tone and style. Perfect for handling common client inquiries efficiently.
            </li>
            <li class="mb-4">
              <strong>⚡ One-Click Efficiency:</strong> Instantly capture ongoing conversations and generate tailored responses with just a single click.
            </li>
            <li class="mb-4">
              <strong>✍️ Personalized Writing Style:</strong> Add examples of your best client interactions to train the AI to write more like you and less like the usual robotic ChatGPT style.
            </li>
            <li class="mb-4">
              <strong>🧠 Context-Aware Intelligence:</strong> Effortlessly instruct the AI about the specifics of your business and the different roles it will perform. It crafts persuasive, customized replies that effectively engage your clients. Example:
              <em>Respond to clients and inquiries to promote a $1,000 refrigerator. Highlight its spaciousness and grey design. Suggest responses that encourage moving forward with the purchase.</em> It will learn from communication examples you provide as well.
            </li>
            <li class="mb-4">
              <strong>🌐 Works seamlessly with any website on Chrome:</strong> Salesforce, Gmail, Instagram, LinkedIn, WhatsApp, and more.
            </li>
            <li class="mb-4">
              <strong>🔄 Seamlessly switches roles:</strong> Acting as a sales representative for leads, tech support, customer service agent, and more.
            </li>
            <li class="mb-4">
              <strong>👀 Review the generated response before sending it:</strong> Ensure every message is perfect and tailored to your client's needs.
            </li>
            <li class="mb-4">
              <strong>💪 Save valuable mental energy:</strong> Work longer hours, maintain sharper focus, and ultimately close more deals without burning out.
            </li>
            <li class="mb-4">
              <strong>🎯 No copy and paste back and forth:</strong> Switching to other apps, or remembering keystroke combinations. Just click a button directly on the Chrome interface.
            </li>
            <li class="mb-4">
              <strong>📖 100% Open Source:</strong> Free to use, modify, and distribute. Join our community of contributors and help shape the future of AI-powered sales automation.
            </li>
          </ul>
        </div>
        <div class="text-center mt-12">
          <Button :isPrimary="true" buttonText="Get tool from GitHub" :isFreeTool="true" :tallyOpen="'31BZpM'" :whatButton="'free_strategy'" />
        </div>
      </Container>
    </Section>

    <Section class="bg-gradient-to-br from-primary-600 to-primary-800">
      <Container class="text-center">
        <div class="w-full max-w-lg mx-auto space-y-6">
          <Title class="text-white">Want a Custom AI Solution for Your Business?</Title>
          <div class="space-y-6">
            <div class="text-left space-y-4">
              <div>
                <h3 class="font-display text-lg font-medium text-white">AI-Powered Lead Scoring</h3>
                <p class="text-white/80">Instantly spot who's ready to buy and who's just browsing.</p>
              </div>
              <div>
                <h3 class="font-display text-lg font-medium text-white">Personalized Outreach on Autopilot</h3>
                <p class="text-white/80">Custom messages that actually get replies. No spam, just conversions.</p>
              </div>
              <div>
                <h3 class="font-display text-lg font-medium text-white">Real-Time Data Enrichment</h3>
                <p class="text-white/80">Enrich your leads with fresh, actionable info from multiple sources, automatically.</p>
              </div>
            </div>
            <button @click="handleLinkClick('/')" class="inline-block">
              <Button :isPrimary="false" :tallyOpen="'31BZpM'" :whatButton="'free_strategy'">
                Check our Consultancy Services
              </Button>
            </button>
            <div>
              <a href="https://x.com/vitorpepz" target="_blank" rel="noopener noreferrer" class="text-white hover:text-white/80 font-medium">
                Follow Vitor on Twitter →
              </a>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  </main>
</template>

<script setup>
import Container from "../components/Container.vue"
import Section from "../components/Section.vue"
import Button from "../components/Button.vue"
import Title from "../components/Title.vue"
import SubTitle from "../components/SubTitle.vue"
import TheHeader from "../components/TheHeader.vue"

function handleLinkClick(link) {
  if (link.startsWith('#')) {
    const element = document.querySelector(link)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  } else if (link.startsWith('http')) {
    window.open(link, '_blank', 'noopener,noreferrer')
  } else {
    window.location = link
  }
}
</script>

<style scoped>
.responsive-video {
  max-width: 100%;
  height: auto;
  border-radius: 1rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}
</style> 