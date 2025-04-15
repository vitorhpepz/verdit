<template>
  <main>
    <TheHeader :isFreeTool="true" :menuItems="[
      { label: 'Features', link: '#features' },
      { label: 'GitHub', link: 'https://github.com/verditdev/verdit' },
      { label: 'Consulting', link: '/' },
      { label: 'Contact', link: 'mailto:vitor@verdit.site' }
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
            <BuyButton :isPrimary="true" />
          </div>
          <div style="margin-top: 40px; display: flex; justify-content: center; align-items: center;">
            <video class="responsive-video" autoplay loop muted playsinline>
              <source src="/agentic_141224.mp4" type="video/mp4">
              Your browser does not support the video tag.
            </video>
          </div>
          <div class="text-sm text-slate-600 mt-4">
            The interaction in the video costs $0.05 USD in API costs. For more details, visit the 
            <a href="https://openai.com/api/pricing/" target="_blank" rel="noopener noreferrer" class="text-primary-600 hover:text-primary-700">
              OpenAI API Pricing page
            </a>.
          </div>
          <div class="text-center mt-6">
            <BuyButton :isPrimary="true" />
          </div>
        </div>
      </Container>
    </Section>

    <Section id="features" class="bg-primary-600 bg-[url('/imgs/featured-bg-1.jpg')] bg-cover bg-center bg-no-repeat bg-fixed">
      <Container>
        <div class="w-full max-w-2xl space-y-4 mx-auto text-center mb-16">
          <Title class="text-white">Powerful Features</Title>
          <SubTitle class="text-white">
            Everything you need to automate your sales communication and boost productivity
          </SubTitle>
        </div>
        <div class="max-w-full mx-auto p-4">
          <ul class="list-disc list-inside lg:w-1/2 w-full mx-auto text-lg text-white">
            <li class="mb-4">
              <strong>One-Click Efficiency:</strong> Instantly capture ongoing conversations and generate tailored responses with just a single click.
            </li>
            <li class="mb-4">
              <strong>Personalized Writing Style:</strong> Add examples of your best client interactions to train the AI to write more like you and less like the usual robotic ChatGPT style.
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
              <strong>Review the generated response before sending it:</strong> Ensure every message is perfect and tailored to your client's needs.
            </li>
            <li class="mb-4">
              <strong>Save valuable mental energy:</strong> Work longer hours, maintain sharper focus, and ultimately close more deals without burning out.
            </li>
            <li class="mb-4">
              <strong>No copy and paste back and forth:</strong> Switching to other apps, or remembering keystroke combinations. Just click a button directly on the Chrome interface.
            </li>
            <li class="mb-4">
              <strong>100% Open Source:</strong> Free to use, modify, and distribute. Join our community of contributors and help shape the future of AI-powered sales automation.
            </li>
          </ul>
        </div>
        <div class="text-center mt-12">
          <BuyButton :isPrimary="false" />
        </div>
      </Container>
    </Section>

    <Section class="bg-white">
      <Container class="text-center">
        <div class="w-full max-w-lg mx-auto space-y-6">
          <Title>Want a Custom AI Solution for Your Business?</Title>
          <SubTitle class="text-slate-700">
            Get a personalized AI sales automation roadmap tailored to your specific needs and workflow.
          </SubTitle>
          <div class="space-y-6">
            <router-link to="/" class="inline-block">
              <Button class="bg-primary-600 text-white hover:bg-primary-700">
                Explore Our Consulting Services
              </Button>
            </router-link>
            <div>
              <a href="https://x.com/vitorpepz" target="_blank" rel="noopener noreferrer" class="text-primary-600 hover:text-primary-700 font-medium">
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
import BuyButton from "../components/BuyButton.vue"
import TheHeader from "../components/TheHeader.vue"
</script>

<style scoped>
.responsive-video {
  max-width: 100%;
  height: auto;
  border-radius: 1rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}
</style> 