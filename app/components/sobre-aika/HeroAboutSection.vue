<template>
  <div>
    <!-- Desktop Version -->
    <section class="hidden md:flex relative w-full h-screen overflow-hidden items-center justify-center bg-black">
      <!-- Background Image with Gradient Overlay -->
      <div class="absolute inset-0 pointer-events-none">
        <img
          alt="Background"
          class="absolute object-cover w-full h-full"
          src="/imagens/about-hero-bg.png"
        />
        <div class="absolute inset-0 bg-gradient-to-b from-[rgba(255,90,2,0)] to-[#802d01]"></div>
      </div>

      <!-- Container centralizado -->
      <div class="relative w-full h-full max-w-[1920px] max-h-[1080px]">
        <!-- HUD Frame -->
        <div class="absolute inset-[2.5%] border-[0.5px] border-solid border-white pointer-events-none" />

        <!-- Corner Arrows -->
        <div class="absolute flex items-center justify-center left-[2.4%] top-[3.1%] z-40">
          <img src="/svg/arrow-hud-top-left.svg" alt="Arrow HUD" class="block max-w-none w-[44px] h-[25px]" />
        </div>
        <div class="absolute flex items-center justify-center left-[2.8%] bottom-[4%] z-40">
          <img src="/svg/arrow-hud-bottom-left.svg" alt="Arrow HUD" class="block max-w-none w-[44px] h-[25px]" />
        </div>
        <div class="absolute flex items-center justify-center right-[2.8%] bottom-[4%] z-40">
          <img src="/svg/arrow-hud-bottom-right.svg" alt="Arrow HUD" class="block max-w-none w-[44px] h-[25px]" />
        </div>
        <div class="absolute flex items-center justify-center right-[2.4%] top-[3.1%] z-40">
          <img src="/svg/arrow-hud-top-right.svg" alt="Arrow HUD" class="block max-w-none w-[44px] h-[25px]" />
        </div>

        <!-- Shadow under Aika -->
        <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-[625px] h-[180px] bg-[radial-gradient(ellipse_50.00%_50.00%_at_50.00%_50.00%,_black_0%,_rgba(0,_0,_0,_0)_100%)] rounded-full blur-[2px]">
          <img
            alt="Shadow"
            class="block w-full h-full"
            src="/svg/sombra-aika.svg"
          />
        </div>

        <!-- Ellipse Glow -->
        <div class="absolute w-[32.5vw] h-[32.1vw] max-w-[624px] max-h-[616px]" style="top: 18.5%; left: 33.5%;">
          <div class="absolute inset-[-1.83% -1.81%]">
            <img
              alt="Glow"
              class="block w-full h-full"
              src="/imagens/ellipse-6.png"
            />
          </div>
        </div>

        <!-- Aika Samurai Character -->
        <div
          class="absolute w-[46.25vw] h-[46.25vw] max-w-[888px] max-h-[888px] pointer-events-none"
          style="left: 50.1%; top: 55%; transform: translate(-50%, -50%)"
        >
          <img
            alt="Aika Samurai"
            class="absolute inset-0 w-[88%] h-[88%] object-cover"
            style="object-position: 50% 50%; top: 5.6%; left: 5.6%;"
            src="/imagens/aika-samurai.png"
          />
        </div>

        <!-- Badges -->
        <div class="absolute top-[45%] left-[26%] bg-[rgba(30,30,30,0.85)] rounded-[10px] flex items-center px-[12px] py-[10px] gap-[13px] h-[43px] w-auto justify-center overflow-hidden z-30 shadow-lg">
          <img src="/svg/icon-guardian-digital.svg" alt="Guardiã Digital" class="w-[32px] h-[32px] shrink-0" />
          <span class="text-white font-['Inter'] font-light text-[clamp(18px,1.5vw,28px)] tracking-[0.56px] leading-normal whitespace-nowrap">Guardiã Digital</span>
        </div>

        <div class="absolute top-[43%] left-[60%] bg-[rgba(30,30,30,0.85)] rounded-[10px] flex items-center px-[12px] py-[10px] gap-[13px] h-[43px] w-auto justify-center overflow-hidden z-30 shadow-lg">
          <img src="/svg/icon-execucao-impecavel.svg" alt="Execução Impecável" class="w-[30px] h-[30px] shrink-0" />
          <span class="text-white font-['Inter'] font-light text-[clamp(18px,1.5vw,30px)] tracking-[0.6px] leading-normal whitespace-nowrap">Execução Impecável</span>
        </div>

        <div class="absolute top-[58%] left-[62%] bg-[rgba(30,30,30,0.85)] rounded-[10px] flex items-center px-[12px] py-[10px] gap-[13px] h-[43px] w-auto justify-center overflow-hidden z-30 shadow-lg">
          <img src="/svg/icon-analitcs-preditiva.svg" alt="Análise Preditiva" class="w-[30px] h-[30px] shrink-0" />
          <span class="text-white font-['Inter'] font-light text-[clamp(18px,1.5vw,30px)] tracking-[0.6px] leading-normal whitespace-nowrap">Análise Preditiva</span>
        </div>

        <!-- Header Menu -->
        <Header />
      </div>
    </section>

    <!-- Mobile Version -->
    <MobileSobreAikaHeroAboutSection class="md:hidden" />
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
</style>
