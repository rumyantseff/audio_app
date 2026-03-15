<template>
  <div class="relative rounded-2xl overflow-hidden bg-primary-gradient min-h-[220px] flex items-center">
    <!-- Background decorative circles -->
    <div class="absolute top-[-60px] right-[-60px] w-64 h-64 rounded-full opacity-10" style="background: #c0faff" />
    <div class="absolute bottom-[-80px] right-[120px] w-48 h-48 rounded-full opacity-10" style="background: #c0faff" />

    <!-- Content -->
    <div class="relative z-10 flex flex-col md:flex-row items-center gap-8 w-full px-8 py-8">
      <!-- Text block -->
      <div class="flex-1">
        <p class="text-tertiary text-xs font-semibold tracking-widest uppercase mb-2">Featured</p>
        <h1 class="text-font-tertiary font-bold text-3xl lg:text-5xl leading-tight">Catch a vibe,</h1>
        <h1 class="text-tertiary font-bold text-3xl lg:text-5xl leading-tight">find yours.</h1>
        <p class="text-font-tertiary/70 text-sm mt-3 max-w-sm">
          Discover new music, follow your favourite artists and build your perfect playlist.
        </p>
        <button
          type="button"
          class="mt-6 px-6 py-2.5 rounded-full bg-quanterary text-white text-sm font-semibold hover:opacity-90 transition-opacity shadow-app"
        >
          <i class="mdi mdi-play-circle mr-2" />
          Start listening
        </button>
      </div>

      <!-- Floating album covers -->
      <div class="hidden lg:flex items-end gap-4 pr-4">
        <div class="banner-cover banner-float-1 rounded-2xl overflow-hidden shadow-app w-32 h-32 rotate-[-6deg]" style="border: 2px solid rgba(192,250,255,0.3)">
          <img src="/photo-1611773951410-3099ecbfd5ea.jpg" alt="cover" class="banner-cover-img w-full h-full object-cover" />
          <div class="banner-cover-overlay" />
        </div>
        <div class="banner-cover banner-float-2 rounded-2xl overflow-hidden shadow-app w-40 h-40" style="border: 2px solid rgba(192,250,255,0.3)">
          <img src="/kratos-avatar.jpg" alt="cover" class="banner-cover-img w-full h-full object-cover" />
          <div class="banner-cover-overlay" />
        </div>
        <div class="banner-cover banner-float-3 rounded-2xl overflow-hidden shadow-app w-28 h-28 rotate-[5deg]" style="border: 2px solid rgba(192,250,255,0.3)">
          <img src="/photo-1611773951410-3099ecbfd5ea.jpg" alt="cover" class="banner-cover-img w-full h-full object-cover" />
          <div class="banner-cover-overlay" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes float1 {
  0%, 100% { transform: translateY(16px) rotate(-6deg); }
  50%       { transform: translateY(0px)  rotate(-6deg); }
}
@keyframes float2 {
  0%, 100% { transform: translateY(0px);  }
  50%       { transform: translateY(-14px); }
}
@keyframes float3 {
  0%, 100% { transform: translateY(8px)  rotate(5deg); }
  50%       { transform: translateY(-6px) rotate(5deg); }
}

.banner-float-1 { animation: float1 4s ease-in-out infinite; }
.banner-float-2 { animation: float2 5s ease-in-out infinite 0.6s; }
.banner-float-3 { animation: float3 4.5s ease-in-out infinite 1.2s; }

/* Hover efekt */
.banner-cover {
  position: relative;
  cursor: pointer;
  transition: transform 1.2s ease, box-shadow 1.2s ease, border-color 1.2s ease;
}
.banner-cover:hover {
  transform: scale(1.06) rotate(0deg) !important;
  box-shadow: 0 12px 30px rgba(13, 74, 86, 0.25);
  border-color: rgba(192, 250, 255, 0.6) !important;
  z-index: 10;
}
.banner-cover-img {
  transition: transform 1.2s ease;
}
.banner-cover:hover .banner-cover-img {
  transform: scale(1.04);
}
.banner-cover-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(192,250,255,0.08), rgba(13,74,86,0.12));
  opacity: 0;
  transition: opacity 1.2s ease;
}
.banner-cover:hover .banner-cover-overlay {
  opacity: 1;
}
</style>
