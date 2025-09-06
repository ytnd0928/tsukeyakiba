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
                  VRインスタレーションアート
                </h1>
                <p class="work-subtitle text-body-1">
                  社会学的側面から、ディストピアを表現したVR作品
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

      <!-- 作品詳細セクション -->
      <section class="work-details py-8">
        <v-container>
          <v-row>
            <v-col cols="12" class="reveal">
              <div class="work-showcase">
                <!-- 作品画像 -->
                <div class="work-image-section">
                  <img 
                    src="@/assets/images/cypherjpg.jpg" 
                    alt="The City Abandoned by Humanity"
                    class="work-main-image"
                  />
                </div>

                <!-- 作品情報 -->
                <div class="work-info-section">
                  <div class="work-description-card">
                    <h2 class="text-h4 font-weight-bold mb-6">The City Abandoned by Humanity</h2>
                    
                    <div class="work-text-content">
                      <div class="text-section mb-6">
                        <p class="text-body-1 mb-3">
                          	NEWVIEW FEST 2023　渋谷PARCOにて展示
                        </p>
                        <p class="text-body-1 mb-3">
                          私達の心の中も知らず知らずのうちに「何か」に支配されているかもしれない。
                        </p>
                        <p class="text-body-1 mb-3">
                          ヒトはいなくなるのか、あるいは何かに追いやられ絶滅するのか。<br>
                          私達がが国の中心だと思いこんでいたものが失われ、ヒトではない「何か」が支配した。<br>
                          移りゆく人々の姿、下を向いて歩く人々、もしこの日常がなくなったとしたらどうなるだろうか。
                        </p>
                        <p class="text-body-1">
                          今回、普段考えることなく歩いている渋谷をゆっくり観察してみて思いのままに制作した作品です。
                        </p>
                      </div>
                      
                      <div class="text-section mb-6">
                        <p class="text-body-1 mb-3">
                          Our minds may be unwittingly controlled by "something" as well.
                        </p>
                        <p class="text-body-1 mb-3">
                          Will humans disappear, or will something drive us into extinction?<br>
                          What we thought was the center of our country has been lost, and something other than humans has taken over.<br>
                          What would happen to the shifting figures of people, people walking down the street, if this everyday life were to disappear?
                        </p>
                        <p class="text-body-1">
                          This time, I created this work based on my thoughts after slowly observing Shibuya, a place I usually walk around without thinking about it.
                        </p>
                      </div>

                      <div class="work-links">
                        <v-btn
                          color="primary"
                          variant="outlined"
                          size="large"
                          class="mr-3 mb-2"
                          @click="openWork('https://gallery.styly.cc/scene/1dbee19a-7a86-41df-b70e-c4ea253c7aa0')"
                        >
                          <v-icon left size="20">mdi-vr-headset</v-icon>
                          STYLY Gallery で体験
                        </v-btn>
                        <v-btn
                          color="white"
                          variant="filled"
                          size="large"
                          class="mb-2 newview-btn"
                          @click="openWork('https://newview.design/fest2023/')"
                        >
                          <v-icon left size="20">mdi-calendar</v-icon>
                          NEWVIEW FEST 2023
                        </v-btn>
                      </div>
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
  title: "VRインスタレーションアート - Yuto Noda",
  meta: [
    {
      name: "description",
      content: "社会学的側面から、ディストピアを表現したVR作品集",
    },
  ],
});

// 戻るボタンの処理
const goBack = () => {
  const router = useRouter();
  router.push('/team/noda');
};

// 作品URLを開く
const openWork = (url) => {
  window.open(url, '_blank', 'noopener,noreferrer');
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

.work-details {
  background: rgba(255, 255, 255, 0.01);
}

.work-showcase {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.work-image-section {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.work-main-image {
  width: 100%;
  height: 60vh;
  object-fit: cover;
  transition: all 0.3s ease;
}

.work-image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.2) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.work-title-overlay {
  text-align: center;
  color: white;
  padding: 2rem;
}

.work-title-text {
  font-size: clamp(2rem, 5vw, 4rem);
  font-weight: 900;
  letter-spacing: 0.1em;
  text-shadow: 0 0 20px rgba(255, 0, 0, 0.8);
  line-height: 1.2;
  margin: 0;
}

.work-info-section {
  max-width: 800px;
  margin: 0 auto;
}

.work-description-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
}

.work-text-content {
  color: rgba(255, 255, 255, 0.9);
}

.text-section {
  border-left: 3px solid rgba(0, 250, 255, 0.5);
  padding-left: 1rem;
}

.work-links {
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.newview-btn {
  background: linear-gradient(45deg, #ff6b35, #f7931e) !important;
  color: white !important;
  font-weight: bold !important;
  box-shadow: 0 4px 15px rgba(255, 107, 53, 0.4) !important;
  transition: all 0.3s ease !important;
}

.newview-btn:hover {
  transform: translateY(-2px) !important;
  box-shadow: 0 8px 25px rgba(255, 107, 53, 0.6) !important;
  background: linear-gradient(45deg, #ff5722, #ff9800) !important;
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
  
  .work-main-image {
    height: 40vh;
  }
  
  .work-title-text {
    font-size: clamp(1.5rem, 4vw, 2.5rem);
  }
  
  .work-showcase {
    gap: 2rem;
  }
  
  .work-description-card {
    padding: 1.5rem;
  }
  
  .work-header .d-flex {
    flex-direction: column;
    align-items: flex-start !important;
    gap: 1rem;
  }
  
  .back-btn {
    width: 100%;
  }
  
  .work-links {
    flex-direction: column;
  }
  
  .work-links .v-btn {
    width: 100%;
  }
}

@media (max-width: 480px) {
  .work-main-image {
    height: 30vh;
  }
  
  .work-title-text {
    font-size: clamp(1.2rem, 3vw, 2rem);
  }
  
  .work-description-card {
    padding: 1rem;
  }
}
</style>
