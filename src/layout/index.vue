<script setup lang="ts">
import { nextTick, onMounted, ref, watch } from "vue";
import { show, hide } from "uspin";
import { useLoadingState } from "@/store/loadingState";
import { storeToRefs } from "pinia";
import { appWindow } from "@tauri-apps/api/window";
import CustomWindow from "@/components/CustomWindow.vue";
import LeftMenu from "@/components/LeftMenu.vue";
import TopNav from "@/components/TopNav.vue";
import Footer from "@/components/Footer.vue";

const { loading } = storeToRefs(useLoadingState());
const wrapperRef = ref();

watch(
  () => loading.value,
  (n) => {
    if (n) {
      show(wrapperRef.value);
    } else {
      hide(wrapperRef.value);
    }
  },
  {
    flush: "post",
  }
);
</script>

<template>
  <div flex="~">
    <CustomWindow />
    <div
      w="250px"
      h="100vh"
      bg="[#294973]"
      sticky="~"
      top="0"
      pt="30px"
      z="10"
      class="leftContainer"
    >
      <LeftMenu />
    </div>
    <div flex="1" bg="white" ref="wrapperRef" class="wrapper">
      <TopNav />
      <router-view></router-view>
      <Footer />
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  box-sizing: border-box;
  margin-right: 1px;
  height: calc(100vh - 1px);
  border: 1px solid #294973;
  overflow: auto;
  border-bottom-right-radius: 1em;
  border-top-right-radius: 1.5em;
}
.leftContainer {
  border-top-left-radius: 1em;
  border-bottom-left-radius: 1em;
  height: calc(100vh - 1px);
}
</style>
