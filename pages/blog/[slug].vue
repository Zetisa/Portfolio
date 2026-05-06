<script setup>
const route = useRoute()
const router = useRouter() // Tambahin ini buat handle navigasi balik

// Logic Balik ke Halaman Sebelumnya
const goBack = () => {
  router.back()
}

// Query data artikel
const { data: post } = await useAsyncData(`content-${route.path}`, () => {
  return queryCollection('blog').path(route.path).first()
})

// Logic Read Time (200 kata/menit)
const readingTime = computed(() => {
  if (!post.value || !post.value.body) return '1 min'
  const content = JSON.stringify(post.value.body)
  const words = content.split(/\s+/g).length
  const minutes = Math.ceil(words / 200)
  return `${minutes} min read`
})

const scrollToHeading = (id) => {
  const element = document.getElementById(id)
  if (element) {
    window.scrollTo({ top: element.offsetTop - 100, behavior: 'smooth' })
  }
}
</script>

<template>
  <div class="min-h-screen bg-white text-black selection:bg-black selection:text-white font-sans">
    
    <!-- STICKY NAVBAR -->
    <header class="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b-2 border-black/5 px-8 md:px-16 py-4">
      <div class="max-w-[1600px] mx-auto flex justify-between items-center">
        <!-- GANTI NUXTLINK KE BUTTON -->
        <button @click="goBack" class="group flex items-center gap-2 font-black uppercase text-[10px] tracking-widest outline-none">
          <span class="group-hover:-translate-x-1 transition-transform">←</span> Back to Base
        </button>
        
        <div class="hidden md:block">
          <p class="text-[9px] font-black uppercase opacity-20 text-center tracking-[0.4em]">Current Reading</p>
          <p class="text-[10px] font-bold uppercase italic truncate max-w-[300px]">{{ post?.title }}</p>
        </div>
        
        <div class="flex gap-6 items-center">
          <a href="#" class="text-[10px] font-black uppercase border-b border-black">GH</a>
          <a href="#" class="text-[10px] font-black uppercase border-b border-black">LI</a>
        </div>
      </div>
    </header>

    <div class="p-10 md:p-20 lg:p-24 pt-32 md:pt-44">
      <div class="max-w-[1600px] mx-auto">
        <main v-if="post" class="grid grid-cols-1 lg:grid-cols-12 gap-16 xl:gap-32">
          
          <!-- LEFT META -->
          <aside class="lg:col-span-2 hidden lg:block">
            <div class="sticky top-32 text-right pr-12 border-r-2 border-black/5 space-y-12">
              <div>
                <p class="text-[9px] font-black uppercase opacity-20 tracking-[0.3em] mb-2">Duration</p>
                <p class="text-sm font-black uppercase italic leading-none">{{ readingTime }}</p>
              </div>
              <div>
                <p class="text-[9px] font-black uppercase opacity-20 tracking-[0.3em] mb-2">Ref Date</p>
                <p class="text-sm font-black uppercase italic leading-none">{{ post.date }}</p>
              </div>
            </div>
          </aside>

          <!-- MAIN ARTICLE -->
          <article class="lg:col-span-7 text-black">
            <h1 class="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-20 text-black">
              {{ post.title }}
            </h1>
            <div class="border-t-[16px] border-black pt-20">
              <ContentRenderer :value="post" class="markdown-content max-w-4xl text-black" />
            </div>
            <footer class="mt-32 pt-12 border-t-2 border-black flex justify-between items-end text-black">
              <p class="text-xs font-black uppercase opacity-30 italic">Document Complete</p>
              <p class="text-xl font-black uppercase italic">Joel Axl W.</p>
            </footer>
          </article>

          <!-- RIGHT TOC -->
          <aside class="lg:col-span-3 hidden lg:block h-fit sticky top-32">
            <div class="pl-4">
              <h4 class="text-[11px] font-black uppercase mb-10 tracking-[0.4em] opacity-30 italic">Outline</h4>
              <nav v-if="post.body?.toc?.links" class="space-y-6">
                <div v-for="link in post.body.toc.links" :key="link.id">
                  <a :href="`#${link.id}`" @click.prevent="scrollToHeading(link.id)"
                    class="group block text-xs font-black uppercase tracking-tight transition-all hover:translate-x-2 text-black">
                    <span class="opacity-0 group-hover:opacity-100 transition-opacity mr-2">/</span> {{ link.text }}
                  </a>
                </div>
              </nav>
            </div>
          </aside>
        </main>
      </div>
    </div>
  </div>
</template>

<style>
.markdown-content p { @apply text-xl leading-[1.8] mb-12 font-medium text-gray-800 tracking-tight; }

/* HIGHLIGHT ABU SEMI-TRANSPARAN */
.markdown-content strong { 
  font-weight: 600; 
  background-color: rgba(0, 0, 0, 0.07);
  padding: 0.1em 0.4em;
  border-radius: 2px;
  @apply tracking-normal text-black;
}

.markdown-content h2 { @apply text-4xl md:text-5xl font-black uppercase tracking-tighter mt-32 mb-10 leading-none border-b-4 border-black inline-block text-black; }
.markdown-content pre { @apply bg-black text-white p-10 my-16 border-l-[24px] border-gray-700 text-base overflow-x-auto shadow-2xl; }
.markdown-content ul li { @apply relative pl-10 text-xl font-bold uppercase italic mb-6 text-black; }
.markdown-content ul li::before { content: "//"; @apply absolute left-0 font-black text-black opacity-20; }
</style>