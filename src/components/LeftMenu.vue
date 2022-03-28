<script setup lang="ts">
import FeildSetItem from "./FeildSetItem.vue";
import FeildSet from "./FeildSet.vue";
import { ref } from "vue";
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
    icon: "i-carbon-rss",
  },
  {
    text: "36氪",
    path: "https://36kr.com/feed",
    icon: "i-carbon-star",
  },
  {
    text: "设计日报",
    path: "https://www.designernews.co/?format=rss",
    icon: "i-carbon-bat",
  },
  {
    text: "antfu",
    path: "https://antfu.me/feed.xml",
    icon: "i-carbon-3rd-party-connected",
  },
  {
    text: "机核",
    path: "https://www.gcores.com/rss",
    icon: "i-carbon-money",
  },
  {
    text: "Shadeed Blog",
    path: "https://ishadeed.com/feed.xml",
    icon: "i-carbon-earth",
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
