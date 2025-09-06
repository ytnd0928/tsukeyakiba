<template>
  <NuxtLayout>
    <div class="work-gallery-page">
      <!-- ヘッダーセクション -->
      <section class="work-header py-8">
        <v-container>
          <v-row align="center">
            <v-col cols="12" class="d-flex justify-space-between align-center">
              <div>
                <h1 class="work-title text-h4 font-weight-bold mb-2">
                  オーディオヴィジュアル作品
                </h1>
                <p class="work-subtitle text-body-1">
                  聴覚体験の視覚的拡張をテーマにした3DCGグラフィック作品
                </p>
              </div>
              
              <!-- 戻るボタン -->
              <v-btn
                variant="outlined"
                color="primary"
                size="large"
                @click="goBack"
                class="back-btn"
              >
                <v-icon left size="20">mdi-arrow-left</v-icon>
                戻る
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <!-- 作品グリッドセクション -->
      <section class="work-grid py-8">
        <v-container>
          <v-row>
            <v-col cols="12" class="reveal">
              <div class="media-grid">
                <!-- 作品1 -->
                <div class="media-item">
                  <div class="media-placeholder">
                    <v-icon size="48" color="primary">mdi-play-circle</v-icon>
                    <p class="text-body-2 mt-2">VJ作品 1</p>
                  </div>
                </div>

                <!-- 作品2 -->
                <div class="media-item">
                  <div class="media-placeholder">
                    <v-icon size="48" color="secondary">mdi-play-circle</v-icon>
                    <p class="text-body-2 mt-2">VJ作品 2</p>
                  </div>
                </div>

                <!-- 作品3 -->
                <div class="media-item">
                  <div class="media-placeholder">
                    <v-icon size="48" color="accent">mdi-play-circle</v-icon>
                    <p class="text-body-2 mt-2">VJ作品 3</p>
                  </div>
                </div>

                <!-- 作品4 -->
                <div class="media-item">
                  <div class="media-placeholder">
                    <v-icon size="48" color="primary">mdi-image</v-icon>
                    <p class="text-body-2 mt-2">VJ作品 4</p>
                  </div>
                </div>

                <!-- 作品5 -->
                <div class="media-item">
                  <div class="media-placeholder">
                    <v-icon size="48" color="secondary">mdi-image</v-icon>
                    <p class="text-body-2 mt-2">VJ作品 5</p>
                  </div>
                </div>

                <!-- 作品6 -->
                <div class="media-item">
                  <div class="media-placeholder">
                    <v-icon size="48" color="accent">mdi-image</v-icon>
                    <p class="text-body-2 mt-2">VJ作品 6</p>
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
  title: "オーディオヴィジュアル作品 - Yuto Noda",
  meta: [
    {
      name: "description",
      content: "聴覚体験の視覚的拡張をテーマにした3DCGグラフィック作品集",
    },
  ],
});

// 戻るボタンの処理
const goBack = () => {
  const router = useRouter();
  router.push('/team/noda');
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
.work-gallery-page {
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
  min-height: 100vh;
  color: white;
}

.work-header {
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.work-title {
  background: linear-gradient(45deg, #00faff, #ff0096);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.work-subtitle {
  color: rgba(255, 255, 255, 0.8);
}

.back-btn {
  transition: all 0.3s ease;
}

.back-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 250, 255, 0.3);
}

.work-grid {
  background: rgba(255, 255, 255, 0.01);
}

.media-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.media-item {
  aspect-ratio: 16/9;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;
}

.media-item:hover {
  transform: scale(1.02);
  box-shadow: 0 10px 30px rgba(0, 250, 255, 0.2);
}

.media-placeholder {
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.media-item:hover .media-placeholder {
  background: linear-gradient(135deg, rgba(0, 250, 255, 0.1) 0%, rgba(255, 0, 150, 0.1) 100%);
  border-color: rgba(0, 250, 255, 0.3);
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

@media (max-width: 768px) {
  .work-title {
    font-size: 1.5rem;
  }
  
  .work-subtitle {
    font-size: 0.9rem;
  }
  
  .media-grid {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
  }
  
  .work-header .d-flex {
    flex-direction: column;
    align-items: flex-start !important;
    gap: 1rem;
  }
  
  .back-btn {
    width: 100%;
  }
}

@media (max-width: 480px) {
  .media-grid {
    grid-template-columns: 1fr;
  }
}
</style>
