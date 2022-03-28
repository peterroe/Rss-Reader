<script setup lang="ts">
import { ref, watchEffect } from "vue";
import dayjs from "dayjs";
import getRssMessage from "@/utils/request";
import { getItems, getMainIdea, itemType, mainIdeaType } from "@/utils/index";
import { WebviewWindow } from "@tauri-apps/api/window";
import { useRssSource } from "@/store/rssSource";

const items = ref<Array<itemType>>([]);
const mainIdea = ref<mainIdeaType>({});

const store = useRssSource();
// setInterval(() => {
//   console.log('test', store)
// },1000)
watchEffect(async () => {
  const value = await getRssMessage(store.path);

  mainIdea.value = getMainIdea(value);
  items.value = getItems(value);

  store.setTitle(mainIdea.value.title);
});

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
  <div p="2">
    <div
      class="itemShadow descriptionBox"
      bg="teal-400/30"
      style="
        background-image: linear-gradient(to right, #ed6ea0 0%, #ec8c69 100%);
      "
      rounded="md"
      p="4"
      my="5"
      mx="1/100"
      v-if="mainIdea.description"
    >
      <div font="bold" text="xl left">
        <div class="i-carbon-pin-filled"></div>
      </div>
      <p leading="8" text="left gray-50" indent="lg">
        {{ mainIdea.description }}
      </p>
    </div>
    <div>---</div>
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
        class="itemShadow"
        @click="openInNewTab(it.link)"
      >
        <div h="190px">
          <img
            w="full"
            h="full"
            :src="'https://unsplash.it/1600/900?random=' + Math.random()"
            alt=""
          />
        </div>
        <div p="3">
          <div class="ellipsis" h="50px" mb="4" font="bold" text="left">
            {{ it.title }}
          </div>
          <div flex="~" justify="between">
            <div w="3/5" text="sm" flex="~ 1" items="center">
              <CarbonUserAvatarFilled mr="2" />
              <div class="ellipsis-single">
                {{ it.author }}
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
  @apply shadow-cyan-400;
}

.descriptionBox {
  border-top-right-radius: 2rem;
  border-bottom-left-radius: 2rem;
}

.descriptionBox:hover {
  border-radius: 0.5rem;
}
</style>
