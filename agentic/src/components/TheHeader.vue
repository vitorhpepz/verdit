<template>
	<header class="shadow py-6 md:py-10 sticky top-0 z-10 bg-white">
		<Container class="relative flex items-center justify-between gap-4 text-slate-900 text-base">
			<div class="flex items-center gap-8">
				<div class="text-4xl font-bold">
					Agen<span class="text-primary-600">tic</span>
				</div>
				<nav class="items-center gap-3 hidden md:flex">
					<a
						v-for="menu in menuItems"
						v-text="menu.label"
						:href="menu.link"
						class="rounded-lg py-1.5 px-3 transition-colors duration-300 hover:bg-slate-100"
					/>
				</nav>
			</div>

			<div class="flex items-center gap-4">
				<!-- <a
					v-text="'Sign in'"
					href="#"
					class="hidden rounded-lg py-1.5 px-3 transition-colors duration-300 hover:bg-slate-100 md:block"
				/> -->

				<BuyButton class="hidden md:inline-block" :isPrimary="true" />

				<!-- MOBILE MENU -->
				<div class="md:hidden">
					<button class="p-2 md:hidden relative z-10" @click.prevent="showMobileMenu = !showMobileMenu">
						<component
							:is="showMobileMenu ? IconX : IconBars"
							class="w-5"
							:class="{ 'text-red-500': showMobileMenu }"
						/>
					</button>

					<Transition
						enter-from-class="opacity-0"
						leave-to-class="opacity-0"
						class="transition-opacity duration-500"
					>
						<div
							v-show="showMobileMenu"
							@click.prevent="showMobileMenu = false"
							class="fixed inset-0 bg-slate-200/50 backdrop-blur-sm"
						/>
					</Transition>

					<Transition
						enter-from-class="-translate-x-full opacity-0"
						leave-to-class="-translate-x-full opacity-0"
						class="transition-all duration-500"
					>
						<div
							@click.stop
							v-show="showMobileMenu"
							class="p-4 absolute inset-x-4 top-14 bg-white rounded-xl shadow-lg"
						>
							<nav class="flex flex-col">
								<button
									v-for="menu in menuItems"
									v-text="menu.label"
									@click.prevent="redirect(menu.link)"
									class="p-4 hover:bg-slate-100 rounded-lg text-left"
								/>
								<hr class="my-2" />
								<button v-text="'Sign in'" class="p-4 hover:bg-slate-100 rounded-lg text-left" />
							</nav>
						</div>
					</Transition>
				</div>
			</div>
		</Container>
	</header>
</template>

<script setup>
import Container from "./Container.vue"
import IconBars from "./icons/IconBars.vue"
import IconX from "./icons/IconX.vue"
import Button from "./Button.vue"
import { ref } from "vue"
import BuyButton from "./BuyButton.vue"

const props = defineProps({
	menuItems: Array,
})

const showMobileMenu = ref(false)

function redirect(link) {
	showMobileMenu.value = false
	window.location = link
}
</script>
