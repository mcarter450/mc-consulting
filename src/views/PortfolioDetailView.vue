<script lang="ts">
import ProjectSlide from '../components/ProjectSlide.vue'
import ProjectVideo from '../components/ProjectVideo.vue'

import { defineComponent } from 'vue'

export default defineComponent({
  components: { ProjectSlide, ProjectVideo },
  data() {
    return {
      breadcrumbs: {
        'mpv': 'My Property Vault (Customer Portal)',
        'vc-chatbot': 'Virtual Assistant for County of Ventura',
      }
    }
  },
  methods: {
    // getPrev: <string>(portfolio: string) => {
    //   console.log(this.$data.breadcrumbs)
    //   return '/portfolio/vc-chatbot'
    // }
    getPrev(portfolio) {
      const keys = Object.keys(this.breadcrumbs)
      let curIndex = 0

      while (curIndex < keys.length) {
        if (keys[curIndex] == portfolio) break
        curIndex++
      }

      curIndex-- // Prev item

      if (curIndex < 0) {
        curIndex = keys.length - 1 // Go to last item
      }

      return `/portfolio/${keys[curIndex]}`
    },
    getNext(portfolio) {
      const keys = Object.keys(this.breadcrumbs)
      let curIndex = 0

      while (curIndex < keys.length) {
        if (keys[curIndex] == portfolio) break
        curIndex++
      }

      curIndex++ // Next item

      if (curIndex > keys.length - 1) {
        curIndex = 0 // Go to first item
      }

      return `/portfolio/${keys[curIndex]}`
    }
  }
})
</script>

<template>
  <div class="content">
     <!-- <h1>Portfolio</h1> -->

    <div class="breadcrumb">
      <router-link to="/portfolio">Portfolio</router-link> &#8250; {{ breadcrumbs[$route.params.portfolio] }}
    </div>

    <div v-if="$route.params.portfolio == 'mpv'" class="project">
      <h1>My Property Vault (Customer Portal)</h1>

      <p>Keith at MyPropertyVault.com hired MC Consulting to implement the front-end changes for his customer portal app. Several new components and widgets were created in Vue.js, including a custom Icon Mapping service to associate each top level category with the correct icon.</p>

      <ProjectSlide project="mpv" slide="1" caption="Dashboard view for MPV (Template built in Vue.js)" />

      <ProjectSlide project="mpv" slide="2" caption="Refer-A-Friend Banner and Bootstrap Modal" />

      <ProjectSlide project="mpv" slide="3" caption="Contact Page (Template built in Vue.js)" />

      <ProjectSlide project="mpv" slide="4" caption="Reports Page (Google Charts)" />

      <ProjectVideo url="https://www.youtube.com/embed/GkipW7e4B5Q" />
    </div>
    <div v-if="$route.params.portfolio == 'vc-chatbot'" class="project">
      <h1>Virtual Assistant for County of Ventura</h1>

      <p>The Ventura County IT department wanted a Virtual Assistant for the Ventura.org web site redesign. I was hired to write a new WordPress plugin for this express purpose.</p>

      <p>A custom FAQ post type was added to synchronize content with the Chatbot. Each time an FAQ is modified, the content is simultaneously published to the Microsoft QnA Maker Chat service, and to the front-end website FAQ section. Bilingual functionality was also included with the same web service.</p>

      <p>*Note* The admin module can't be displayed here for privacy reasons.</p>

      <ProjectSlide project="vc-chatbot" slide="vc_chatbot_thumbnail2.jpg" />
    </div>
    <div class="pagination">
      <router-link :to="getNext($route.params.portfolio)" class="btn next" aria-label="Next Project">&#8250;</router-link>
      <router-link :to="getPrev($route.params.portfolio)" class="btn prev" aria-label="Previous Project">&#8249;</router-link>
    </div>
  </div>
</template>


<style scoped>
.breadcrumb {
  margin-top: 1rem;
}

.project {
  margin-left: 10%;
  margin-right: 10%;
  margin-bottom: 2.5rem;
}

.pagination {
  margin-left: 10%;
  margin-right: 10%;
}

.pagination .btn {
  background-color: black;
  padding: 0.5rem 1rem;
  font-size: 1.5rem;
  color: white;
}

.pagination .btn:hover {
  background-color: #333;
}

.pagination .next {
  float: right;
}

@media (max-width: 480px) {
  .project {
    margin-left: 0;
    margin-right: 0;
  }

  .pagination {
    margin-left: 0;
    margin-right: 0;
  }
}
</style>