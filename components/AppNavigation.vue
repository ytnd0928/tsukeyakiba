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
        @click="scrollToSection('top')"
        style="max-width: none !important; width: auto !important"
      >
        <img src="@/assets/images/logo.png" alt="Logo" class="logo-image" />
        <span class="gradient-text">CyAnn</span>
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
          @click="scrollToSection(item.section)"
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
            scrollToSection(item.section);
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

const { mobile } = useDisplay();
const { y: scrollY } = useWindowScroll();

const drawer = ref(false);

const menuItems = ref([
  { title: "ホーム", section: "top" },
  { title: "サービス", section: "services" },
  { title: "ポートフォリオ", section: "portfolio" },
  { title: "About", section: "about" },
  { title: "お問い合わせ", section: "contact" },
]);

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
