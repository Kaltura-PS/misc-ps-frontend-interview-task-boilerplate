<template>
  <h1>Media List</h1>
  <MediaList :videos="mockData" />
</template>

<script>
import MediaList from "./components/MediaList";
import {mockData} from "./data/mockData";

export default {
  name: "App",
  components: {
    MediaList
  },
  created() {
    this.mockData = mockData;
  }
}
</script>
