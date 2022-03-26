<script setup lang="ts"></script>

<template>
  <div flex="~">
    <div
      overflow="auto"
      w="250px"
      h="100vh"
      bg="[#294973]"
      sticky="~"
      top="0"
      z="10"
    >
      <LeftMenu />
    </div>
    <div flex="1">
      <TopNav />
      <router-view></router-view>
    </div>
  </div>
</template>
