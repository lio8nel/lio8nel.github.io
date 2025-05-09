<script setup>
import Header from './components/Header.vue'
import Contact from './components/Contact.vue'
import Skills from './components/Skills.vue'
import QuickIntro from './components/QuickIntro.vue'
import WorkHistory from './components/WorkHistory.vue'
import Education from './components/Education.vue'
</script>

<template>
  <main>
    <div class="layout">
      <Header />
      <div class="sidebar">
        <Contact />
        <Skills />
      </div>
      <div class="content">
        <QuickIntro />
        <WorkHistory />
        <Education />
      </div>
    </div>
  </main>
</template>

<style>
@import './assets/reset.css';
@import './assets/style.css';
</style>
