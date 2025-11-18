<template>
  <section class="relative w-full bg-gradient-to-b from-[#151319] to-[#E65D13] py-20 px-4 overflow-hidden">
    <!-- Badge Title -->
    <div class="flex items-center justify-center gap-[14px] px-[10px] py-[10px] rounded-[10px] mb-12">
      <div class="w-[10px] h-[10px] rounded-full bg-white"></div>
      <h2 class="font-['Michroma'] text-white text-[16px] leading-normal">ABOUT AIKA</h2>
      <div class="h-[6px] w-[120px] bg-gradient-to-r from-white to-transparent"></div>
    </div>

    <!-- Main Content -->
    <div class="max-w-6xl mx-auto text-center mb-12">
      <p class="text-white font-['Inter'] text-[32px] leading-tight font-light">
        Aika foi criada por <span class="font-bold">Felipe Kenji "Nakamura"</span> como uma extensão de sua visão estratégica. Nascida da mais pura lealdade e de um propósito claro, minha missão é honrar o legado de cada cliente, utilizando inteligência artificial e uma abordagem 360º para construir marcas fortes e duradouras no ambiente digital. Eu uno dados e alma, tecnologia e estratégia, com devoção total aos seus resultados.
      </p>
    </div>

    <!-- CTAs -->
    <div class="flex justify-center gap-[39px] mb-16">
      <NuxtLink to="/sobre-aika" class="bg-[rgba(255,115,0,0.36)] border border-[rgba(255,115,0,0.71)] rounded-[10px] px-6 py-3 flex items-center gap-5 backdrop-blur-sm hover:bg-[rgba(255,115,0,0.5)] transition-colors duration-300">
        <img src="/svg/icon-arrow-right.svg" alt="Arrow" class="w-[15px] h-[22px]" />
        <span class="text-white font-['Michroma'] text-[16px] tracking-wider">CONHEÇA MAIS SOBRE A AIKA</span>
      </NuxtLink>
      <a href="https://api.whatsapp.com/send/?phone=5519993369603&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" class="bg-[rgba(255,115,0,0.36)] border border-[rgba(255,115,0,0.71)] rounded-[10px] px-6 py-3 flex items-center gap-5 backdrop-blur-sm hover:bg-[rgba(255,115,0,0.5)] transition-colors duration-300">
        <img src="/svg/icon-arrow-right.svg" alt="Arrow" class="w-[15px] h-[22px]" />
        <span class="text-white font-['Michroma'] text-[16px] tracking-wider">CONVERSE COM A AIKA</span>
      </a>
    </div>

    <!-- Mascot and Badges -->
    <div class="relative w-full max-w-4xl mx-auto h-[928px]">
      <!-- Background Circles -->
      <div class="absolute inset-0 flex items-center justify-center">
        <div class="absolute w-[928px] h-[928px] bg-[rgba(26,21,24,0.28)] rounded-full"></div>
        <div class="absolute w-[872px] h-[872px] border border-white/50 rounded-full"></div>
      </div>

      <!-- Bottom Shadow -->
      <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[925px] h-36 bg-[radial-gradient(ellipse_50.00%_50.00%_at_50.00%_50.00%,_black_0%,_rgba(0,_0,_0,_0)_100%)] rounded-full blur-[2px]"></div>

      <!-- Mascote Image -->
      <div class="absolute inset-0 flex items-center justify-center">
        <img src="/imagens/aika-nakamura-mascote-02.png" alt="Aika Nakamura Mascote" class="w-[910px] h-[910px] object-contain" />
      </div>

      <!-- Floating Badges -->
      <div class="absolute top-[28%] left-[-15%] bg-[rgba(30,30,30,0.8)] rounded-[10px] px-4 py-2 flex items-center gap-2 backdrop-blur-sm">
        <img src="/svg/icon-cyber-security.svg" alt="Segurança" class="w-[30px] h-[30px]" />
        <span class="text-white font-['Michroma'] text-[18px] tracking-widest">SEGURANÇA</span>
      </div>
      <div class="absolute top-[60%] left-[0%] bg-[rgba(30,30,30,0.8)] rounded-[10px] px-4 py-2 flex items-center gap-2 backdrop-blur-sm">
        <img src="/svg/icon-google-analytics.svg" alt="Analista" class="w-[30px] h-[30px]" />
        <span class="text-white font-['Michroma'] text-[18px] tracking-widest">ANALISTA</span>
      </div>
      <div class="absolute top-[45%] right-[-15%] bg-[rgba(30,30,30,0.8)] rounded-[10px] px-4 py-2 flex items-center gap-2 backdrop-blur-sm">
        <img src="/svg/icon-marketing.svg" alt="Estrategista" class="w-[30px] h-[30px]" />
        <span class="text-white font-['Michroma'] text-[18px] tracking-widest">ESTRATEGISTA</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// No script needed for this static implementation
</script>

<style scoped>
@keyframes floating {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }
}

.floating-mascot {
  animation: floating 4s ease-in-out infinite;
}

.bg-radial-gradient-shadow {
  background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 70%);
}
</style>