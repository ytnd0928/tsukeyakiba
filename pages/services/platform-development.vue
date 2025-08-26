<template>
  <NuxtLayout>
    <div class="service-page">
      <!-- ヒーローセクション -->
      <section class="service-hero">
        <div class="hero-particles">
          <div
            v-for="i in 20"
            :key="i"
            class="hero-particle"
            :style="getParticleStyle(i)"
          />
        </div>

        <v-container>
          <v-row align="center" class="min-height-screen">
            <v-col cols="12" md="6">
              <div class="service-hero-content">
                <div class="service-icon-large mb-6">
                  <v-icon size="80" color="#aa00ff">mdi-application</v-icon>
                </div>
                <h1 class="service-hero-title mb-4">プラットフォーム開発</h1>
                <p class="service-hero-subtitle mb-6">
                  スケーラブルで高性能な<br />
                  Webアプリケーション・システム開発
                </p>
                <v-btn
                  size="large"
                  color="primary"
                  variant="elevated"
                  class="service-cta-btn"
                  @click="scrollToSection('contact')"
                >
                  <v-icon left>mdi-email</v-icon>
                  開発相談
                </v-btn>
              </div>
            </v-col>
            <v-col cols="12" md="6">
              <div class="service-hero-image">
                <div class="image-placeholder">
                  <v-icon size="200" color="rgba(170, 0, 255, 0.3)"
                    >mdi-server-network</v-icon
                  >
                </div>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <!-- サービス詳細 -->
      <section class="service-details py-16">
        <v-container>
          <v-row>
            <v-col cols="12" class="text-center mb-12">
              <h2 class="section-title mb-4">開発サービス</h2>
              <p class="section-subtitle">
                ビジネス成長を支える堅牢なプラットフォーム開発
              </p>
            </v-col>
          </v-row>

          <v-row>
            <v-col
              cols="12"
              md="4"
              v-for="(service, index) in platformServices"
              :key="service.title"
              class="mb-6"
            >
              <v-card class="service-detail-card h-100" elevation="4">
                <div class="card-content pa-6">
                  <div class="service-detail-icon mb-4">
                    <v-icon size="48" :color="service.color">{{
                      service.icon
                    }}</v-icon>
                  </div>
                  <h3 class="service-detail-title mb-3">{{ service.title }}</h3>
                  <p class="service-detail-description mb-4">
                    {{ service.description }}
                  </p>
                  <div class="service-features">
                    <div
                      class="feature-item"
                      v-for="feature in service.features"
                      :key="feature"
                    >
                      <v-icon size="16" color="#aa00ff" class="mr-2"
                        >mdi-check-circle</v-icon
                      >
                      <span>{{ feature }}</span>
                    </div>
                  </div>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <!-- 開発プロセス -->
      <section class="process-section py-16">
        <v-container>
          <v-row>
            <v-col cols="12" class="text-center mb-12">
              <h2 class="section-title mb-4">開発プロセス</h2>
              <p class="section-subtitle">
                確実な成果を生み出すアジャイル開発手法
              </p>
            </v-col>
          </v-row>

          <v-row>
            <v-col
              cols="12"
              md="6"
              lg="3"
              v-for="(step, index) in developmentProcess"
              :key="step.title"
              class="mb-6"
            >
              <v-card class="process-card h-100" elevation="4">
                <div class="card-content pa-4 text-center">
                  <div class="process-number mb-3">
                    {{ String(index + 1).padStart(2, "0") }}
                  </div>
                  <div class="process-icon mb-3">
                    <v-icon size="40" color="#aa00ff">{{ step.icon }}</v-icon>
                  </div>
                  <h4 class="process-title mb-2">{{ step.title }}</h4>
                  <p class="process-description">{{ step.description }}</p>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <!-- 技術スタック -->
      <section class="tech-stack py-16">
        <v-container>
          <v-row>
            <v-col cols="12" class="text-center mb-12">
              <h2 class="section-title mb-4">技術スタック</h2>
              <p class="section-subtitle">
                最新技術を活用したエンタープライズ級の開発
              </p>
            </v-col>
          </v-row>

          <v-row>
            <v-col
              cols="12"
              md="6"
              lg="4"
              v-for="(tech, index) in techStack"
              :key="tech.category"
              class="mb-6"
            >
              <v-card class="tech-card h-100" elevation="4">
                <div class="card-content pa-4">
                  <h4 class="tech-category mb-3">{{ tech.category }}</h4>
                  <div class="tech-items">
                    <v-chip
                      v-for="item in tech.items"
                      :key="item"
                      size="small"
                      color="primary"
                      variant="outlined"
                      class="mr-2 mb-2"
                    >
                      {{ item }}
                    </v-chip>
                  </div>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <!-- 料金プラン -->
      <section class="pricing-section py-16">
        <v-container>
          <v-row>
            <v-col cols="12" class="text-center mb-12">
              <h2 class="section-title mb-4">料金プラン</h2>
              <p class="section-subtitle">
                プロジェクト規模に応じた柔軟な開発体制
              </p>
            </v-col>
          </v-row>

          <v-row>
            <v-col
              cols="12"
              md="4"
              v-for="(plan, index) in pricingPlans"
              :key="plan.name"
              class="mb-6"
            >
              <v-card
                class="pricing-card h-100"
                :class="{ 'featured-plan': plan.featured }"
                elevation="6"
              >
                <div class="card-content pa-6">
                  <div class="plan-header text-center mb-4">
                    <h3 class="plan-name mb-2">{{ plan.name }}</h3>
                    <div class="plan-price mb-2">
                      <span class="price-amount"
                        >¥{{ plan.price.toLocaleString() }}</span
                      >
                      <span class="price-unit">{{ plan.unit }}</span>
                    </div>
                    <p class="plan-description">{{ plan.description }}</p>
                  </div>
                  <div class="plan-features">
                    <div
                      class="feature-item"
                      v-for="feature in plan.features"
                      :key="feature"
                    >
                      <v-icon size="16" color="#aa00ff" class="mr-2"
                        >mdi-check</v-icon
                      >
                      <span>{{ feature }}</span>
                    </div>
                  </div>
                  <v-btn
                    block
                    :color="plan.featured ? 'primary' : 'outline'"
                    :variant="plan.featured ? 'elevated' : 'outlined'"
                    class="mt-4"
                    @click="contactForPlan(plan.name)"
                  >
                    このプランで依頼
                  </v-btn>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <!-- 開発実績 -->
      <section class="portfolio-section py-16">
        <v-container>
          <v-row>
            <v-col cols="12" class="text-center mb-12">
              <h2 class="section-title mb-4">開発実績</h2>
              <p class="section-subtitle">
                これまでに開発したプラットフォームの一部をご紹介
              </p>
            </v-col>
          </v-row>

          <v-row>
            <v-col
              cols="12"
              md="6"
              v-for="(work, index) in portfolioWorks"
              :key="work.title"
              class="mb-6"
            >
              <v-card class="portfolio-card" elevation="4">
                <div class="portfolio-image">
                  <div class="image-placeholder">
                    <v-icon size="80" color="rgba(255, 255, 255, 0.3)">{{
                      work.icon
                    }}</v-icon>
                  </div>
                </div>
                <v-card-text>
                  <h4 class="portfolio-title mb-2">{{ work.title }}</h4>
                  <p class="portfolio-description mb-3">
                    {{ work.description }}
                  </p>
                  <div class="portfolio-tags">
                    <v-chip
                      v-for="tag in work.tags"
                      :key="tag"
                      size="small"
                      color="primary"
                      variant="outlined"
                      class="mr-2 mb-1"
                    >
                      {{ tag }}
                    </v-chip>
                  </div>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <!-- お問い合わせ -->
      <section id="contact" class="contact-section py-16">
        <v-container>
          <v-row>
            <v-col cols="12" class="text-center mb-12">
              <h2 class="section-title mb-4">お問い合わせ</h2>
              <p class="section-subtitle mb-6">
                プラットフォーム開発のご依頼・ご相談はお気軽にどうぞ
              </p>
              <v-btn
                size="x-large"
                color="primary"
                variant="elevated"
                class="contact-btn"
                href="mailto:cyann250808@gmail.com"
              >
                <v-icon left>mdi-email</v-icon>
                cyann250808@gmail.com
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </section>
    </div>
  </NuxtLayout>
</template>

<script setup>
// メタデータ設定
useHead({
  title: "プラットフォーム開発サービス - CyAnn",
  meta: [
    {
      name: "description",
      content:
        "Webアプリケーションとモバイルアプリの開発。スケーラブルなシステム構築で、ビジネスの成長を支援します。",
    },
  ],
});

// パーティクルアニメーション
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

// サービス詳細データ
const platformServices = ref([
  {
    title: "Webアプリケーション",
    description:
      "React、Vue.js、Nuxt.jsを使用したモダンなWebアプリケーション開発。高性能でユーザビリティに優れたアプリを構築します。",
    icon: "mdi-application-outline",
    color: "#aa00ff",
    features: [
      "SPA・PWA開発",
      "リアルタイム機能",
      "API設計・開発",
      "データベース設計",
    ],
  },
  {
    title: "モバイルアプリ",
    description:
      "iOS・Android対応のネイティブアプリ、クロスプラットフォーム開発。ユーザーエクスペリエンスを重視した設計。",
    icon: "mdi-cellphone",
    color: "#00faff",
    features: [
      "React Native開発",
      "Flutter開発",
      "ネイティブアプリ開発",
      "アプリストア申請サポート",
    ],
  },
  {
    title: "システム統合",
    description:
      "既存システムとの連携、API統合、データ移行など、複雑なシステム要件に対応した統合ソリューション。",
    icon: "mdi-network",
    color: "#00ffaa",
    features: [
      "API統合・連携",
      "データ移行",
      "システム最適化",
      "セキュリティ強化",
    ],
  },
]);

// 開発プロセスデータ
const developmentProcess = ref([
  {
    title: "要件定義",
    description:
      "お客様のビジネス要件を詳細にヒアリングし、最適なソリューションを設計します。",
    icon: "mdi-clipboard-text",
  },
  {
    title: "設計・プロトタイプ",
    description:
      "システム設計とプロトタイプを作成し、早期に動作確認を行います。",
    icon: "mdi-drawing",
  },
  {
    title: "開発・テスト",
    description:
      "アジャイル手法で開発を進め、継続的なテストで品質を確保します。",
    icon: "mdi-code-tags",
  },
  {
    title: "リリース・運用",
    description:
      "本番環境へのデプロイと運用サポートで、安定したサービス提供を実現します。",
    icon: "mdi-rocket-launch",
  },
]);

// 技術スタックデータ
const techStack = ref([
  {
    category: "フロントエンド",
    items: ["React", "Vue.js", "Nuxt.js", "TypeScript", "Next.js"],
  },
  {
    category: "バックエンド",
    items: ["Node.js", "Ruby on Rails", "Python", "Go", "Java"],
  },
  {
    category: "モバイル",
    items: ["React Native", "Flutter", "Swift", "Kotlin", "Xamarin"],
  },
  {
    category: "データベース",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch"],
  },
  {
    category: "クラウド・インフラ",
    items: ["AWS", "GCP", "Azure", "Docker", "Kubernetes"],
  },
  {
    category: "その他",
    items: ["GraphQL", "WebSocket", "Microservices", "CI/CD", "Monitoring"],
  },
]);

// 料金プランデータ
const pricingPlans = ref([
  {
    name: "スタートアップ",
    price: 800000,
    unit: "〜",
    description: "MVP・小規模アプリ開発に最適",
    features: [
      "基本機能開発",
      "シンプルなUI/UX",
      "基本的なAPI開発",
      "3ヶ月間サポート",
      "技術仕様書作成",
    ],
    featured: false,
  },
  {
    name: "ビジネス",
    price: 2000000,
    unit: "〜",
    description: "本格的なプラットフォーム開発におすすめ",
    features: [
      "フル機能開発",
      "高度なUI/UX設計",
      "複雑なAPI・DB設計",
      "6ヶ月間サポート",
      "負荷テスト・最適化",
      "運用・保守サポート",
    ],
    featured: true,
  },
  {
    name: "エンタープライズ",
    price: 5000000,
    unit: "〜",
    description: "大規模システム・統合開発対応",
    features: [
      "スケーラブル設計",
      "マイクロサービス構成",
      "高可用性・冗長化",
      "1年間フルサポート",
      "セキュリティ監査",
      "24/7監視・運用",
      "専任チーム体制",
    ],
    featured: false,
  },
]);

// ポートフォリオデータ
const portfolioWorks = ref([
  {
    title: "ECプラットフォーム",
    description:
      "大規模ECサイトのフルスタック開発。高トラフィックに対応した堅牢なシステム設計。",
    icon: "mdi-shopping-outline",
    tags: ["EC", "フルスタック", "高トラフィック"],
  },
  {
    title: "業務管理システム",
    description:
      "企業の業務効率化を支援するWebアプリケーション。直感的なUIで複雑な業務フローを簡素化。",
    icon: "mdi-briefcase-outline",
    tags: ["業務効率化", "管理システム", "UI/UX"],
  },
  {
    title: "学習プラットフォーム",
    description:
      "オンライン学習システムの開発。動画配信、進捗管理、コミュニケーション機能を統合。",
    icon: "mdi-school-outline",
    tags: ["教育", "動画配信", "学習管理"],
  },
  {
    title: "IoTデータ分析基盤",
    description:
      "IoTデバイスからのデータ収集・分析システム。リアルタイムダッシュボードで可視化。",
    icon: "mdi-chart-line",
    tags: ["IoT", "データ分析", "リアルタイム"],
  },
  {
    title: "予約管理アプリ",
    description:
      "美容サロン向けの予約管理モバイルアプリ。顧客管理からスケジュール調整まで一元化。",
    icon: "mdi-calendar-check",
    tags: ["予約管理", "モバイル", "顧客管理"],
  },
  {
    title: "金融データ処理システム",
    description:
      "金融機関向けの高速データ処理システム。セキュリティと処理速度を両立した設計。",
    icon: "mdi-bank",
    tags: ["金融", "データ処理", "セキュリティ"],
  },
]);

// 関数
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const contactForPlan = (planName) => {
  const subject = `プラットフォーム開発のお見積もり依頼（${planName}プラン）`;
  const body = `${planName}プランでの開発を検討しています。詳細についてご相談させてください。`;
  const mailtoLink = `mailto:cyann250808@gmail.com?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
  window.open(mailtoLink);
};
</script>

<style scoped>
/* ヒーローセクション */
.service-hero {
  position: relative;
  min-height: 100vh;
  background: linear-gradient(
    135deg,
    rgba(20, 0, 20, 0.95) 0%,
    rgba(30, 0, 30, 0.95) 100%
  );
  display: flex;
  align-items: center;
  overflow: hidden;
}

.hero-particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.hero-particle {
  position: absolute;
  background: rgba(170, 0, 255, 0.6);
  border-radius: 50%;
  animation: float-particle linear infinite;
}

@keyframes float-particle {
  0% {
    transform: translateY(100vh) rotate(0deg);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateY(-10vh) rotate(360deg);
    opacity: 0;
  }
}

.service-hero-content {
  position: relative;
  z-index: 2;
}

.service-icon-large {
  display: inline-block;
  padding: 20px;
  background: rgba(170, 0, 255, 0.1);
  border-radius: 50%;
  border: 2px solid rgba(170, 0, 255, 0.3);
}

.service-hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  color: #ffffff;
  background: linear-gradient(135deg, #aa00ff 0%, #8800dd 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.service-hero-subtitle {
  font-size: 1.3rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
}

.service-cta-btn {
  font-size: 1.1rem;
  padding: 12px 32px;
  border-radius: 50px;
}

.service-hero-image {
  position: relative;
  z-index: 2;
}

.image-placeholder {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 60px;
  text-align: center;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

/* セクション共通 */
.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #ffffff;
  background: linear-gradient(135deg, #aa00ff 0%, #8800dd 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-subtitle {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.7);
}

/* カード共通スタイル */
.service-detail-card,
.process-card,
.tech-card,
.pricing-card,
.portfolio-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
}

.service-detail-card:hover,
.process-card:hover,
.tech-card:hover,
.portfolio-card:hover {
  transform: translateY(-5px);
  border-color: rgba(170, 0, 255, 0.3);
  box-shadow: 0 10px 30px rgba(170, 0, 255, 0.1);
}

.service-detail-icon {
  display: inline-block;
  padding: 16px;
  background: rgba(170, 0, 255, 0.1);
  border-radius: 12px;
}

.service-detail-title,
.tech-category,
.portfolio-title {
  font-size: 1.4rem;
  font-weight: 600;
  color: #ffffff;
}

.service-detail-description,
.portfolio-description {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
}

.feature-item {
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.9rem;
}

/* 開発プロセス */
.process-number {
  font-size: 2rem;
  font-weight: 800;
  color: #aa00ff;
  line-height: 1;
}

.process-icon {
  display: inline-block;
  padding: 12px;
  background: rgba(170, 0, 255, 0.1);
  border-radius: 12px;
}

.process-title {
  font-size: 1.2rem;
  font-weight: 600;
  color: #ffffff;
}

.process-description {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
  line-height: 1.5;
}

/* 技術スタック */
.tech-items {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

/* 料金プラン */
.pricing-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
}

.featured-plan {
  border: 2px solid rgba(170, 0, 255, 0.4);
  transform: scale(1.05);
}

.featured-plan:hover {
  transform: scale(1.05) translateY(-5px);
}

.plan-name {
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffffff;
}

.price-amount {
  font-size: 2.5rem;
  font-weight: 800;
  color: #aa00ff;
}

.price-unit {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.7);
}

.plan-description {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.95rem;
}

/* ポートフォリオ */
.portfolio-image {
  height: 200px;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px 16px 0 0;
}

/* コンタクト */
.contact-btn {
  font-size: 1.2rem;
  padding: 16px 40px;
  border-radius: 50px;
}

/* レスポンシブ */
@media (max-width: 768px) {
  .service-hero-title {
    font-size: 2.5rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .featured-plan {
    transform: none;
  }

  .featured-plan:hover {
    transform: translateY(-5px);
  }
}
</style>
