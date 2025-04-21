<template>
	<a
		:class="[
			'inline-block font-medium text-center py-2.5 px-4 rounded-full border transition-colors duration-300 cursor-pointer',
			isPricingCard ? 'text-sm' : 'text-xl',
			buttonClass
		]"
		:href="`#tally-open=${tallyOpen}${whatButton ? `&whatButton=${whatButton}` : ''}${emojiText ? `&emoji=${emojiText}` : ''}${emojiAnimation ? `&animation=${emojiAnimation}` : ''}`"
		@click="handleClick"
	>
		<slot>{{ buttonText }}</slot>
	</a>
</template>

<script setup>
import { computed } from 'vue'
import { trackButtonClick } from '../services/analytics'

const props = defineProps({
	// Button text (fallback if no slot content)
	buttonText: {
		type: String,
		default: ''
	},
	// Primary style variant
	isPrimary: {
		type: Boolean,
		default: false
	},
	// Tally form configuration
	tallyOpen: {
		type: String,
		default: 'nGYAdZ'
	},
	whatButton: {
		type: String,
		default: ''
	},
	emojiText: {
		type: String,
		default: '👋'
	},
	emojiAnimation: {
		type: String,
		default: 'wave'
	},
	// Analytics tracking
	isFreeTool: {
		type: Boolean,
		default: false
	},
	// Special styling for pricing cards
	isPricingCard: {
		type: Boolean,
		default: false
	}
})

const buttonClass = computed(() => {
	if (props.isPricingCard) {
		return props.isPrimary 
			? 'bg-white text-slate-900 hover:bg-slate-100 font-medium py-3 px-6 shadow-md' 
			: 'bg-transparent text-white border-white hover:bg-white/10 font-medium py-3 px-6';
	}
	
	if (props.isPrimary) {
		return 'bg-blue-700 text-white hover:bg-slate-200 hover:text-blue-700 font-bold py-4 px-8 shadow-lg mb-4';
	}
	return 'bg-white text-blue-700 hover:bg-blue-700 hover:text-white font-bold py-4 px-8 shadow-lg mb-4';
})

const emit = defineEmits(['click'])

function handleClick(event) {
	// Debug logging
	console.log('Button clicked with attributes:', {
		tallyOpen: props.tallyOpen,
		whatButton: props.whatButton,
		isFreeTool: props.isFreeTool,
		element: event.target.outerHTML
	})

	// Track button click with properties
	trackButtonClick({
		button_type: props.isFreeTool ? 'free_tool' : 'strategy',
		button_text: props.buttonText,
		tally_form: props.tallyOpen,
		what_button: props.whatButton,
		is_primary: props.isPrimary,
		is_pricing_card: props.isPricingCard,
		url: window.location.pathname
	})

	emit('click', event)
}
</script>
