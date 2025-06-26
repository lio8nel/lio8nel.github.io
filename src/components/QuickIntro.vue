<template>
  <section class="quickintro">
    <p v-for="(text, idx) in quickIntro" :key="idx">{{ text }}</p>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  quickIntro: string[]
}>()
</script> 