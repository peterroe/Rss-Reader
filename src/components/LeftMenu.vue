<script setup lang="ts">
import FeildSetItem from "./FeildSetItem.vue";
import FeildSet from "./FeildSet.vue";
import { ref, watch } from "vue";
import type { rssType } from "@/types/index";
import { useRssSource } from "@/store/rssSource";

const store = useRssSource();

let data = ref<Array<rssType>>([]);

watch(
  () => store.data,
  (newValue) => {
    data.value = newValue;
  }
);
</script>

<template>
  <div flex="~ col" text="[#d7dde4]">
    <FeildSet title="FEEDS">
      <template v-for="it in data" :key="it.name">
        <FeildSetItem :text="it.name" :path="it.path" :icon="it.icon" />
      </template>
    </FeildSet>
  </div>
</template>
