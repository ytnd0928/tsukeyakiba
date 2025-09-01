<template>
  <section id="logo-section" class="logo-hero-section">
    <!-- 背景グラデーション -->
    <div class="logo-background">
      <div class="gradient-overlay"></div>
      
      <!-- 流体アブストラクト要素 -->
      <div class="fluid-container">
        <!-- 液体ブロブ -->
        <div
          v-for="i in 12"
          :key="`blob-${i}`"
          class="fluid-blob"
          :style="getFluidBlobStyle(i)"
        />
        
        <!-- 流れる波 -->
        <div
          v-for="i in 8"
          :key="`wave-${i}`"
          class="flowing-wave"
          :style="getFlowingWaveStyle(i)"
        />
        
        <!-- 変形する円 -->
        <div
          v-for="i in 6"
          :key="`morph-${i}`"
          class="morphing-circle"
          :style="getMorphingCircleStyle(i)"
        />
        
        <!-- 液体パーティクル -->
        <div
          v-for="i in 25"
          :key="`liquid-${i}`"
          class="liquid-particle"
          :style="getLiquidParticleStyle(i)"
        />
      </div>
    </div>

    <!-- メインロゴコンテンツ -->
    <div class="logo-content">
      <div class="logo-container" :class="{ 'loaded': logoLoaded }">
        <img
          ref="logoRef"
          src="@/assets/images/logo.png"
          alt="CyAnn Logo"
          class="main-logo"
          @load="onLogoLoaded"
          @error="onLogoError"
        />
        
        <!-- ロゴの周りのリング効果 -->
        <div class="logo-ring ring-1"></div>
        <div class="logo-ring ring-2"></div>
        <div class="logo-ring ring-3"></div>
      </div>
      
      <!-- タイトルテキスト -->
      <div class="logo-text-container" :class="{ 'show': logoLoaded }">
        <h1 class="logo-title">CyAnn</h1>
        <p class="logo-subtitle">Creative Digital Innovation</p>
      </div>
    </div>

    <!-- スクロールインジケーター -->
    <div class="scroll-indicator animate-bounce">
      <v-icon size="24" color="white">mdi-chevron-down</v-icon>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const logoRef = ref(null);
const logoLoaded = ref(false);

const onLogoLoaded = () => {
  console.log("Logo loaded successfully");
  logoLoaded.value = true;
  
  // ロゴ読み込み後のアニメーション開始
  setTimeout(() => {
    startLogoAnimations();
  }, 100);
};

const onLogoError = (error) => {
  console.error("Logo failed to load:", error);
  logoLoaded.value = false;
};

const startLogoAnimations = () => {
  // ロゴコンテナのアニメーション開始
  const logoContainer = document.querySelector('.logo-container');
  const textContainer = document.querySelector('.logo-text-container');
  
  if (logoContainer) {
    logoContainer.classList.add('animate');
  }
  
  if (textContainer) {
    setTimeout(() => {
      textContainer.classList.add('animate');
    }, 800);
  }
};

// 液体ブロブのスタイルを生成
const getFluidBlobStyle = (index) => {
  const colors = [
    'rgba(0, 250, 255, 0.15)',
    'rgba(255, 0, 150, 0.12)',
    'rgba(150, 0, 255, 0.18)',
    'rgba(0, 255, 150, 0.14)'
  ];
  
  const size = 80 + Math.random() * 200;
  const delay = Math.random() * 20;
  const duration = 25 + Math.random() * 35;
  
  return {
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    width: `${size}px`,
    height: `${size}px`,
    background: `radial-gradient(ellipse at center, ${colors[index % colors.length]}, transparent 70%)`,
    animationDelay: `${delay}s`,
    animationDuration: `${duration}s`,
  };
};

// 流れる波のスタイルを生成
const getFlowingWaveStyle = (index) => {
  const width = 200 + Math.random() * 400;
  const height = 60 + Math.random() * 120;
  const delay = Math.random() * 15;
  const duration = 30 + Math.random() * 45;
  
  return {
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    width: `${width}px`,
    height: `${height}px`,
    animationDelay: `${delay}s`,
    animationDuration: `${duration}s`,
  };
};

// 変形する円のスタイルを生成
const getMorphingCircleStyle = (index) => {
  const size = 120 + Math.random() * 250;
  const delay = Math.random() * 25;
  const duration = 40 + Math.random() * 60;
  
  return {
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    width: `${size}px`,
    height: `${size}px`,
    animationDelay: `${delay}s`,
    animationDuration: `${duration}s`,
  };
};

// 液体パーティクルのスタイルを生成
const getLiquidParticleStyle = (index) => {
  const size = 3 + Math.random() * 8;
  const delay = Math.random() * 10;
  const duration = 15 + Math.random() * 25;
  
  return {
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    width: `${size}px`,
    height: `${size}px`,
    animationDelay: `${delay}s`,
    animationDuration: `${duration}s`,
  };
};

// パーティクルのスタイルを生成
const getParticleStyle = (index) => {
  const delay = Math.random() * 5;
  const duration = 3 + Math.random() * 4;
  const size = 2 + Math.random() * 4;
  const opacity = 0.1 + Math.random() * 0.3;

  return {
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    width: `${size}px`,
    height: `${size}px`,
    opacity: opacity,
    animationDelay: `${delay}s`,
    animationDuration: `${duration}s`,
  };
};

// クリップパスを生成
const getClipPath = (shape) => {
  const clipPaths = {
    triangle: 'polygon(50% 0%, 0% 100%, 100% 100%)',
    diamond: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
    hexagon: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)',
    pentagon: 'polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)',
  };
  return clipPaths[shape] || 'circle(50%)';
};

// Intersection Observer for animations
onMounted(() => {
  console.log("LogoSection mounted");

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

  // セクション全体の観察
  const logoSection = document.querySelector("#logo-section");
  if (logoSection) {
    observer.observe(logoSection);
  }
});

// Cleanup
onUnmounted(() => {
  // 必要に応じてクリーンアップ処理
});
</script>
