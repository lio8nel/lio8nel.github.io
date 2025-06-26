<script setup>
import Header from './components/Header.vue'
import Contact from './components/Contact.vue'
import Skills from './components/Skills.vue'
import QuickIntro from './components/QuickIntro.vue'
import WorkHistory from './components/WorkHistory.vue'
import Education from './components/Education.vue'
import { ResumeRepository } from './core/Resume'

const resumeRepository = new ResumeRepository()
const resume = resumeRepository.load()
</script>

<template>
  <main>
    <div class="layout">
      <Header 
        :avatarPath="resume.avatarPath" 
        :fullName="resume.fullName" 
        :title="resume.title" />
      <div class="sidebar">
        <Contact :contact="resume.contact" :languages="resume.misc.languages" />
        <Skills :skills="resume.skills.getAll()" :hobbies="resume.hobbies" />
      </div>
      <div class="content">
        <QuickIntro :quickIntro="resume.content.quickIntro" />
        <WorkHistory :workHistory="resume.content.workHistory" />
        <Education :education="resume.content.education" />
      </div>
    </div>
  </main>
</template>

<style>
@import './assets/reset.css';
@import './assets/style.css';
</style>
