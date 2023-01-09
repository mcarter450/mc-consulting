<script setup lang="ts">
defineProps<{
  url: string
}>()
</script>

<template>
  <div class="video-container"><iframe class="video" :src="url" frameborder="0" allowfullscreen="true"></iframe></div>
</template>

<style scoped>
.video-container {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  margin-top: 2.5rem;
}

.video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
}
</style>
