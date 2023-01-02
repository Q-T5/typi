<template>
  <div class="w-full h-screen">
    <home-comp />
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
        enter-active-class="animate__animated animate__fadeIn"
        leave-active-class="animate__animated animate__fadeOut"
        mode="out-in">
        <keep-alive>
          <component :is="component" class="w-full h-full p-2" />
        </keep-alive>
      </transition>
    </div>
  </div>
</template>

<script lang>
import { ref } from 'vue'
import SentenceComp from './components/SentenceComp.vue'
import ParagraphComp from './components/ParagraphComp.vue'
import HomeComp from './components/HomeComp.vue'

export default {
  name: "App",
  components: {
    SentenceComp, ParagraphComp, HomeComp
  },
  setup: function() {
    // reactive data
    const component = ref("SentenceComp");
    const buttons = ref([
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