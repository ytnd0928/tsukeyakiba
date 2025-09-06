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
                  Tetsushi Nagano
                </h1>
                <p class="member-role text-h5 mb-6 text-primary">
                  Photographer / Artist
                </p>
                <p class="member-birth text-body-1 mb-6">
                  1999年、東京都生まれ
                </p>
                <p class="member-description text-body-1 mb-8">
                  「諸行無常」をテーマに、変わりゆく都市の風景と人々の写真撮影をライフワークとしている。
                  大学在学時は、学生団体主催のミス・ミスターコンテストのカメラマンとして、5大学の出場者の写真撮影を担当。
                  都市の移ろいゆく美しさを捉え、一瞬の表情や風景を永遠に留めることを使命としている。
                </p>
                
                <!-- ソーシャルリンク -->
                <div class="social-links mb-8">
                  <v-btn
                    icon
                    size="large"
                    variant="text"
                    color="pink"
                    class="mx-2 social-icon"
                    href="https://www.instagram.com/t.n.photo_portfolio"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <v-icon size="28">mdi-instagram</v-icon>
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
                    src="@/assets/images/nagano.JPG"
                    alt="Tetsushi Nagano"
                    class="profile-image"
                  />
                </v-avatar>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <!-- アートコンセプトセクション -->
      <section class="concept-section py-16">
        <v-container>
          <v-row>
            <v-col cols="12" class="text-center mb-12">
              <h2 class="section-title reveal">
                <span class="section-title-gradient">Artistic Concept</span>
              </h2>
            </v-col>
          </v-row>
          
          <v-row>
            <v-col cols="12" class="reveal">
              <div class="concept-card">
                <h3 class="text-h4 font-weight-bold mb-6 text-center">諸行無常</h3>
                <p class="text-body-1 mb-6 text-center">
                  すべてのものは常に変化し続けているという仏教の教えを、写真という媒体を通じて表現している。
                  都市の風景、人々の表情、一瞬の光と影の交錯——これらすべてが永遠に同じ状態でいることはない。
                </p>
                <p class="text-body-1 text-center">
                  カメラを通じて、その移ろいゆく美しさを捉え、永遠に留めることが私の使命です。
                </p>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <!-- 経験セクション -->
      <section class="experience-section py-16">
        <v-container>
          <v-row>
            <v-col cols="12" class="text-center mb-12">
              <h2 class="section-title reveal">
                <span class="section-title-gradient">Experience</span>
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
                    <v-icon color="white">mdi-camera</v-icon>
                  </template>
                  <div class="timeline-content">
                    <h4 class="text-h6 font-weight-bold">ミス・ミスターコンテスト カメラマン</h4>
                    <p class="text-body-2 text-grey">大学在学時</p>
                    <p class="text-body-1">学生団体主催のミス・ミスターコンテストで、5大学の出場者の写真撮影を担当</p>
                  </div>
                </v-timeline-item>
                
                <v-timeline-item
                  dot-color="secondary"
                  size="small"
                >
                  <template v-slot:icon>
                    <v-icon color="white">mdi-city</v-icon>
                  </template>
                  <div class="timeline-content">
                    <h4 class="text-h6 font-weight-bold">都市写真プロジェクト</h4>
                    <p class="text-body-2 text-grey">継続中</p>
                    <p class="text-body-1">「諸行無常」をテーマにした都市の風景と人々の写真撮影をライフワークとして継続</p>
                  </div>
                </v-timeline-item>
                
                <v-timeline-item
                  dot-color="accent"
                  size="small"
                >
                  <template v-slot:icon>
                    <v-icon color="white">mdi-palette</v-icon>
                  </template>
                  <div class="timeline-content">
                    <h4 class="text-h6 font-weight-bold">アーティスト活動</h4>
                    <p class="text-body-2 text-grey">継続中</p>
                    <p class="text-body-1">写真を通じた芸術表現活動</p>
                  </div>
                </v-timeline-item>
              </v-timeline>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <!-- 作品スタイルセクション -->
      <section class="style-section py-16">
        <v-container>
          <v-row>
            <v-col cols="12" class="text-center mb-12">
              <h2 class="section-title reveal">
                <span class="section-title-gradient">Photography Style</span>
              </h2>
            </v-col>
          </v-row>
          
          <v-row>
            <v-col cols="12" md="4" class="reveal">
              <div class="style-card">
                <v-icon size="48" color="primary" class="mb-4">mdi-city</v-icon>
                <h3 class="text-h6 font-weight-bold mb-3">都市風景</h3>
                <p class="text-body-2">
                  変わりゆく都市の風景を捉え、その瞬間の美しさを永遠に留める
                </p>
              </div>
            </v-col>
            
            <v-col cols="12" md="4" class="reveal">
              <div class="style-card">
                <v-icon size="48" color="secondary" class="mb-4">mdi-account</v-icon>
                <h3 class="text-h6 font-weight-bold mb-3">人物撮影</h3>
                <p class="text-body-2">
                  人々の一瞬の表情や仕草を捉え、その瞬間の感情を写真に込める
                </p>
              </div>
            </v-col>
            
            <v-col cols="12" md="4" class="reveal">
              <div class="style-card">
                <v-icon size="48" color="accent" class="mb-4">mdi-lightbulb</v-icon>
                <h3 class="text-h6 font-weight-bold mb-3">光と影</h3>
                <p class="text-body-2">
                  光と影の交錯を巧みに捉え、ドラマチックな表現を生み出す
                </p>
              </div>
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
                Tetsushi Naganoの作品集
              </p>
            </v-col>
          </v-row>

          <v-row>
            <v-col cols="12" class="reveal">
              <div class="works-gallery">
                <!-- 都市風景写真 -->
                <div class="work-card" @click="navigateToWork('urban-photography')">
                  <div class="work-image-placeholder">
                    <v-icon size="64" color="primary">mdi-city</v-icon>
                    <p class="text-body-2 mt-2">都市風景写真</p>
                  </div>
                  <div class="work-content">
                    <h3 class="work-title">都市の移ろい</h3>
                    <p class="work-description">
                      「諸行無常」をテーマに、変わりゆく都市の風景を捉えた写真作品シリーズ。
                    </p>
                    <div class="work-tags">
                      <v-chip size="small" color="primary" variant="outlined">都市風景</v-chip>
                      <v-chip size="small" color="secondary" variant="outlined">諸行無常</v-chip>
                      <v-chip size="small" color="accent" variant="outlined">風景写真</v-chip>
                    </div>
                    <div class="work-action">
                      <v-icon size="20" color="primary">mdi-arrow-right</v-icon>
                    </div>
                  </div>
                </div>

                <!-- 人物写真 -->
                <div class="work-card" @click="navigateToWork('portrait-photography')">
                  <div class="work-image-placeholder">
                    <v-icon size="64" color="secondary">mdi-account</v-icon>
                    <p class="text-body-2 mt-2">人物写真</p>
                  </div>
                  <div class="work-content">
                    <h3 class="work-title">人々の一瞬</h3>
                    <p class="work-description">
                      人々の一瞬の表情や仕草を捉え、その瞬間の感情を写真に込めた作品群。
                    </p>
                    <div class="work-tags">
                      <v-chip size="small" color="primary" variant="outlined">人物写真</v-chip>
                      <v-chip size="small" color="secondary" variant="outlined">ポートレート</v-chip>
                      <v-chip size="small" color="accent" variant="outlined">表情</v-chip>
                    </div>
                    <div class="work-action">
                      <v-icon size="20" color="secondary">mdi-arrow-right</v-icon>
                    </div>
                  </div>
                </div>

                <!-- コンテスト撮影 -->
                <div class="work-card" @click="navigateToWork('event-photography')">
                  <div class="work-image-placeholder">
                    <v-icon size="64" color="accent">mdi-camera</v-icon>
                    <p class="text-body-2 mt-2">コンテスト撮影</p>
                  </div>
                  <div class="work-content">
                    <h3 class="work-title">ミス・ミスターコンテスト撮影</h3>
                    <p class="work-description">
                      学生団体主催のミス・ミスターコンテストで、5大学の出場者の写真撮影を担当した作品。
                    </p>
                    <div class="work-tags">
                      <v-chip size="small" color="primary" variant="outlined">イベント撮影</v-chip>
                      <v-chip size="small" color="secondary" variant="outlined">コンテスト</v-chip>
                      <v-chip size="small" color="accent" variant="outlined">学生団体</v-chip>
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
  title: "Tetsushi Nagano - CyAnn Team",
  meta: [
    {
      name: "description",
      content: "Photographer / Artist - CyAnnチームメンバーの詳細ページ",
    },
  ],
});

// 戻るボタンの処理
const goBack = () => {
  const router = useRouter();
  router.push('/#our-team');
};

// Nodaページへの遷移
const goToNoda = () => {
  const router = useRouter();
  router.push('/team/noda');
};

// 作品詳細ページへの遷移
const navigateToWork = (workType) => {
  const router = useRouter();
  const routes = {
    'urban-photography': '/works/urban-photography',
    'portrait-photography': '/works/portrait-photography',
    'event-photography': '/works/event-photography'
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

.concept-section,
.experience-section,
.style-section {
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

.concept-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 3rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
}

.style-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  height: 100%;
  transition: all 0.3s ease;
}

.style-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 250, 255, 0.2);
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
  
  .concept-card {
    padding: 2rem;
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
