<script setup lang="ts">
import dayjs from "dayjs";
import getRssMessage from "@/utils/request";
import { getItems, getMainIdea, itemType, mainIdeaType } from "@/utils/index";
import { ref } from "vue";

const items = ref<Array<itemType>>([]);
const mainIdea = ref<mainIdeaType>({});

getRssMessage("https://sspai.com/feed").then((value) => {
  console.log(
    "%c [ value ]-10",
    "font-size:13px; background:pink; color:#bf2c9f;",
    value
  );
  const wrapper = value.rss[0].channel;

  mainIdea.value = getMainIdea(wrapper);
  items.value = getItems(wrapper);
  console.log(mainIdea.value, items.value);
});
</script>

<template>
  <div>
    {{ mainIdea.title }}
  </div>
  <div>
    {{ mainIdea.description }}
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
      border="~ solid #ddd"
      cursor="pointer"
      rounded="md"
      overflow="hidden"
    >
      <div h="190px">
        <img
          w="full"
          h="full"
          src="https://cdn.sspai.com/article/34c8b415-48cd-387f-1c4c-a6212318ff16.jpg"
          alt=""
        />
      </div>
      <div p="3">
        <div class="ellipsis" h="50px" mb="4" font="bold" text="left">
          {{ it.title }}
        </div>
        <div flex="~" justify="between">
          <div text="sm" flex="~" items="center">
            <CarbonUserAvatarFilled mr="2" />
            {{ it.author }}
          </div>
          <div text="sm">{{ dayjs(it.pubDate).format("YYYY-MM-DD") }}</div>
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
</style>
