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
    text: "Vitor é um dos melhores. Ele é um ótimo cara, inteligente, honesto e trabalhador. Um dos melhores com quem já trabalhei. Obrigado por ser incrível, Vitor! (Traduzido, feedback original em Inglês)",
  },
  {
    name: "Mark Kempton",
    job: "SAS PointsPrizes",
    src: `${__BASE_PATH__}/imgs/testimonials/mark.jpeg`,
    text: "Vitor é um veterano na implantação de contratos inteligentes ERC-721. Ele trabalhou de perto conosco para projetar/implantar o contrato e depois integrá-lo profundamente em nossa plataforma de jogos. Em particular, ele tem muita experiência em minimizar taxas de gas (da rede Ethereum). Excelente resposta a todas as nossas mensagens e altamente profissional. É muito provável que o contrataremos novamente no futuro. (Traduzido, feedback original em Inglês)",
  },
  {
    name: "Brandon Priest",
    job: "WgmiLabs.com",
    src: `${__BASE_PATH__}/imgs/testimonials/brandon.jpeg`,
    text: "Experiência incrível com Vitor!! Continuaremos a trabalhar com ele a longo prazo. (Traduzido, feedback original em Inglês)",
  },
  {
    job: "Fundador do HappyLand Gummy Bears",
    name: "Jacobo Escobar",
    src: `${__BASE_PATH__}/imgs/testimonials/jacobo.jpeg`,
    text: "Vitor é incrível! Ele fez exatamente o que precisava ser feito e foi divertido trabalhar com ele. Ele é muito bom em comunicação quando precisávamos de algo ou tínhamos perguntas. Ele foi muito proficiente e sabe muito sobre a criação de um contrato inteligente na Blockchain Ethereum. O projeto foi um grande sucesso e continuaremos trabalhando juntos neste projeto em porções menores. Grato por tê-lo conhecido e ele é um grande ativo para a comunidade de desenvolvimento, bem como para o espaço Crypto/NFT. (Traduzido, feedback original em Inglês)",
  },
  {
    name: "Gary Nezri",
    job: "Gnla Transportation LLC",
    src: `${__BASE_PATH__}/imgs/testimonials/peter-renolds.webp`,
    text: "Nunca conheci um desenvolvedor melhor e mais profissional em minha vida. Uma pessoa que tem entusiasmo, motivação, é confiável, tem inglês perfeito, entende tudo e compreende sua tarefa imediatamente. Cometemos um erro durante a tarefa e, apesar disso, ele fez um segundo contrato para nós. Foi nosso erro e ele não quis que pagássemos nada extra. Se você está procurando alguém com quem não terá que se preocupar e que resolverá tudo para você, definitivamente não encontrará um desenvolvedor melhor para um projeto NFT no Upwork. E, o mais importante, você não precisa ter medo de confiar nele. (Traduzido, feedback original em Inglês)",
  }
]);
</script>
