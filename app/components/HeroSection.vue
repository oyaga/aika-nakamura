<template>
  <div class="relative w-full h-screen overflow-hidden flex items-center justify-center bg-[#6b2d0f]">
    <!-- Vídeo de fundo -->
    <div class="absolute inset-0 w-full h-full opacity-66">
      <video autoplay muted loop playsinline class="w-full h-full object-cover">
        <source src="/videos/bg-hero.mp4" type="video/mp4">
        Seu navegador não suporta vídeos.
      </video>
    </div>

    <!-- Gradiente radial laranja com 66% de opacidade -->
    <div class="absolute inset-0" style="background: radial-gradient(66% 66% at 50% 50%, rgba(255, 90, 2, 0.66), rgba(128, 45, 1, 0.66))"></div>

    <!-- Partículas de luz -->
    <div class="absolute inset-0 opacity-50">
      <div class="absolute w-2 h-2 bg-orange-400 rounded-full animate-pulse" style="top: 8%; left: 12%; box-shadow: 0 0 15px rgba(251, 146, 60, 0.9);"></div>
      <div class="absolute w-1.5 h-1.5 bg-orange-300 rounded-full animate-pulse" style="top: 22%; left: 78%; box-shadow: 0 0 10px rgba(253, 186, 116, 0.7);"></div>
      <div class="absolute w-2.5 h-2.5 bg-orange-500 rounded-full animate-pulse" style="top: 58%; left: 18%; animation-delay: 0.5s; box-shadow: 0 0 18px rgba(249, 115, 22, 1);"></div>
      <div class="absolute w-1.5 h-1.5 bg-orange-400 rounded-full animate-pulse" style="top: 72%; left: 83%; animation-delay: 0.3s; box-shadow: 0 0 12px rgba(251, 146, 60, 0.8);"></div>
      <div class="absolute w-1 h-1 bg-orange-300 rounded-full animate-pulse" style="top: 38%; left: 68%; animation-delay: 0.7s; box-shadow: 0 0 8px rgba(253, 186, 116, 0.6);"></div>
      <div class="absolute w-2 h-2 bg-orange-500 rounded-full animate-pulse" style="top: 48%; left: 35%; animation-delay: 0.2s; box-shadow: 0 0 15px rgba(249, 115, 22, 0.95);"></div>
      <div class="absolute w-1.5 h-1.5 bg-orange-400 rounded-full animate-pulse" style="top: 15%; left: 45%; animation-delay: 0.4s; box-shadow: 0 0 10px rgba(251, 146, 60, 0.8);"></div>
      <div class="absolute w-1 h-1 bg-orange-300 rounded-full animate-pulse" style="top: 85%; left: 52%; animation-delay: 0.6s; box-shadow: 0 0 8px rgba(253, 186, 116, 0.6);"></div>
      <div class="absolute w-2 h-2 bg-orange-500 rounded-full animate-pulse" style="top: 28%; left: 88%; animation-delay: 0.8s; box-shadow: 0 0 15px rgba(249, 115, 22, 1);"></div>
      <div class="absolute w-1.5 h-1.5 bg-orange-400 rounded-full animate-pulse" style="top: 65%; left: 8%; animation-delay: 0.1s; box-shadow: 0 0 12px rgba(251, 146, 60, 0.85);"></div>
    </div>

    <!-- Container centralizado -->
    <div class="relative w-full h-full max-w-[1920px] max-h-[1080px]">
      <!-- Border Frame - 95% do tamanho -->
      <div class="absolute border-[0.5px] border-solid border-white inset-[2.5%]" />

    <!-- Header Component -->
    <Header />

    <!-- BEM VINDO-PORTIFÓLIO- Text (circular) - ATRÁS -->
    <div class="absolute left-[50%] top-[55%] pointer-events-none w-[60vw] h-[60vw] max-w-[80%] max-h-[80%] z-10 rotating-text" style="transform: translate(-50%, -50%);">
      <svg viewBox="0 0 904 904" class="w-full h-full">
        <defs>
          <path id="circlePath" d="M 452,452 m -372,0 a 372,372 0 1,1 744,0 a 372,372 0 1,1 -744,0" />
          <filter id="textShadow">
            <feDropShadow dx="-1" dy="5" stdDeviation="4.3" flood-opacity="0.35"/>
          </filter>
        </defs>
        <text class="font-['Inter'] font-semibold fill-white opacity-90" style="font-size: 100px; letter-spacing: 0.53em;" filter="url(#textShadow)">
          <textPath href="#circlePath" startOffset="0%">
            BEM VINDO-PORTIFÓLIO-
          </textPath>
        </text>
      </svg>
    </div>

    <!-- Central Content - FRENTE -->
    <div class="absolute left-[50%] top-[55%] w-[46.4vw] h-[46.4vw] max-w-[800px] max-h-[800px] z-20" style="transform: translate(-50%, -50%);">
      <div class="relative w-full h-full">
        <!-- Neon Background -->
        <img src="/svg/neon-bg.svg" alt="Neon Background" class="absolute left-[4.3%] top-[4.5%] w-[91%] h-[91%]" />
        <!-- Mascote -->
        <img src="/imagens/mascote.png" alt="Mascote" class="absolute left-[7.5%] top-[10%] w-[85%] h-[85%] floating-mascot" />
      </div>
    </div>

    <!-- Badges -->
    <div class="absolute top-[35%] left-[26%] bg-[rgba(30,30,30,0.85)] rounded-[10px] flex items-center px-[12px] py-[10px] gap-[6px] h-[43px] w-[260px] justify-center overflow-hidden z-30 shadow-lg">
      <img src="/svg/icon-criatividade.svg" alt="Criatividade" class="w-[25px] h-[25px] shrink-0" />
      <span class="text-white font-['Michroma'] text-[18px] tracking-[0.13em] leading-normal">CRIATIVIDADE</span>
    </div>
    <div class="absolute top-[53%] left-[60%] bg-[rgba(30,30,30,0.85)] rounded-[10px] flex items-center px-[12px] py-[10px] gap-[6px] h-[44px] w-[243px] justify-center overflow-hidden z-30 shadow-lg">
      <img src="/svg/icon-foguete.svg" alt="Inovação" class="w-[25px] h-[25px] shrink-0" />
      <span class="text-white font-['Michroma'] text-[18px] tracking-[0.13em] leading-normal">INOVAÇÃO</span>
    </div>
    <div class="absolute top-[68%] left-[57%] bg-[rgba(30,30,30,0.85)] rounded-[10px] flex items-center px-[12px] py-[10px] gap-[6px] h-[43px] w-[249px] justify-center overflow-hidden z-30 shadow-lg">
      <img src="/svg/icon-velocidade.svg" alt="Velocidade" class="w-[20px] h-[28px] shrink-0" />
      <span class="text-white font-['Michroma'] text-[18px] tracking-[0.13em] leading-normal">VELOCIDADE</span>
    </div>

    <!-- Corner Arrows -->
    <div class="absolute flex items-center justify-center left-[2.4%] top-[3.1%] z-40">
      <div class="flex-none">
        <img src="/svg/arrow-hud-top-left.svg" alt="Arrow HUD" class="block max-w-none w-[44px] h-[25px]" />
      </div>
    </div>
    <div class="absolute flex items-center justify-center left-[2.8%] bottom-[4%] z-40">
      <div class="flex-none">
        <img src="/svg/arrow-hud-bottom-left.svg" alt="Arrow HUD" class="block max-w-none w-[44px] h-[25px]" />
      </div>
    </div>
    <div class="absolute flex items-center justify-center right-[2.8%] bottom-[4%] z-40">
      <div class="flex-none">
        <img src="/svg/arrow-hud-bottom-right.svg" alt="Arrow HUD" class="block max-w-none w-[44px] h-[25px]" />
      </div>
    </div>
    <div class="absolute flex items-center justify-center right-[2.4%] top-[3.1%] z-40">
      <div class="flex-none">
        <img src="/svg/arrow-hud-top-right.svg" alt="Arrow HUD" class="block max-w-none w-[44px] h-[25px]" />
      </div>
    </div>

    <!-- Line Effects -->
    <img src="/svg/line-effect-left.svg" alt="Line Effect Left" class="absolute left-[3.4%] top-1/2 -translate-y-1/2 w-[161px] z-20 opacity-95" />
    <img src="/svg/line-effect-right.svg" alt="Line Effect Right" class="absolute right-[3.4%] top-1/2 -translate-y-1/2 w-[161px] z-20 opacity-95" />

    <!-- Bottom Arrows -->
    <div class="absolute left-[4%] bottom-[9.3%] z-20">
      <img src="/svg/arrow-double-chevron.svg" alt="Arrow Left" class="w-[96px] h-[96px]" />
    </div>
    <div class="absolute right-[4%] bottom-[9.3%] z-20">
      <img src="/svg/arrow-double-chevron.svg" alt="Arrow Right" class="w-[96px] h-[96px] transform -scale-x-100" />
    </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// No script needed for this static implementation
</script>

<style scoped>
/* Animação de Floating para o Mascote */
@keyframes floating {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
}

.floating-mascot {
  animation: floating 3s ease-in-out infinite;
}

/* Animação de Rotação para o Texto Circular */
@keyframes rotate360 {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

.rotating-text {
  animation: rotate360 20s linear infinite;
}
</style>