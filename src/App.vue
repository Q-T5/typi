<template>
  <div class="w-full h-screen">
    <h1 class="text-3xl">App Says: hello</h1>
  </div>
  <div class="w-full h-screen flex flex-col">
    <div class="w-full h-[7%] shadow-md flex justify-around px-4">
      <button 
        v-for="(button, index) in buttons" :key="index"
        @click="component = button.component"
        :class="component === button.component ? 'activeComp' : ''"
        class="w-full text-lg">
        {{ button.text }}
      </button>
    </div>
    <div class="w-full h-[93%]">
      <transition
        enter-active-class="animate__animated animate__bounceInRight"
        leave-active-class="animate__animated animate__bounceOutLeft"
        mode="out-in">
        <component :is="component" class="w-full h-full p-2" />
      </transition>
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
    const component = ref("WordComp");
    const buttons = ref([
      { text: "Words", component: "WordComp" },
      { text: "Sentences", component: "SentenceComp" },
      { text: "Paragraphs", component: "ParagraphComp" },
    ]);

    // functions

    return {
      component, buttons
    }
  }
}
</script>