<template>
  <button 
    :class="buttonClass"
    data-tally-open="3NYNDN"
    data-tally-emoji-text="👋"
    data-tally-emoji-animation="wave"
    @click="handleButtonClick"
  >
    <slot>{{ buttonText }}</slot>
  </button>
</template>

<script>
export default {
  name: 'BuyButton',
  props: {
    buttonText: {
      type: String,
      default: 'Join Waitlist',
    },
    isPrimary: {
      type: Boolean,
      default: false, // Set to true if you want the primary scheme by default
    },
  },
  computed: {
    buttonClass() {
      return this.isPrimary 
        ? 'bg-blue-700 text-white hover:bg-slate-200 hover:text-blue-700 font-bold py-4 px-8 rounded-full shadow-lg transition duration-300 text-xl mb-4' 
        : 'bg-white text-blue-700 hover:bg-blue-700 hover:text-white font-bold py-4 px-8 rounded-full shadow-lg transition duration-300 text-xl mb-4'; 
    }
  },
  methods: {
    handleButtonClick() {
      // Trigger the Twitter conversion tracking event
      twq('event', 'tw-ow2gq-ow2gr', {});

      // Trigger the Amplitude tracking event
      amplitude.track('Sign Up Agentic');

      // Additional actions can be performed here
    }
  }
};
</script>

<style scoped>
/* Add any button-specific styles here */
</style>