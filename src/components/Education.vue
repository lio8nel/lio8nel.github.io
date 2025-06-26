<template>
  <section>
    <h2>Education</h2>
    <ul class="history">
      <li v-for="(entry, idx) in education" :key="idx">
        {{ entry.year }} - {{ entry.degree }}<span v-if="entry.institution"> - {{ entry.institution }}</span>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import type { EducationEntry } from '../core/Resume'

defineProps<{
  education: EducationEntry[]
}>()
</script>