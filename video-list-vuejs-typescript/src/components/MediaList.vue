<template>
  <div>TODO...</div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Video } from "@/types/Video";

export default defineComponent({
  name: "MediaList",
  props: {
    videos: {
      type: Array as PropType<Video[]>,
      required: true,
    },
  },
});
</script>
