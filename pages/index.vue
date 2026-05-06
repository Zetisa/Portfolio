<script setup>
import { ref, onMounted } from 'vue'

const activeSection = ref('intro')
let isManualScrolling = false

const observerOptions = {
  root: null,
  rootMargin: '0px 0px -20% 0px', 
  threshold: 0, 
}

const handleIntersect = (entries) => {
  if (isManualScrolling) return 

  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      activeSection.value = entry.target.id
      entry.target.classList.add('opacity-100', 'translate-y-0')
      entry.target.classList.remove('opacity-10', 'translate-y-5')
    } else {
      entry.target.classList.add('opacity-10', 'translate-y-5')
      entry.target.classList.remove('opacity-100', 'translate-y-0')
    }
  })
}

const scrollToSection = (id) => {
  isManualScrolling = true
  activeSection.value = id
  
  const el = document.getElementById(id)
  if (el) {
    document.querySelectorAll('.scroll-section').forEach(s => {
      if (s.id === id) {
        s.classList.add('opacity-100', 'translate-y-0')
        s.classList.remove('opacity-10', 'translate-y-5')
      }
    })
    
    el.scrollIntoView({ behavior: 'smooth' })
  }

  setTimeout(() => {
    isManualScrolling = false
  }, 800)
}

onMounted(() => {
  const observer = new IntersectionObserver(handleIntersect, observerOptions)
  document.querySelectorAll('.scroll-section').forEach((section) => {
    observer.observe(section)
  })
})
</script>

<template>
  <div class="min-h-screen bg-white text-black selection:bg-black selection:text-white font-sans flex flex-col scroll-smooth">
    
    <!-- TOP NAVBAR -->
    <nav class="fixed top-0 left-0 w-full z-50 px-8 md:px-16 lg:px-24 py-10 flex justify-start items-center bg-white/90 backdrop-blur-md border-b border-black/10">
      <div class="flex gap-16 font-black uppercase text-[12px] tracking-[0.4em]">
        <NuxtLink to="/work" class="hover:italic transition-all">Work</NuxtLink>
        <NuxtLink to="/insights" class="hover:italic transition-all">Insights</NuxtLink>
      </div>
    </nav>

    <!-- MAIN CONTENT -->
    <main class="flex-grow pt-64 pb-48 px-8 md:px-16 lg:px-24">
      <div class="max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        
        <!-- SIDEBAR NAVIGATION -->
        <aside class="hidden lg:block lg:col-span-2 sticky top-64 h-fit -ml-12">
          <nav class="flex flex-col gap-10">
            <a v-for="link in ['intro', 'vitals', 'technical', 'objective', 'tools']" 
               :key="link"
               :href="`#${link}`" 
               @click.prevent="scrollToSection(link)"
               :class="activeSection === link ? 'opacity-100 scale-105 font-black italic' : 'opacity-20 font-bold'"
               class="text-[12px] uppercase tracking-[0.3em] transition-all duration-300 origin-left cursor-pointer">
               {{ link.charAt(0).toUpperCase() + link.slice(1) }}
            </a>
          </nav>
        </aside>

        <!-- NARRATIVE AREA -->
        <div class="lg:col-span-10 space-y-64 text-black">
          
          <!-- INTRO SECTION -->
          <header id="intro" class="scroll-section scroll-mt-40 opacity-10 translate-y-5 transition-all duration-300 ease-out space-y-16">
            <h1 class="text-7xl md:text-9xl font-black uppercase tracking-tighter leading-none italic text-black">
              Hi, I am Joel.
            </h1>
            <p class="text-3xl md:text-6xl font-medium tracking-tight leading-[1.1] text-gray-900 max-w-6xl">
              An Information Systems student at <span class="text-black font-bold">UMN</span> currently diving deep into 
              <span class="custom-highlight italic text-black">Aviation Cybersecurity</span> as a Data Scientist Intern at AirNav Indonesia.
            </p>
          </header>

          <!-- BACKGROUND SECTION -->
          <article id="vitals" class="scroll-section scroll-mt-40 opacity-10 translate-y-5 transition-all duration-300 ease-out space-y-12">
            <h2 class="text-[11px] font-black uppercase tracking-[0.6em] opacity-60 italic text-black">// Vitals</h2>
            <div class="text-2xl md:text-4xl leading-relaxed text-gray-800 font-medium space-y-12 max-w-5xl text-justify text-black">
              <p>
                Currently in my 6th semester at <strong class="text-black font-bold">Universitas Multimedia Nusantara</strong>. I have evolved from learning programming fundamentals in Java and Python to mastering the bridge between business processes and technical systems.
              </p>
              <p>
                My academic path has shifted heavily toward the <strong class="text-black font-bold">Data & AI track</strong>, diving deep into Machine Learning and Deep Learning. I specialize in being a "translator"—turning complex business requirements into scalable, data-driven systems.
              </p>
            </div>
          </article>

          <!-- Technical Deep Dive -->
          <article id="technical" class="scroll-section scroll-mt-40 opacity-10 translate-y-5 transition-all duration-300 ease-out space-y-12">
            <h2 class="text-[11px] font-black uppercase tracking-[0.6em] opacity-60 italic text-black">// Technical Deep Dive</h2>
            <div class="text-2xl md:text-4xl leading-relaxed text-gray-800 font-medium space-y-12 max-w-5xl text-black">
              <p>
                Right now, my research focus is building an anomaly detection framework to catch <strong class="text-black font-bold">ADS-B cyber threats</strong>—like spoofing or jamming—to keep our skies safe.
              </p>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-12 py-8">
                <div class="space-y-4 border-l-2 border-black pl-8">
                  <p class="text-sm font-black uppercase opacity-40">Staging Phase</p>
                  <p class="text-3xl font-black">77M Records</p>
                  <p class="text-lg opacity-60 font-medium">I used open-source telemetry from <span class="italic font-bold">adsblol</span> for the initial framework validation.</p>
                </div>
                <div class="space-y-4 border-l-2 border-black pl-8">
                  <p class="text-sm font-black uppercase opacity-40">Case Study (CGK)</p>
                  <p class="text-3xl font-black">235M Records</p>
                  <p class="text-lg opacity-60 font-medium">Tested directly with real AirNav data for an extensive case study on the Soekarno-Hatta airspace.</p>
                </div>
              </div>
              <p>
                I’m applying a <span class="custom-highlight text-black">Hybrid Autoencoder & Isolation Forest</span> approach to catch subtle discrepancies that standard models usually miss.
              </p>
            </div>
          </article>

          <!-- Objective -->
          <article id="objective" class="scroll-section scroll-mt-40 opacity-10 translate-y-5 transition-all duration-300 ease-out space-y-12">
            <h2 class="text-[11px] font-black uppercase tracking-[0.6em] opacity-60 italic text-black">// Objective</h2>
            <div class="text-2xl md:text-4xl leading-relaxed text-gray-800 font-medium space-y-12 max-w-5xl text-black">
              <p>
                My goal is simple: I want to blend heavy data engineering with modern web ecosystems.
              </p>
              <p>
                I believe complex research findings should be easy to access. That’s why I use <strong class="text-black font-bold">Nuxt 3</strong> and <strong class="text-black">Tailwind CSS</strong> to build platforms that turn massive datasets into intuitive visual experiences.
              </p>
            </div>
          </article>

          <!-- TOOLS I USE -->
          <article id="tools" class="scroll-section scroll-mt-40 opacity-10 translate-y-5 transition-all duration-300 ease-out space-y-12">
            <h2 class="text-[11px] font-black uppercase tracking-[0.6em] opacity-60 italic text-black">// Technical Stack</h2>
            <div class="text-xl md:text-2xl leading-relaxed text-gray-800 font-medium space-y-12 max-w-6xl">
              <div class="space-y-4 text-black">
                <p class="font-black uppercase tracking-widest text-sm opacity-40">AI-Augmented Research</p>
                <ul class="space-y-2">
                  <li><span class="opacity-50">Agents & Coding:</span> Hermes · Codex · OpenClaude</li>
                  <li><span class="opacity-50">General Purpose:</span> ChatGPT · Gemini</li>
                  <li><span class="opacity-50">Search & Retrieval:</span> Exa · Perplexity · Kimi</li>
                  <li><span class="opacity-50">Knowledge Synthesis:</span> NotebookLM</li>
                </ul>
              </div>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8 text-black">
                <div class="space-y-4">
                  <p class="font-black uppercase tracking-widest text-sm opacity-40">Data Science & Development</p>
                  <p class="leading-relaxed">Python · SQL · Nuxt 3 · Tailwind CSS · Git · Linux · Windows</p>
                </div>
                <div class="space-y-4">
                  <p class="font-black uppercase tracking-widest text-sm opacity-40">Workspace & Engineering</p>
                  <p class="leading-relaxed">VS Code · Jupyter Notebook · Anaconda · Figma · Miro</p>
                </div>
              </div>
              <div class="pt-16">
                <NuxtLink to="/work" class="group inline-flex items-center gap-6 border-b-4 border-black pb-4 font-black uppercase text-lg tracking-[0.2em] hover:italic transition-all">
                  Explore Research <span class="group-hover:translate-x-4 transition-transform">→</span>
                </NuxtLink>
              </div>
            </div>
          </article>

        </div>
      </div>
    </main>

    <!-- FOOTER -->
    <footer class="px-8 md:px-16 lg:px-24 py-20 bg-white border-t border-black/10 mt-auto">
      <div class="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-12 text-black">
        <div class="space-y-4 text-black">
          <h2 class="text-4xl font-black uppercase tracking-tighter italic">Joel Axl W.</h2>
          <p class="text-[10px] font-black uppercase tracking-[0.3em] opacity-50 text-black">Information Systems Student @ UMN // Data Scientist Intern</p>
        </div>
        <div class="flex flex-col md:items-end gap-6 font-black uppercase text-[11px] tracking-widest text-black">
          <div class="flex gap-12 italic border-b border-black/10 pb-4">
            <a href="https://github.com/zetisa" target="_blank" class="hover:opacity-50 transition-opacity">GitHub</a>
            <a href="https://linkedin.com/in/joelaxl" target="_blank" class="hover:opacity-50 transition-opacity">LinkedIn</a>
          </div>
          <span class="opacity-40">Jakarta, 2026</span>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.custom-highlight { font-weight: 700; background-color: rgba(0, 0, 0, 0.05); padding: 0.1em 0.3em; }
.scroll-section { will-change: opacity, transform; }
</style>