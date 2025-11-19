<template>
  <section id="tools-section" class="relative w-full min-h-[890px] md:min-h-[1404px] bg-gradient-to-b from-[#161319] to-[#e65d13] overflow-hidden">
    <!-- Badge superior: Processadora de Dados -->
    <div class="absolute top-[30px] md:top-[51px] left-1/2 -translate-x-1/2 border border-white rounded-[10px] px-[10px] py-[10px] flex items-center justify-center gap-[8px] md:gap-[14px] w-[240px] md:w-[293px] backdrop-blur-sm">
      <div class="w-[8px] h-[8px] md:w-[10px] md:h-[10px] bg-white rounded-full"></div>
      <p class="font-michroma text-[12px] md:text-[16px] text-white leading-normal whitespace-nowrap">Processadora de Dados</p>
    </div>

    <!-- Container das logos de ferramentas -->
    <div class="absolute top-[90px] md:top-[136px] left-0 w-full h-[120px] md:h-[209px] backdrop-blur-[0px] bg-[rgba(255,255,255,0.07)] border border-[rgba(255,255,255,0.1)] flex items-center justify-center overflow-hidden">
      <div class="flex animate-loop-scroll animate-loop-scroll-mobile md:animate-loop-scroll">
        <!-- Card Claude -->
        <div class="flex-shrink-0 backdrop-blur-[0px] bg-[rgba(210,86,20,0.07)] border border-[rgba(210,86,20,0.8)] rounded-[12px] md:rounded-[20px] w-[280px] md:w-[609px] h-[80px] md:h-[137px] flex items-center justify-center mx-[10px] md:mx-[20px]">
          <NuxtImg src="/imagens/ferramentas/logo-claude.png" alt="Claude AI" class="w-[150px] md:w-[300px] h-auto object-contain" />
        </div>

        <!-- Card Gemini -->
        <div class="flex-shrink-0 backdrop-blur-[0px] bg-[rgba(210,86,20,0.07)] border border-[rgba(210,86,20,0.8)] rounded-[12px] md:rounded-[20px] w-[280px] md:w-[609px] h-[80px] md:h-[137px] flex items-center justify-center mx-[10px] md:mx-[20px]">
          <NuxtImg src="/imagens/ferramentas/logo-google.png" alt="Google Gemini" class="w-[150px] md:w-[300px] h-auto object-contain" />
        </div>

        <!-- Card OpenAI -->
        <div class="flex-shrink-0 backdrop-blur-[0px] bg-[rgba(210,86,20,0.07)] border border-[rgba(210,86,20,0.8)] rounded-[12px] md:rounded-[20px] w-[280px] md:w-[609px] h-[80px] md:h-[137px] flex items-center justify-center mx-[10px] md:mx-[20px]">
          <NuxtImg src="/imagens/ferramentas/logo-open-ai.png" alt="OpenAI" class="w-[150px] md:w-[300px] h-auto object-contain" />
        </div>

        <!-- Card Grok -->
        <div class="flex-shrink-0 backdrop-blur-[0px] bg-[rgba(210,86,20,0.07)] border border-[rgba(210,86,20,0.8)] rounded-[12px] md:rounded-[20px] w-[280px] md:w-[609px] h-[80px] md:h-[137px] flex items-center justify-center mx-[10px] md:mx-[20px]">
          <NuxtImg src="/imagens/ferramentas/logo-grok.png" alt="Grok AI" class="w-[150px] md:w-[300px] h-auto object-contain" />
        </div>

        <!-- Card Qwen -->
        <div class="flex-shrink-0 backdrop-blur-[0px] bg-[rgba(210,86,20,0.07)] border border-[rgba(210,86,20,0.8)] rounded-[12px] md:rounded-[20px] w-[280px] md:w-[609px] h-[80px] md:h-[137px] flex items-center justify-center mx-[10px] md:mx-[20px]">
          <NuxtImg src="/imagens/ferramentas/logo-qwen.png" alt="Qwen AI" class="w-[150px] md:w-[300px] h-auto object-contain" />
        </div>

        <!-- Card Meta -->
        <div class="flex-shrink-0 backdrop-blur-[0px] bg-[rgba(210,86,20,0.07)] border border-[rgba(210,86,20,0.8)] rounded-[12px] md:rounded-[20px] w-[280px] md:w-[609px] h-[80px] md:h-[137px] flex items-center justify-center mx-[10px] md:mx-[20px]">
          <NuxtImg src="/imagens/ferramentas/logo-meta.png" alt="Meta AI" class="w-[150px] md:w-[300px] h-auto object-contain" />
        </div>

        <!-- Card Midjourney -->
        <div class="flex-shrink-0 backdrop-blur-[0px] bg-[rgba(210,86,20,0.07)] border border-[rgba(210,86,20,0.8)] rounded-[12px] md:rounded-[20px] w-[280px] md:w-[609px] h-[80px] md:h-[137px] flex items-center justify-center mx-[10px] md:mx-[20px]">
          <NuxtImg src="/imagens/ferramentas/logo-midjarney.png" alt="Midjourney" class="w-[150px] md:w-[300px] h-auto object-contain" />
        </div>

        <!-- Card Figma -->
        <div class="flex-shrink-0 backdrop-blur-[0px] bg-[rgba(210,86,20,0.07)] border border-[rgba(210,86,20,0.8)] rounded-[12px] md:rounded-[20px] w-[280px] md:w-[609px] h-[80px] md:h-[137px] flex items-center justify-center mx-[10px] md:mx-[20px]">
          <NuxtImg src="/imagens/ferramentas/logo-figma.png" alt="Figma" class="w-[150px] md:w-[300px] h-auto object-contain" />
        </div>

        <!-- Card Canva -->
        <div class="flex-shrink-0 backdrop-blur-[0px] bg-[rgba(210,86,20,0.07)] border border-[rgba(210,86,20,0.8)] rounded-[12px] md:rounded-[20px] w-[280px] md:w-[609px] h-[80px] md:h-[137px] flex items-center justify-center mx-[10px] md:mx-[20px]">
          <NuxtImg src="/imagens/ferramentas/logo-canva.png" alt="Canva" class="w-[150px] md:w-[300px] h-auto object-contain" />
        </div>

        <!-- Card Supabase -->
        <div class="flex-shrink-0 backdrop-blur-[0px] bg-[rgba(210,86,20,0.07)] border border-[rgba(210,86,20,0.8)] rounded-[12px] md:rounded-[20px] w-[280px] md:w-[609px] h-[80px] md:h-[137px] flex items-center justify-center mx-[10px] md:mx-[20px]">
          <NuxtImg src="/imagens/ferramentas/logo-supabase.png" alt="Supabase" class="w-[150px] md:w-[300px] h-auto object-contain" />
        </div>

        <!-- Card N8N -->
        <div class="flex-shrink-0 backdrop-blur-[0px] bg-[rgba(210,86,20,0.07)] border border-[rgba(210,86,20,0.8)] rounded-[12px] md:rounded-[20px] w-[280px] md:w-[609px] h-[80px] md:h-[137px] flex items-center justify-center mx-[10px] md:mx-[20px]">
          <NuxtImg src="/imagens/ferramentas/logo-n8n.png" alt="N8N" class="w-[150px] md:w-[300px] h-auto object-contain" />
        </div>

        <!-- Card NuxtJS -->
        <div class="flex-shrink-0 backdrop-blur-[0px] bg-[rgba(210,86,20,0.07)] border border-[rgba(210,86,20,0.8)] rounded-[12px] md:rounded-[20px] w-[280px] md:w-[609px] h-[80px] md:h-[137px] flex items-center justify-center mx-[10px] md:mx-[20px]">
          <NuxtImg src="/imagens/ferramentas/logo-nuxtjs.png" alt="NuxtJS" class="w-[150px] md:w-[300px] h-auto object-contain" />
        </div>

        <!-- Card Cloudflare -->
        <div class="flex-shrink-0 backdrop-blur-[0px] bg-[rgba(210,86,20,0.07)] border border-[rgba(210,86,20,0.8)] rounded-[12px] md:rounded-[20px] w-[280px] md:w-[609px] h-[80px] md:h-[137px] flex items-center justify-center mx-[10px] md:mx-[20px]">
          <NuxtImg src="/imagens/ferramentas/logo-cloudflare.png" alt="Cloudflare" class="w-[150px] md:w-[300px] h-auto object-contain" />
        </div>

        <!-- Duplicated Cards for seamless loop -->
        <div class="flex-shrink-0 backdrop-blur-[0px] bg-[rgba(210,86,20,0.07)] border border-[rgba(210,86,20,0.8)] rounded-[12px] md:rounded-[20px] w-[280px] md:w-[609px] h-[80px] md:h-[137px] flex items-center justify-center mx-[10px] md:mx-[20px]">
          <NuxtImg src="/imagens/ferramentas/logo-claude.png" alt="Claude AI" class="w-[150px] md:w-[300px] h-auto object-contain" />
        </div>

        <div class="flex-shrink-0 backdrop-blur-[0px] bg-[rgba(210,86,20,0.07)] border border-[rgba(210,86,20,0.8)] rounded-[12px] md:rounded-[20px] w-[280px] md:w-[609px] h-[80px] md:h-[137px] flex items-center justify-center mx-[10px] md:mx-[20px]">
          <NuxtImg src="/imagens/ferramentas/logo-google.png" alt="Google Gemini" class="w-[150px] md:w-[300px] h-auto object-contain" />
        </div>

        <div class="flex-shrink-0 backdrop-blur-[0px] bg-[rgba(210,86,20,0.07)] border border-[rgba(210,86,20,0.8)] rounded-[12px] md:rounded-[20px] w-[280px] md:w-[609px] h-[80px] md:h-[137px] flex items-center justify-center mx-[10px] md:mx-[20px]">
          <NuxtImg src="/imagens/ferramentas/logo-open-ai.png" alt="OpenAI" class="w-[150px] md:w-[300px] h-auto object-contain" />
        </div>

        <div class="flex-shrink-0 backdrop-blur-[0px] bg-[rgba(210,86,20,0.07)] border border-[rgba(210,86,20,0.8)] rounded-[12px] md:rounded-[20px] w-[280px] md:w-[609px] h-[80px] md:h-[137px] flex items-center justify-center mx-[10px] md:mx-[20px]">
          <NuxtImg src="/imagens/ferramentas/logo-grok.png" alt="Grok AI" class="w-[150px] md:w-[300px] h-auto object-contain" />
        </div>

        <div class="flex-shrink-0 backdrop-blur-[0px] bg-[rgba(210,86,20,0.07)] border border-[rgba(210,86,20,0.8)] rounded-[12px] md:rounded-[20px] w-[280px] md:w-[609px] h-[80px] md:h-[137px] flex items-center justify-center mx-[10px] md:mx-[20px]">
          <NuxtImg src="/imagens/ferramentas/logo-qwen.png" alt="Qwen AI" class="w-[150px] md:w-[300px] h-auto object-contain" />
        </div>

        <div class="flex-shrink-0 backdrop-blur-[0px] bg-[rgba(210,86,20,0.07)] border border-[rgba(210,86,20,0.8)] rounded-[12px] md:rounded-[20px] w-[280px] md:w-[609px] h-[80px] md:h-[137px] flex items-center justify-center mx-[10px] md:mx-[20px]">
          <NuxtImg src="/imagens/ferramentas/logo-meta.png" alt="Meta AI" class="w-[150px] md:w-[300px] h-auto object-contain" />
        </div>

        <div class="flex-shrink-0 backdrop-blur-[0px] bg-[rgba(210,86,20,0.07)] border border-[rgba(210,86,20,0.8)] rounded-[12px] md:rounded-[20px] w-[280px] md:w-[609px] h-[80px] md:h-[137px] flex items-center justify-center mx-[10px] md:mx-[20px]">
          <NuxtImg src="/imagens/ferramentas/logo-midjarney.png" alt="Midjourney" class="w-[150px] md:w-[300px] h-auto object-contain" />
        </div>

        <div class="flex-shrink-0 backdrop-blur-[0px] bg-[rgba(210,86,20,0.07)] border border-[rgba(210,86,20,0.8)] rounded-[12px] md:rounded-[20px] w-[280px] md:w-[609px] h-[80px] md:h-[137px] flex items-center justify-center mx-[10px] md:mx-[20px]">
          <NuxtImg src="/imagens/ferramentas/logo-figma.png" alt="Figma" class="w-[150px] md:w-[300px] h-auto object-contain" />
        </div>

        <div class="flex-shrink-0 backdrop-blur-[0px] bg-[rgba(210,86,20,0.07)] border border-[rgba(210,86,20,0.8)] rounded-[12px] md:rounded-[20px] w-[280px] md:w-[609px] h-[80px] md:h-[137px] flex items-center justify-center mx-[10px] md:mx-[20px]">
          <NuxtImg src="/imagens/ferramentas/logo-canva.png" alt="Canva" class="w-[150px] md:w-[300px] h-auto object-contain" />
        </div>

        <div class="flex-shrink-0 backdrop-blur-[0px] bg-[rgba(210,86,20,0.07)] border border-[rgba(210,86,20,0.8)] rounded-[12px] md:rounded-[20px] w-[280px] md:w-[609px] h-[80px] md:h-[137px] flex items-center justify-center mx-[10px] md:mx-[20px]">
          <NuxtImg src="/imagens/ferramentas/logo-supabase.png" alt="Supabase" class="w-[150px] md:w-[300px] h-auto object-contain" />
        </div>

        <div class="flex-shrink-0 backdrop-blur-[0px] bg-[rgba(210,86,20,0.07)] border border-[rgba(210,86,20,0.8)] rounded-[12px] md:rounded-[20px] w-[280px] md:w-[609px] h-[80px] md:h-[137px] flex items-center justify-center mx-[10px] md:mx-[20px]">
          <NuxtImg src="/imagens/ferramentas/logo-n8n.png" alt="N8N" class="w-[150px] md:w-[300px] h-auto object-contain" />
        </div>

        <div class="flex-shrink-0 backdrop-blur-[0px] bg-[rgba(210,86,20,0.07)] border border-[rgba(210,86,20,0.8)] rounded-[12px] md:rounded-[20px] w-[280px] md:w-[609px] h-[80px] md:h-[137px] flex items-center justify-center mx-[10px] md:mx-[20px]">
          <NuxtImg src="/imagens/ferramentas/logo-nuxtjs.png" alt="NuxtJS" class="w-[150px] md:w-[300px] h-auto object-contain" />
        </div>

        <div class="flex-shrink-0 backdrop-blur-[0px] bg-[rgba(210,86,20,0.07)] border border-[rgba(210,86,20,0.8)] rounded-[12px] md:rounded-[20px] w-[280px] md:w-[609px] h-[80px] md:h-[137px] flex items-center justify-center mx-[10px] md:mx-[20px]">
          <NuxtImg src="/imagens/ferramentas/logo-cloudflare.png" alt="Cloudflare" class="w-[150px] md:w-[300px] h-auto object-contain" />
        </div>
      </div>
    </div>

    <!-- Container central com Aika e círculos -->
    <div class="relative w-full h-full flex items-center justify-center">
      <!-- Círculo de sombra inferior -->
      <!-- Mobile -->
      <div class="md:hidden absolute left-1/2 -translate-x-1/2 top-[590px] w-[380px] h-[80px]">
        <div class="absolute inset-0 opacity-60">
          <div class="w-full h-full bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.9)_0%,_transparent_70%)] blur-lg"></div>
        </div>
      </div>
      <!-- Desktop -->
      <div class="hidden md:block absolute left-[458px] top-[1225px] w-[925px] h-[145px]">
        <div class="absolute inset-[-2.76%_-0.43%] opacity-50">
          <div class="w-full h-full bg-[radial-gradient(ellipse_at_center,_rgba(0,0,0,0.8)_0%,_transparent_70%)] blur-md"></div>
        </div>
      </div>

      <!-- Círculo externo com gradiente -->
      <div class="absolute left-1/2 -translate-x-1/2 top-[250px] md:top-[390px] w-[400px] h-[400px] md:w-[928px] md:h-[928px] md:left-[280px] md:translate-x-0">
        <div class="w-full h-full rounded-full bg-gradient-to-b from-[rgba(139,69,19,0.4)] to-[rgba(210,105,30,0.2)]"></div>
      </div>

      <!-- Círculo interno com borda -->
      <div class="absolute left-1/2 -translate-x-1/2 top-[250px] md:top-[390px] w-[400px] h-[400px] md:w-[928px] md:h-[928px] md:left-[280px] md:translate-x-0">
        <div class="w-full h-full rounded-full border border-[rgba(255,255,255,0.3)]"></div>
      </div>

      <!-- Aika Samurai v2 -->
      <div class="absolute left-1/2 -translate-x-1/2 top-[220px] md:top-[350px] w-[500px] h-[500px] md:w-[1080px] md:h-[1080px] pointer-events-none">
        <img
          src="/imagens/aika-samurai-v2.png"
          alt="Aika Samurai"
          class="w-full h-full object-cover object-center"
        />
      </div>

      <!-- Badges - Desktop positioning -->
      <div class="hidden md:block">
        <!-- Badge DESIGNER -->
        <div class="absolute left-[200px] top-[733px] bg-[rgba(30,30,30,0.8)] rounded-[10px] px-[10px] py-[10px] flex items-center justify-center gap-[5px] w-[251px] h-[43px]">
          <NuxtImg src="/svg/icon-designer.svg" alt="Designer" class="w-[25px] h-[25px]">
          <p class="font-michroma text-[18px] text-white tracking-[2.34px] leading-normal">DESIGNER</p>
        </div>

        <!-- Badge AGENTE -->
        <div class="absolute left-[416px] top-[979px] bg-[rgba(30,30,30,0.8)] rounded-[10px] px-[10px] py-[10px] flex items-center justify-center gap-[20px] w-[204px] h-[43px]">
          <NuxtImg src="/svg/icon-agente.svg" alt="Agente" class="w-[25px] h-[25px]">
          <p class="font-michroma text-[18px] text-white tracking-[2.34px] leading-normal">AGENTE</p>
        </div>

        <!-- Badge DESENVOLVEDORA -->
        <div class="absolute left-[1090px] top-[852px] bg-[rgba(30,30,30,0.8)] rounded-[10px] px-[10px] py-[10px] flex items-center justify-center gap-[5px] w-[356px] h-[43px]">
          <NuxtImg src="/svg/icon-dev.svg" alt="Desenvolvedora" class="w-[25px] h-[25px]">
          <p class="font-michroma text-[18px] text-white tracking-[2.34px] leading-normal">DESENVOLVEDORA</p>
        </div>
      </div>

      <!-- Badges - Mobile positioning (stacked below Aika) -->
      <div class="md:hidden absolute top-[740px] left-1/2 -translate-x-1/2 flex flex-col gap-[12px] items-center w-full px-4 z-40 pb-[50px]">
        <!-- Badge DESIGNER -->
        <div class="bg-[rgba(30,30,30,0.9)] rounded-[10px] px-[12px] py-[8px] flex items-center justify-center gap-[10px] w-full max-w-[260px] h-[42px] badge-fade-in badge-delay-1 shadow-lg">
          <NuxtImg src="/svg/icon-designer.svg" alt="Designer" class="w-[20px] h-[20px]">
          <p class="font-michroma text-[12px] text-white tracking-[1px] leading-normal">DESIGNER</p>
        </div>

        <!-- Badge AGENTE -->
        <div class="bg-[rgba(30,30,30,0.9)] rounded-[10px] px-[12px] py-[8px] flex items-center justify-center gap-[10px] w-full max-w-[260px] h-[42px] badge-fade-in badge-delay-2 shadow-lg">
          <NuxtImg src="/svg/icon-agente.svg" alt="Agente" class="w-[20px] h-[20px]">
          <p class="font-michroma text-[12px] text-white tracking-[1px] leading-normal">AGENTE</p>
        </div>

        <!-- Badge DESENVOLVEDORA -->
        <div class="bg-[rgba(30,30,30,0.9)] rounded-[10px] px-[10px] py-[8px] flex items-center justify-center gap-[6px] w-full max-w-[280px] h-[42px] badge-fade-in badge-delay-3 shadow-lg">
          <NuxtImg src="/svg/icon-dev.svg" alt="Desenvolvedora" class="w-[18px] h-[18px]">
          <p class="font-michroma text-[10px] text-white tracking-[0.5px] leading-normal whitespace-nowrap">DESENVOLVEDORA</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped>
.bg-radial-gradient {
    background-image: radial-gradient(circle, #000 0%, transparent 100%);
}

/* Desktop loop scroll animation */
@keyframes loop-scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-8177px); /* Total width of 13 cards: (609px + 40px) * 13 = 8177px */
  }
}

/* Mobile loop scroll animation - adjusted for smaller cards */
@keyframes loop-scroll-mobile {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-3770px); /* Total width of 13 mobile cards: (280px + 20px) * 13 = 3770px */
  }
}

.animate-loop-scroll {
  animation: loop-scroll 60s linear infinite;
}

.animate-loop-scroll-mobile {
  animation: loop-scroll-mobile 40s linear infinite;
}

/* Mobile badge fade-in animations */
@keyframes badge-fade-in {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.badge-fade-in {
  opacity: 0;
  animation: badge-fade-in 0.6s ease-out forwards;
}

.badge-delay-1 {
  animation-delay: 0.2s;
}

.badge-delay-2 {
  animation-delay: 0.4s;
}

.badge-delay-3 {
  animation-delay: 0.6s;
}

/* Apply mobile animation only on small screens */
@media (max-width: 768px) {
  .animate-loop-scroll {
    animation: loop-scroll-mobile 20s linear infinite;
  }
}
</style>
