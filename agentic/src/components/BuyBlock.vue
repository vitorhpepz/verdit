<template>
    <div class="flex flex-col items-center">
      <SubTitle :class="subtitleClass" class="mb-4">
        $9/month/user, Exclusive for early users.
      </SubTitle>
      <BuyButton :isPrimary="isPrimary" />
      <SubTitle :class="subtitleClass" class="text-center">
        + GPT-4o API costs. 
        <br>
        The interaction demonstrated in the video would cost +$0.05 USD.
        <br>
        For more details, visit the <a class="underline" href="https://openai.com/api/pricing/">GPT-4o API Pricing</a> page.
        <br>
        Discounts available for groups with more than 20 users.
      </SubTitle>
    </div>
  </template>
  
  <script>
  import BuyButton from './BuyButton.vue';
  
  export default {
    name: 'BuyBlock',
    components: {
      BuyButton,
    },
    props: {
      isPrimary: {
        type: Boolean,
        default: false, // Set to true for primary color scheme by default
      },
    },
    computed: {
      subtitleClass() {
        return this.isPrimary ? '' : 'text-white';
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add any additional styles here if needed */
  </style>