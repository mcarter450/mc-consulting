<script setup lang="ts">
defineProps<{
  project: string,
  caption: string,
  slide: string,
}>()

const getImageUrl = (project, slide) => {
  let img_url = '';
  if (project == 'mpv') {
    img_url = `../assets/images/gallery/mpv/mpv-screenshot-${slide}.png`
  } else {
    img_url = `../assets/images/${slide}`
  }

  return new URL(img_url, import.meta.url).href
}
</script>

<template>
  <div class="slide">
    <img class="full-width" :src="getImageUrl(project, slide)">
    <p v-if="caption" class="caption">{{ caption }}</p>
  </div>
</template>

<style scoped>
img.full-width {
  width: 100%;
  height: auto;
  border: 1px solid #000;
  border-radius: 5px;
}

.project > .slide {
  margin-top: 2.5rem;
}

.project > .slide > .caption {
  text-align: center;
}
</style>
