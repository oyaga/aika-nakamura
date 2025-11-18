<template>
  <section class="relative py-20 overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-b from-[#E65D13] to-[#151319]"></div>
    <div class="relative z-10 container mx-auto px-4">
      <div class="flex justify-center mb-12">
        <div class="flex items-center gap-4 px-4 py-2 border border-white/20 rounded-full">
          <span class="w-3 h-3 bg-white rounded-full"></span>
          <span class="text-white font-michroma text-sm">CONTATO</span>
        </div>
      </div>

      <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white mb-4">VAMOS CONVERSAR</h2>
      <div class="w-64 h-1.5 bg-gradient-to-r from-white to-transparent mx-auto mb-8"></div>

      <p class="text-base md:text-lg lg:text-2xl text-center text-white max-w-4xl mx-auto mb-16">
        Estou pronto para transformar suas ideias em realidade digital. Entre em contato e vamos criar algo incrível juntos.
      </p>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
        <!-- WhatsApp -->
        <a href="https://wa.me/5519993369603" target="_blank" class="bg-white/10 backdrop-blur-sm border border-white/30 rounded-2xl p-6 text-center text-white flex flex-col items-center justify-center h-64">
          <div class="w-24 h-24 rounded-full bg-white/10 border border-white/50 flex items-center justify-center mb-4">
            <img src="/svg/icon-whatsapp.svg" alt="WhatsApp" class="h-12 w-12">
          </div>
          <h3 class="text-2xl font-bold">WhatsApp</h3>
          <p class="text-lg">(19) 99336-9603</p>
        </a>

        <!-- E-mail -->
        <a href="mailto:felipe.kenji@hotmail.com" class="bg-white/10 backdrop-blur-sm border border-white/30 rounded-2xl p-6 text-center text-white flex flex-col items-center justify-center h-64">
          <div class="w-24 h-24 rounded-full bg-white/10 border border-white/50 flex items-center justify-center mb-4">
            <img src="/svg/icon-email.svg" alt="E-mail" class="h-12 w-12" style="filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%);">
          </div>
          <h3 class="text-2xl font-bold">E-mail</h3>
          <p class="text-lg">felipe.kenji@hotmail.com</p>
        </a>

        <!-- LinkedIn -->
        <a href="https://www.linkedin.com/in/felipenakamura/" target="_blank" class="bg-white/10 backdrop-blur-sm border border-white/30 rounded-2xl p-6 text-center text-white flex flex-col items-center justify-center h-64">
          <div class="w-24 h-24 rounded-full bg-white/10 border border-white/50 flex items-center justify-center mb-4">
            <img src="/svg/icon-linkedin.svg" alt="LinkedIn" class="h-12 w-12">
          </div>
          <h3 class="text-2xl font-bold">LinkedIn</h3>
          <p class="text-lg">/felipenakamura</p>
        </a>

        <!-- GitHub -->
        <a href="https://github.com/oyaga" target="_blank" class="bg-white/10 backdrop-blur-sm border border-white/30 rounded-2xl p-6 text-center text-white flex flex-col items-center justify-center h-64">
          <div class="w-24 h-24 rounded-full bg-white/10 border border-white/50 flex items-center justify-center mb-4">
            <img src="/svg/icon-github.svg" alt="GitHub" class="h-12 w-12">
          </div>
          <h3 class="text-2xl font-bold">GitHub</h3>
          <p class="text-lg">/oyaga</p>
        </a>
      </div>

      <p class="text-2xl text-center text-white max-w-4xl mx-auto mb-12">
        Pronto para começar seu próximo projeto? Entre em contato comigo para discutirmos como posso ajudar a transformar suas ideias em realidade.
      </p>

      <div class="text-center">
        <NuxtLink to="/contato" class="inline-block bg-orange-600/50 border border-orange-500 rounded-2xl px-16 py-4 text-white text-lg md:text-xl lg:text-2xl font-medium backdrop-blur-sm">
          Entrar em Contato
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
/* Using a more specific font from the project if available */
.font-michroma {
  font-family: 'Michroma', sans-serif;
}
</style>
