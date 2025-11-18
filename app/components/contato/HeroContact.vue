<template>
  <section class="relative overflow-hidden min-h-screen" style="background: radial-gradient(circle at center, #FF5A02 0%, #802D01 100%);">
    <!-- Elementos Decorativos -->
    <div class="absolute inset-0 pointer-events-none">
      <!-- Círculos decorativos -->
      <div class="absolute top-[10%] left-[5%] w-[300px] h-[300px] rounded-full bg-white/5 blur-3xl"></div>
      <div class="absolute bottom-[15%] right-[8%] w-[400px] h-[400px] rounded-full bg-white/5 blur-3xl"></div>
      <div class="absolute top-[50%] right-[15%] w-[200px] h-[200px] rounded-full bg-white/10 blur-2xl"></div>

      <!-- Linhas diagonais -->
      <div class="absolute top-[20%] left-[-5%] w-[500px] h-[2px] bg-white/10 rotate-45"></div>
      <div class="absolute bottom-[30%] right-[-5%] w-[400px] h-[2px] bg-white/10 -rotate-45"></div>

      <!-- Pontos decorativos -->
      <div class="absolute top-[25%] right-[20%] w-3 h-3 rounded-full bg-white/20"></div>
      <div class="absolute top-[30%] right-[18%] w-2 h-2 rounded-full bg-white/30"></div>
      <div class="absolute bottom-[40%] left-[10%] w-4 h-4 rounded-full bg-white/15"></div>
      <div class="absolute bottom-[35%] left-[8%] w-2 h-2 rounded-full bg-white/25"></div>

      <!-- Formas geométricas -->
      <div class="absolute top-[15%] right-[5%] w-16 h-16 border-2 border-white/10 rotate-45"></div>
      <div class="absolute bottom-[20%] left-[15%] w-20 h-20 border-2 border-white/15 rounded-full"></div>

      <!-- Grid pattern sutil -->
      <div class="absolute inset-0 opacity-5" style="background-image: linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px); background-size: 50px 50px;"></div>
    </div>

    <!-- Header Component -->
    <Header />

    <div class="relative h-full max-w-[1494px] px-4 md:px-12 mx-auto pt-20 md:pt-40">
      <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-[75px]">
        <!-- Conteúdo Esquerdo -->
        <div class="flex flex-col gap-3 md:gap-4 w-full md:max-w-[686px]">
          <div class="flex items-center justify-center gap-[10px] md:gap-[13px] bg-white rounded-[15px] md:rounded-[20px] p-[8px] md:p-[10px] w-fit max-w-[280px] md:max-w-[334px] h-[32px] md:h-[36px]">
            <img src="/svg/icon-email.svg" alt="Email" class="w-[24px] md:w-[34px] h-[20px] md:h-[27px]" style="filter: brightness(0) saturate(100%) invert(36%) sepia(95%) saturate(2679%) hue-rotate(1deg) brightness(101%) contrast(103%);" />
            <span class="font-bold text-[14px] md:text-lg text-[#FF5A02] tracking-[0.05em]">Fale Conosco</span>
          </div>

          <h2 class="font-bold text-[32px] md:text-6xl text-white tracking-[0.05em] leading-tight">Entre em Contato</h2>

          <p class="font-light text-[16px] md:text-2xl text-white tracking-[0.05em] leading-normal">
            Estou aqui para ajudar você. Entre em contato e descubra como posso transformar suas ideias em realidade digital.
          </p>

          <div class="flex flex-col md:flex-row gap-3 md:gap-4 mt-3 md:mt-4 w-full md:w-auto">
            <button class="flex items-center justify-center gap-[13px] p-[10px] rounded-lg border-none cursor-pointer font-bold text-lg tracking-[0.05em] h-[49px] transition duration-200 ease-in-out hover:-translate-y-0.5 hover:shadow-lg bg-white text-[#FF5A02] px-5">
              <img src="/svg/icon-email.svg" alt="Email" class="w-8 h-[25px]" style="filter: brightness(0) saturate(100%) invert(36%) sepia(95%) saturate(2679%) hue-rotate(1deg) brightness(101%) contrast(103%);" />
              <span>Enviar Email</span>
            </button>

            <a href="https://api.whatsapp.com/send/?phone=5519993369603&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center gap-[13px] p-[10px] rounded-lg border-none cursor-pointer font-bold text-lg tracking-[0.05em] h-[49px] transition duration-200 ease-in-out hover:-translate-y-0.5 hover:shadow-lg text-white px-5" style="background: linear-gradient(90deg, #1CA908 0%, #1B730F 100%);">
              <img src="/svg/icon-whatsapp.svg" alt="WhatsApp" class="w-8 h-[25px]" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>

        <!-- Contact Info Cards -->
        <div class="flex flex-col gap-6 md:gap-12 w-full md:max-w-[673px] pt-0">
          <!-- Telefone -->
          <div class="flex flex-row items-center gap-0 bg-white/25 border border-white/60 rounded-[15px] md:rounded-[20px] p-[8px] md:p-[10px] h-[100px] md:h-[132px] backdrop-blur-lg transition-all duration-300 ease-in-out hover:bg-white/35 hover:-translate-x-1 text-left">
            <div class="flex items-center justify-center w-[90px] md:w-[142px] h-[90px] md:h-[120px] relative flex-shrink-0">
              <div class="w-[60px] md:w-[78px] h-[60px] md:h-[78px] bg-white/40 rounded-full flex items-center justify-center relative">
                <img src="/svg/icon-telefone.svg" alt="Telefone" class="w-[35px] md:w-[50px] h-[35px] md:h-[50px] relative z-10" style="filter: brightness(0) invert(1);" />
              </div>
            </div>
            <div class="flex flex-col gap-1 text-white flex-1 w-full pr-3 md:pr-5">
              <p class="font-bold text-[14px] md:text-lg tracking-[0.05em] m-0">Telefone</p>
              <p class="font-bold text-[20px] md:text-3xl tracking-[0.05em] m-0">19 99336-9603</p>
              <p class="font-normal text-[10px] md:text-xs tracking-[0.05em] m-0">Atendimento 24 horas</p>
            </div>
          </div>

          <!-- Email -->
          <div class="flex flex-row items-center gap-0 bg-white/25 border border-white/60 rounded-[15px] md:rounded-[20px] p-[8px] md:p-[10px] h-[100px] md:h-[132px] backdrop-blur-lg transition-all duration-300 ease-in-out hover:bg-white/35 hover:-translate-x-1 text-left">
            <div class="flex items-center justify-center w-[90px] md:w-[142px] h-[90px] md:h-[120px] relative flex-shrink-0">
              <div class="w-[60px] md:w-[78px] h-[60px] md:h-[78px] bg-white/40 rounded-full flex items-center justify-center relative">
                <img src="/svg/icon-email.svg" alt="Email" class="w-[35px] md:w-[50px] h-[35px] md:h-[50px] relative z-10" style="filter: brightness(0) invert(1);" />
              </div>
            </div>
            <div class="flex flex-col gap-1 text-white flex-1 w-full pr-3 md:pr-5">
              <p class="font-bold text-[14px] md:text-lg tracking-[0.05em] m-0">E-mail</p>
              <p class="font-bold text-[16px] md:text-3xl tracking-[0.05em] m-0 break-all">felipe.kenji@hotmail.com</p>
              <p class="font-normal text-[10px] md:text-xs tracking-[0.05em] m-0">Resposta em até 24 horas</p>
            </div>
          </div>

          <!-- Localização -->
          <div class="flex flex-row items-center gap-0 bg-white/25 border border-white/60 rounded-[15px] md:rounded-[20px] p-[8px] md:p-[10px] h-[100px] md:h-[132px] backdrop-blur-lg transition-all duration-300 ease-in-out hover:bg-white/35 hover:-translate-x-1 text-left">
            <div class="flex items-center justify-center w-[90px] md:w-[142px] h-[90px] md:h-[120px] relative flex-shrink-0">
              <div class="w-[60px] md:w-[78px] h-[60px] md:h-[78px] bg-white/40 rounded-full flex items-center justify-center relative">
                <img src="/svg/icon-adress.svg" alt="Localização" class="w-[35px] md:w-[50px] h-[35px] md:h-[50px] relative z-10" style="filter: brightness(0) invert(1);" />
              </div>
            </div>
            <div class="flex flex-col gap-1 text-white flex-1 w-full pr-3 md:pr-5">
              <p class="font-bold text-[14px] md:text-lg tracking-[0.05em] m-0">Localização</p>
              <p class="font-bold text-[20px] md:text-3xl tracking-[0.05em] m-0">Campinas/SP</p>
              <p class="font-normal text-[10px] md:text-xs tracking-[0.05em] m-0">Atendemos em todo o <strong class="font-bold">MUNDO!</strong></p>
            </div>
          </div>
        </div>
      </div>

      <!-- Contact Form Section -->
      <div class="relative max-w-4xl mx-auto mt-12 md:mt-24 pb-12 md:pb-20">
        <!-- Form Container -->
        <div class="form-wrapper relative">
          <!-- Form Background -->
          <div class="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-2xl md:rounded-3xl"></div>
          <div class="relative bg-white/10 backdrop-blur-md rounded-2xl md:rounded-3xl p-6 md:p-12 border border-white/20">
            <form id="contact-form" ref="formRef" class="space-y-4 md:space-y-8" @submit.prevent="submitForm">
              <!-- Grid Fields -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <!-- Nome -->
                <div class="form-group">
                  <label for="nome" class="form-label block text-sm font-semibold text-white mb-2">Nome Completo *</label>
                  <div class="relative">
                    <input
                      type="text"
                      id="nome"
                      name="user_name"
                      v-model="form.name"
                      class="form-input w-full px-4 py-3 pr-12 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:ring-2 focus:ring-white focus:border-transparent backdrop-blur-sm transition-all duration-300"
                      placeholder="Seu nome completo"
                      required>
                    <div class="absolute inset-y-0 right-0 flex items-center pr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-5 h-5 text-white/60">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                    </div>
                  </div>
                </div>

                <!-- Empresa -->
                <div class="form-group">
                  <label for="empresa" class="form-label block text-sm font-semibold text-white mb-2">Empresa</label>
                  <div class="relative">
                    <input
                      type="text"
                      id="empresa"
                      name="company"
                      v-model="form.company"
                      class="form-input w-full px-4 py-3 pr-12 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:ring-2 focus:ring-white focus:border-transparent backdrop-blur-sm transition-all duration-300"
                      placeholder="Nome da sua empresa">
                    <div class="absolute inset-y-0 right-0 flex items-center pr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-5 h-5 text-white/60">
                        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                        <polyline points="9 22 9 12 15 12 15 22"></polyline>
                      </svg>
                    </div>
                  </div>
                </div>

                <!-- Email -->
                <div class="form-group">
                  <label for="email" class="form-label block text-sm font-semibold text-white mb-2">E-mail *</label>
                  <div class="relative">
                    <input
                      type="email"
                      id="email"
                      name="user_email"
                      v-model="form.email"
                      class="form-input w-full px-4 py-3 pr-12 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:ring-2 focus:ring-white focus:border-transparent backdrop-blur-sm transition-all duration-300"
                      placeholder="seu@email.com"
                      required>
                    <div class="absolute inset-y-0 right-0 flex items-center pr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-5 h-5 text-white/60">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </div>
                  </div>
                </div>

                <!-- Telefone -->
                <div class="form-group">
                  <label for="telefone" class="form-label block text-sm font-semibold text-white mb-2">Telefone *</label>
                  <div class="relative">
                    <input
                      type="tel"
                      id="telefone"
                      name="phone"
                      v-model="form.phone"
                      class="form-input w-full px-4 py-3 pr-12 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:ring-2 focus:ring-white focus:border-transparent backdrop-blur-sm transition-all duration-300"
                      placeholder="(11) 99999-9999"
                      maxlength="15"
                      required>
                    <div class="absolute inset-y-0 right-0 flex items-center pr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-5 h-5 text-white/60">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Serviço -->
              <div class="form-group">
                <label for="servico" class="form-label block text-sm font-semibold text-white mb-2">Serviço de Interesse</label>
                <select
                  id="servico"
                  name="service"
                  v-model="form.service"
                  class="form-select w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:ring-2 focus:ring-white focus:border-transparent backdrop-blur-sm transition-all duration-300 appearance-none">
                  <option value="" class="text-gray-900">Selecione um serviço</option>
                  <option value="Design de Interfaces" class="text-gray-900">Design de Interfaces</option>
                  <option value="Desenvolvimento Web" class="text-gray-900">Desenvolvimento Web</option>
                  <option value="Consultoria Digital" class="text-gray-900">Consultoria Digital</option>
                  <option value="Automação de Processos" class="text-gray-900">Automação de Processos</option>
                  <option value="Marketing Digital" class="text-gray-900">Marketing Digital</option>
                  <option value="Outros Serviços" class="text-gray-900">Outros</option>
                </select>
              </div>

              <!-- Mensagem -->
              <div class="form-group">
                <label for="mensagem" class="form-label block text-sm font-semibold text-white mb-2">Mensagem *</label>
                <textarea
                  id="mensagem"
                  name="message"
                  v-model="form.message"
                  class="form-textarea w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:ring-2 focus:ring-white focus:border-transparent backdrop-blur-sm transition-all duration-300 resize-none"
                  placeholder="Descreva suas necessidades ou dúvidas..."
                  rows="6"
                  required></textarea>
              </div>

              <!-- Success Message -->
              <div
                v-if="showSuccessMessage"
                class="p-4 rounded-lg bg-green-500/20 border border-green-500/50 backdrop-blur-sm animate-fade-in"
              >
                <div class="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <div>
                    <h3 class="text-green-400 font-semibold">Mensagem enviada com sucesso!</h3>
                    <p class="text-green-300 text-sm mt-1">Entrarei em contato em breve.</p>
                  </div>
                </div>
              </div>

              <!-- Error Message -->
              <div
                v-if="showErrorMessage"
                class="p-4 rounded-lg bg-red-500/20 border border-red-500/50 backdrop-blur-sm animate-fade-in"
              >
                <div class="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-400 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 class="text-red-400 font-semibold">Erro ao enviar mensagem</h3>
                    <p class="text-red-300 text-sm mt-1">{{ errorMessage }}</p>
                  </div>
                </div>
              </div>

              <!-- Submit Button -->
              <div class="form-actions">
                <button
                  type="submit"
                  :disabled="isSubmitting"
                  class="submit-button group relative w-full bg-white hover:bg-white/90 text-[#FF5A02] font-bold py-4 px-8 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg text-lg shadow-md overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed">
                  <!-- Button Background Effect -->
                  <div class="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <!-- Icon -->
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="w-6 h-6 inline mr-3 group-hover:rotate-12 transition-transform relative z-10">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                  <!-- Text -->
                  <span class="relative z-10">{{ isSubmitting ? 'ENVIANDO...' : 'ENVIAR MENSAGEM' }}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import emailjs from '@emailjs/browser'

// Form data
const form = ref({
  name: '',
  company: '',
  email: '',
  phone: '',
  service: '',
  message: ''
})

// Form reference for EmailJS
const formRef = ref(null)

// Submission state
const isSubmitting = ref(false)

// Message states
const showSuccessMessage = ref(false)
const showErrorMessage = ref(false)
const errorMessage = ref('')

// Form submission handler
const submitForm = async () => {
  isSubmitting.value = true
  showSuccessMessage.value = false
  showErrorMessage.value = false
  errorMessage.value = ''

  try {
    // Send email using EmailJS
    await emailjs.sendForm(
      'service_1xzxuqt',
      'template_6wlyhx9',
      formRef.value,
      'Dqa1q9GUlbK6NqH9r'
    )

    // Reset form
    form.value = {
      name: '',
      company: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    }

    // Show success message
    showSuccessMessage.value = true

    // Hide success message after 5 seconds
    setTimeout(() => {
      showSuccessMessage.value = false
    }, 5000)
  } catch (error) {
    console.error('EmailJS Error:', error) // Log the full error for debugging
    
    // Set error message based on error type
    if (error.text) {
      errorMessage.value = error.text
    } else if (error.message) {
      errorMessage.value = error.message
    } else {
      errorMessage.value = 'Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.'
    }

    // Show error message
    showErrorMessage.value = true

    // Hide error message after 5 seconds
    setTimeout(() => {
      showErrorMessage.value = false
      errorMessage.value = ''
    }, 5000)
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 0.3s ease-out forwards;
}
</style>
