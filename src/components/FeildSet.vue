<script setup lang="ts">
const props = defineProps<{
  title: string;
}>();
</script>

<template>
  <div py="2" text="sm left">
    <div px="6" my="2" flex="~" justify="between" text="[#fefefe]">
      <div>
        {{ props.title }}
      </div>
      <div hover:text="[#04bf8a]" hover:cursor="pointer">
        <div class="i-carbon-add-alt"></div>
      </div>
    </div>
    <slot></slot>
  </div>
</template>
