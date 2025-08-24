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

      <!-- Aboutセクション -->
      <section id="about" class="py-16">
        <v-container>
          <v-row>
            <v-col cols="12" class="text-center mb-12">
              <h2 class="text-h3 font-weight-bold mb-4 reveal">
                <span class="gradient-text">About</span>
              </h2>
              <p class="text-h6 opacity-80 reveal">Our Vision and Mission</p>
            </v-col>
          </v-row>

          <v-row align="center">
            <v-col cols="12" md="6" class="reveal">
              <h3 class="text-h4 font-weight-bold mb-4">CyAnn</h3>
              <p class="text-body-1 mb-4"></p>
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
      <!-- teamセクション -->
      <section id="member" class="py-16">
        <v-container>
          <v-row>
            <v-col cols="12" class="text-center mb-12">
              <h2 class="text-h3 font-weight-bold mb-4 reveal">
                <span class="gradient-text">Our Team</span>
              </h2>
            </v-col>
          </v-row>

          <v-row align="center">
            <v-col cols="12" md="6" class="reveal">
              <h3 class="text-h4 font-weight-bold mb-4">Yuto Noda</h3>
              <p class="text-body-1 mb-4"></p>
              <p class="text-body-1 mb-4">
                Web Engineer / VJ / DJ / 3DCG Artist
              </p>
              <p class="text-body-1 mb-4">
                3DCGグラフィックを用いて、オーディオヴィジュアル領域で活動したのち、
                webアプリーケーションエンジニアとしてフロントエンド、バックエンド開発に従事
              </p>
            </v-col>
            <v-col cols="12" md="6" class="reveal">
              <div class="text-center">
                <v-avatar size="300" class="animate-float">
                  <img
                    src="@/assets/images/noda.jpg"
                    alt="About Image"
                    class="profile-image"
                  />
                </v-avatar>
              </div>
            </v-col>
          </v-row>
        </v-container>
        <v-container>
          <v-row align="center">
            <v-col cols="12" md="6" class="reveal">
              <h3 class="text-h4 font-weight-bold mb-4">Tetsushi Nagano</h3>
              <p class="text-body-1 mb-4">Photographer / Artist</p>
              <p class="text-body-1 mb-4"></p>
            </v-col>
            <v-col cols="12" md="6" class="reveal">
              <div class="text-center">
                <v-avatar size="300" class="animate-float">
                  <img
                    src="@/assets/images/noda.jpg"
                    alt="About Image"
                    class="profile-image"
                  />
                </v-avatar>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </section>
      <section id="member" class="py-16"></section>

      <!-- コンタクトセクション -->
      <section id="contact" class="py-16">
        <v-container>
          <v-row>
            <v-col cols="12" class="text-center mb-12">
              <h2 class="text-h3 font-weight-bold mb-4 reveal">
                <span class="text-white">Contact</span>
              </h2>
              <p class="text-h8 font-weight-bold mt-10 mb-4 reveal">
                <span class="text-white">cyann250808@gmail.com</span>
              </p>
              <div class="social-links mt-8 reveal">
                <v-btn
                  icon
                  size="large"
                  variant="text"
                  color="white"
                  class="mx-2 social-icon"
                  href="https://www.instagram.com/cyann0808?igsh=dnR1NjJkbXMwcmc2&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <v-icon size="32">mdi-instagram</v-icon>
                </v-btn>
                <v-btn
                  icon
                  size="large"
                  variant="text"
                  color="white"
                  class="mx-2 social-icon"
                  href="https://x.com/cyann_service"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <v-icon size="32">mdi-twitter</v-icon>
                </v-btn>
              </div>
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
  title: "CyAnn - Photography & Digital Innovation",
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
