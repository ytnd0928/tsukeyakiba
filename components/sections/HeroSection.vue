<template>
  <section id="top" class="hero-section">
    <!-- 背景パーティクル -->
    <div class="particles-container">
      <div
        v-for="i in 50"
        :key="i"
        class="particle"
        :style="getParticleStyle(i)"
      />
    </div>

    <!-- グラデーション背景 -->
    <div class="hero-gradient" />

    <v-container class="hero-content">
      <v-row align="center" justify="center" class="min-height-screen">
        <v-col cols="12" md="10" lg="8" class="text-center">
          <!-- メインタイトル -->
          <h1 class="hero-title animate-fadeInUp">
            TSUKEYAKIBA
            <span class="gradient-text">Production</span>
          </h1>

          <!-- サブタイトル -->
          <p class="hero-subtitle animate-fadeInUp animation-delay-1">
            Photography × Web Development × Audio Visual
          </p>

          <!-- 説明文 -->
          <p class="hero-description animate-fadeInUp animation-delay-2">
            写真撮影からWebプラットフォーム開発、オーディオビジュアルアートまで<br />
            クリエイティブなソリューションを通じて、あなたの想像を現実に変えます
          </p>

          <!-- CTAボタン -->
          <div class="hero-actions animate-fadeInUp animation-delay-3">
            <v-btn
              size="x-large"
              color="primary"
              variant="elevated"
              class="mr-4 mb-4 hover-lift btn-shimmer"
              @click="scrollToSection('portfolio')"
            >
              <v-icon left>mdi-eye</v-icon>
              作品を見る
            </v-btn>

            <v-btn
              size="x-large"
              variant="outlined"
              color="primary"
              class="mb-4 hover-lift btn-shimmer"
              @click="scrollToSection('contact')"
            >
              <v-icon left>mdi-email</v-icon>
              お問い合わせ
            </v-btn>
          </div>

          <!-- スクロールインジケーター -->
          <div class="scroll-indicator animate-float animation-delay-4">
            <v-icon size="32" color="primary">mdi-chevron-down</v-icon>
            <p class="text-caption mt-2">Scroll Down</p>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

// パーティクルのランダムスタイル生成
const getParticleStyle = (index) => {
  const size = Math.random() * 4 + 1;
  const duration = Math.random() * 3 + 2;
  const delay = Math.random() * 2;

  return {
    width: `${size}px`,
    height: `${size}px`,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    animationDuration: `${duration}s`,
    animationDelay: `${delay}s`,
  };
};

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

// スクロールアニメーション
onMounted(() => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  }, observerOptions);

  document.querySelectorAll(".reveal").forEach((el) => {
    observer.observe(el);
  });
});
</script>
