<template>
  <v-app-bar
    :elevation="scrollY > 50 ? 4 : 0"
    color="grey-lighten-4"
    :class="['smooth-transition', { scrolled: scrollY > 50 }]"
    fixed
    app
  >
    <v-container fluid class="d-flex align-center">
      <!-- ロゴ -->
      <div
        class="text-h5 font-weight-bold cursor-pointer logo-text d-flex align-center text-no-wrap"
        @click="navigateToHome"
        style="max-width: none !important; width: auto !important"
      >
        <img src="@/assets/images/logo.png" alt="Logo" class="logo-image" />
        <span class="header-logo-gradient">CyAnn</span>
      </div>

      <v-spacer />

      <!-- デスクトップメニュー -->
      <v-app-bar-nav-icon v-if="mobile" @click="drawer = !drawer" />

      <div v-else class="d-flex align-center">
        <v-btn
          v-for="item in menuItems"
          :key="item.title"
          variant="text"
          class="mx-1 nav-btn"
          @click="handleNavigation(item)"
        >
          {{ item.title }}
        </v-btn>
      </div>
    </v-container>

    <!-- モバイルドロワー -->
    <v-navigation-drawer
      v-model="drawer"
      temporary
      location="right"
      class="mobile-drawer"
    >
      <v-list>
        <v-list-item
          v-for="item in menuItems"
          :key="item.title"
          @click="
            handleNavigation(item);
            drawer = false;
          "
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-app-bar>
</template>

<script setup>
import { ref } from "vue";
import { useDisplay } from "vuetify";
import { useWindowScroll } from "@vueuse/core";
import { useRouter, useRoute } from "vue-router";

const { mobile } = useDisplay();
const { y: scrollY } = useWindowScroll();
const router = useRouter();
const route = useRoute();

const drawer = ref(false);

const menuItems = ref([
  { title: "Home", section: "top", requiresHome: true },
  { title: "About", section: "about", requiresHome: true },
  { title: "Our Team", section: "our-team", requiresHome: true },
  { title: "Contact", section: "contact", requiresHome: true },
]);

// ホームページに遷移
const navigateToHome = () => {
  if (route.path !== "/") {
    router.push("/");
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};

// ナビゲーションハンドラー
const handleNavigation = (item) => {
  if (item.title === "Home") {
    navigateToHome();
  } else if (item.requiresHome && route.path !== "/") {
    // ホームページ以外にいる場合は、まずホームに遷移してからセクションにスクロール
    router.push("/").then(() => {
      // 遷移完了後に少し待ってからスクロール
      setTimeout(() => {
        scrollToSection(item.section);
      }, 100);
    });
  } else {
    // すでにホームページにいる場合は直接スクロール
    scrollToSection(item.section);
  }
};

// セクションにスクロール
const scrollToSection = (sectionId) => {
  if (sectionId === "top") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
};
</script>
