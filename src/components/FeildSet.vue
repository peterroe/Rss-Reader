<script setup lang="ts">
import { ref } from "vue";
import IconSet from "@/components/IconSet.vue";
import { useDialog } from "@/hooks/useDialog";
import { sendNotification } from "@tauri-apps/api/notification";
import { message } from "ungeui";
import { appendFileSync } from "@/utils/fileIO";
import { getRssMessage } from "@/utils/request";
import { useRssSource } from "@/store/rssSource";
import { rssType } from "@/types";

const props = defineProps<{
  title: string;
}>();
const emit = defineEmits<{
  (e: "update"): void;
}>();

const store = useRssSource();

const { name, path, icon, visible, openDialog, closeDialog } = useDialog();

const postNewSource = () => {
  if (name.value && path.value && icon.value) {
    store
      .appendData({
        name: name.value,
        path: path.value,
        icon: icon.value,
      } as rssType)
      .then((value) => {
        message({
          text: "append new File successfully",
          initOffset: 30,
          icon: "success",
        });
        closeDialog();
        //todo reload
      })
      .catch((err) => {
        message({
          text: "can't get rss message",
          initOffset: 30,
          icon: "danger",
        });
      });
    return;
  } else {
    message({
      text: "Please fill completely",
      initOffset: 30,
    });
  }
};
</script>

<template>
  <div py="2" text="sm left">
    <div px="6" my="2" flex="~" justify="between" text="[#fefefe]">
      <div>
        {{ props.title }}
      </div>
      <div
        hover:text="[#04bf8a]"
        cursor="pointer"
        @click="openDialog(), emit('update')"
      >
        <div class="i-carbon-add-alt"></div>
      </div>
    </div>
    <slot></slot>
    <u-dialog
      v-model:visible="visible"
      title="New Rss Source"
      enter-class="fadeIn"
      leave-class="fadeOut"
    >
      <div flex="~" gap="2">
        <div w="1/3">
          <div mb="2">Name:</div>
          <u-input v-model:value="name" placeholder="eg: antfu"></u-input>
        </div>
        <div w="2/3">
          <div mb="2">Xml url:</div>
          <u-input
            v-model:value="path"
            placeholder="eg: https://antfu.me/feed.xml"
          ></u-input>
        </div>
      </div>
      <div my="2">Icon:</div>
      <IconSet v-model:icon="icon" />
      <template #footer>
        <u-button mr="4" @click="closeDialog">Cancel</u-button>
        <u-button px="4" deep @click="postNewSource">OK</u-button>
      </template>
    </u-dialog>
  </div>
</template>
