<script setup lang="ts">
import { ref, computed } from 'vue';

import { quadraticEquationSolution } from './compositions';

const a = ref(0);
const b = ref(0);
const c = ref(0);

const result = computed(() => {
  return quadraticEquationSolution(a.value, b.value, c.value);
})
</script>

<template>
  <main>
    <div class="equation">
      <label for="a" >x²</label>
      <input v-model.number="a" id="a" >
      <div> + </div>
      <label for="b" >x</label>
      <input v-model.number="b" id="b" >
      <div> + </div>
      <input v-model.number="c" id="c" >
      <div> = 0</div>
    </div>
    <div class="solution">
      <div>Solution:</div>
      <div v-if="result === null">No solution</div>
      <div v-else>{{ `x1: ${result.x1}; x2: ${result.x2}` }}</div>
    </div>
  </main>
</template>

<style scoped>
main {
  font-size: 24px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.equation {
  display: flex;
  align-items: center;
}
.solution {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
