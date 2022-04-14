<script setup lang="ts">
import { useRssSource } from "@/store/rssSource";
import { message } from "ungeui";

const store = useRssSource();

const subscribe = () => {
  message.info("Welcome promote this app to your friends!");
};
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
    top="29px"
    bg="white"
    class="botton-border"
    @click="subscribe"
    style="font-family: 'xknl'"
  >
    <div>{{ store.title }}</div>
    <u-button deep size="mini" leading="32px" px="2"> Subscribe </u-button>
  </div>
</template>

<style scoped>
.botton-border {
  border-bottom: 1px solid #ccc;
}
</style>
