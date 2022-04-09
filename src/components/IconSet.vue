<script setup lang="ts">
import { ref } from "vue";

const iconList = ref<Array<string>>([
  "i-carbon-3d-cursor-alt",
  "i-carbon-3d-print-mesh",
  "i-carbon-campsite",
  "i-carbon-carbon",
  "i-carbon-cloud-satellite",
  "i-carbon-cube",
  "i-carbon-contour-finding",
  "i-carbon-fingerprint-recognition",
  "i-carbon-hearing",
  "i-carbon-linux",
  "i-carbon-need",
  "i-carbon-progress-bar-round",
  "i-carbon-storm-tracker",
  "i-carbon-tropical-storm-tracks",
  "i-carbon-umbrella",
  "i-carbon-watson",
  "i-carbon-type-pattern",
  "i-carbon-scales",
  "i-carbon-navaid-seaplane",
  "i-carbon-money",
  "i-carbon-navaid-tacan",
  "i-carbon-lifesaver",
  "i-carbon-earth",
  "i-carbon-bat",
  "i-carbon-send-alt-filled",
  "i-carbon-bee",
  "i-carbon-crop-health",
  "i-carbon-drone",
  "i-carbon-model",
  "i-carbon-password",
  "i-carbon-worship-jewish",
  "i-carbon-fish",
  "i-carbon-monster",
  "i-carbon-mountain",
  "i-carbon-quadrant-plot",
  "i-carbon-store",
]);

const props = defineProps<{
  icon?: string;
}>();

const emit = defineEmits<{
  (event: "update:icon", icon: string): void;
}>();
</script>

<template>
  <div flex="~ wrap">
    <div
      v-for="item in iconList"
      :key="item"
      border="~ [#ccc]"
      cursor="pointer"
      p="1"
      m="1"
      flex="~ wrap"
      justify="center"
      items="center"
      :class="{ select: props.icon === item }"
      @click="emit('update:icon', item)"
    >
      <div :class="item"></div>
    </div>
  </div>
</template>

<style scoped>
.select {
  color: #13c2c2;
  border-color: #13c2c2;
}
</style>
