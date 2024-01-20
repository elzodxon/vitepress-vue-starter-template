<template>
  <h5 class="mb-2 text-2xl font-bold text-blue-500">{{
      count
    }}</h5>

  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          @click="count++">Increment</button>
</template>


<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>
