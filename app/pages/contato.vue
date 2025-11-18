<template>
  <div>
    <ContatoHeroContact />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Contato | Aika - Vamos Conversar Sobre Seu Projeto',
  meta: [
    { name: 'description', content: 'Entre em contato com a Aika. Estamos prontos para ouvir suas ideias e transformar seu projeto em realidade. Fale conosco por telefone, e-mail ou preencha o formulário.' }
  ]
})

// Disable layout for this page since HeroContact has its own header
definePageMeta({
  layout: false
})
</script>
