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
                  <v-icon size="80" color="#00ffaa">mdi-web</v-icon>
                </div>
                <h1 class="service-hero-title mb-4">Web制作</h1>
                <p class="service-hero-subtitle mb-6">
                  モダンで美しいWebサイトで、<br />
                  あなたのビジネスを次のレベルへ
                </p>
                <v-btn
                  size="large"
                  color="primary"
                  variant="elevated"
                  class="service-cta-btn"
                  @click="scrollToSection('contact')"
                >
                  <v-icon left>mdi-email</v-icon>
                  プロジェクト相談
                </v-btn>
              </div>
            </v-col>
            <v-col cols="12" md="6">
              <div class="service-hero-image">
                <div class="image-placeholder">
                  <v-icon size="200" color="rgba(0, 255, 170, 0.3)"
                    >mdi-monitor-dashboard</v-icon
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
              <h2 class="section-title mb-4">サービス内容</h2>
              <p class="section-subtitle">
                最新技術を活用したハイクオリティなWeb制作サービス
              </p>
            </v-col>
          </v-row>

          <v-row>
            <v-col
              cols="12"
              md="4"
              v-for="(service, index) in webServices"
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
                      <v-icon size="16" color="#00ffaa" class="mr-2"
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

      <!-- 技術スタック -->
      <section class="tech-stack py-16">
        <v-container>
          <v-row>
            <v-col cols="12" class="text-center mb-12">
              <h2 class="section-title mb-4">使用技術</h2>
              <p class="section-subtitle">
                最新のWeb技術を駆使した高品質な開発
              </p>
            </v-col>
          </v-row>

          <v-row>
            <v-col
              cols="12"
              md="6"
              lg="3"
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
                プロジェクトの規模に応じた柔軟な料金設定
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
                      <v-icon size="16" color="#00ffaa" class="mr-2"
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

      <!-- 制作実績 -->
      <section class="portfolio-section py-16">
        <v-container>
          <v-row>
            <v-col cols="12" class="text-center mb-12">
              <h2 class="section-title mb-4">制作実績</h2>
              <p class="section-subtitle">
                これまでに制作したWebサイトの一部をご紹介
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
                Web制作のご依頼・ご相談はお気軽にどうぞ
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
  title: "Web制作サービス - CyAnn",
  meta: [
    {
      name: "description",
      content:
        "モダンで美しいWebサイトの制作。レスポンシブデザインとUX/UIを重視した設計で、あなたのビジネスを成功に導きます。",
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
const webServices = ref([
  {
    title: "コーポレートサイト",
    description:
      "企業の魅力を伝える高品質なコーポレートサイト。ブランディングを重視したデザインと、管理しやすいCMSを構築します。",
    icon: "mdi-domain",
    color: "#00ffaa",
    features: [
      "レスポンシブデザイン",
      "CMS構築（WordPress等）",
      "SEO最適化",
      "アクセス解析設定",
    ],
  },
  {
    title: "ECサイト",
    description:
      "売上向上を目指すECサイト制作。ユーザビリティを重視した設計で、購入率向上をサポートします。",
    icon: "mdi-shopping",
    color: "#00faff",
    features: [
      "決済システム連携",
      "在庫管理システム",
      "会員機能",
      "モバイル最適化",
    ],
  },
  {
    title: "ランディングページ",
    description:
      "コンバージョン率を最大化するLP制作。心理学に基づいた構成で、確実に成果を出すページを作成します。",
    icon: "mdi-target",
    color: "#aa00ff",
    features: [
      "コンバージョン最適化",
      "A/Bテスト対応",
      "高速ローディング",
      "アナリティクス連携",
    ],
  },
]);

// 技術スタックデータ
const techStack = ref([
  {
    category: "フロントエンド",
    items: ["Vue.js", "Nuxt.js", "React", "TypeScript", "SCSS"],
  },
  {
    category: "バックエンド",
    items: ["Node.js", "PHP", "Ruby on Rails", "Python", "MySQL"],
  },
  {
    category: "CMS・ツール",
    items: ["WordPress", "Shopify", "Strapi", "Figma", "Adobe XD"],
  },
  {
    category: "インフラ・デプロイ",
    items: ["AWS", "Vercel", "Netlify", "Docker", "GitHub Actions"],
  },
]);

// 料金プランデータ
const pricingPlans = ref([
  {
    name: "ベーシック",
    price: 200000,
    unit: "〜",
    description: "小規模サイト・LP制作に最適",
    features: [
      "5ページまでの制作",
      "レスポンシブデザイン",
      "基本SEO対策",
      "3ヶ月間サポート",
      "ドメイン・サーバー設定",
    ],
    featured: false,
  },
  {
    name: "スタンダード",
    price: 500000,
    unit: "〜",
    description: "中規模サイト・機能充実におすすめ",
    features: [
      "15ページまでの制作",
      "CMS構築",
      "お問い合わせフォーム",
      "アクセス解析設定",
      "6ヶ月間サポート",
      "運用・保守サポート",
    ],
    featured: true,
  },
  {
    name: "プレミアム",
    price: 1000000,
    unit: "〜",
    description: "大規模サイト・ECサイト対応",
    features: [
      "ページ数無制限",
      "高機能CMS・EC機能",
      "会員システム",
      "決済システム連携",
      "1年間フルサポート",
      "月次レポート・改善提案",
    ],
    featured: false,
  },
]);

// ポートフォリオデータ
const portfolioWorks = ref([
  {
    title: "テクノロジー企業サイト",
    description:
      "最新技術を扱う企業のコーポレートサイト。シンプルで洗練されたデザインで、技術力をアピール。",
    icon: "mdi-rocket-launch",
    tags: ["コーポレート", "技術", "シンプル"],
  },
  {
    title: "アパレルECサイト",
    description:
      "ファッションブランドのオンラインストア。美しい商品写真を活かしたビジュアル重視の設計。",
    icon: "mdi-hanger",
    tags: ["EC", "アパレル", "ビジュアル"],
  },
  {
    title: "レストラン予約サイト",
    description:
      "高級レストランの予約システム付きサイト。雰囲気を伝える写真と直感的な予約フローを実現。",
    icon: "mdi-silverware-fork-knife",
    tags: ["予約システム", "レストラン", "UX"],
  },
  {
    title: "教育プラットフォーム",
    description:
      "オンライン学習プラットフォーム。学習者の使いやすさを重視したUI/UXデザイン。",
    icon: "mdi-school",
    tags: ["教育", "プラットフォーム", "学習"],
  },
  {
    title: "不動産ポータル",
    description:
      "物件検索機能付きの不動産サイト。豊富な検索条件と見やすい物件情報表示を実現。",
    icon: "mdi-home-search",
    tags: ["不動産", "検索", "ポータル"],
  },
  {
    title: "クリニック予約サイト",
    description:
      "医療機関の予約システム。患者さんの利便性を考慮したシンプルで分かりやすいデザイン。",
    icon: "mdi-hospital-building",
    tags: ["医療", "予約", "シンプル"],
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
  const subject = `Web制作のお見積もり依頼（${planName}プラン）`;
  const body = `${planName}プランでのWeb制作を検討しています。詳細についてご相談させてください。`;
  const mailtoLink = `mailto:cyann250808@gmail.com?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
  window.open(mailtoLink);
};
</script>

<style scoped>
/* 共通スタイルは photography.vue と同じ構造を使用 */
/* ヒーローセクション */
.service-hero {
  position: relative;
  min-height: 100vh;
  background: linear-gradient(
    135deg,
    rgba(0, 20, 10, 0.95) 0%,
    rgba(0, 30, 20, 0.95) 100%
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
  background: rgba(0, 255, 170, 0.6);
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
  background: rgba(0, 255, 170, 0.1);
  border-radius: 50%;
  border: 2px solid rgba(0, 255, 170, 0.3);
}

.service-hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  color: #ffffff;
  background: linear-gradient(135deg, #00ffaa 0%, #00dd88 100%);
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
  background: linear-gradient(135deg, #00ffaa 0%, #00dd88 100%);
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
.tech-card:hover,
.portfolio-card:hover {
  transform: translateY(-5px);
  border-color: rgba(0, 255, 170, 0.3);
  box-shadow: 0 10px 30px rgba(0, 255, 170, 0.1);
}

.service-detail-icon {
  display: inline-block;
  padding: 16px;
  background: rgba(0, 255, 170, 0.1);
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
  border: 2px solid rgba(0, 255, 170, 0.4);
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
  color: #00ffaa;
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
