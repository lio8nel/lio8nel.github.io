<template>
  <section class="skills">
    <h2>Skillset</h2>
    <dl>
      <template v-for="(skillList, category) in skills" :key="category">
        <dt>{{ category }}</dt>
        <dd>
          <ul>
            <li v-for="skill in skillList" :key="skill.label">{{ skill.label }}</li>
          </ul>
        </dd>
      </template>
    </dl>
    <h2>Hobbies</h2>
    <ul class="hobbies">
      <li v-for="hobby in hobbies" :key="hobby">{{ hobby }}</li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import type { Skill } from '../core/Resume'

defineProps<{
  skills: Record<string, Skill[]>,
  hobbies: string[]
}>()
</script> 