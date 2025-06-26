<template>
  <section class="contact">
    <h2>Contact</h2>
    <dl class="info">
      <dt class="sr-only">E-mail</dt>
      <dd>
        <a :href="`mailto:${contact.email}`">{{ contact.email }}</a>
      </dd>
      <dt class="sr-only">Phone</dt>
      <dd>
        <a :href="`tel:${contact.phone}`">{{ contact.phone }}</a>
      </dd>
      <dt class="sr-only">Workplace</dt>
      <dd>{{ contact.workplace }}</dd>
      <dt class="sr-only">Languages</dt>
      <dd>{{ languages.join(', ') }}</dd>
    </dl>
  </section>
</template>

<script setup lang="ts">
import type { Contact } from '../core/Resume'

defineProps<{
  contact: Contact,
  languages: string[]
}>()
</script> 