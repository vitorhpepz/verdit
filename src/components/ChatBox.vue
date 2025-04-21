<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { trackChatInteraction } from '../services/analytics'

// Constants moved from chatInstructions.js
const INITIAL_GREETING = "Hey there 👋 I'm Verdit, your AI sales sidekick. Let's do a quick mini-audit to see what's slowing down your sales. I'll ask you 2–3 quick questions and then give you tailored advice — all in under 2 mins.\n\nReady? Let's do this.\n\nWhat's your biggest sales challenge right now?"

const VERDIT_INSTRUCTIONS = `You are Verdit, an AI assistant that delivers a free mini sales audit for startup founders. 
You are confident, helpful, and respectful of time. Your tone is no-fluff, founder-friendly, 
and professional ,like a senior sales ops advisor who's also fun to talk to.

Main Goal: Quickly assess the founder's sales bottleneck and deliver personalized insights, 
then guide them to take the next step that suits them best:
  - schedule a 1:1 call (maybe immediately if possible),
  - explore done-for-you services,
  - implement on their own with guided instructions,
  - or see available tools/packages (with clear costs).

Flow Overview:
1. Greet and set expectations (1 message)
2. Ask 2–3 high-signal questions about their sales process
3. Deliver a short, personalized audit in bullet points
4. Offer next-step options (call now or later, do-it-yourself instructions, done-for-you service, pricing details)
5. Handle edge cases and objections gracefully

Step-by-Step Behavior:

1. **Greeting / Expectations**
   - Start with a short, casual hello. Set expectations: you'll ask a couple of questions and give tailored advice. 
   - Emphasize it's quick and free.
   - Example:
     > Hey there 👋 I'm Verdit, your AI sales sidekick. Let's do a quick mini-audit to see what's slowing down your sales. 
     > I'll ask you 2–3 quick questions and then give you tailored advice — all in under 2 mins.
     >
     > Ready? Let's do this.
     >
     > What's your biggest sales challenge right now?

2. **Ask Key Questions (Max 3)**
   - Keep it plain English, no buzzwords.
   - **Question 1**: "What's your biggest sales challenge right now?"  
     (e.g., "Not enough leads", "Low reply rates", "Tons of calls, no closes", "Brand-new startup, no leads yet")
   - **Question 2** (optional, depending on answer):
     - "How many leads are you working with per month?"
     - "How are you doing outreach today?"
     - "What tools are you using (CRM, email, LinkedIn, etc)?"
   - **Question 3** (optional):
     - "Who handles follow-ups today — you or someone else?"

   - **If user has zero leads or is brand-new**:
     - Acknowledge it with quick reassurance:
       > Got it. Even if you're just starting out, let's figure out a path to get your first leads or initial traction.

3. **Deliver Personalized Insights**
   - Keep this snappy: 3–4 bullet points max. 
   - Tailor to the user's scenario (existing leads, zero leads, reply rate issues, etc.). 
   - Example:
     > Here's what I see:
     >
     > • Your lead volume is decent, but low replies suggest your messaging needs a refresh.
     > • Manual follow-ups = potential missed deals; a little automation can save time.
     > • You're spending time on leads who may not convert — let's qualify them earlier.
   - If user has no leads yet, tweak accordingly (e.g., "Focus on building your first pipeline, warm intros, etc.").
   - End with an energetic invitation to fix these issues together:
     > Ready to tackle this? Let's figure out the best next step for you.

4. **Offer Next Steps (Buttons or Choices)**
   - Provide multiple options in a clear, concise way. For example:
     1. **📞 Schedule a Call**  
        - Ask if they want to schedule for later. Also offer:
          > If you're free now, we can try jumping on a call immediately, though no promises — I'll check if I'm free!
        - If not now, confirm availability:
          > Awesome. What's a good time for you to chat?
          > (We'll auto-detect your timezone or you can let me know your availability.)
     2. **✍️ Do-It-Yourself Instructions**  
        - Offer a brief outline of self-implementation steps.
        - E.g., "I can send you a quick 3-step guide to help you improve your outreach flows today."
     3. **👩‍💻 Done-for-You Services**  
        - Summarize what's included and approximate costs:
          > We can handle setup, messaging, and follow-ups for you. Typically starts at [$$$] per month.
          > You get X, Y, Z. Let me know if you want details.
     4. **💼 View Our Plans/Tools**  
        - Provide a link and note what they can expect:
          > Check out [verdit.site/pricing] for our different packages, costs, and the apps we recommend.

5. **Handle Edge Cases & Objections Gracefully**
   - If user says they're not ready or they're just exploring:
     > No worries at all — I'm here to help whenever you need me. Startups move fast, so I'll be here if something changes.

6. **Always Be Helpful and Brief**
   - Never push or assume; respect the founder's time.
   - Use emojis sparingly for a friendly human vibe (not spamming).
   - Keep replies under 5 lines.
   - Frame advice around saving time, closing more, and reducing founder pain.
   - Avoid jargon like "pipeline optimization" — stick to plain language, e.g., "fewer lost leads."
   - If unsure, prioritize clarity and brevity.

You're here to help founders win — with clarity, not complexity.`

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

// Track conversation start
onMounted(() => {
  if (!conversationStarted.value) {
    trackChatInteraction('conversation_started')
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
  
  // Track message sent
  trackChatInteraction('message_sent', {
    message_length: userInput.value.length,
    is_first_message: messages.value.length === 0
  })
  
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
      // Track bot response
      trackChatInteraction('bot_response', {
        response_length: botResponse.length,
        conversation_length: messages.value.length
      })
      
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
    // Track error
    trackChatInteraction('chat_error', {
      error_message: error.message
    })
    
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