<template>
  <!-- Header -->
  <header class="absolute top-[2%] md:top-[3%] left-0 right-0 flex justify-between items-center px-[4%] z-50">
    <NuxtLink to="/" class="text-white w-[180px] md:w-[362px]">
      <h1 class="text-[20px] md:text-[40px] font-extrabold font-['Inter'] leading-[1.15] md:leading-[46px] tracking-tight">AIKA NAKAMURA</h1>
      <p class="text-[8px] md:text-[12px] text-center font-['Inter'] leading-normal mt-[3px] md:mt-[5px]">
        <span class="font-light">por</span>
        <span class="font-extrabold"> Felipe Nakamura</span>
      </p>
    </NuxtLink>

    <button
      @click="toggleMenu"
      class="flex flex-col gap-[4px] md:gap-[10px] h-[40px] md:h-[66px] items-end justify-center w-[180px] md:w-[362px] cursor-pointer bg-transparent border-none"
      aria-label="Toggle menu"
    >
      <svg class="w-[35px] h-[24px] md:w-[55px] md:h-[38px]" viewBox="0 0 55 38" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="55" height="6" fill="white"/>
        <rect y="16" width="55" height="6" fill="white"/>
        <rect y="32" width="55" height="6" fill="white"/>
      </svg>
    </button>
  </header>

  <!-- Fullscreen Menu Overlay -->
  <Transition name="menu">
    <div
      v-if="menuOpen"
      class="fixed inset-0 z-[100] bg-black"
    >
      <!-- Close Button -->
      <button
        @click="toggleMenu"
        class="fixed top-6 right-6 md:top-8 md:right-12 text-white text-[40px] md:text-[56px] font-light leading-none hover:text-[#FF5A02] transition-all duration-300 w-[50px] h-[50px] md:w-[70px] md:h-[70px] flex items-center justify-center z-[101] hover:rotate-90 cursor-pointer"
        aria-label="Close menu"
      >
        ✕
      </button>

      <div class="flex h-full flex-col md:flex-row">
        <!-- Left Column - Branding & Contact Info -->
        <div class="w-full md:w-[30%] flex flex-col justify-between py-8 px-6 md:py-12 md:px-12">
          <!-- Branding -->
          <div>
            <h2 class="text-white text-[18px] md:text-[32px] font-extrabold font-['Inter'] leading-[1.2] tracking-tight">
              AIKA NAKAMURA
            </h2>
            <p class="text-white text-[9px] md:text-[11px] font-['Inter'] leading-normal mt-1">
              <span class="font-light">Digital Assistant</span>
            </p>
          </div>

          <!-- Contact Info -->
          <div class="text-white space-y-4 md:space-y-8 pb-4 md:pb-8">
            <div>
              <p class="text-[11px] md:text-[13px] font-light mb-1 md:mb-2 opacity-80">Email</p>
              <a href="mailto:felipe.kenji@hotmail.com" class="text-[#FF5A02] text-[13px] md:text-[15px] font-normal hover:underline block">
                felipe.kenji@hotmail.com
              </a>
            </div>
            <div>
              <p class="text-[11px] md:text-[13px] font-light mb-1 md:mb-2 opacity-80">WhatsApp</p>
              <a href="https://wa.me/5519993369603" class="text-[#FF5A02] text-[13px] md:text-[15px] font-normal hover:underline block" target="_blank">
                19 99336-9603
              </a>
            </div>
          </div>
        </div>

        <!-- Right Column - Navigation Menu -->
        <div class="flex-1 flex flex-col justify-center pr-6 pl-6 md:pr-[10%] md:pl-[5%] relative">
          <nav class="space-y-4 md:space-y-8">
            <!-- Menu Item 01 - Início -->
            <NuxtLink
              to="/"
              @click="closeMenu"
              class="group block"
            >
              <div class="flex items-baseline gap-6">
                <span class="text-[#FF5A02] text-[14px] font-['Inter'] font-normal min-w-[32px]">01</span>
                <h3 class="text-white text-[clamp(60px,8vw,100px)] font-extrabold font-['Inter'] leading-[0.95] tracking-tight group-hover:text-[#FF5A02] transition-colors duration-300">
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
              <div class="flex items-baseline gap-6">
                <span class="text-[#FF5A02] text-[14px] font-['Inter'] font-normal min-w-[32px]">02</span>
                <h3 class="text-white text-[clamp(60px,8vw,100px)] font-extrabold font-['Inter'] leading-[0.95] tracking-tight group-hover:text-[#FF5A02] transition-colors duration-300">
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
              <div class="flex items-baseline gap-6">
                <span class="text-[#FF5A02] text-[14px] font-['Inter'] font-normal min-w-[32px]">03</span>
                <h3 class="text-white text-[clamp(60px,8vw,100px)] font-extrabold font-['Inter'] leading-[0.95] tracking-tight group-hover:text-[#FF5A02] transition-colors duration-300">
                  Contato
                </h3>
              </div>
            </NuxtLink>
          </nav>

          <!-- Tagline -->
          <p class="hidden md:block absolute bottom-12 right-[10%] text-white text-[14px] font-light italic max-w-[350px] text-right opacity-80">
            "Honramos seu legado, construímos seu futuro"
          </p>
        </div>
      </div>
    </div>
  </Transition>
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
</script>

<style scoped>
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
</style>
