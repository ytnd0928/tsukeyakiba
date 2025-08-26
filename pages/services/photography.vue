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
                  <v-icon size="80" color="#00faff">mdi-camera</v-icon>
                </div>
                <h1 class="service-hero-title mb-4">写真撮影</h1>
                <p class="service-hero-subtitle mb-6">
                  プロフェッショナルな写真撮影で、<br />
                  あなたの大切な瞬間を永遠に残します
                </p>
                <v-btn
                  size="large"
                  color="primary"
                  variant="elevated"
                  class="service-cta-btn"
                  @click="scrollToSection('contact')"
                >
                  <v-icon left>mdi-email</v-icon>
                  お見積もり依頼
                </v-btn>
              </div>
            </v-col>
            <v-col cols="12" md="6">
              <div class="service-hero-image">
                <div class="image-placeholder">
                  <v-icon size="200" color="rgba(0, 250, 255, 0.3)"
                    >mdi-camera-outline</v-icon
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
                様々なシーンに対応した高品質な写真撮影サービス
              </p>
            </v-col>
          </v-row>

          <v-row>
            <v-col
              cols="12"
              md="4"
              v-for="(service, index) in photographyServices"
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
                      <v-icon size="16" color="#00faff" class="mr-2"
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

      <!-- 料金プラン -->
      <section class="pricing-section py-16">
        <v-container>
          <v-row>
            <v-col cols="12" class="text-center mb-12">
              <h2 class="section-title mb-4">料金プラン</h2>
              <p class="section-subtitle">
                お客様のニーズに合わせた柔軟な料金設定
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
                      <v-icon size="16" color="#00faff" class="mr-2"
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

      <!-- ポートフォリオ -->
      <section class="portfolio-section py-16">
        <v-container>
          <v-row>
            <v-col cols="12" class="text-center mb-12">
              <h2 class="section-title mb-4">作品例</h2>
              <p class="section-subtitle">これまでの撮影実績の一部をご紹介</p>
            </v-col>
          </v-row>

          <v-row>
            <v-col
              cols="12"
              md="4"
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
                  <p class="portfolio-description">{{ work.description }}</p>
                  <div class="portfolio-tags mt-3">
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
                写真撮影のご依頼・ご相談はお気軽にどうぞ
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
  title: "写真撮影サービス - CyAnn",
  meta: [
    {
      name: "description",
      content:
        "プロフェッショナルな写真撮影サービス。ポートレート、イベント、商品撮影まで幅広く対応。高品質な写真で大切な瞬間を永遠に残します。",
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
const photographyServices = ref([
  {
    title: "ポートレート撮影",
    description:
      "個人・家族・カップルなど、人物を美しく撮影します。自然な表情を引き出すプロの技術で、特別な一枚をお届けします。",
    icon: "mdi-account-outline",
    color: "#00faff",
    features: [
      "自然光・スタジオ撮影対応",
      "表情指導・ポージング",
      "データ納品（高解像度）",
      "基本レタッチ込み",
    ],
  },
  {
    title: "イベント撮影",
    description:
      "結婚式、パーティー、企業イベントなど、大切なイベントの瞬間を逃さず記録します。",
    icon: "mdi-calendar-heart",
    color: "#00ffaa",
    features: [
      "長時間撮影対応",
      "複数カメラマン対応",
      "スナップ・集合写真",
      "当日編集・即日納品可",
    ],
  },
  {
    title: "商品撮影",
    description:
      "ECサイト、カタログ、広告用の商品写真を撮影。商品の魅力を最大限に引き出す撮影技術。",
    icon: "mdi-package-variant",
    color: "#aa00ff",
    features: [
      "白背景・ライフスタイル撮影",
      "商品の質感表現",
      "複数アングル撮影",
      "用途別サイズ調整",
    ],
  },
]);

// 料金プランデータ
const pricingPlans = ref([
  {
    name: "ベーシック",
    price: 30000,
    unit: "〜",
    description: "個人・小規模撮影に最適",
    features: [
      "撮影時間：2時間",
      "データ納品：30枚",
      "基本レタッチ込み",
      "1週間以内納品",
    ],
    featured: false,
  },
  {
    name: "スタンダード",
    price: 60000,
    unit: "〜",
    description: "イベント・商業撮影におすすめ",
    features: [
      "撮影時間：4時間",
      "データ納品：100枚",
      "プロレタッチ込み",
      "3日以内納品",
      "撮影プラン相談",
    ],
    featured: true,
  },
  {
    name: "プレミアム",
    price: 120000,
    unit: "〜",
    description: "本格的な撮影・長時間対応",
    features: [
      "撮影時間：8時間",
      "データ納品：300枚",
      "高品質レタッチ",
      "即日納品対応",
      "複数カメラマン",
      "撮影機材フル対応",
    ],
    featured: false,
  },
]);

// ポートフォリオデータ
const portfolioWorks = ref([
  {
    title: "ファミリーポートレート",
    description:
      "自然光を活かした温かみのある家族写真。笑顔溢れる瞬間を美しく切り取りました。",
    icon: "mdi-account-group",
    tags: ["ポートレート", "家族写真", "自然光"],
  },
  {
    title: "企業イベント撮影",
    description:
      "大規模な企業イベントの記録撮影。重要なシーンを漏らさず記録しました。",
    icon: "mdi-office-building",
    tags: ["イベント", "企業", "記録写真"],
  },
  {
    title: "商品カタログ撮影",
    description:
      "アパレルブランドの商品撮影。商品の魅力を最大限に表現した写真を制作。",
    icon: "mdi-tshirt-crew",
    tags: ["商品撮影", "アパレル", "カタログ"],
  },
  {
    title: "ウェディング撮影",
    description:
      "人生最高の日を美しく記録。感動的な瞬間の数々を永遠に残しました。",
    icon: "mdi-ring",
    tags: ["ウェディング", "記念撮影", "感動"],
  },
  {
    title: "アーティスト撮影",
    description:
      "音楽アーティストのプロモーション写真。個性と魅力を引き出した作品。",
    icon: "mdi-music",
    tags: ["アーティスト", "プロモーション", "音楽"],
  },
  {
    title: "料理・グルメ撮影",
    description:
      "レストランのメニュー撮影。料理の美味しさが伝わる食欲をそそる写真。",
    icon: "mdi-food",
    tags: ["料理", "グルメ", "メニュー"],
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
  const subject = `写真撮影のお見積もり依頼（${planName}プラン）`;
  const body = `${planName}プランでの撮影を検討しています。詳細についてご相談させてください。`;
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
    rgba(0, 10, 20, 0.95) 0%,
    rgba(0, 20, 30, 0.95) 100%
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
  background: rgba(0, 250, 255, 0.6);
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
  background: rgba(0, 250, 255, 0.1);
  border-radius: 50%;
  border: 2px solid rgba(0, 250, 255, 0.3);
}

.service-hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  color: #ffffff;
  background: linear-gradient(135deg, #00faff 0%, #00d4ff 100%);
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
  background: linear-gradient(135deg, #00faff 0%, #00d4ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-subtitle {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.7);
}

/* サービス詳細カード */
.service-detail-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
}

.service-detail-card:hover {
  transform: translateY(-5px);
  border-color: rgba(0, 250, 255, 0.3);
  box-shadow: 0 10px 30px rgba(0, 250, 255, 0.1);
}

.service-detail-icon {
  display: inline-block;
  padding: 16px;
  background: rgba(0, 250, 255, 0.1);
  border-radius: 12px;
}

.service-detail-title {
  font-size: 1.4rem;
  font-weight: 600;
  color: #ffffff;
}

.service-detail-description {
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

/* 料金プラン */
.pricing-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  transition: all 0.3s ease;
}

.pricing-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
}

.featured-plan {
  border: 2px solid rgba(0, 250, 255, 0.4);
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
  color: #00faff;
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
.portfolio-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  transition: all 0.3s ease;
}

.portfolio-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 250, 255, 0.1);
}

.portfolio-image {
  height: 200px;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px 16px 0 0;
}

.portfolio-title {
  font-size: 1.2rem;
  font-weight: 600;
  color: #ffffff;
}

.portfolio-description {
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.9rem;
  line-height: 1.5;
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
