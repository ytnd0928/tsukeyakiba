<template>
  <v-app>
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
// レイアウト設定
useHead({
  htmlAttrs: {
    lang: "ja",
  },
});
</script>
