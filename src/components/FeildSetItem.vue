<script setup lang="ts">
import { useRssSource } from "@/store/rssSource";
type rssType = {
  id?: number;
  name?: string;
  path?: string;
  icon?: string;
  number?: number;
};

const store = useRssSource();

// https://vuejs.org/api/sfc-script-setup.html#default-props-values-when-using-type-declaration
const props = withDefaults(defineProps<rssType>(), {});
</script>

<template>
  <div
    py="2"
    px="2"
    mx="6"
    my="2"
    flex="~"
    rounded="md"
    hover:bg="[#233e61]"
    hover:cursor="pointer"
    :class="['feildSetItem', { 'bg-[#233e61]': store.id === props.id }]"
    @click="store.setId(props.id), store.setPath(props.path)"
  >
    <div mr="2">
      <!-- tudo: feat icon -->
      <div :class="props.icon"></div>
    </div>
    <div flex="1" style="font-family: 'xknl'">
      {{ props.name }}
    </div>
    <div>
      {{ props.number }}
    </div>
    <div>
      <div
        v-show="store.id !== props.id"
        display="none"
        class="delete i-carbon-delete"
        @click="store.deletePath(props.id)"
      ></div>
    </div>
  </div>
</template>

<style scoped>
.feildSetItem:hover .delete {
  display: block;
}
</style>
