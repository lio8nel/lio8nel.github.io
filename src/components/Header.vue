<script setup lang="ts">
  defineProps<{
    avatarPath: string
    fullName: string
    title: string
  }>()
</script>

<template>
  <header>
    <div class="avatar">
      <img :src="avatarPath" :alt="fullName" />
    </div>
    <div class="title">
      <h1>{{ fullName }}</h1>
      <h2>{{ title }}</h2>
    </div>
  </header>
</template>
