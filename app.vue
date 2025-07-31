<template>
  <NuxtPage />
</template>
<script setup>
import { onMounted } from "vue";
import clarity from "@microsoft/clarity";

onMounted(() => {
  clarity.init("YOUR_CLARITY_PROJECT_ID");
});
</script>
