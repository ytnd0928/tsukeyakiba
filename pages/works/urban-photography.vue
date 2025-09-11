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
                  都市の移ろい
                </h1>
                <p class="work-subtitle text-body-1">
                  「諸行無常」をテーマにした都市風景写真シリーズ
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
                <div 
                  v-for="(image, index) in images" 
                  :key="index"
                  class="media-item" 
                  @click="openModal(image.src, image.title)"
                >
                  <img 
                    :src="image.src" 
                    :alt="image.title"
                    class="gallery-image"
                    loading="lazy"
                  />
                  <div class="image-overlay">
                    <v-icon size="32" color="white">mdi-magnify-plus</v-icon>
                  </div>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </section>

      <!-- 画像モーダル -->
      <v-dialog v-model="modalOpen" max-width="90vw" max-height="90vh" @click:outside="closeModal">
        <v-card class="modal-card">
          <v-card-title class="modal-header">
            <span class="modal-title">{{ modalTitle }}</span>
            <v-spacer></v-spacer>
            <v-btn
              icon
              @click="closeModal"
              class="close-btn"
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-card-title>
          <v-card-text class="modal-content">
            <div class="modal-image-container">
              <img 
                :src="modalImageSrc" 
                :alt="modalTitle"
                class="modal-image"
                @click.stop
              />
            </div>
          </v-card-text>
        </v-card>
      </v-dialog>
    </div>
  </NuxtLayout>
</template>

<script setup>
import { onMounted, ref } from "vue";

// 画像のインポート
import DSC0049 from '~/assets/images/DSC_0049.JPG'
import DSC0878 from '~/assets/images/DSC_0878.JPG'
import DSC1687 from '~/assets/images/DSC_1687.JPG'
import P1000280 from '~/assets/images/P1000280.JPG'

// ページメタデータ
useHead({
  title: "都市の移ろい - Tetsushi Nagano",
  meta: [
    {
      name: "description",
      content: "「諸行無常」をテーマにした都市風景写真シリーズ",
    },
  ],
});

// モーダル関連の状態
const modalOpen = ref(false);
const modalImageSrc = ref('');
const modalTitle = ref('');

// 画像データ
const images = [
  { src: DSC0049, title: '都市風景 1' },
  { src: DSC0878, title: '都市風景 2' },
  { src: DSC1687, title: '都市風景 3' },
  { src: P1000280, title: '都市風景 4' }
];

// 戻るボタンの処理
const goBack = () => {
  const router = useRouter();
  router.push('/team/nagano');
};

// モーダルを開く
const openModal = (imageSrc, title) => {
  modalImageSrc.value = imageSrc;
  modalTitle.value = title;
  modalOpen.value = true;
};

// モーダルを閉じる
const closeModal = () => {
  modalOpen.value = false;
  // モーダルが閉じた後に画像をクリア（メモリ節約）
  setTimeout(() => {
    modalImageSrc.value = '';
    modalTitle.value = '';
  }, 300);
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
  aspect-ratio: 4/3;
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
}

.media-item:hover {
  transform: scale(1.02);
  box-shadow: 0 10px 30px rgba(0, 250, 255, 0.2);
}

.gallery-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.3s ease;
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.3s ease;
}

.media-item:hover .image-overlay {
  opacity: 1;
}

.media-item:hover .gallery-image {
  transform: scale(1.05);
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

/* モーダルスタイル */
.modal-card {
  background: rgba(10, 10, 10, 0.95) !important;
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  overflow: hidden;
}

.modal-header {
  background: rgba(0, 0, 0, 0.8);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1rem 1.5rem;
}

.modal-title {
  color: white;
  font-size: 1.2rem;
  font-weight: 600;
}

.close-btn {
  color: rgba(255, 255, 255, 0.8) !important;
  transition: all 0.3s ease;
}

.close-btn:hover {
  color: white !important;
  background: rgba(255, 255, 255, 0.1) !important;
}

.modal-content {
  padding: 0 !important;
  background: transparent;
}

.modal-image-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 70vh;
  padding: 1rem;
  overflow: hidden;
}

.modal-image {
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease;
}

.modal-image:hover {
  transform: scale(1.02);
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
  
  .modal-image-container {
    height: 60vh;
    padding: 0.5rem;
  }
  
  .modal-image {
    max-width: 100%;
    max-height: 100%;
  }
  
  .modal-header {
    padding: 0.75rem 1rem;
  }
  
  .modal-title {
    font-size: 1rem;
  }
}
</style>
