<template>
  <section id="video-section" class="video-hero-section">
    <!-- 背景動画 -->
    <div class="video-background">
      <video
        ref="videoRef"
        src="https://larvaeyet-storage-2936ebd091750-staging.s3.ap-northeast-1.amazonaws.com/public/refrigerator3_2.MP4"
        autoplay
        muted
        loop
        playsinline
        preload="auto"
        class="background-video"
        @loadeddata="onVideoLoaded"
        @canplaythrough="onCanPlayThrough"
        @error="onVideoError"
      >
        <!-- フォールバック背景画像 -->
        Your browser does not support the video tag.
      </video>

      <!-- フォールバック背景画像 -->
      <div
        class="fallback-background"
        :class="{ 'show-fallback': !videoLoaded }"
      ></div>
    </div>

    <!-- オーバーレイ -->
    <div class="video-overlay"></div>

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
  console.log("Video data loaded successfully from S3");
};

const onCanPlayThrough = () => {
  videoLoaded.value = true;
  console.log("Video can play through completely");

  // 自動再生を試行
  if (videoRef.value) {
    videoRef.value.play().catch((error) => {
      console.error("Auto-play failed:", error);
    });
  }
};

const onVideoError = (error) => {
  console.error("Video failed to load from S3:", error);
  videoLoaded.value = false;

  if (videoRef.value && videoRef.value.error) {
    const mediaError = videoRef.value.error;
    let errorMessage = "Unknown error";

    switch (mediaError.code) {
      case MediaError.MEDIA_ERR_ABORTED:
        errorMessage = "Video loading aborted";
        break;
      case MediaError.MEDIA_ERR_NETWORK:
        errorMessage = "Network error while loading video";
        break;
      case MediaError.MEDIA_ERR_DECODE:
        errorMessage = "Video decoding error";
        break;
      case MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED:
        errorMessage = "Video format not supported";
        break;
    }

    console.error("Media error details:", errorMessage, mediaError);
  }
};

// Intersection Observer for animations
onMounted(() => {
  console.log("VideoSection mounted, loading S3 video");

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
