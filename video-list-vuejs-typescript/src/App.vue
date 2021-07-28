<template>
  <h1>Media List</h1>
  <MediaList :videos="mockData" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MediaList from "@/components/MediaList.vue";
import { mockData } from "@/data/mockData";

export default defineComponent({
  name: "App",
  components: {
    MediaList: MediaList,
  },
  computed: {
    mockData: () => mockData,
  },
});
</script>
