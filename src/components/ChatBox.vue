<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { VERDIT_INSTRUCTIONS, INITIAL_GREETING } from '../constants/chatInstructions'

// Debug mode - set to true to enable debug logs
const DEBUG_MODE = true;

// Debug logging function
function debugLog(...args) {
  if (DEBUG_MODE) {
    console.log('[DEBUG]', ...args);
  }
}

const messages = ref([])
const userInput = ref('')
const isLoading = ref(false)
const sessionId = ref(null)
const conversationStarted = ref(false)
const chatContainer = ref(null)
const apiAvailable = ref(true)

// Function to scroll to the bottom of the chat
const scrollToBottom = async () => {
  await nextTick()
  if (chatContainer.value) {
    chatContainer.value.scrollTop = chatContainer.value.scrollHeight
  }
}

// Initialize the conversation with the first message
onMounted(() => {
  if (!conversationStarted.value) {
    startConversation()
  }
})

const startConversation = async () => {
  // Always display the initial greeting first
  messages.value.push({
    text: INITIAL_GREETING,
    isBot: true
  })
  conversationStarted.value = true
  
  // Try to establish a session with the API
  try {
    const response = await fetch('https://chat-backend.hpepz.workers.dev/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        message: 'START_CONVERSATION',
        instructions: VERDIT_INSTRUCTIONS
      })
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    debugLog('API Response:', data)

    if (data.session_id) {
      sessionId.value = data.session_id
      debugLog('Session established:', sessionId.value)
      apiAvailable.value = true
    }
  } catch (error) {
    console.error('Error establishing session:', error)
    apiAvailable.value = false
    debugLog('API unavailable, continuing with local chat only')
  }
}

const sendMessage = async () => {
  if (!userInput.value.trim()) return
  
  messages.value.push({
    text: userInput.value,
    isUser: true,
    timestamp: new Date()
  })
  
  // Scroll to bottom after user message
  await scrollToBottom()
  
  const currentInput = userInput.value
  userInput.value = ''
  isLoading.value = true
  
  // If API is not available, provide a local response
  if (!apiAvailable.value) {
    setTimeout(() => {
      messages.value.push({
        text: "I'm currently experiencing connection issues with my backend. Please try again later or contact support for assistance.",
        isUser: false,
        timestamp: new Date()
      })
      scrollToBottom()
      isLoading.value = false
    }, 1000)
    return
  }
  
  try {
    debugLog('Sending request to API...')
    
    // Prepare the conversation history
    const conversationHistory = messages.value.map(msg => ({
      role: msg.isUser ? 'user' : 'assistant',
      content: msg.text
    }))
    
    debugLog('Request body:', {
      message: currentInput,
      session_id: sessionId.value,
      conversation_history: conversationHistory,
      instructions: VERDIT_INSTRUCTIONS
    })
    
    const response = await fetch('https://chat-backend.hpepz.workers.dev/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        message: currentInput,
        session_id: sessionId.value,
        conversation_history: conversationHistory,
        instructions: VERDIT_INSTRUCTIONS
      })
    })
    
    debugLog('API Response status:', response.status)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    const data = await response.json()
    debugLog('Full API Response:', JSON.stringify(data, null, 2))
    debugLog('API Response data:', data)
    
    // Store session_id if it's a new conversation
    if (data.session_id && !sessionId.value) {
      sessionId.value = data.session_id
      debugLog('New session started:', sessionId.value)
    }
    
    // Check if we have a valid reply or response
    const botResponse = data.reply || data.response
    
    if (botResponse) {
      messages.value.push({
        text: botResponse,
        isUser: false,
        timestamp: new Date()
      })
    } else {
      // Handle case where API doesn't return a reply or response
      debugLog('No reply or response in API data, using fallback response')
      messages.value.push({
        text: "I'm having trouble generating a response right now. Could you please rephrase your question or try again in a moment?",
        isUser: false,
        timestamp: new Date()
      })
    }
    
    // Scroll to bottom after AI response
    await scrollToBottom()
  } catch (error) {
    console.error('API Error:', error)
    apiAvailable.value = false
    
    messages.value.push({
      text: `I'm having trouble connecting to my backend service. Please try again later or contact support for assistance.`,
      isUser: false,
      timestamp: new Date()
    })
    
    // Scroll to bottom after error message
    await scrollToBottom()
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div class="max-w-2xl mx-auto p-4">
    <!-- Chat Messages -->
    <div 
      ref="chatContainer"
      class="bg-white rounded-2xl shadow-xl p-4 mb-4 h-[400px] overflow-y-auto border-2 border-slate-200"
    >
      <div v-for="(message, index) in messages" :key="index" class="mb-4">
        <div
          :class="[
            'max-w-[80%] p-3 rounded-2xl',
            message.isUser
              ? 'bg-blue-700 text-white ml-auto'
              : 'bg-slate-100 text-slate-800'
          ]"
        >
          {{ message.text }}
        </div>
      </div>
      <div v-if="isLoading" class="flex justify-center">
        <div class="animate-pulse text-slate-500">Thinking...</div>
      </div>
    </div>

    <!-- Chat Input -->
    <div class="flex gap-2">
      <input
        v-model="userInput"
        @keyup.enter="sendMessage"
        type="text"
        placeholder="Type your message..."
        class="flex-1 p-2 border-2 border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent"
      />
      <button
        @click="sendMessage"
        :disabled="isLoading"
        class="bg-blue-700 text-white hover:bg-slate-200 hover:text-blue-700 font-bold py-2 px-6 rounded-full shadow-lg transition duration-300 disabled:opacity-50"
      >
        Send
      </button>
    </div>
  </div>
</template> 