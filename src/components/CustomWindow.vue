<script setup lang="ts">
import { appWindow } from "@tauri-apps/api/window";
import { onMounted } from "vue";
onMounted(() => {
  document
    .getElementById("titlebar-minimize")
    .addEventListener("click", () => appWindow.minimize());
  document
    .getElementById("titlebar-maximize")
    .addEventListener("click", () => appWindow.toggleMaximize());
  document
    .getElementById("titlebar-close")
    .addEventListener("click", () => appWindow.close());
});
</script>

<template>
  <div data-tauri-drag-region class="titlebar">
    <div class="titlebar-button" id="titlebar-close">
      <img
        w="26px"
        src="https://api.iconify.design/ci:dot-05-xl.svg?color=%23ff5f58"
        alt="close"
      />
    </div>
    <div class="titlebar-button" id="titlebar-minimize">
      <img
        w="26px"
        src="https://api.iconify.design/ci:dot-05-xl.svg?color=%23ffbd2e"
        alt="minimize"
      />
    </div>
    <div class="titlebar-button" id="titlebar-maximize">
      <img
        w="26px"
        src="https://api.iconify.design/ci:dot-05-xl.svg?color=%2318c132"
        alt="maximize"
      />
    </div>
  </div>
</template>

<style scoped>
.titlebar {
  z-index: 999;
  height: 30px;
  background: #282d35;
  user-select: none;
  display: flex;
  position: fixed;
  padding-left: 10px;
  top: 0;
  left: 0;
  right: 0;
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
}
.titlebar-button:hover {
  /* background: #5bbec3; */
  @apply cursor-pointer;
}
</style>
