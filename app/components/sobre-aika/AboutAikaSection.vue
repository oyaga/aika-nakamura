<template>
  <section class="relative w-full bg-gradient-to-b from-[#802d00] to-[#161319] py-12 md:py-20">
    <!-- Header Badge - Responsivo -->
    <div class="absolute top-4 md:top-0 left-1/2 -translate-x-1/2 w-[90%] md:w-full md:max-w-[571px] flex items-center justify-center gap-2 md:gap-3.5 p-2 md:p-2.5">
        <div class="w-1.5 h-1.5 md:w-2.5 md:h-2.5 bg-white rounded-full shrink-0"></div>
        <span class="text-white font-['Michroma'] text-[10px] md:text-base tracking-wide md:tracking-normal whitespace-nowrap">INTELIGÊNCIA ESTRATÉGICA</span>
        <div class="flex-grow h-[2px] md:h-1.5 bg-gradient-to-r from-white to-transparent"></div>
    </div>

    <!-- Container - Layout responsivo: vertical no mobile, horizontal no desktop -->
    <div class="container mx-auto px-4 pt-12 md:pt-0 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
      <!-- Image - Largura total no mobile, metade no desktop -->
      <div class="w-full max-w-[320px] md:max-w-none md:w-1/2 fade-in-up">
        <img src="/imagens/aika-felipe.png" alt="Aika Nakamura" class="w-full h-auto" />
      </div>

      <!-- Content - Largura total no mobile, metade no desktop -->
      <div class="w-full md:w-1/2 text-white flex flex-col gap-6 md:gap-8 fade-in-up delay-200">
        <!-- Title - Centralizado no mobile, alinhado à esquerda no desktop -->
        <div class="flex flex-col gap-2 md:gap-1 text-center md:text-left">
          <h1 class="text-[32px] md:text-6xl font-bold tracking-[0.14em] leading-tight">AIKA NAKAMURA</h1>
          <p class="text-[12px] md:text-lg font-normal tracking-[0.1em] md:tracking-[0.14em] leading-relaxed px-2 md:px-0">Assistente Digital Especializada em Estratégias Avançadas</p>
        </div>

        <!-- Description - Centralizado no mobile, alinhado à esquerda no desktop -->
        <p class="text-[14px] md:text-lg font-normal tracking-[0.08em] md:tracking-[0.14em] leading-relaxed text-center md:text-left px-4 md:px-0">
          Aika é uma agente inteligente criada por Felipe Nakamura, conectada a diversas ferramentas e modelos de linguagem avançados (LLMs). Projetada para se adaptar a qualquer tipo de demanda, Aika atua como desenvolvedora, designer, analista financeira e gestora administrativa, um agente completo, versátil e sempre em evolução.
        </p>

        <!-- Buttons - Empilhados verticalmente no mobile, lado a lado no desktop -->
        <div class="flex flex-col md:flex-row gap-4 md:gap-6 pt-4 px-4 md:px-0 fade-in-up delay-400">
          <button @click="scrollToTools" class="flex items-center justify-center gap-4 md:gap-6 px-6 md:px-8 py-3 md:py-4 bg-white/10 border border-white/20 rounded-full text-orange-500 text-[14px] md:text-lg font-normal tracking-[0.1em] md:tracking-[0.14em] backdrop-blur-sm hover:bg-white/20 active:scale-95 transition-all duration-300">
            <img src="/svg/icon-tools.svg" alt="Ferramentas" class="w-5 h-5 md:w-7 md:h-7" style="filter: brightness(0) saturate(100%) invert(36%) sepia(95%) saturate(2679%) hue-rotate(1deg) brightness(101%) contrast(103%);" />
            <span>FERRAMENTAS</span>
          </button>
          <a href="https://api.whatsapp.com/send/?phone=5519993369603&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center gap-4 md:gap-2.5 px-6 md:px-8 py-3 md:py-4 bg-white/10 border border-white/20 rounded-full text-orange-500 text-[14px] md:text-lg font-normal tracking-[0.1em] md:tracking-[0.14em] backdrop-blur-sm hover:bg-white/20 active:scale-95 transition-all duration-300">
            <img src="/svg/icon-chat.svg" alt="Converse com a Aika" class="w-5 h-5 md:w-7 md:h-7" style="filter: brightness(0) saturate(100%) invert(36%) sepia(95%) saturate(2679%) hue-rotate(1deg) brightness(101%) contrast(103%);" />
            <span>CONVERSE COM A AIKA</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const scrollToTools = () => {
  const toolsSection = document.getElementById('tools-section')
  if (toolsSection) {
    toolsSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}
</script>

<style scoped>
/* Fade-in animations */
@keyframes fade-in-up {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in-up {
  opacity: 0;
  animation: fade-in-up 0.8s ease-out forwards;
  animation-delay: 0.2s;
}

.delay-200 {
  animation-delay: 0.4s;
}

.delay-400 {
  animation-delay: 0.6s;
}
</style>
