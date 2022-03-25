<script setup lang="ts">
import LeftMenu from "@/components/LeftMenu.vue";
import TopNav from "@/components/TopNav.vue";
</script>

<template>
  <div flex="~">
    <div w="250px" h="100vh" bg="[#294973]" sticky="~" top="0" z="10">
      <LeftMenu />
    </div>
    <div flex="1" bg="blue-200" h="800px">
      <TopNav />
      <router-view></router-view>
    </div>
  </div>
</template>
