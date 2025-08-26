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
                  <v-icon size="80" color="#ff8800">mdi-movie-open</v-icon>
                </div>
                <h1 class="service-hero-title mb-4">オーディオビジュアル</h1>
                <p class="service-hero-subtitle mb-6">
                  映像と音楽の融合で<br />
                  感動的な体験を創造
                </p>
                <v-btn
                  size="large"
                  color="primary"
                  variant="elevated"
                  class="service-cta-btn"
                  @click="scrollToSection('contact')"
                >
                  <v-icon left>mdi-email</v-icon>
                  制作相談
                </v-btn>
              </div>
            </v-col>
            <v-col cols="12" md="6">
              <div class="service-hero-image">
                <div class="image-placeholder">
                  <v-icon size="200" color="rgba(255, 136, 0, 0.3)"
                    >mdi-video-vintage</v-icon
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
              <h2 class="section-title mb-4">制作サービス</h2>
              <p class="section-subtitle">
                最先端技術と芸術性を融合したビジュアル表現
              </p>
            </v-col>
          </v-row>

          <v-row>
            <v-col
              cols="12"
              md="4"
              v-for="(service, index) in avServices"
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
                      <v-icon size="16" color="#ff8800" class="mr-2"
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

      <!-- 制作プロセス -->
      <section class="process-section py-16">
        <v-container>
          <v-row>
            <v-col cols="12" class="text-center mb-12">
              <h2 class="section-title mb-4">制作プロセス</h2>
              <p class="section-subtitle">
                コンセプトから完成まで、一貫したクリエイティブワークフロー
              </p>
            </v-col>
          </v-row>

          <v-row>
            <v-col
              cols="12"
              md="6"
              lg="3"
              v-for="(step, index) in creativeProcess"
              :key="step.title"
              class="mb-6"
            >
              <v-card class="process-card h-100" elevation="4">
                <div class="card-content pa-4 text-center">
                  <div class="process-number mb-3">
                    {{ String(index + 1).padStart(2, "0") }}
                  </div>
                  <div class="process-icon mb-3">
                    <v-icon size="40" color="#ff8800">{{ step.icon }}</v-icon>
                  </div>
                  <h4 class="process-title mb-2">{{ step.title }}</h4>
                  <p class="process-description">{{ step.description }}</p>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <!-- 使用ツール・技術 */
      <section class="tech-stack py-16">
        <v-container>
          <v-row>
            <v-col cols="12" class="text-center mb-12">
              <h2 class="section-title mb-4">使用ツール・技術</h2>
              <p class="section-subtitle">
                プロフェッショナルなツールと最新技術を駆使した制作
              </p>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" md="6" lg="4" v-for="(tech, index) in techTools" :key="tech.category" class="mb-6">
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
                プロジェクトの規模と内容に応じた柔軟な料金設定
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
                      <v-icon size="16" color="#ff8800" class="mr-2"
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
                これまでに制作したオーディオビジュアル作品の一部をご紹介
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
                オーディオビジュアル制作のご依頼・ご相談はお気軽にどうぞ
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
  title: "オーディオビジュアルサービス - CyAnn",
  meta: [
    {
      name: "description",
      content:
        "VJ、MV制作、3DCGグラフィック、写真と映像の融合展示まで幅広いAV制作。最先端技術と芸術性を融合したビジュアル表現を提供します。",
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
const avServices = ref([
  {
    title: "VJ・ライブビジュアル",
    description:
      "音楽に同期したリアルタイムビジュアル演出。クラブ、コンサート、イベントでの映像パフォーマンスを提供します。",
    icon: "mdi-music-box-multiple",
    color: "#ff8800",
    features: [
      "リアルタイム映像生成",
      "音楽同期システム",
      "インタラクティブ演出",
      "現場オペレーション",
    ],
  },
  {
    title: "MV・映像制作",
    description:
      "ミュージックビデオ、プロモーション映像、アート作品の制作。ストーリーテリングと視覚表現を融合させます。",
    icon: "mdi-video",
    color: "#00faff",
    features: [
      "企画・演出",
      "撮影・編集",
      "モーショングラフィックス",
      "カラーグレーディング",
    ],
  },
  {
    title: "3DCG・モーション",
    description:
      "3DCGアニメーション、モーショングラフィックス制作。Blender、After Effectsを使用したハイクオリティな映像表現。",
    icon: "mdi-cube-outline",
    color: "#aa00ff",
    features: [
      "3Dモデリング・アニメーション",
      "パーティクル・エフェクト",
      "リアルタイム3D",
      "VR・AR対応",
    ],
  },
]);

// 制作プロセスデータ
const creativeProcess = ref([
  {
    title: "コンセプト設計",
    description:
      "プロジェクトの目的とビジョンを明確にし、創造的なコンセプトを構築します。",
    icon: "mdi-lightbulb-outline",
  },
  {
    title: "プリプロダクション",
    description:
      "ストーリーボード、技術検証、リソース準備を行い、制作の基盤を固めます。",
    icon: "mdi-script-text-outline",
  },
  {
    title: "制作・編集",
    description: "撮影、3DCG制作、編集作業を通じて、コンセプトを具現化します。",
    icon: "mdi-movie-edit-outline",
  },
  {
    title: "仕上げ・納品",
    description:
      "最終調整、カラーグレーディング、音響調整を行い、完成品を納品します。",
    icon: "mdi-check-circle-outline",
  },
]);

// 技術ツールデータ
const techTools = ref([
  {
    category: "映像編集",
    items: [
      "After Effects",
      "Premiere Pro",
      "DaVinci Resolve",
      "Final Cut Pro",
    ],
  },
  {
    category: "3DCG・モーション",
    items: ["Blender", "Cinema 4D", "Maya", "Houdini", "Unity"],
  },
  {
    category: "VJ・リアルタイム",
    items: ["TouchDesigner", "Resolume", "MadMapper", "VDMX", "Notch"],
  },
  {
    category: "音響・同期",
    items: ["Ableton Live", "Logic Pro", "Max/MSP", "OSC Protocol"],
  },
  {
    category: "写真・グラフィック",
    items: ["Photoshop", "Illustrator", "Lightroom", "Capture One"],
  },
  {
    category: "その他",
    items: ["Arduino", "Raspberry Pi", "Projection Mapping", "LED Control"],
  },
]);

// 料金プランデータ
const pricingPlans = ref([
  {
    name: "ベーシック",
    price: 150000,
    unit: "〜",
    description: "短編映像・シンプルなVJ演出",
    features: [
      "3分以内の映像制作",
      "基本的な編集・エフェクト",
      "2回まで修正対応",
      "HD画質での納品",
      "基本的なVJ演出",
    ],
    featured: false,
  },
  {
    name: "プロフェッショナル",
    price: 400000,
    unit: "〜",
    description: "本格的なMV・イベント演出におすすめ",
    features: [
      "10分以内の映像制作",
      "高度な3DCG・エフェクト",
      "5回まで修正対応",
      "4K画質での納品",
      "複雑なVJ演出・音楽同期",
      "現場オペレーション込み",
    ],
    featured: true,
  },
  {
    name: "アーティスティック",
    price: 800000,
    unit: "〜",
    description: "アート作品・大規模インスタレーション",
    features: [
      "長編・複雑な映像制作",
      "オリジナル3DCG・アニメーション",
      "無制限修正対応",
      "8K・VR対応",
      "インタラクティブシステム",
      "展示・イベント企画込み",
      "技術サポート・保守",
    ],
    featured: false,
  },
]);

// ポートフォリオデータ
const portfolioWorks = ref([
  {
    title: "エレクトロニックライブVJ",
    description:
      "クラブイベントでのリアルタイムビジュアル演出。音楽に完全同期したパーティクルエフェクトと抽象映像。",
    icon: "mdi-music-note",
    tags: ["VJ", "リアルタイム", "音楽同期"],
  },
  {
    title: "アーティストMV制作",
    description:
      "インディーアーティストのミュージックビデオ。3DCGと実写を融合させた幻想的な世界観を表現。",
    icon: "mdi-video-outline",
    tags: ["MV", "3DCG", "実写合成"],
  },
  {
    title: "企業プロモーション映像",
    description:
      "テクノロジー企業のプロダクト紹介映像。モーショングラフィックスで複雑な技術を分かりやすく表現。",
    icon: "mdi-presentation-play",
    tags: ["プロモーション", "モーション", "企業"],
  },
  {
    title: "インタラクティブインスタレーション",
    description:
      "美術館での体験型アート作品。観客の動きに反応する映像と音響のインタラクティブシステム。",
    icon: "mdi-gesture-tap",
    tags: ["インスタレーション", "インタラクティブ", "アート"],
  },
  {
    title: "ファッションショー演出",
    description:
      "ファッションブランドのランウェイショーでの映像演出。プロジェクションマッピングによる空間演出。",
    icon: "mdi-tshirt-crew-outline",
    tags: ["ファッション", "プロジェクション", "空間演出"],
  },
  {
    title: "VR体験コンテンツ",
    description:
      "観光地のVR体験コンテンツ制作。360度映像と3DCGを組み合わせた没入感のある体験を提供。",
    icon: "mdi-virtual-reality",
    tags: ["VR", "360度映像", "観光"],
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
  const subject = `オーディオビジュアル制作のお見積もり依頼（${planName}プラン）`;
  const body = `${planName}プランでの制作を検討しています。詳細についてご相談させてください。`;
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
    rgba(20, 10, 0, 0.95) 0%,
    rgba(30, 20, 0, 0.95) 100%
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
  background: rgba(255, 136, 0, 0.6);
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
  background: rgba(255, 136, 0, 0.1);
  border-radius: 50%;
  border: 2px solid rgba(255, 136, 0, 0.3);
}

.service-hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  color: #ffffff;
  background: linear-gradient(135deg, #ff8800 0%, #dd6600 100%);
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
  background: linear-gradient(135deg, #ff8800 0%, #dd6600 100%);
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
  border-color: rgba(255, 136, 0, 0.3);
  box-shadow: 0 10px 30px rgba(255, 136, 0, 0.1);
}

.service-detail-icon {
  display: inline-block;
  padding: 16px;
  background: rgba(255, 136, 0, 0.1);
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

/* 制作プロセス */
.process-number {
  font-size: 2rem;
  font-weight: 800;
  color: #ff8800;
  line-height: 1;
}

.process-icon {
  display: inline-block;
  padding: 12px;
  background: rgba(255, 136, 0, 0.1);
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
  border: 2px solid rgba(255, 136, 0, 0.4);
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
  color: #ff8800;
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
