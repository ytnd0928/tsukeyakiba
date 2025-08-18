<template>
  <v-app>
    <div class="custom-cursor" ref="cursor"></div>
    <!-- ナビゲーション -->
    <AppNavigation />

    <!-- メインコンテンツ -->
    <v-main>
      <slot />
    </v-main>

    <!-- フッター -->
    <v-footer class="footer-section">
      <v-container>
        <v-row align="center" justify="center">
          <v-col cols="auto">
            <span class="text-body-2">
              © 2024 TSUKEYAKIBA Production. All rights reserved.
            </span>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import AppNavigation from "~/components/AppNavigation.vue";

const cursor = ref(null);

const updateCursor = (e) => {
  if (cursor.value) {
    cursor.value.style.left = e.clientX - 10 + "px";
    cursor.value.style.top = e.clientY - 10 + "px";
  }
};

const handleMouseDown = () => {
  if (cursor.value) {
    cursor.value.classList.add("clicking");
  }
};

const handleMouseUp = () => {
  if (cursor.value) {
    cursor.value.classList.remove("clicking");
  }
};

onMounted(() => {
  document.addEventListener("mousemove", updateCursor);
  document.addEventListener("mousedown", handleMouseDown);
  document.addEventListener("mouseup", handleMouseUp);
});

onUnmounted(() => {
  document.removeEventListener("mousemove", updateCursor);
  document.removeEventListener("mousedown", handleMouseDown);
  document.removeEventListener("mouseup", handleMouseUp);
});
// レイアウト設定
useHead({
  htmlAttrs: {
    lang: "ja",
  },
});
</script>
