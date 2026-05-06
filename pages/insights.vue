<script setup>
const router = useRouter()
// Langsung tembak ke root biar gak kejebak looping history
const goToProfile = () => { router.push('/') }

const { data: insights } = await useAsyncData('insights', () => {
  return queryCollection('blog').where('category', '=', 'blog').all()
})
</script>

<template>
  <div class="min-h-screen bg-white text-black selection:bg-black selection:text-white font-sans flex flex-col scroll-smooth">
    
    <nav class="fixed top-0 left-0 w-full z-50 px-8 md:px-16 lg:px-24 py-10 flex justify-between items-center bg-white/90 backdrop-blur-md border-b border-black/10">
      <!-- Ganti goBack jadi goToProfile -->
      <button @click="goToProfile" class="group flex items-center gap-4 outline-none">
        <span class="text-2xl transition-transform group-hover:-translate-x-2">←</span>
        <span class="font-black uppercase tracking-[0.3em] text-[11px]">Back to Profile</span>
      </button>
      
      <div class="flex gap-16 font-black uppercase text-[12px] tracking-[0.4em]">
        <NuxtLink to="/work" class="opacity-40 hover:opacity-100 hover:italic transition-all">Work</NuxtLink>
        <NuxtLink to="/insights" class="italic border-b-2 border-black">Insights</NuxtLink>
      </div>
    </nav>

    <main class="flex-grow pt-60 pb-48 px-8 md:px-16 lg:px-24">
      <div class="max-w-[1440px] mx-auto">
        <header class="mb-32 space-y-8">
          <h1 class="text-7xl md:text-9xl font-black uppercase tracking-tighter leading-none italic">
            Technical Insights
          </h1>
          <p class="text-[11px] font-black uppercase tracking-[0.6em] opacity-60 italic text-black">
            // Documentation of Process & Learnings
          </p>
        </header>

        <div class="space-y-32">
          <NuxtLink v-for="post in insights" :key="post.path" :to="post.path" class="group block max-w-5xl">
            <div class="space-y-6 text-black">
              <p class="text-[11px] font-black uppercase tracking-widest opacity-40">{{ post.date }}</p>
              <h2 class="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] group-hover:italic transition-all duration-300 text-black">
                {{ post.title }}
              </h2>
              <p class="text-xl md:text-2xl font-medium text-gray-700 leading-relaxed max-w-3xl group-hover:text-black transition-colors">
                {{ post.description }}
              </p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </main>
    
    <footer class="px-8 md:px-16 lg:px-24 py-16 bg-white border-t border-black/10 mt-auto">
      <div class="max-w-[1440px] mx-auto flex justify-between items-center opacity-40 italic font-black text-[10px] uppercase tracking-widest text-black">
        <span>Jakarta, 2026</span>
        <span>Joel Axl W. // IS @ UMN</span>
      </div>
    </footer>
  </div>
</template>