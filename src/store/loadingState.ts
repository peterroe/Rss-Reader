import { defineStore } from "pinia";

export const useLoadingState = defineStore("loadingState", {
  state: () => {
    return {
      loading: false,
    };
  },
  actions: {
    setLoading(loading) {
      this.loading = loading;
    },
  },
});
