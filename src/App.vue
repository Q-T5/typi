<template>
  <div class="w-full h-screen">
    <home-comp @scrollDown="scrollDown" />
  </div>
  <div class="w-full h-screen flex flex-col" id="play">
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
          <component :is="component" class="w-full h-full p-2"
            @showPerformanceModal="showPerformanceModal = true" />
        </keep-alive>
      </transition>
    </div>
    <teleport to="#performance">
      <performance-modal-comp 
        v-if="showPerformanceModal === true"
        @closePerformanceModal="showPerformanceModal = false" />
    </teleport>
  </div>
</template>

<script lang>
import { ref } from 'vue'
import SentenceComp from './components/SentenceComp.vue'
import ParagraphComp from './components/ParagraphComp.vue'
import HomeComp from './components/HomeComp.vue'
import PerformanceModalComp from './components/PerformanceModalComp.vue'

export default {
  name: "App",
  components: {
    SentenceComp, ParagraphComp, HomeComp,PerformanceModalComp
  },
  setup: function() {
    // reactive data
    const component = ref("SentenceComp");
    const buttons = ref([
      { text: "Sentences", component: "SentenceComp" },
      { text: "Paragraphs", component: "ParagraphComp" },
    ]);
    const showPerformanceModal = ref(false);

    // functions
    function scrollDown() {
      document.getElementById("play").scrollIntoView(true);
    }

    return {
      component, buttons, scrollDown, showPerformanceModal
    }
  }
}
</script>