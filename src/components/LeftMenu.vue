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
  },
  {
    immediate: true,
  }
);

const feat = () => {
  console.log(123);
};
</script>

<template>
  <div flex="~ col" text="[#d7dde4]">
    <FeildSet title="FEEDS" @update="feat">
      <template v-for="it in data" :key="it.name">
        <FeildSetItem
          :name="it.name"
          :id="it.id"
          :path="it.path"
          :icon="it.icon"
        />
      </template>
    </FeildSet>
  </div>
</template>
