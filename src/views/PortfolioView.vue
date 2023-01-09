<script setup lang="ts">
import ProjectSlide from '../components/ProjectSlide.vue'
import ProjectVideo from '../components/ProjectVideo.vue'
</script>

<template>
  <div class="content">
    <h1>Portfolio</h1>

    <div class="projects">
      <div class="project">
        <h2>My Property Vault (Customer Portal)</h2>

        <router-link to="/portfolio/mpv"><ProjectSlide project="mpv" slide="1" /></router-link>
      </div>
      <div class="project">
        <h2>Virtual Assistant for County of Ventura</h2>

        <router-link to="/portfolio/vc-chatbot"><ProjectSlide project="" slide="vc_chatbot_thumbnail2.jpg" /></router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.projects {
  display: grid;
  grid-template-columns: repeat(2, [col-start] 1fr);
  column-gap: 5%;
  align-items: stretch;
}

@media (max-width: 768px) {
  .project {
    grid-column: col-start / span 2;
  }
}
</style>