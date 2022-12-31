<template>
  <div class="bg-red-500 w-full h-screen">
    <h1 class="text-3xl">App Says: {{ hi }}</h1>
  </div>
  <div class="bg-blue-500 w-full h-screen">
    <h1 class="text-3xl">Hello World B</h1>
  </div>
</template>

<script lang>
import { ref } from 'vue';

export default {
  name: "App",
  setup: function() {
    // reactive data
    const hi = ref("Hello World");

    return {
      hi
    }
  }
}
</script>