<script setup lang="ts">
const props = defineProps<{
  project: string,
  slide: string,
  caption?: string,
}>()

const getImageUrl = (project: string, slide: string) => {
  let img_url = '/gallery/'
  if (project == 'vc-chatbot') {
    img_url += `${project}/${project}-screenshot-${slide}.jpg`
  } else {
    img_url += `${project}/${project}-screenshot-${slide}.png`
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
