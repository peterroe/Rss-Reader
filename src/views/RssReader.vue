<script setup lang="ts">
import { ref, watch } from "vue";
// https://day.js.org/docs/en/display/format
import * as dayjs from "dayjs";
// https://tauri.studio/docs/api/js/classes/window.WebviewWindow
import { WebviewWindow } from "@tauri-apps/api/window";
import getRssMessage from "@/utils/request";
import { getItems, getMainIdea, itemType, mainIdeaType } from "@/utils/index";
import { useRssSource } from "@/store/rssSource";
import { useLoadingState } from "@/store/loadingState";

const items = ref<Array<itemType>>([]);
const mainIdea = ref<mainIdeaType>({});

const store = useRssSource();
const loadingState = useLoadingState();

// watch the store.path's change, and update the RssReader.vue's items
watch(
  () => store.path,
  async () => {
    loadingState.setLoading(true);
    const value = await getRssMessage(store.path);

    mainIdea.value = getMainIdea(value);
    items.value = getItems(value);

    store.setTitle(mainIdea.value.title);
    loadingState.setLoading(false);
  },
  {
    immediate: true,
  }
);

const openInNewTab = (url: string) => {
  const webview = new WebviewWindow("label", {
    url: url,
    maximized: true,
  });
  webview.once("tauri://created", function () {
    // webview window successfully created
    console.log("tauri://created");
  });
  webview.once("tauri://error", function (e) {
    // an error happened creating the webview window
    console.log("tauri://error", e);
  });
};
</script>

<template>
  <div pt="49px" px="2">
    <div
      class="itemShadow descriptionBox"
      bg="teal-400/30"
      style="
        background-image: linear-gradient(to right, #ed6ea0 0%, #ec8c69 100%);
        font-family: 'xknl';
      "
      rounded="md"
      px="5"
      pt="4"
      pb="6"
      mb="6"
      v-if="mainIdea.description"
    >
      <div font="bold" text="xl left">
        <div class="i-carbon-pin-filled"></div>
      </div>
      <p leading="8" text="left gray-50" indent="lg">
        {{ mainIdea.description }}
      </p>
    </div>
    <div
      border
      rounded="md"
      p="2"
      flex="~"
      items="center"
      gap="1"
      justify="center"
    >
      <div text="cyan-600" class="i-carbon-rocket"></div>
      Get Started
      <div text="cyan-600" class="i-carbon-cd-archive"></div>
    </div>
    <div flex="~ wrap" justify="between">
      <div
        v-for="it in items"
        :key="it.title"
        w="full"
        md:w="48/100"
        xl:w="31/100"
        mx="1/100"
        h="300px"
        my="5"
        bg="white"
        cursor="pointer"
        rounded="md"
        overflow="hidden"
        class="itemShadow 2xl:w-24/100"
        @click="openInNewTab(it.link)"
      >
        <div h="190px">
          <img
            v-lazy="'https://unsplash.it/1600/900?random=' + Math.random()"
            w="full"
            h="full"
            alt=""
          />
        </div>
        <div p="3">
          <div class="ellipsis" h="50px" mb="4" font="bold" text="left">
            {{ it.title }}
          </div>
          <div flex="~" justify="between">
            <div w="3/5" text="sm" flex="~ 1" items="center">
              <!-- <CarbonUserAvatarFilled mr="2" /> -->
              <div class="i-carbon-user-avatar-filled" mr="2"></div>
              <div class="ellipsis-single">
                {{ it.author || "Unknown" }}
              </div>
            </div>
            <div class="ellipsis-single" text="sm" w="100px">
              {{ dayjs(it.pubDate).format("YYYY-MM-DD") }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
img {
  object-fit: cover;
}
.ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.ellipsis-single {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.itemShadow {
  transition: all 0.3s ease-in-out;
  box-shadow: 0 20px 10px -15px rgba(107, 114, 128, 0.5);
}

.descriptionBox {
  border-top-right-radius: 2rem;
  border-bottom-left-radius: 2rem;
}

.descriptionBox:hover {
  border-radius: 0.5rem;
}
</style>

<style>
.u-spin-core {
  position: fixed !important;
  z-index: 9999 !important;
  border-radius: 0.2em;
}
</style>
