<template>
  <div class="relative w-full h-[812px] overflow-hidden" data-name="about">
    <!-- Background Gradient -->
    <div class="absolute inset-0 bg-gradient-to-b from-[#151319] to-[#e65d13]"></div>

    <!-- Background Circles -->
    <div class="absolute left-1/2 -translate-x-1/2 top-[615px] flex items-center justify-center">
      <div class="absolute w-[310px] h-[310px] bg-[rgba(26,21,24,0.28)] rounded-full"></div>
      <div class="absolute w-[274px] h-[274px] border border-white/50 rounded-full"></div>
    </div>

    <!-- Badge - About Aika -->
    <div class="absolute flex items-center justify-center gap-[14px] left-1/2 -translate-x-1/2 top-[51px] px-[10px] py-[10px] rounded-[10px] w-[276px]">
      <div class="relative shrink-0 size-[10px]">
        <div class="w-full h-full bg-white rounded-full"></div>
      </div>
      <p class="font-michroma text-[16px] text-white tracking-normal">
        ABOUT AIKA
      </p>
      <div class="flex-1 h-[6px] bg-gradient-to-r from-white to-transparent"></div>
    </div>

    <!-- About Text -->
    <p class="absolute left-1/2 -translate-x-1/2 top-[107px] w-[276px] text-center text-white text-[14px] leading-normal whitespace-pre-wrap">
      <span class="font-bold">Aika</span>
      <span> foi criada por </span>
      <span class="font-bold">Felipe Kenji "Nakamura"</span>
      <span> como uma extensão de sua visão estratégica. Nascida da mais pura lealdade e de um propósito claro, minha missão é honrar o legado de cada cliente, utilizando inteligência artificial e uma abordagem 360º para construir marcas fortes e duradouras no ambiente digital. Eu uno dados e alma, tecnologia e estratégia, com devoção total aos seus resultados.</span>
    </p>

    <!-- CTA Buttons -->
    <div class="absolute left-1/2 -translate-x-1/2 top-[346px] flex flex-col gap-[13px] w-[272px]">
      <!-- Button 1 - Conheça mais -->
      <NuxtLink to="/sobre-aika" class="backdrop-blur-[0.3px] bg-[rgba(255,115,0,0.36)] border border-[rgba(255,115,0,0.71)] rounded-[10px] w-full">
        <div class="flex items-center justify-center gap-[10px] p-[10px] w-full">
          <img src="/svg/icon-arrow-right.svg" alt="" class="w-[15px] h-[22px] shrink-0" />
          <p class="font-michroma text-[10px] text-white tracking-[0.3px]">
            CONHEÇA MAIS SOBRE A AIKA
          </p>
        </div>
      </NuxtLink>

      <!-- Button 2 - Converse -->
      <a href="https://api.whatsapp.com/send/?phone=5519993369603&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" class="backdrop-blur-[0.3px] bg-[rgba(255,115,0,0.36)] border border-[rgba(255,115,0,0.71)] rounded-[10px] w-full">
        <div class="flex items-center justify-center gap-[10px] p-[10px] w-full">
          <img src="/svg/icon-arrow-right.svg" alt="" class="w-[15px] h-[22px] shrink-0" />
          <p class="font-michroma text-[10px] text-white tracking-[0.3px]">
            CONVERSE COM A AIKA
          </p>
        </div>
      </a>
    </div>

    <!-- Aika Character -->
    <div class="absolute left-1/2 -translate-x-1/2 top-[458px] w-[339px] h-[339px] z-10">
      <img
        src="/imagens/AikaNakamura-02-mobile.png"
        alt="Aika Nakamura"
        class="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
      />
    </div>

    <!-- Badge - Segurança -->
    <div class="absolute left-[7px] top-[554px] bg-[rgba(30,30,30,0.8)] flex items-center justify-center gap-[6px] h-[23px] px-[5px] rounded-[10px] w-[111px] z-20">
      <div class="relative shrink-0 size-[15px]">
        <img src="/svg/icon-cyber-security.svg" alt="" class="w-full h-full" />
      </div>
      <p class="font-michroma text-[7px] text-white tracking-[0.91px]">
        SEGURANÇA
      </p>
    </div>

    <!-- Badge - Analista -->
    <div class="absolute right-[7px] top-[564px] bg-[rgba(30,30,30,0.8)] flex items-center justify-center gap-[5px] h-[24px] px-[10px] rounded-[10px] w-[91px] z-20">
      <div class="relative shrink-0 size-[15px]">
        <img src="/svg/icon-google-analytics.svg" alt="" class="w-full h-full" />
      </div>
      <p class="font-michroma text-[7px] text-white tracking-[0.91px]">
        ANALISTA
      </p>
    </div>

    <!-- Badge - Estrategista -->
    <div class="absolute right-[7px] top-[620px] bg-[rgba(30,30,30,0.8)] flex items-center justify-center gap-[5px] h-[24px] px-[10px] rounded-[10px] w-[123px] z-20">
      <div class="relative shrink-0 size-[15px]">
        <img src="/svg/icon-marketing.svg" alt="" class="w-full h-full" />
      </div>
      <p class="font-michroma text-[7px] text-white tracking-[0.91px]">
        ESTRATEGISTA
      </p>
    </div>

    <!-- Bottom Shadow -->
    <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[375px] h-36 bg-[radial-gradient(ellipse_50.00%_50.00%_at_50.00%_50.00%,_black_0%,_rgba(0,_0,_0,_0)_100%)] rounded-full blur-[2px] z-0"></div>
  </div>
</template>

<script setup lang="ts">
// No imports needed for this component
</script>

<style scoped>
/* Custom font classes are handled by @nuxt/fonts module */
.font-michroma {
  font-family: 'Michroma', sans-serif;
}
</style>