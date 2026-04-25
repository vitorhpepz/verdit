<template>
	<div>
		<!-- MOBILE -->
		<div class="lg:hidden flex flex-col gap-4">
			<div v-for="task in tasks" class="flex flex-col gap-4 w-full max-w-2xl mx-auto px-4">
				<div class="rounded-lg w-fit transition-colors duration-300 bg-primary-600">
					<component :is="task.icon" class="w-9 text-white" />
				</div>
				<h2 v-text="task.title" class="text-xl font-display" />
				<div class="space-y-3">
					<p v-text="task.description" class="text-base lg:text-sm text-slate-600" />
					<p v-text="task.benchmark" class="text-base lg:text-sm text-slate-600" />
				</div>
			</div>
		</div>

		<!-- DESKTOP -->
		<Container class="space-y-4 hidden lg:block">
			<div class="grid grid-cols-2 xl:grid-cols-4 gap-6">
				<div
					v-for="task in tasks"
					class="flex flex-col gap-4"
				>
					<div class="rounded-lg w-fit transition-colors duration-300 bg-primary-600">
						<component :is="task.icon" class="w-9 text-white" />
					</div>
					<h2 v-text="task.title" class="text-xl font-display" />
					<div class="space-y-3">
						<p v-text="task.description" class="text-sm text-slate-600" />
						<p v-text="task.benchmark" class="text-sm text-slate-600" />
					</div>
				</div>
			</div>
		</Container>
	</div>
</template>

<script setup>
import IconTaskReporting from "./icons/IconTaskReporting.vue"
import IconTaskInventory from "./icons/IconTaskInventory.vue"
import IconTaskContacts from "./icons/IconTaskContacts.vue"
import IconTaskCloud from "./icons/IconTaskCloud.vue"
import Container from "./Container.vue"
import { ref, shallowRef } from "vue"
import content from '../content.json'

const taskIcons = [
	IconTaskContacts,
	IconTaskInventory,
	IconTaskReporting,
	IconTaskCloud
]

const tasks = ref(content.services.features
	.map((feature, index) => ({
		icon: shallowRef(taskIcons[index] ?? IconTaskReporting),
		title: feature.label,
		description: feature.description,
		benchmark: feature.benchmark
	})))
</script>
