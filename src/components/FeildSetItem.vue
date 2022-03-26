<script setup lang="ts">
const props = defineProps<{
  text: string;
  number?: number | string;
}>();
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
  >
    <div mr="2">
      <slot></slot>
    </div>
    <div flex="1">
      {{ props.text }}
    </div>
    <div>
      {{ props.number }}
    </div>
  </div>
</template>
