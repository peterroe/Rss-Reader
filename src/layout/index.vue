<script setup lang="ts">
import { ref, watch } from "vue";
import { show, hide } from "uspin";
import CustomWindow from "@/components/CustomWindow.vue";
import LeftMenu from "@/components/LeftMenu.vue";
import TopNav from "@/components/TopNav.vue";
import Footer from "@/components/Footer.vue";
import { useLoadingState } from "@/store/loadingState";
import { storeToRefs } from "pinia";

const { loading } = storeToRefs(useLoadingState());
const wrapperRef = ref();

watch(
  () => loading.value,
  (n, o) => {
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
  height: 100vh;
  overflow: auto;
  border-bottom-right-radius: 1em;
  border-top-right-radius: 1.5em;
}
.leftContainer {
  border-top-left-radius: 1em;
  border-bottom-left-radius: 1em;
}
</style>
