<template>
	<div>
		<!-- MOBILE -->
		<div class="lg:hidden flex flex-col gap-4">
			<div v-for="task in tasks" class="flex flex-col gap-4 w-full max-w-2xl mx-auto px-4">
				<div class="rounded-lg w-fit transition-colors duration-300 bg-primary-600">
					<component :is="task.icon" class="w-9" />
				</div>
				<h2 v-text="task.title" class="text-xl font-display" />
				<p v-text="task.description" class="text-sm text-slate-600" />
			</div>
		</div>

		<!-- DESKTOP -->
		<Container class="space-y-4 hidden lg:block">
			<div class="grid grid-cols-3 gap-4">
				<div
					v-for="task in tasks"
					class="flex flex-col gap-4"
				>
					<div class="rounded-lg w-fit transition-colors duration-300 bg-primary-600">
						<component :is="task.icon" class="w-9" />
					</div>
					<h2 v-text="task.title" class="text-xl font-display" />
					<p v-text="task.description" class="text-sm text-slate-600" />
				</div>
			</div>
		</Container>
	</div>
</template>

<script setup>
import IconTaskReporting from "./icons/IconTaskReporting.vue"
import IconTaskInventory from "./icons/IconTaskInventory.vue"
import IconTaskContacts from "./icons/IconTaskContacts.vue"
import Container from "./Container.vue"
import { ref, shallowRef } from "vue"
import content from '../content.json'

const tasks = ref(content.services.features
	.filter(feature => feature.label !== "CRM & Workflow Automation")
	.map((feature, index) => ({
		icon: shallowRef([IconTaskReporting, IconTaskInventory, IconTaskContacts][index % 3]),
		title: feature.label,
		description: feature.description
	})))
</script>
