<script setup lang="ts">
import getRssMessage from "@/utils/request";
import { getItems, getMainIdea, itemType, mainIdeaType } from "@/utils/index";
import { ref } from "vue";

const items = ref<Array<itemType>>([]);
const mainIdea = ref<mainIdeaType>({});

getRssMessage("https://antfu.me/feed.xml").then((value) => {
  const wrapper = value.rss[0].channel;

  mainIdea.value = getMainIdea(wrapper);
  items.value = getItems(wrapper);

  console.log(mainIdea.value, items.value);
});
</script>

<template>
  <div>data</div>
</template>
