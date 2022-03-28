<script setup lang="ts">
import { useRssSource } from "@/store/rssSource";

const store = useRssSource();
</script>

<template>
  <div
    h="48px"
    leading="48px"
    flex="~"
    items="center"
    justify="between"
    w="full"
    p="2"
    z="9"
    sticky="~"
    top="30px"
    bg="white"
    class="botton-border"
    style="font-family: 'xknl'"
  >
    <div>{{ store.title }}</div>
    <button
      border="~ solid [#50c0ad]"
      rounded="md"
      h="35px"
      px="2"
      text="[#fff]"
      leading="35px"
      bg="[#50c0ad]"
      hover:bg="[#368275]"
    >
      Subscribe
    </button>
  </div>
</template>

<style scoped>
.botton-border {
  border-bottom: 1px solid #ccc;
}
</style>
