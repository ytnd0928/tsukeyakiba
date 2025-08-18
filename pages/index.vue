<template>
  <NuxtLayout>
    <div>
      <!-- ヒーローセクション -->
      <HeroSection />

      <!-- 映像セクション -->
      <VideoSection />

      <!-- サービスセクション -->
      <section id="services" class="py-16">
        <v-container>
          <v-row>
            <v-col cols="12" class="text-center mb-12">
              <h2 class="text-h3 font-weight-bold mb-4 reveal">
                <span class="gradient-text">Services</span>
              </h2>
              <p class="text-h6 opacity-80 reveal">
                創造性と技術を融合したクリエイティブソリューション
              </p>
            </v-col>
          </v-row>

          <v-row>
            <v-col
              cols="12"
              md="6"
              lg="3"
              v-for="(service, index) in services"
              :key="service.title"
              class="mb-8"
            >
              <v-card
                class="h-100 hover-lift reveal service-card"
                elevation="4"
                :style="{ animationDelay: `${index * 0.1}s` }"
              >
                <div class="text-center pa-6">
                  <v-avatar size="80" class="mb-4" :color="service.color">
                    <v-icon size="40" color="white">{{ service.icon }}</v-icon>
                  </v-avatar>
                  <h3 class="text-h5 font-weight-bold mb-3">
                    {{ service.title }}
                  </h3>
                  <p class="text-body-1 opacity-80">
                    {{ service.description }}
                  </p>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <!-- ポートフォリオセクション -->
      <section id="portfolio" class="py-16 bg-surface">
        <v-container>
          <v-row>
            <v-col cols="12" class="text-center mb-12">
              <h2 class="text-h3 font-weight-bold mb-4 reveal">
                <span class="gradient-text">Portfolio</span>
              </h2>
              <p class="text-h6 opacity-80 reveal">
                これまでの作品と実績をご紹介
              </p>
            </v-col>
          </v-row>

          <!-- ポートフォリオ内容は後で追加 -->
          <v-row>
            <v-col cols="12" class="text-center">
              <p class="text-h6 opacity-60">ポートフォリオ作品を準備中...</p>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <!-- Aboutセクション -->
      <section id="about" class="py-16">
        <v-container>
          <v-row>
            <v-col cols="12" class="text-center mb-12">
              <h2 class="text-h3 font-weight-bold mb-4 reveal">
                <span class="gradient-text">About</span>
              </h2>
              <p class="text-h6 opacity-80 reveal">
                私たちのビジョンとミッション
              </p>
            </v-col>
          </v-row>

          <v-row align="center">
            <v-col cols="12" md="6" class="reveal">
              <h3 class="text-h4 font-weight-bold mb-4">CyAnn</h3>
              <p class="text-body-1 mb-4">
                私たちは写真撮影、Web制作、プラットフォーム開発、オーディオビジュアルアートを通じて、
                クリエイティブな表現と最新技術を融合させたソリューションを提供しています。
              </p>
              <p class="text-body-1 mb-4">
                VJやMV制作、3DCGグラフィック、写真と映像の融合展示など、
                様々な領域での表現活動を行い、お客様の想像を現実に変えるお手伝いをいたします。
              </p>
            </v-col>
            <v-col cols="12" md="6" class="reveal">
              <div class="text-center">
                <v-avatar size="300" class="animate-float">
                  <img
                    src="@/assets/images/logo.png"
                    alt="About Image"
                    class="rounded-lg"
                  />
                </v-avatar>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <!-- コンタクトセクション -->
      <section id="contact" class="py-16">
        <v-container>
          <v-row>
            <v-col cols="12" class="text-center mb-12">
              <h2 class="text-h3 font-weight-bold mb-4 reveal">
                <span class="text-white">Contact</span>
              </h2>
              <p class="text-h6 text-white opacity-80 reveal">
                お気軽にお問い合わせください
              </p>
              <h2 class="text-h5 font-weight-bold mt-10 mb-4 reveal">
                <span class="text-white">tsukeyakibapro@gmail.com</span>
              </h2>
            </v-col>
          </v-row>
        </v-container>
      </section>
    </div>
  </NuxtLayout>
</template>

<script setup>
import { ref, onMounted } from "vue";
import VideoSection from "~/components/sections/VideoSection.vue";

// ページメタデータ
useHead({
  title: "TSUKEYAKIBA - Photography & Digital Innovation",
  meta: [
    {
      name: "description",
      content:
        "写真撮影からWebプラットフォーム開発、オーディオビジュアルアートまで、クリエイティブなソリューションを提供しています。",
    },
  ],
});

// サービス一覧
const services = ref([
  {
    title: "写真撮影",
    description:
      "プロフェッショナルな写真撮影サービス。ポートレート、イベント、商品撮影まで幅広く対応。",
    icon: "mdi-camera",
    color: "blue",
  },
  {
    title: "Web制作",
    description:
      "モダンで美しいWebサイトの制作。レスポンシブデザインとUX/UIを重視した設計。",
    icon: "mdi-web",
    color: "green",
  },
  {
    title: "プラットフォーム開発",
    description:
      "Webアプリケーションとモバイルアプリの開発。スケーラブルなシステム構築。",
    icon: "mdi-application",
    color: "purple",
  },
  {
    title: "オーディオビジュアル",
    description:
      "VJ、MV制作、3DCGグラフィック、写真と映像の融合展示まで幅広いAV制作。",
    icon: "mdi-movie-open",
    color: "orange",
  },
]);

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
