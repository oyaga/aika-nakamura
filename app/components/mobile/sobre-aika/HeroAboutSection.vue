<template>
  <div class="relative w-full h-screen overflow-hidden bg-black" data-name="Hero">
    <!-- Background Layer -->
    <div
      aria-hidden="true"
      class="absolute inset-0 bg-cover bg-center"
      :style="{
        backgroundImage: `url(${imgHero})`,
      }"
    ></div>

    <!-- Container centralizado -->
    <div class="relative w-full h-full">
      <!-- Border Frame - 95% do tamanho -->
      <div class="absolute border-[0.5px] border-solid border-white inset-[2.5%]" />

        <!-- Header -->
      <div class="absolute flex items-center justify-between left-[4%] right-[4%] top-[5%] z-10 px-[10px] py-[3px]">
        <!-- Logo -->
        <NuxtLink to="/" class="flex flex-col font-extrabold items-start justify-center text-white">
          <p class="leading-tight text-[15px]">
            AIKA NAKAMURA
          </p>
          <p class="leading-tight text-[8px]">
            <span>por</span>
            <span> Felipe Nakamura</span>
          </p>
        </NuxtLink>

        <!-- Menu Icon -->
        <button
          @click="toggleMenu"
          class="cursor-pointer bg-transparent border-none p-0"
          aria-label="Toggle menu"
        >
          <img
            alt="Menu"
            src="~/assets/svg/menu-mobile.svg"
            class="w-[22px] h-[18px]"
          />
        </button>
      </div>

        <!-- Main Character Section -->
      <div class="absolute left-1/2 -translate-x-1/2 size-[400px] top-[150px]" data-name="Bem-Vindo Aika">
        <!-- Neon Background Effects -->
        <div class="absolute left-1/2 -translate-x-1/2 top-[55px] w-[295px] h-[295px]">
          <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[295px]">
            <div class="absolute inset-[-10.17%]">
              <img alt="" class="block max-w-none size-full" :src="imgSpread" />
            </div>
          </div>
          <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[295px]">
            <div class="absolute inset-[-2.88%]">
              <img alt="" class="block max-w-none size-full" :src="imgIntensity" />
            </div>
          </div>
          <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[295px]">
            <div class="absolute inset-[-43.59%]">
              <img alt="" class="block max-w-none size-full" :src="imgOriginal" />
            </div>
          </div>
          <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[295px]">
            <img alt="" class="block max-w-none size-full" height="295" :src="imgEllipse6" width="295" />
          </div>
        </div>

        <!-- Samurai Character Image -->
        <div class="absolute left-1/2 -translate-x-1/2 size-[434px] top-[10px]">
          <img
            alt="Aika Nakamura Mascote"
            class="absolute inset-0 max-w-none object-center object-cover pointer-events-none size-full floating-mascot"
            :src="imgHeroAikaNakamuraMascote1"
          />
        </div>
      </div>

        <!-- Badges -->
        <div class="absolute bottom-[10%] left-1/2 -translate-x-1/2 flex flex-col gap-[15px] items-center justify-center z-30 w-[90%] max-w-[340px]">
          <!-- Badge - Guardiã Digital -->
          <div class="bg-[rgba(30,30,30,0.8)] rounded-[10px] flex items-center justify-center px-[15px] py-[8px] gap-[10px] w-full overflow-clip badge-animate badge-delay-1">
            <img src="/svg/icon-guardian-digital.svg" alt="Guardiã Digital" class="w-[24px] h-[24px] shrink-0" />
            <span class="text-white font-['Inter'] font-normal text-[18px] tracking-[0.36px] leading-normal whitespace-nowrap">Guardiã Digital</span>
          </div>

          <!-- Badge - Execução Impecável -->
          <div class="bg-[rgba(30,30,30,0.8)] rounded-[10px] flex items-center justify-center px-[15px] py-[8px] gap-[10px] w-full overflow-clip badge-animate badge-delay-2">
            <img src="/svg/icon-execucao-impecavel.svg" alt="Execução Impecável" class="w-[24px] h-[24px] shrink-0" />
            <span class="text-white font-['Inter'] font-normal text-[18px] tracking-[0.36px] leading-normal whitespace-nowrap">Execução Impecável</span>
          </div>

          <!-- Badge - Análise Preditiva -->
          <div class="bg-[rgba(30,30,30,0.8)] rounded-[10px] flex items-center justify-center px-[15px] py-[8px] gap-[10px] w-full overflow-clip badge-animate badge-delay-3">
            <img src="/svg/icon-analitcs-preditiva.svg" alt="Análise Preditiva" class="w-[24px] h-[24px] shrink-0" />
            <span class="text-white font-['Inter'] font-normal text-[18px] tracking-[0.36px] leading-normal whitespace-nowrap">Análise Preditiva</span>
          </div>
        </div>

        <!-- Badge - System Online -->
      <div class="absolute bg-[rgba(30,30,30,0.6)] flex gap-[5px] h-[20px] items-center justify-center left-1/2 overflow-clip p-[10px] rounded-[10px] top-[12%] -translate-x-1/2 w-[215px]">
       <p class="font-michroma leading-[normal] not-italic relative shrink-0 text-[12px] tracking-[0.6px] text-white">
          SYSTEM ONLINE
        </p>
        <div class="h-[8px] relative shrink-0 w-[28px]">
          <img alt="" class="block max-w-none size-full" :src="imgDotSystem" />
        </div>
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
          <img src="/svg/arrow-double-chevron.svg" alt="Double Chevron" class="absolute w-[40px] h-[40px] bottom-5 left-[40px] left-1/2 -translate-x-1/2" />
        </div>
      </div>
      <div class="absolute flex items-center justify-center right-[2.8%] bottom-[4%] z-40">
        <div class="flex-none">
          <img src="/svg/arrow-hud-bottom-right.svg" alt="Arrow HUD" class="block max-w-none w-[44px] h-[25px]" />
          <img src="/svg/arrow-double-chevron.svg" alt="Double Chevron" class="absolute w-[40px] h-[40px] bottom-5 left-[10px] left-1/2 -translate-x-1/2" />
        </div>
      </div>
      <div class="absolute flex items-center justify-center right-[2.4%] top-[3.1%] z-40">
        <div class="flex-none">
          <img src="/svg/arrow-hud-top-right.svg" alt="Arrow HUD" class="block max-w-none w-[44px] h-[25px]" />
        </div>
      </div>
    </div>

    <!-- Fullscreen Menu Overlay Mobile -->
    <Transition name="menu">
      <div
        v-if="menuOpen"
        class="fixed inset-0 z-[100] bg-black"
      >
        <!-- Close Button -->
        <button
          @click="toggleMenu"
          class="fixed top-6 right-6 text-white text-[40px] font-light leading-none hover:text-[#FF5A02] transition-all duration-300 w-[50px] h-[50px] flex items-center justify-center z-[101] hover:rotate-90 cursor-pointer"
          aria-label="Close menu"
        >
          ✕
        </button>

        <div class="flex flex-col h-full">
          <!-- Branding -->
          <div class="pt-8 px-6">
            <h2 class="text-white text-[18px] font-extrabold font-['Inter'] leading-[1.2] tracking-tight">
              AIKA NAKAMURA
            </h2>
            <p class="text-white text-[9px] font-['Inter'] leading-normal mt-1">
              <span class="font-light">Digital Assistant</span>
            </p>
          </div>

          <!-- Navigation Menu -->
          <nav class="flex-1 flex flex-col justify-center px-6 space-y-6">
            <!-- Menu Item 01 - Início -->
            <NuxtLink
              to="/"
              @click="closeMenu"
              class="group block"
            >
              <div class="flex items-baseline gap-4">
                <span class="text-[#FF5A02] text-[12px] font-['Inter'] font-normal min-w-[24px]">01</span>
                <h3 class="text-white text-[clamp(40px,10vw,50px)] font-extrabold font-['Inter'] leading-[0.95] tracking-tight group-hover:text-[#FF5A02] transition-colors duration-300">
                  Início
                </h3>
              </div>
            </NuxtLink>

            <!-- Menu Item 02 - Sobre Aika -->
            <NuxtLink
              to="/sobre-aika"
              @click="closeMenu"
              class="group block"
            >
              <div class="flex items-baseline gap-4">
                <span class="text-[#FF5A02] text-[12px] font-['Inter'] font-normal min-w-[24px]">02</span>
                <h3 class="text-white text-[clamp(40px,10vw,50px)] font-extrabold font-['Inter'] leading-[0.95] tracking-tight group-hover:text-[#FF5A02] transition-colors duration-300">
                  Sobre Aika
                </h3>
              </div>
            </NuxtLink>

            <!-- Menu Item 03 - Contato -->
            <NuxtLink
              to="/contato"
              @click="closeMenu"
              class="group block"
            >
              <div class="flex items-baseline gap-4">
                <span class="text-[#FF5A02] text-[12px] font-['Inter'] font-normal min-w-[24px]">03</span>
                <h3 class="text-white text-[clamp(40px,10vw,50px)] font-extrabold font-['Inter'] leading-[0.95] tracking-tight group-hover:text-[#FF5A02] transition-colors duration-300">
                  Contato
                </h3>
              </div>
            </NuxtLink>
          </nav>

          <!-- Contact Info -->
          <div class="text-white space-y-4 px-6 pb-8">
            <div>
              <p class="text-[11px] font-light mb-1 opacity-80">Email</p>
              <a href="mailto:felipe.kenji@hotmail.com" class="text-[#FF5A02] text-[13px] font-normal hover:underline block">
                felipe.kenji@hotmail.com
              </a>
            </div>
            <div>
              <p class="text-[11px] font-light mb-1 opacity-80">WhatsApp</p>
              <a href="https://wa.me/5519993369603" class="text-[#FF5A02] text-[13px] font-normal hover:underline block" target="_blank">
                19 99336-9603
              </a>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
const menuOpen = ref(false)

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

const closeMenu = () => {
  menuOpen.value = false
}

// Close menu when route changes
const route = useRoute()
watch(() => route.path, () => {
  menuOpen.value = false
})

// Import local images from assets (these get optimized by Vite)
import imgNeonBg from '~/assets/svg/neon-aika-bg.svg'

// Public images (use direct path, no import needed)
const imgHero = '/imagens/about-hero-bg.png'
const imgHeroAikaNakamuraMascote1 = '/imagens/aika-samurai.png'

// SVG icons from assets
import imgDotSystem from '~/assets/svg/dot-system.svg'

// Public images (use direct path, no import needed)
const imgEllipse6 = '/imagens/ellipse-6.png'

// Neon background effects (using the neon-aika-bg.svg)
const imgSpread = imgNeonBg
const imgIntensity = imgNeonBg
const imgOriginal = imgNeonBg
</script>

<style scoped>
/* Custom font classes are handled by @nuxt/fonts module */
.font-michroma {
  font-family: 'Michroma', sans-serif;
}

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

/* Menu transition animations */
.menu-enter-active,
.menu-leave-active {
  transition: opacity 0.3s ease;
}

.menu-enter-from,
.menu-leave-to {
  opacity: 0;
}

.menu-enter-to,
.menu-leave-from {
  opacity: 1;
}

/* Badge animations - Sequential fade-in and slide-up */
@keyframes badge-slide-in {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.badge-animate {
  opacity: 0;
  animation: badge-slide-in 0.8s ease-out forwards;
}

.badge-delay-1 {
  animation-delay: 0.3s;
}

.badge-delay-2 {
  animation-delay: 0.6s;
}

.badge-delay-3 {
  animation-delay: 0.9s;
}
</style>
