<script setup lang="ts">
import type { Experience } from '../core/Resume'

defineProps<{
  workHistory: Experience[]
}>()
</script>

<template>
  <section>
    <h2>Work history</h2>
    <div v-for="(exp, idx) in workHistory" :key="idx" class="experience">
      <p class="title">
        {{ formatDate(exp.description.dateRange.startDate) }} - {{ formatDate(exp.description.dateRange.endDate) }} ·
        <strong>{{ exp.company.label }} - {{ exp.description.title }}</strong>
      </p>
      <p v-for="(content, cidx) in exp.description.contents" :key="cidx">{{ content }}</p>
      <ul class="skills">
        <li v-for="skill in exp.skills" :key="skill.label">{{ skill.label }}</li>
      </ul>
    </div>
  </section>
</template>

<script lang="ts">
function formatDate(date: string): string {
  if (date === 'Now') return 'Now';
  const [year, month] = date.split('-');
  const months = [
    'Jan.', 'Feb.', 'Mar.', 'Apr.', 'May.', 'Jun.',
    'Jul.', 'Aug.', 'Sep.', 'Oct.', 'Nov.', 'Dec.'
  ];
  return `${months[parseInt(month, 10) - 1]} ${year}`;
}
</script> 