<script setup lang="ts">
import { ref } from "vue-demi";
type rssType = {
  text?: string;
  path?: string;
  icon?: string;
  number?: number;
};

const data = ref<Array<rssType>>([
  {
    text: "少数派",
    path: "https://sspai.com/feed",
    icon: "https://cdn.sspai.com/web/favicon/sspai.ico",
  },
  {
    text: "36氪",
    path: "https://36kr.com/feed",
    icon: "https://cdn.sspai.com/web/favicon/36kr.ico",
  },
  {
    text: "设计日报",
    path: "https://www.designernews.co/feed",
    icon: "https://cdn.sspai.com/web/favicon/designernews.ico",
  },
  {
    text: "设计公众号",
    path: "https://www.designernews.co/feed",
    icon: "https://cdn.sspai.com/web/favicon/designernews.ico",
  },
  {
    text: "antfu",
    path: "https://antfu.me/feed.xml",
    icon: "https://cdn.sspai.com/web/favicon/antfu.ico",
  },
]);

console.log(data.value);
</script>

<template>
  <div flex="~ col" text="[#d7dde4]">
    <FeildSet title="FEEDS">
      <template v-for="it in data" :key="it.text">
        <FeildSetItem :text="it.text" :path="it.path" :icon="it.icon" />
      </template>
    </FeildSet>
  </div>
</template>
