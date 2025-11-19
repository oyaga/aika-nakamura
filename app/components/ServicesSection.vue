<template>
  <section class="relative w-full bg-[#151319] flex flex-col items-center justify-center py-20">
    <!-- Badge Title -->
    <div class="flex items-center gap-[14px] px-[10px] py-[10px] rounded-[10px] mb-10">
      <div class="w-[10px] h-[10px] rounded-full bg-white"></div>
      <h2 class="font-['Michroma'] text-white text-[16px] leading-normal">DIGITAL SERVICES</h2>
      <div class="h-[6px] w-[120px] bg-gradient-to-r from-white to-transparent"></div>
    </div>

    <!-- Cards Container -->
    <div class="max-w-[1375px] w-full px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
        <!-- Service Card: IA Assistente -->
        <div class="bg-gradient-to-b from-[#1a1410] to-[#0d0a08] rounded-[20px] p-[2px] relative group hover:transform hover:scale-[1.02] transition-all duration-300 border border-[#ff5a02]/20 hover:border-[#ff5a02]/50 hover:shadow-[0_0_30px_rgba(255,90,2,0.3)]">
          <div class="bg-gradient-to-b from-[#1a1410] to-[#0d0a08] rounded-[18px] p-[30px] h-full flex flex-col relative overflow-hidden inner-card">
            <!-- Grid Background -->
            <div class="absolute inset-0 opacity-20 rounded-[18px]" style="background-image: linear-gradient(rgba(255, 90, 2, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 90, 2, 0.1) 1px, transparent 1px); background-size: 20px 20px;"></div>

            <!-- Animated Neon Glow -->
            <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[18px] overflow-hidden">
              <div class="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#ff5a02] to-transparent animate-pulse"></div>
              <div class="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#ff5a02] to-transparent animate-pulse" style="animation-delay: 0.5s;"></div>
            </div>

            <!-- Corner decorations -->
            <div class="absolute top-[15px] left-[15px] w-[30px] h-[30px] border-l-2 border-t-2 border-[#ff5a02]/40 group-hover:border-[#ff5a02] transition-colors duration-300"></div>
            <div class="absolute top-[15px] right-[15px] w-[30px] h-[30px] border-r-2 border-t-2 border-[#ff5a02]/40 group-hover:border-[#ff5a02] transition-colors duration-300"></div>
            <div class="absolute bottom-[15px] left-[15px] w-[30px] h-[30px] border-l-2 border-b-2 border-[#ff5a02]/40 group-hover:border-[#ff5a02] transition-colors duration-300"></div>
            <div class="absolute bottom-[15px] right-[15px] w-[30px] h-[30px] border-r-2 border-b-2 border-[#ff5a02]/40 group-hover:border-[#ff5a02] transition-colors duration-300"></div>

            <!-- Status Badge -->
            <div class="flex items-center gap-[8px] mb-[25px]">
              <div class="w-[8px] h-[8px] rounded-full bg-[#00ff41] shadow-[0_0_10px_rgba(0,255,65,0.8)] animate-pulse"></div>
              <span class="text-[#00ff41] font-['Inter'] text-[12px] font-semibold tracking-wider">ONLINE</span>
            </div>

            <!-- Icon -->
            <div class="mb-[20px]">
              <div class="w-[80px] h-[80px] bg-[#ff5a02]/10 rounded-[15px] flex items-center justify-center backdrop-blur-sm border border-[#ff5a02]/20">
                <NuxtImg src="/svg/icon-ia-assistente.svg" alt="IA Assistente" class="w-[50px] h-[50px]" />
              </div>
            </div>

            <!-- Title -->
            <h3 class="text-white font-['Inter'] font-bold text-xl md:text-2xl lg:text-[26px] tracking-tight leading-tight mb-[15px]">IA ASSISTENTE</h3>

            <!-- Description -->
            <p class="text-gray-400 font-['Inter'] font-light text-[14px] leading-[1.6] mb-[25px] flex-grow">
              Assistente Digital personalizado para a sua empresa. Automatize o atendimento ao cliente e otimize tarefas diárias de forma inteligente e eficiente.
            </p>

            <!-- Features List -->
            <ul class="space-y-[8px] mb-[25px]">
              <li class="flex items-center gap-[10px] text-gray-300 text-[13px]">
                <span class="text-[#ff5a02]">•</span>
                <span>Automatize</span>
              </li>
              <li class="flex items-center gap-[10px] text-gray-300 text-[13px]">
                <span class="text-[#ff5a02]">•</span>
                <span>Atendimento 24h</span>
              </li>
              <li class="flex items-center gap-[10px] text-gray-300 text-[13px]">
                <span class="text-[#ff5a02]">•</span>
                <span>Otimização</span>
              </li>
            </ul>

            <!-- CTA Badges -->
            <div class="flex flex-wrap gap-[10px] mb-[20px]">
              <span class="px-[15px] py-[6px] bg-[#ff5a02]/10 border border-[#ff5a02]/30 rounded-[20px] text-[#ff5a02] text-[11px] font-semibold tracking-wide">AUTOMAÇÃO</span>
              <span class="px-[15px] py-[6px] bg-[#ff5a02]/10 border border-[#ff5a02]/30 rounded-[20px] text-[#ff5a02] text-[11px] font-semibold tracking-wide">IA</span>
            </div>

            <!-- Ideal para -->
            <div class="mt-auto pt-[15px] border-t border-[#ff5a02]/20">
              <p class="text-[#ff5a02] text-[10px] font-bold tracking-wider mb-[5px]">IDEAL PARA:</p>
              <p class="text-gray-400 text-[12px] italic">Empresas que buscam automatização</p>
            </div>
          </div>
        </div>

        <!-- Service Card: Web Designer -->
        <div class="bg-gradient-to-b from-[#1a1410] to-[#0d0a08] rounded-[20px] p-[2px] relative group hover:transform hover:scale-[1.02] transition-all duration-300 border border-[#ff5a02]/20 hover:border-[#ff5a02]/50 hover:shadow-[0_0_30px_rgba(255,90,2,0.3)]">
          <div class="bg-gradient-to-b from-[#1a1410] to-[#0d0a08] rounded-[18px] p-[30px] h-full flex flex-col relative overflow-hidden inner-card">
            <!-- Grid Background -->
            <div class="absolute inset-0 opacity-20 rounded-[18px]" style="background-image: linear-gradient(rgba(255, 90, 2, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 90, 2, 0.1) 1px, transparent 1px); background-size: 20px 20px;"></div>

            <!-- Animated Neon Glow -->
            <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[18px] overflow-hidden">
              <div class="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#ff5a02] to-transparent animate-pulse"></div>
              <div class="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#ff5a02] to-transparent animate-pulse" style="animation-delay: 0.5s;"></div>
            </div>

            <!-- Corner decorations -->
            <div class="absolute top-[15px] left-[15px] w-[30px] h-[30px] border-l-2 border-t-2 border-[#ff5a02]/40 group-hover:border-[#ff5a02] transition-colors duration-300"></div>
            <div class="absolute top-[15px] right-[15px] w-[30px] h-[30px] border-r-2 border-t-2 border-[#ff5a02]/40 group-hover:border-[#ff5a02] transition-colors duration-300"></div>
            <div class="absolute bottom-[15px] left-[15px] w-[30px] h-[30px] border-l-2 border-b-2 border-[#ff5a02]/40 group-hover:border-[#ff5a02] transition-colors duration-300"></div>
            <div class="absolute bottom-[15px] right-[15px] w-[30px] h-[30px] border-r-2 border-b-2 border-[#ff5a02]/40 group-hover:border-[#ff5a02] transition-colors duration-300"></div>

            <!-- Status Badge -->
            <div class="flex items-center gap-[8px] mb-[25px]">
              <div class="w-[8px] h-[8px] rounded-full bg-[#00ff41] shadow-[0_0_10px_rgba(0,255,65,0.8)] animate-pulse"></div>
              <span class="text-[#00ff41] font-['Inter'] text-[12px] font-semibold tracking-wider">ONLINE</span>
            </div>

            <!-- Icon -->
            <div class="mb-[20px]">
              <div class="w-[80px] h-[80px] bg-[#ff5a02]/10 rounded-[15px] flex items-center justify-center backdrop-blur-sm border border-[#ff5a02]/20">
                <NuxtImg src="/svg/icon-web-designer.svg" alt="Web Designer" class="w-[50px] h-[50px]" />
              </div>
            </div>

            <!-- Title -->
            <h3 class="text-white font-['Inter'] font-bold text-xl md:text-2xl lg:text-[26px] tracking-tight leading-tight mb-[15px]">WEB DESIGNER</h3>

            <!-- Description -->
            <p class="text-gray-400 font-['Inter'] font-light text-[14px] leading-[1.6] mb-[25px] flex-grow">
              Sites modernos, responsivos e otimizados para atrair e converter seus clientes.
            </p>

            <!-- Features List -->
            <ul class="space-y-[8px] mb-[25px]">
              <li class="flex items-center gap-[10px] text-gray-300 text-[13px]">
                <span class="text-[#ff5a02]">•</span>
                <span>Design Responsivo</span>
              </li>
              <li class="flex items-center gap-[10px] text-gray-300 text-[13px]">
                <span class="text-[#ff5a02]">•</span>
                <span>Foco em Conversão</span>
              </li>
              <li class="flex items-center gap-[10px] text-gray-300 text-[13px]">
                <span class="text-[#ff5a02]">•</span>
                <span>Alta Performance</span>
              </li>
            </ul>

            <!-- CTA Badges -->
            <div class="flex flex-wrap gap-[10px] mb-[20px]">
              <span class="px-[15px] py-[6px] bg-[#ff5a02]/10 border border-[#ff5a02]/30 rounded-[20px] text-[#ff5a02] text-[11px] font-semibold tracking-wide">RESPONSIVO</span>
              <span class="px-[15px] py-[6px] bg-[#ff5a02]/10 border border-[#ff5a02]/30 rounded-[20px] text-[#ff5a02] text-[11px] font-semibold tracking-wide">VENDAS</span>
            </div>

            <!-- Ideal para -->
            <div class="mt-auto pt-[15px] border-t border-[#ff5a02]/20">
              <p class="text-[#ff5a02] text-[10px] font-bold tracking-wider mb-[5px]">IDEAL PARA:</p>
              <p class="text-gray-400 text-[12px] italic">Empresas que precisam de presença online</p>
            </div>
          </div>
        </div>

        <!-- Service Card: Servidores -->
        <div class="bg-gradient-to-b from-[#1a1410] to-[#0d0a08] rounded-[20px] p-[2px] relative group hover:transform hover:scale-[1.02] transition-all duration-300 border border-[#ff5a02]/20 hover:border-[#ff5a02]/50 hover:shadow-[0_0_30px_rgba(255,90,2,0.3)]">
          <div class="bg-gradient-to-b from-[#1a1410] to-[#0d0a08] rounded-[18px] p-[30px] h-full flex flex-col relative overflow-hidden inner-card">
            <!-- Grid Background -->
            <div class="absolute inset-0 opacity-20 rounded-[18px]" style="background-image: linear-gradient(rgba(255, 90, 2, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 90, 2, 0.1) 1px, transparent 1px); background-size: 20px 20px;"></div>

            <!-- Animated Neon Glow -->
            <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[18px] overflow-hidden">
              <div class="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#ff5a02] to-transparent animate-pulse"></div>
              <div class="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#ff5a02] to-transparent animate-pulse" style="animation-delay: 0.5s;"></div>
            </div>

            <!-- Corner decorations -->
            <div class="absolute top-[15px] left-[15px] w-[30px] h-[30px] border-l-2 border-t-2 border-[#ff5a02]/40 group-hover:border-[#ff5a02] transition-colors duration-300"></div>
            <div class="absolute top-[15px] right-[15px] w-[30px] h-[30px] border-r-2 border-t-2 border-[#ff5a02]/40 group-hover:border-[#ff5a02] transition-colors duration-300"></div>
            <div class="absolute bottom-[15px] left-[15px] w-[30px] h-[30px] border-l-2 border-b-2 border-[#ff5a02]/40 group-hover:border-[#ff5a02] transition-colors duration-300"></div>
            <div class="absolute bottom-[15px] right-[15px] w-[30px] h-[30px] border-r-2 border-b-2 border-[#ff5a02]/40 group-hover:border-[#ff5a02] transition-colors duration-300"></div>

            <!-- Status Badge -->
            <div class="flex items-center gap-[8px] mb-[25px]">
              <div class="w-[8px] h-[8px] rounded-full bg-[#00ff41] shadow-[0_0_10px_rgba(0,255,65,0.8)] animate-pulse"></div>
              <span class="text-[#00ff41] font-['Inter'] text-[12px] font-semibold tracking-wider">ONLINE</span>
            </div>

            <!-- Icon -->
            <div class="mb-[20px]">
              <div class="w-[80px] h-[80px] bg-[#ff5a02]/10 rounded-[15px] flex items-center justify-center backdrop-blur-sm border border-[#ff5a02]/20">
                <NuxtImg src="/svg/icon-servidores.svg" alt="Servidores" class="w-[50px] h-[50px]" />
              </div>
            </div>

            <!-- Title -->
            <h3 class="text-white font-['Inter'] font-bold text-xl md:text-2xl lg:text-[26px] tracking-tight leading-tight mb-[15px]">SERVIDORES</h3>

            <!-- Description -->
            <p class="text-gray-400 font-['Inter'] font-light text-[14px] leading-[1.6] mb-[25px] flex-grow">
              Máxima velocidade (servidores NVMe) e segurança (SSL e Firewall), com gestão técnica completa. Você foca no seu negócio, eu cuido do Servidor.
            </p>

            <!-- Features List -->
            <ul class="space-y-[8px] mb-[25px]">
              <li class="flex items-center gap-[10px] text-gray-300 text-[13px]">
                <span class="text-[#ff5a02]">•</span>
                <span>Servidores NVMe</span>
              </li>
              <li class="flex items-center gap-[10px] text-gray-300 text-[13px]">
                <span class="text-[#ff5a02]">•</span>
                <span>SSL & Firewall</span>
              </li>
              <li class="flex items-center gap-[10px] text-gray-300 text-[13px]">
                <span class="text-[#ff5a02]">•</span>
                <span>Gestão Completa</span>
              </li>
            </ul>

            <!-- CTA Badges -->
            <div class="flex flex-wrap gap-[10px] mb-[20px]">
              <span class="px-[15px] py-[6px] bg-[#ff5a02]/10 border border-[#ff5a02]/30 rounded-[20px] text-[#ff5a02] text-[11px] font-semibold tracking-wide">SEGURANÇA</span>
              <span class="px-[15px] py-[6px] bg-[#ff5a02]/10 border border-[#ff5a02]/30 rounded-[20px] text-[#ff5a02] text-[11px] font-semibold tracking-wide">VELOCIDADE</span>
            </div>

            <!-- Ideal para -->
            <div class="mt-auto pt-[15px] border-t border-[#ff5a02]/20">
              <p class="text-[#ff5a02] text-[10px] font-bold tracking-wider mb-[5px]">IDEAL PARA:</p>
              <p class="text-gray-400 text-[12px] italic">Empresas que precisam de infraestrutura confiável</p>
            </div>
          </div>
        </div>

        <!-- Service Card: Designer Gráfico -->
        <div class="bg-gradient-to-b from-[#1a1410] to-[#0d0a08] rounded-[20px] p-[2px] relative group hover:transform hover:scale-[1.02] transition-all duration-300 border border-[#ff5a02]/20 hover:border-[#ff5a02]/50 hover:shadow-[0_0_30px_rgba(255,90,2,0.3)]">
          <div class="bg-gradient-to-b from-[#1a1410] to-[#0d0a08] rounded-[18px] p-[30px] h-full flex flex-col relative overflow-hidden inner-card">
            <!-- Grid Background -->
            <div class="absolute inset-0 opacity-20 rounded-[18px]" style="background-image: linear-gradient(rgba(255, 90, 2, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 90, 2, 0.1) 1px, transparent 1px); background-size: 20px 20px;"></div>

            <!-- Animated Neon Glow -->
            <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[18px] overflow-hidden">
              <div class="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#ff5a02] to-transparent animate-pulse"></div>
              <div class="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#ff5a02] to-transparent animate-pulse" style="animation-delay: 0.5s;"></div>
            </div>

            <!-- Corner decorations -->
            <div class="absolute top-[15px] left-[15px] w-[30px] h-[30px] border-l-2 border-t-2 border-[#ff5a02]/40 group-hover:border-[#ff5a02] transition-colors duration-300"></div>
            <div class="absolute top-[15px] right-[15px] w-[30px] h-[30px] border-r-2 border-t-2 border-[#ff5a02]/40 group-hover:border-[#ff5a02] transition-colors duration-300"></div>
            <div class="absolute bottom-[15px] left-[15px] w-[30px] h-[30px] border-l-2 border-b-2 border-[#ff5a02]/40 group-hover:border-[#ff5a02] transition-colors duration-300"></div>
            <div class="absolute bottom-[15px] right-[15px] w-[30px] h-[30px] border-r-2 border-b-2 border-[#ff5a02]/40 group-hover:border-[#ff5a02] transition-colors duration-300"></div>

            <!-- Status Badge -->
            <div class="flex items-center gap-[8px] mb-[25px]">
              <div class="w-[8px] h-[8px] rounded-full bg-[#00ff41] shadow-[0_0_10px_rgba(0,255,65,0.8)] animate-pulse"></div>
              <span class="text-[#00ff41] font-['Inter'] text-[12px] font-semibold tracking-wider">ONLINE</span>
            </div>

            <!-- Icon -->
            <div class="mb-[20px]">
              <div class="w-[80px] h-[80px] bg-[#ff5a02]/10 rounded-[15px] flex items-center justify-center backdrop-blur-sm border border-[#ff5a02]/20">
                <NuxtImg src="/svg/icon-design-grafico.svg" alt="Design Gráfico" class="w-[50px] h-[50px]" />
              </div>
            </div>

            <!-- Title -->
            <h3 class="text-white font-['Inter'] font-bold text-xl md:text-2xl lg:text-[26px] tracking-tight leading-tight mb-[15px]">DESIGN GRÁFICO</h3>

            <!-- Description -->
            <p class="text-gray-400 font-['Inter'] font-light text-[14px] leading-[1.6] mb-[25px] flex-grow">
              Logotipos, Identidade Visual completa (cores, tipografia) e materiais de divulgação que garantem que sua marca seja memorável e profissional.
            </p>

            <!-- Features List -->
            <ul class="space-y-[8px] mb-[25px]">
              <li class="flex items-center gap-[10px] text-gray-300 text-[13px]">
                <span class="text-[#ff5a02]">•</span>
                <span>Branding</span>
              </li>
              <li class="flex items-center gap-[10px] text-gray-300 text-[13px]">
                <span class="text-[#ff5a02]">•</span>
                <span>Identidade Visual</span>
              </li>
              <li class="flex items-center gap-[10px] text-gray-300 text-[13px]">
                <span class="text-[#ff5a02]">•</span>
                <span>Materiais de Divulgação</span>
              </li>
            </ul>

            <!-- CTA Badges -->
            <div class="flex flex-wrap gap-[10px] mb-[20px]">
              <span class="px-[15px] py-[6px] bg-[#ff5a02]/10 border border-[#ff5a02]/30 rounded-[20px] text-[#ff5a02] text-[11px] font-semibold tracking-wide">BRANDING</span>
              <span class="px-[15px] py-[6px] bg-[#ff5a02]/10 border border-[#ff5a02]/30 rounded-[20px] text-[#ff5a02] text-[11px] font-semibold tracking-wide">MEMORÁVEL</span>
              <span class="px-[15px] py-[6px] bg-[#ff5a02]/10 border border-[#ff5a02]/30 rounded-[20px] text-[#ff5a02] text-[11px] font-semibold tracking-wide">LOGO</span>
            </div>

            <!-- Ideal para -->
            <div class="mt-auto pt-[15px] border-t border-[#ff5a02]/20">
              <p class="text-[#ff5a02] text-[10px] font-bold tracking-wider mb-[5px]">IDEAL PARA:</p>
              <p class="text-gray-400 text-[12px] italic">Empresas que buscam uma identidade visual forte e profissional</p>
            </div>
          </div>
        </div>

        <!-- Service Card: Editor de Vídeo -->
        <div class="bg-gradient-to-b from-[#1a1410] to-[#0d0a08] rounded-[20px] p-[2px] relative group hover:transform hover:scale-[1.02] transition-all duration-300 border border-[#ff5a02]/20 hover:border-[#ff5a02]/50 hover:shadow-[0_0_30px_rgba(255,90,2,0.3)]">
          <div class="bg-gradient-to-b from-[#1a1410] to-[#0d0a08] rounded-[18px] p-[30px] h-full flex flex-col relative overflow-hidden inner-card">
            <!-- Grid Background -->
            <div class="absolute inset-0 opacity-20 rounded-[18px]" style="background-image: linear-gradient(rgba(255, 90, 2, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 90, 2, 0.1) 1px, transparent 1px); background-size: 20px 20px;"></div>

            <!-- Animated Neon Glow -->
            <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[18px] overflow-hidden">
              <div class="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#ff5a02] to-transparent animate-pulse"></div>
              <div class="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#ff5a02] to-transparent animate-pulse" style="animation-delay: 0.5s;"></div>
            </div>

            <!-- Corner decorations -->
            <div class="absolute top-[15px] left-[15px] w-[30px] h-[30px] border-l-2 border-t-2 border-[#ff5a02]/40 group-hover:border-[#ff5a02] transition-colors duration-300"></div>
            <div class="absolute top-[15px] right-[15px] w-[30px] h-[30px] border-r-2 border-t-2 border-[#ff5a02]/40 group-hover:border-[#ff5a02] transition-colors duration-300"></div>
            <div class="absolute bottom-[15px] left-[15px] w-[30px] h-[30px] border-l-2 border-b-2 border-[#ff5a02]/40 group-hover:border-[#ff5a02] transition-colors duration-300"></div>
            <div class="absolute bottom-[15px] right-[15px] w-[30px] h-[30px] border-r-2 border-b-2 border-[#ff5a02]/40 group-hover:border-[#ff5a02] transition-colors duration-300"></div>

            <!-- Status Badge -->
            <div class="flex items-center gap-[8px] mb-[25px]">
              <div class="w-[8px] h-[8px] rounded-full bg-[#00ff41] shadow-[0_0_10px_rgba(0,255,65,0.8)] animate-pulse"></div>
              <span class="text-[#00ff41] font-['Inter'] text-[12px] font-semibold tracking-wider">ONLINE</span>
            </div>

            <!-- Icon -->
            <div class="mb-[20px]">
              <div class="w-[80px] h-[80px] bg-[#ff5a02]/10 rounded-[15px] flex items-center justify-center backdrop-blur-sm border border-[#ff5a02]/20">
                <NuxtImg src="/svg/icon-editor-de-video.svg" alt="Editor de Vídeo" class="w-[50px] h-[50px]" />
              </div>
            </div>

            <!-- Title -->
            <h3 class="text-white font-['Inter'] font-bold text-xl md:text-2xl lg:text-[26px] tracking-tight leading-tight mb-[15px]">EDITOR DE VÍDEO</h3>

            <!-- Description -->
            <p class="text-gray-400 font-['Inter'] font-light text-[14px] leading-[1.6] mb-[25px] flex-grow">
              Vídeos com ritmo, trilha sonora licenciada e Motion Graphics (animações de texto) que prendem a atenção.
            </p>

            <!-- Features List -->
            <ul class="space-y-[8px] mb-[25px]">
              <li class="flex items-center gap-[10px] text-gray-300 text-[13px]">
                <span class="text-[#ff5a02]">•</span>
                <span>Engajamento</span>
              </li>
              <li class="flex items-center gap-[10px] text-gray-300 text-[13px]">
                <span class="text-[#ff5a02]">•</span>
                <span>Motion Graphics</span>
              </li>
              <li class="flex items-center gap-[10px] text-gray-300 text-[13px]">
                <span class="text-[#ff5a02]">•</span>
                <span>Trilha Sonora Licenciada</span>
              </li>
            </ul>

            <!-- CTA Badges -->
            <div class="flex flex-wrap gap-[10px] mb-[20px]">
              <span class="px-[15px] py-[6px] bg-[#ff5a02]/10 border border-[#ff5a02]/30 rounded-[20px] text-[#ff5a02] text-[11px] font-semibold tracking-wide">ENGAJAMENTO</span>
              <span class="px-[15px] py-[6px] bg-[#ff5a02]/10 border border-[#ff5a02]/30 rounded-[20px] text-[#ff5a02] text-[11px] font-semibold tracking-wide">MOTION</span>
              <span class="px-[15px] py-[6px] bg-[#ff5a02]/10 border border-[#ff5a02]/30 rounded-[20px] text-[#ff5a02] text-[11px] font-semibold tracking-wide">MARKETING</span>
            </div>

            <!-- Ideal para -->
            <div class="mt-auto pt-[15px] border-t border-[#ff5a02]/20">
              <p class="text-[#ff5a02] text-[10px] font-bold tracking-wider mb-[5px]">IDEAL PARA:</p>
              <p class="text-gray-400 text-[12px] italic">Criadores de conteúdo e empresas que buscam vídeos profissionais e engajadores</p>
            </div>
          </div>
        </div>

        <!-- Service Card: Google -->
        <div class="bg-gradient-to-b from-[#1a1410] to-[#0d0a08] rounded-[20px] p-[2px] relative group hover:transform hover:scale-[1.02] transition-all duration-300 border border-[#ff5a02]/20 hover:border-[#ff5a02]/50 hover:shadow-[0_0_30px_rgba(255,90,2,0.3)]">
          <div class="bg-gradient-to-b from-[#1a1410] to-[#0d0a08] rounded-[18px] p-[30px] h-full flex flex-col relative overflow-hidden inner-card">
            <!-- Grid Background -->
            <div class="absolute inset-0 opacity-20 rounded-[18px]" style="background-image: linear-gradient(rgba(255, 90, 2, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 90, 2, 0.1) 1px, transparent 1px); background-size: 20px 20px;"></div>

            <!-- Animated Neon Glow -->
            <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[18px] overflow-hidden">
              <div class="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#ff5a02] to-transparent animate-pulse"></div>
              <div class="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#ff5a02] to-transparent animate-pulse" style="animation-delay: 0.5s;"></div>
            </div>

            <!-- Corner decorations -->
            <div class="absolute top-[15px] left-[15px] w-[30px] h-[30px] border-l-2 border-t-2 border-[#ff5a02]/40 group-hover:border-[#ff5a02] transition-colors duration-300"></div>
            <div class="absolute top-[15px] right-[15px] w-[30px] h-[30px] border-r-2 border-t-2 border-[#ff5a02]/40 group-hover:border-[#ff5a02] transition-colors duration-300"></div>
            <div class="absolute bottom-[15px] left-[15px] w-[30px] h-[30px] border-l-2 border-b-2 border-[#ff5a02]/40 group-hover:border-[#ff5a02] transition-colors duration-300"></div>
            <div class="absolute bottom-[15px] right-[15px] w-[30px] h-[30px] border-r-2 border-b-2 border-[#ff5a02]/40 group-hover:border-[#ff5a02] transition-colors duration-300"></div>

            <!-- Status Badge -->
            <div class="flex items-center gap-[8px] mb-[25px]">
              <div class="w-[8px] h-[8px] rounded-full bg-[#00ff41] shadow-[0_0_10px_rgba(0,255,65,0.8)] animate-pulse"></div>
              <span class="text-[#00ff41] font-['Inter'] text-[12px] font-semibold tracking-wider">ONLINE</span>
            </div>

            <!-- Icon -->
            <div class="mb-[20px]">
              <div class="w-[80px] h-[80px] bg-[#ff5a02]/10 rounded-[15px] flex items-center justify-center backdrop-blur-sm border border-[#ff5a02]/20">
                <NuxtImg src="/svg/icon-google.svg" alt="Google" class="w-[50px] h-[50px]" />
              </div>
            </div>

            <!-- Title -->
            <h3 class="text-white font-['Inter'] font-bold text-xl md:text-2xl lg:text-[26px] tracking-tight leading-tight mb-[15px]">GOOGLE</h3>

            <!-- Description -->
            <p class="text-gray-400 font-['Inter'] font-light text-[14px] leading-[1.6] mb-[25px] flex-grow">
              Estratégias de SEO On-page e Otimização técnica para dominar o tráfego orgânico e superar a concorrência.
            </p>

            <!-- Features List -->
            <ul class="space-y-[8px] mb-[25px]">
              <li class="flex items-center gap-[10px] text-gray-300 text-[13px]">
                <span class="text-[#ff5a02]">•</span>
                <span>SEO On-page</span>
              </li>
              <li class="flex items-center gap-[10px] text-gray-300 text-[13px]">
                <span class="text-[#ff5a02]">•</span>
                <span>Otimização Técnica</span>
              </li>
              <li class="flex items-center gap-[10px] text-gray-300 text-[13px]">
                <span class="text-[#ff5a02]">•</span>
                <span>Tráfego Orgânico</span>
              </li>
            </ul>

            <!-- CTA Badges -->
            <div class="flex flex-wrap gap-[10px] mb-[20px]">
              <span class="px-[15px] py-[6px] bg-[#ff5a02]/10 border border-[#ff5a02]/30 rounded-[20px] text-[#ff5a02] text-[11px] font-semibold tracking-wide">GOOGLE</span>
              <span class="px-[15px] py-[6px] bg-[#ff5a02]/10 border border-[#ff5a02]/30 rounded-[20px] text-[#ff5a02] text-[11px] font-semibold tracking-wide">TRÁFEGO ORGÂNICO</span>
              <span class="px-[15px] py-[6px] bg-[#ff5a02]/10 border border-[#ff5a02]/30 rounded-[20px] text-[#ff5a02] text-[11px] font-semibold tracking-wide">SEO</span>
            </div>

            <!-- Ideal para -->
            <div class="mt-auto pt-[15px] border-t border-[#ff5a02]/20">
              <p class="text-[#ff5a02] text-[10px] font-bold tracking-wider mb-[5px]">IDEAL PARA:</p>
              <p class="text-gray-400 text-[12px] italic">Empresas que buscam visibilidade e tráfego orgânico no Google</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// No script needed for this static implementation
</script>

<style scoped>
/* Animação de pulso neon */
@keyframes neon-pulse {
  0%, 100% {
    box-shadow: 0 0 20px rgba(255, 90, 2, 0.3);
  }
  50% {
    box-shadow: 0 0 40px rgba(255, 90, 2, 0.6);
  }
}

/* Efeito de scan line animado */
@keyframes scan-line {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(100%);
  }
}

.group:hover .inner-card::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(transparent, rgba(255, 90, 2, 0.1), transparent);
  animation: scan-line 2s linear infinite;
  pointer-events: none;
}
</style>
