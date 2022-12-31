<template>
  <div class="bg-red-500 w-full h-screen">
    <h1 class="text-3xl">App Says: {{ hi }}</h1>
  </div>
  <div class="w-full h-screen flex flex-col">
    <div class="w-full h-[7%] shadow-md flex justify-between px-4">
      <button 
        v-for="(button, index) in buttons" :key="index"
        @click="component = button.component">
        {{ button.text }}
      </button>
    </div>
    <div class="w-full h-[93%]">
      <component :is="component" class="w-full h-full" />
    </div>
  </div>
</template>

<script lang>
import { ref } from 'vue'
import WordComp from './components/WordComp.vue'
import SentenceComp from './components/SentenceComp.vue'
import ParagraphComp from './components/ParagraphComp.vue'

export default {
  name: "App",
  components: {
    WordComp, SentenceComp, ParagraphComp
  },
  setup: function() {
    // reactive data
    const hi = ref("Hello World");
    const component = ref("WordComp");
    const buttons = ref([
      { text: "Words", component: "WordComp" },
      { text: "Sentences", component: "SentenceComp" },
      { text: "Paragraphs", component: "ParagraphComp" },
    ]);

    return {
      hi, component, buttons
    }
  }
}
</script>