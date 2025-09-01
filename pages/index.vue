<template>
  <NuxtLayout>
    <div>
      <!-- ヒーローセクション -->
      <HeroSection />

      <!-- 映像セクション -->
      <VideoSection />

      <!-- サービスセクション（一時的に無効化） -->
      <section v-if="false" id="services" class="py-20 services-section">
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
                        @click="navigateToService(service.title)"
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
              <h2 class="reveal" style="margin-bottom: 0;">
                <span class="section-title-gradient">About</span>
              </h2>
              <p class="section-subtitle reveal">Our Vision and Mission</p>
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
      <section id="our-team" class="py-16">
        <v-container>
          <v-row>
            <v-col cols="12" class="text-center mb-12">
              <h2 class="reveal" style="margin-bottom: 0;">
                <span class="section-title-gradient">Our Team</span>
              </h2>
              <p class="section-subtitle reveal">Meet Our Creators</p>
            </v-col>
          </v-row>

          <v-row align="center">
            <v-col cols="12" md="6" class="reveal">
              <h3 class="text-h4 font-weight-bold mb-4">Yuto Noda</h3>
              <p class="text-body-1 mb-4"></p>
              <p class="text-body-1 mb-4">
                Web Engineer / VJ / DJ / 3DCG Artist
              </p>
              <p class="text-body-1 mb-4">1999、埼玉県生まれ</p>
              <p class="text-body-1 mb-4">
                3DCGグラフィックを用いて、VJや映像でのビジュアル制作、VRインスタレーションアートの制作で活動したのち、
                webアプリーケーションエンジニアとしてフロントエンド、バックエンド開発に従事
              </p>
              <p class="text-body-1 mb-2">使用技術</p>
              <p class="text-body-1 mb-4">
                Ruby on Rails / Vue.js / Nuxt3.js / JavaScript / TypeScript / C#
                / Unity / Blender / After Effects / Premiere Pro / Photoshop /
              </p>
              
              <!-- Noda Social Links -->
              <div class="social-links mt-6">
                <v-btn
                  icon
                  size="small"
                  variant="text"
                  color="pink"
                  class="mx-1 social-icon"
                  href="https://www.instagram.com/omatsuri_ofc"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <v-icon size="24">mdi-instagram</v-icon>
                </v-btn>
                <v-btn
                  icon
                  size="small"
                  variant="text"
                  color="white"
                  class="mx-1 social-icon"
                  href="https://x.com/nodachan9"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </v-btn>
                <v-btn
                  icon
                  size="small"
                  variant="text"
                  color="green"
                  class="mx-1 social-icon"
                  href="https://qiita.com/ytnd0928"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.57 8.343a3.653 3.653 0 0 1 1.49-1.492 3.653 3.653 0 0 1 3.983.583l3.36 2.52 3.36-2.52a3.653 3.653 0 0 1 3.983-.583 3.653 3.653 0 0 1 1.49 1.492c.37.63.568 1.35.568 2.085v8.017c0 .735-.198 1.456-.568 2.085a3.653 3.653 0 0 1-1.49 1.492 3.653 3.653 0 0 1-3.983-.583L12 18.92l-3.36 2.52a3.653 3.653 0 0 1-3.983.583 3.653 3.653 0 0 1-1.49-1.492A4.28 4.28 0 0 1 2.6 18.446v-8.017c0-.735.198-1.456.568-2.085l.402-.001z"/>
                  </svg>
                </v-btn>
                <v-btn
                  icon
                  size="small"
                  variant="text"
                  color="white"
                  class="mx-1 social-icon"
                  href="https://github.com/ytnd0928"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <v-icon size="24">mdi-github</v-icon>
                </v-btn>
                <v-btn
                  icon
                  size="small"
                  variant="text"
                  color="blue"
                  class="mx-1 social-icon"
                  href="https://profile.re-shine.jp/omatsuri"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <v-icon size="24">mdi-web</v-icon>
                </v-btn>
              </div>
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
        
        <!-- チームメンバー間のスペーシング -->
        <div class="team-member-spacing"></div>
        
        <v-container>
          <v-row align="center">
            <v-col cols="12" md="6" class="reveal">
              <h3 class="text-h4 font-weight-bold mb-4">Tetsushi Nagano</h3>
              <p class="text-body-1 mb-4">Photographer / Artist</p>
              <p class="text-body-1 mb-4">1999年、東京都生まれ</p>
              「諸行無常」をテーマに、変わりゆく都市の風景と人々の写真撮影をライフワークとしている。
大学在学時は、学生団体主催のミス・ミスターコンテストのカメラマンとして、5大学の出場者の写真撮影を担当。
              
              <!-- Nagano Social Links -->
              <div class="social-links mt-6 text-left">
                <v-btn
                  icon
                  size="small"
                  variant="text"
                  color="pink"
                  class="mx-1 social-icon"
                  href="https://www.instagram.com/nagano_instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <v-icon size="24">mdi-instagram</v-icon>
                </v-btn>
                <v-btn
                  icon
                  size="small"
                  variant="text"
                  color="white"
                  class="mx-1 social-icon"
                  href="https://x.com/nagano_twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </v-btn>
                <v-btn
                  icon
                  size="small"
                  variant="text"
                  color="blue"
                  class="mx-1 social-icon"
                  href="https://nagano-portfolio.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <v-icon size="24">mdi-web</v-icon>
                </v-btn>
              </div>

            </v-col>
            <v-col cols="12" md="6" class="reveal">
              <div class="text-center">
                <v-avatar size="300" class="animate-float">
                  <img
                    src="@/assets/images/nagano.JPG"
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
              <h2 class="reveal" style="margin-bottom: 0;">
                <span class="contact-title-gradient">Contact</span>
              </h2>
              <p class="text-h6 font-weight-bold mt-8 mb-4 reveal" style="color: #00faff; letter-spacing: 0.02em;">
                cyann250808@gmail.com
              </p>
              <div class="social-links contact-social-links mt-8 reveal">
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

// サービス一覧（一時的に無効化）
const services = ref([
  {
    title: "Photography",
    description:
      "プロフェッショナルな写真撮影サービス。ポートレート、イベント、商品撮影まで幅広く対応。",
    icon: "mdi-camera",
    color: "blue",
  },
  {
    title: "Web Development",
    description:
      "モダンで美しいWebサイトの制作。レスポンシブデザインとUX/UIを重視した設計。",
    icon: "mdi-web",
    color: "green",
  },
  {
    title: "Platform Development",
    description:
      "Webアプリケーションとモバイルアプリの開発。スケーラブルなシステム構築。",
    icon: "mdi-application",
    color: "purple",
  },
  {
    title: "Audio Visual",
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

// パーティクルのスタイルを生成（一時的に無効化）
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

// サービス用抽象的パーティクルのスタイルを生成（一時的に無効化）
const getServiceParticleStyle = (index) => {
  const delay = Math.random() * 20;
  const baseDuration = [18, 20, 25, 30][index % 4];
  const duration = baseDuration + Math.random() * 10;
  const baseSize = 30 + Math.random() * 100;
  const aspectRatio = 0.3 + Math.random() * 1.4;
  const opacity = 0.2 + Math.random() * 0.6;

  // 抽象的な配置パターン
  const patterns = [
    { left: Math.random() * 100, top: Math.random() * 100 },
    { left: Math.sin(index) * 30 + 50, top: Math.cos(index) * 30 + 50 },
    { left: (index * 23) % 100, top: (index * 37) % 100 },
    {
      left: Math.pow(Math.random(), 2) * 100,
      top: Math.pow(Math.random(), 0.5) * 100,
    },
  ];
  const pattern = patterns[index % 4];

  return {
    left: `${pattern.left}%`,
    top: `${pattern.top}%`,
    width: `${baseSize}px`,
    height: `${baseSize * aspectRatio}px`,
    opacity: opacity,
    animationDelay: `${delay}s`,
    animationDuration: `${duration}s`,
    transform: `rotate(${index * 47}deg)`,
  };
};

// サービス詳細ページへのナビゲーション（一時的に無効化）
const navigateToService = (serviceTitle) => {
  const router = useRouter();
  const routes = {
    "Photography": "/services/photography",
    "Web Development": "/services/web-development", 
    "Platform Development": "/services/platform-development",
    "Audio Visual": "/services/audio-visual"
  };
  
  const route = routes[serviceTitle];
  if (route) {
    router.push(route);
  }
};
</script>
