<script setup lang="ts">
import { ref } from "vue";
import { useDialog } from "@/hooks/useDialog";
import { postRssMessage } from "@/utils/request";
import { sendNotification } from "@tauri-apps/api/notification";
import { message } from "ungeui";

const props = defineProps<{
  title: string;
}>();
const emit = defineEmits<{
  (e: "update"): void;
}>();

const { name, path, icon, visible, openDialog, closeDialog } = useDialog();

const postNewSource = () => {
  if (name.value && path.value) {
    postRssMessage(path.value);
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
      <div mb="2">Name:</div>
      <u-input v-model:value="name" placeholder="eg: antfu"></u-input>
      <div mb="2">Icon:</div>
      <u-input v-model:value="icon" placeholder="eg: antfu"></u-input>
      <div my="2">Xml url:</div>
      <u-input
        v-model:value="path"
        placeholder="eg: https://antfu.me/feed.xml"
      ></u-input>

      <template #footer>
        <u-button mr="4" @click="closeDialog">Cancel</u-button>
        <u-button px="4" deep @click="postNewSource">OK</u-button>
      </template>
    </u-dialog>
  </div>
</template>
