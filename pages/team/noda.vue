<template>
  <NuxtLayout>
    <div class="team-member-page">
      <!-- ヒーローセクション -->
      <section class="member-hero py-16">
        <v-container>
          <v-row align="center" class="min-height-80vh">
            <v-col cols="12" md="6" class="reveal">
              <div class="member-info">
                <h1 class="member-name text-h2 font-weight-bold mb-4">
                  Yuto Noda
                </h1>
                <p class="member-role text-h5 mb-6 text-primary">
                  Web Engineer / VJ / DJ / 3DCG Artist
                </p>
                <p class="member-birth text-body-1 mb-6">
                  1999年、埼玉県生まれ
                </p>
                <p class="member-description text-body-1 mb-8">
                    聴覚体験の視覚的拡張をテーマに、オーディオヴィジュアル領域で3DCGグラフィックを用いて、クラブVJやライブの背景映像演出、映像制作、VRインスタレーションアートの制作で活動。
                <p>　NEWVIEW CYPHER所属アーティストとして、社会学的側面から、ディストピアを表現したVR作品の制作、展示を行ったりしていた。</p>
                <p>　現在はwebアプリーケーションエンジニアとしてフロントエンド、バックエンド開発に従事している。</p>
                </p>
                
                <!-- ソーシャルリンク -->
                <div class="social-links mb-8">
                  <v-btn
                    icon
                    size="large"
                    variant="text"
                    color="pink"
                    class="mx-2 social-icon"
                    href="https://www.instagram.com/omatsuri_ofc"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <v-icon size="28">mdi-instagram</v-icon>
                  </v-btn>
                  <v-btn
                    icon
                    size="large"
                    variant="text"
                    color="white"
                    class="mx-2 social-icon"
                    href="https://x.com/nodachan9"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </v-btn>
                  <v-btn
                    icon
                    size="large"
                    variant="text"
                    color="white"
                    class="mx-2 social-icon"
                    href="https://github.com/ytnd0928"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <v-icon size="28">mdi-github</v-icon>
                  </v-btn>
                  <v-btn
                    icon
                    size="large"
                    variant="text"
                    color="blue"
                    class="mx-2 social-icon"
                    href="https://profile.re-shine.jp/omatsuri"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <v-icon size="28">mdi-web</v-icon>
                  </v-btn>
                </div>
                
                <!-- ナビゲーションボタン -->
                <div class="navigation-buttons">
                  <v-btn
                    variant="outlined"
                    color="primary"
                    size="large"
                    @click="goBack"
                    class="back-btn mr-3"
                  >
                    <v-icon left size="20">mdi-arrow-left</v-icon>
                    戻る
                  </v-btn>
                </div>
              </div>
            </v-col>
            <v-col cols="12" md="6" class="reveal">
              <div class="text-center">
                <v-avatar size="400" class="member-avatar animate-float">
                  <img
                    src="@/assets/images/noda.jpg"
                    alt="Yuto Noda"
                    class="profile-image"
                  />
                </v-avatar>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <!-- スキルセクション -->
      <section class="skills-section py-16">
        <v-container>
          <v-row>
            <v-col cols="12" class="text-center mb-12">
              <h2 class="section-title reveal">
                <span class="section-title-gradient">Skills & Technologies</span>
              </h2>
            </v-col>
          </v-row>
          
          <v-row>
            <v-col cols="12" md="6" class="reveal">
              <h3 class="text-h5 font-weight-bold mb-4">Web Development</h3>
              <div class="skill-tags">
                <v-chip class="ma-1" color="primary" variant="outlined">Ruby on Rails</v-chip>
                <v-chip class="ma-1" color="primary" variant="outlined">Vue.js</v-chip>
                <v-chip class="ma-1" color="primary" variant="outlined">Nuxt3.js</v-chip>
                <v-chip class="ma-1" color="primary" variant="outlined">React.js</v-chip>
                <v-chip class="ma-1" color="primary" variant="outlined">JavaScript</v-chip>
                <v-chip class="ma-1" color="primary" variant="outlined">TypeScript</v-chip>
                <v-chip class="ma-1" color="primary" variant="outlined">C#</v-chip>
              </div>
            </v-col>
            
            <v-col cols="12" md="6" class="reveal">
              <h3 class="text-h5 font-weight-bold mb-4">Creative Tools</h3>
              <div class="skill-tags">
                <v-chip class="ma-1" color="accent" variant="outlined">Unity</v-chip>
                <v-chip class="ma-1" color="accent" variant="outlined">Blender</v-chip>
                <v-chip class="ma-1" color="accent" variant="outlined">After Effects</v-chip>
                <v-chip class="ma-1" color="accent" variant="outlined">Premiere Pro</v-chip>
                <v-chip class="ma-1" color="accent" variant="outlined">Photoshop</v-chip>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <!-- 経歴セクション -->
      <section class="experience-section py-16">
        <v-container>
          <v-row>
            <v-col cols="12" class="text-center mb-12">
              <h2 class="section-title reveal">
                <span class="section-title-gradient">Background</span>
              </h2>
            </v-col>
          </v-row>
          
          <v-row>
            <v-col cols="12" class="reveal">
              <v-timeline density="compact" align="start">
                <v-timeline-item
                  dot-color="primary"
                  size="small"
                >
                  <template v-slot:icon>
                    <v-icon color="white">mdi-code-tags</v-icon>
                  </template>
                  <div class="timeline-content">
                    <h4 class="text-h6 font-weight-bold">Web Application Engineer</h4>
                    <p class="text-body-2 text-grey">現在</p>
                    <p class="text-body-1">フロントエンド、バックエンド開発に従事</p>
                  </div>
                </v-timeline-item>
                
                <v-timeline-item
                  dot-color="secondary"
                  size="small"
                >
                  <template v-slot:icon>
                    <v-icon color="white">mdi-music-note</v-icon>
                  </template>
                  <div class="timeline-content">
                    <h4 class="text-h6 font-weight-bold">VJ / DJ / 3DCG Artist</h4>
                    <p class="text-body-2 text-grey">継続中</p>
                    <p class="text-body-1">オーディオヴィジュアル領域での創作活動</p>
                  </div>
                </v-timeline-item>
                
                <v-timeline-item
                  dot-color="accent"
                  size="small"
                >
                  <template v-slot:icon>
                    <v-icon color="white">mdi-boxing-glove</v-icon>
                  </template>
                  <div class="timeline-content">
                    <h4 class="text-h6 font-weight-bold">プロボクサー</h4>
                    <p class="text-body-2 text-grey">過去</p>
                    <p class="text-body-1">元プロボクサーとして活動</p>
                  </div>
                </v-timeline-item>
              </v-timeline>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <!-- 作品セクション -->
      <section class="works-section py-16">
        <v-container>
          <v-row>
            <v-col cols="12" class="text-center mb-12">
              <h2 class="section-title reveal">
                <span class="section-title-gradient">Works</span>
              </h2>
              <p class="text-h6 font-weight-bold mt-4 mb-8 reveal" style="color: #00faff; letter-spacing: 0.02em;">
                Yuto Nodaの作品集
              </p>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" class="reveal">
              <div class="works-gallery">
                <!-- VJ作品 -->
                <div class="work-card" @click="navigateToWork('vj-works')">
                  <div class="work-image-container">
                    <img 
                      src="@/assets/images/vj1.jpg" 
                      alt="オーディオヴィジュアル作品"
                      class="work-thumbnail-image"
                    />
                  </div>
                  <div class="work-content">
                    <h3 class="work-title">オーディオヴィジュアル作品</h3>
                    <p class="work-description">
                      聴覚体験の視覚的拡張をテーマに、3DCGグラフィックを用いたクラブVJやライブの背景映像演出作品。
                    </p>
                    <div class="work-tags">
                      <v-chip size="small" color="primary" variant="outlined">VJ</v-chip>
                      <v-chip size="small" color="secondary" variant="outlined">3DCG</v-chip>
                      <v-chip size="small" color="accent" variant="outlined">映像演出</v-chip>
                    </div>
                    <div class="work-action">
                      <v-icon size="20" color="primary">mdi-arrow-right</v-icon>
                    </div>
                  </div>
                </div>

                <!-- VR作品 -->
                <div class="work-card" @click="navigateToWork('vr-works')">
                  <div class="work-image-container">
                    <img 
                      src="@/assets/images/cypherjpg.jpg" 
                      alt="VRインスタレーションアート"
                      class="work-thumbnail-image"
                    />
                  </div>
                  <div class="work-content">
                    <h3 class="work-title">VRインスタレーションアート</h3>
                    <p class="work-description">
                      社会学的側面から、ディストピアを表現したVR作品の制作・展示を行った作品群。
                    </p>
                    <div class="work-tags">
                      <v-chip size="small" color="primary" variant="outlined">VR</v-chip>
                      <v-chip size="small" color="secondary" variant="outlined">インスタレーション</v-chip>
                      <v-chip size="small" color="accent" variant="outlined">アート</v-chip>
                    </div>
                    <div class="work-action">
                      <v-icon size="20" color="secondary">mdi-arrow-right</v-icon>
                    </div>
                  </div>
                </div>

                <!-- Web開発作品 -->
                <div class="work-card" @click="navigateToWork('web-works')">
                  <div class="work-image-placeholder">
                    <v-icon size="64" color="accent">mdi-web</v-icon>
                    <p class="text-body-2 mt-2">Web開発</p>
                  </div>
                  <div class="work-content">
                    <h3 class="work-title">Webアプリケーション開発</h3>
                    <p class="work-description">
                      Ruby on Rails、Vue.js、Nuxt3.js、React.jsなどを使用したWebアプリケーション開発作品。
                    </p>
                    <div class="work-tags">
                      <v-chip size="small" color="primary" variant="outlined">Web開発</v-chip>
                      <v-chip size="small" color="secondary" variant="outlined">フロントエンド</v-chip>
                      <v-chip size="small" color="accent" variant="outlined">バックエンド</v-chip>
                    </div>
                    <div class="work-action">
                      <v-icon size="20" color="accent">mdi-arrow-right</v-icon>
                    </div>
                  </div>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </section>
    </div>
  </NuxtLayout>
</template>

<script setup>
import { onMounted } from "vue";

// ページメタデータ
useHead({
  title: "Yuto Noda - CyAnn Team",
  meta: [
    {
      name: "description",
      content: "Web Engineer / VJ / DJ / 3DCG Artist - CyAnnチームメンバーの詳細ページ",
    },
  ],
});

// 戻るボタンの処理
const goBack = () => {
  const router = useRouter();
  router.push('/#our-team');
};

// Naganoページへの遷移
const goToNagano = () => {
  const router = useRouter();
  router.push('/team/nagano');
};

// 作品詳細ページへの遷移
const navigateToWork = (workType) => {
  const router = useRouter();
  const routes = {
    'vj-works': '/works/vj-works',
    'vr-works': '/works/vr-works',
    'web-works': '/works/web-works'
  };
  
  const route = routes[workType];
  if (route) {
    router.push(route);
  }
};

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

<style scoped>
.team-member-page {
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
  min-height: 100vh;
  color: white;
}

.member-hero {
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
  position: relative;
  overflow: hidden;
}

.member-hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(circle at 30% 20%, rgba(0, 250, 255, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 70% 80%, rgba(255, 0, 150, 0.1) 0%, transparent 50%);
  pointer-events: none;
}

.member-info {
  position: relative;
  z-index: 2;
}

.member-name {
  background: linear-gradient(45deg, #00faff, #ff0096);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.member-role {
  color: #00faff;
  font-weight: 500;
}

.member-avatar {
  position: relative;
  z-index: 2;
}

.profile-image {
  border-radius: 50%;
  border: 3px solid rgba(0, 250, 255, 0.3);
  box-shadow: 0 0 30px rgba(0, 250, 255, 0.3);
}

.social-links {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.social-icon {
  transition: all 0.3s ease;
}

.social-icon:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 250, 255, 0.3);
}

.navigation-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 16px;
}

.back-btn,
.team-nav-btn {
  transition: all 0.3s ease;
}

.back-btn:hover,
.team-nav-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 250, 255, 0.3);
}

.skills-section,
.experience-section {
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(10px);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.section-title {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
}

.section-title-gradient {
  background: linear-gradient(45deg, #00faff, #ff0096);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.skill-tags .v-chip {
  font-weight: 500;
  border-width: 2px;
}

.skill-tags .v-chip[color="accent"] {
  border-color: #ff9800 !important;
  color: #ff9800 !important;
  background: rgba(255, 152, 0, 0.1) !important;
}

.skill-tags .v-chip[color="accent"]:hover {
  background: rgba(255, 152, 0, 0.2) !important;
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(255, 152, 0, 0.3);
}

.timeline-content {
  padding-left: 16px;
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}

.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease;
}

.reveal.active {
  opacity: 1;
  transform: translateY(0);
}

.min-height-80vh {
  min-height: 80vh;
}

.work-image-container {
  height: 200px;
  position: relative;
  overflow: hidden;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.work-thumbnail-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.3s ease;
}

.work-card:hover .work-thumbnail-image {
  transform: scale(1.05);
}

@media (max-width: 768px) {
  .member-name {
    font-size: 2rem;
  }
  
  .member-role {
    font-size: 1.2rem;
  }
  
  .member-avatar {
    margin-top: 2rem;
  }
  
  .navigation-buttons {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .back-btn,
  .team-nav-btn {
    width: 100%;
    margin-bottom: 8px;
  }
}
</style>
