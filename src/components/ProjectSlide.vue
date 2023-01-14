<script setup lang="ts">
const props = defineProps<{
  project: string,
  slide: string,
  caption?: string,
}>()

const getImageUrl = (project: string, slide: string, size: string = 'large') => {
  let img_url = `/gallery/${project}/${project}-screenshot-${slide}.jpg`
  if (size == '768w')
    img_url = `/gallery/${project}/${project}-screenshot-${slide}-768.jpg`
  else if (size == '480w')
    img_url = `/gallery/${project}/${project}-screenshot-${slide}-480.jpg`

  return new URL(img_url, import.meta.url).href
}

const getImageSources = (project: string, slide: string) => {
  const img_url_lg = getImageUrl(project, slide, 'large'),
        img_url_md = getImageUrl(project, slide, '768w'),
        img_url_sm = getImageUrl(project, slide, '480w')

  return `${img_url_sm} 480w, ${img_url_md} 768w, ${img_url_lg} 1000w`;
}
</script>

<template>
  <div class="slide">
    <img class="full-width" :src="getImageUrl(project, slide)" :alt="`Screenshot ${slide}`" :srcset="getImageSources(project, slide)" loading="lazy">
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
