import { ref } from "vue";

export function useDialog() {
  const name = ref<string>();
  const path = ref<string>();
  const icon = ref<string>();
  const visible = ref<boolean>(false);

  const openDialog = () => {
    visible.value = true;
  };
  const closeDialog = () => {
    visible.value = false;
  };

  return {
    name,
    path,
    icon,
    visible,
    openDialog,
    closeDialog,
  };
}
