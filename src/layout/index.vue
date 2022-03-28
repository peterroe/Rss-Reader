<script setup lang="ts">
import CustomWindow from "@/components/CustomWindow.vue";
import LeftMenu from "@/components/LeftMenu.vue";
import TopNav from "@/components/TopNav.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <div flex="~">
    <CustomWindow />
    <div w="250px" h="100vh" bg="[#294973]" sticky="~" top="0" pt="30px" z="10">
      <LeftMenu />
    </div>
    <div flex="1" bg="white" class="bug-fix" mt="30px">
      <TopNav />
      <router-view></router-view>
      <Footer />
    </div>
  </div>
</template>

<style></style>
