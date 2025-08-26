<template>
  <NuxtLayout>
    <div>
      <!-- ヒーローセクション -->
      <HeroSection />

      <!-- 映像セクション -->
      <VideoSection />

      <!-- サービスセクション -->
      <section id="services" class="py-20 services-section">
        <!-- 背景パーティクル -->
        <div class="services-particles">
          <div
            v-for="i in 30"
            :key="i"
            class="service-particle"
            :style="getServiceParticleStyle(i)"
          />
        </div>

        <!-- 背景グラデーション -->
        <div class="services-gradient"></div>

        <v-container>
          <v-row>
            <v-col cols="12" class="text-center mb-16">
              <h2 class="services-title reveal">
                <span class="gradient-text-enhanced">Services</span>
              </h2>
              <div class="services-subtitle-container reveal">
                <div class="services-line"></div>
                <p class="services-subtitle">
                  創造性と技術を融合したクリエイティブソリューション
                </p>
                <div class="services-line"></div>
              </div>
            </v-col>
          </v-row>

          <v-row class="services-grid">
            <v-col
              cols="12"
              sm="6"
              lg="3"
              v-for="(service, index) in services"
              :key="service.title"
              class="mb-8"
            >
              <div
                class="service-card-wrapper reveal"
                :style="{ animationDelay: `${index * 0.15}s` }"
              >
                <div class="service-card" :class="`service-${service.color}`">
                  <!-- カード背景エフェクト -->
                  <div class="card-glow"></div>
                  <div class="card-pattern"></div>

                  <!-- カード内容 -->
                  <div class="service-content">
                    <!-- アイコンコンテナ -->
                    <div class="service-icon-container">
                      <div
                        class="service-icon-bg"
                        :class="`bg-${service.color}`"
                      >
                        <div class="icon-inner">
                          <v-icon size="32" color="white">{{
                            service.icon
                          }}</v-icon>
                        </div>
                      </div>
                      <div class="service-number">
                        {{ String(index + 1).padStart(2, "0") }}
                      </div>
                    </div>

                    <!-- テキストコンテンツ -->
                    <div class="service-text">
                      <h3 class="service-title">{{ service.title }}</h3>
                      <p class="service-description">
                        {{ service.description }}
                      </p>
                    </div>

                    <!-- アクションボタン -->
                    <div class="service-action">
                      <v-btn
                        variant="text"
                        :color="service.color"
                        class="service-btn"
                        size="small"
                      >
                        詳細を見る
                        <v-icon right size="16">mdi-arrow-right</v-icon>
                      </v-btn>
                    </div>
                  </div>

                  <!-- ホバーオーバーレイ -->
                  <div class="service-overlay"></div>
                </div>
              </div>
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
              <p class="text-body-1 mb-2">使用技術</p>
              <p class="text-body-1 mb-4">
                Ruby on Rails / Vue.js / Nuxt3.js / JavaScript / TypeScript / C#
                / Unity / Blender / After Effects / Premiere Pro / Photoshop /
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

// パーティクルのスタイルを生成
const getParticleStyle = (index) => {
  const delay = Math.random() * 5;
  const duration = 3 + Math.random() * 4;
  const size = 2 + Math.random() * 4;

  return {
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    width: `${size}px`,
    height: `${size}px`,
    animationDelay: `${delay}s`,
    animationDuration: `${duration}s`,
  };
};

// サービス用パーティクルのスタイルを生成
const getServiceParticleStyle = (index) => {
  const delay = Math.random() * 8;
  const duration = 4 + Math.random() * 6;
  const size = 1 + Math.random() * 3;
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
</script>
