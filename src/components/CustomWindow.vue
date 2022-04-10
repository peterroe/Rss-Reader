<script setup lang="ts">
// https://tauri.studio/docs/api/js/modules/window#appwindow
import { appWindow } from "@tauri-apps/api/window";
import { onMounted, ref } from "vue";

const closeRef = ref();
const minimizeRef = ref();
const maximizeRef = ref();

onMounted(() => {
  minimizeRef.value.addEventListener("click", () => appWindow.minimize());
  maximizeRef.value.addEventListener("click", () => appWindow.toggleMaximize());
  closeRef.value.addEventListener("click", () => appWindow.close());
});
</script>

<template>
  <div data-tauri-drag-region class="titlebar">
    <div ref="closeRef" class="titlebar-button" id="titlebar-close">
      <div text="xs [#ff5f58]" class="i-carbon-circle-solid"></div>
    </div>
    <div ref="minimizeRef" class="titlebar-button" id="titlebar-minimize">
      <div text="xs [#ffbd2e]" class="i-carbon-circle-solid"></div>
    </div>
    <div ref="maximizeRef" class="titlebar-button" id="titlebar-maximize">
      <div text="xs [#18c132]" class="i-carbon-circle-solid"></div>
    </div>
  </div>
</template>

<style scoped>
.titlebar {
  z-index: 100;
  height: 30px;
  background: #282d35;
  user-select: none;
  display: flex;
  position: fixed;
  padding-left: 10px;
  top: 0;
  left: 0;
  right: 0;
  margin-right: 1px;
  border-top-left-radius: 1em;
  border-top-right-radius: 1em;
}
.titlebar-button {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 30px;
  margin: auto -2px;
  cursor: pointer;
}
</style>
