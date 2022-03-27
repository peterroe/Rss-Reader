<script setup lang="ts">
import { useRssSource } from "@/store/rssSource";

type rssType = {
  text?: string;
  path?: string;
  icon?: string;
  number?: number;
};

const store = useRssSource();

const props = withDefaults(defineProps<rssType>(), {});
</script>

<template>
  <div
    py="2"
    px="2"
    mx="6"
    flex="~"
    rounded="md"
    hover:bg="[#233e61]"
    hover:cursor="pointer"
    :class="{ 'bg-[#233e61]': store.path === props.path }"
    @click="store.setPath(props.path)"
  >
    <div mr="2">
      <div :class="props.icon"></div>
    </div>
    <div flex="1">
      {{ props.text }}
    </div>
    <div>
      {{ props.number }}
    </div>
  </div>
</template>
