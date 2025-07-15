<template>
  <section id="video-section" class="video-hero-section">
    <!-- 背景動画 -->
    <div class="video-background">
      <video
        ref="videoRef"
        autoplay
        muted
        loop
        playsinline
        class="background-video"
        @loadeddata="onVideoLoaded"
        @error="onVideoError"
      >
        <source
          src="https://larvaeyet-storage-2936ebd091750-staging.s3.ap-northeast-1.amazonaws.com/public/refrigerator3_2.MP4"
          type="video/mp4"
        />
        <!-- フォールバック用静止画 -->
        Your browser does not support the video tag.
      </video>

      <!-- フォールバック背景画像 -->
      <div class="fallback-background"></div>
    </div>

    <!-- オーバーレイ -->
    <div class="video-overlay"></div>

    <!-- コンテンツ -->
    <v-container class="video-content">
      <v-row align="center" justify="center" class="min-height-screen">
        <v-col cols="12" md="10" lg="8" class="text-center">
          <!-- タイトル -->
          <h2 class="video-title animate-fadeInUp">
            <span class="gradient-text">TSUKEYAKIBA</span>
          </h2>

          <!-- サブタイトル -->
          <p class="video-subtitle animate-fadeInUp animation-delay-1">
            映像と技術の融合で生まれる新しい表現
          </p>

          <!-- 説明文 -->
          <p class="video-description animate-fadeInUp animation-delay-2">
            私たちの作品は、写真・映像・デジタル技術を組み合わせて<br />
            お客様の想像を超える体験を創造します
          </p>
        </v-col>
      </v-row>
    </v-container>

    <!-- スクロールインジケーター -->
    <div class="scroll-indicator animate-bounce">
      <v-icon size="24" color="white">mdi-chevron-down</v-icon>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const videoRef = ref(null);
const videoLoaded = ref(false);

const onVideoLoaded = () => {
  videoLoaded.value = true;
  console.log("Video loaded successfully from S3");
};

const onVideoError = (error) => {
  console.error("Video failed to load from S3:", error);
  videoLoaded.value = false;
};

// Intersection Observer for animations
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

  document
    .querySelectorAll("#video-section .animate-fadeInUp")
    .forEach((el) => {
      observer.observe(el);
    });
});

// Cleanup
onUnmounted(() => {
  if (videoRef.value) {
    videoRef.value.pause();
  }
});
</script>
