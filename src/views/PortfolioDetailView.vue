<script lang="ts">
import ProjectSlide from '../components/ProjectSlide.vue'
import ProjectVideo from '../components/ProjectVideo.vue'

import { defineComponent } from 'vue'

export default defineComponent({
  components: { ProjectSlide, ProjectVideo },
  data() {
    return {
      breadcrumbs: [{
        name: 'cooking-blog',
        title: 'Cooking Blog (Sample Website)',
      }, {
        name: 'vc-chatbot',
        title: 'Virtual Assistant for County of Ventura'
      }],
    }
  },
  computed: {
    breadcrumbIndex() {
      const portfolio = this.$route.params.portfolio

      return this.breadcrumbs.findIndex(element => element.name == portfolio)
    }
  },
  methods: {
    getBreadcrumb() {
      let i = this.breadcrumbIndex

      return this.breadcrumbs[i] ? this.breadcrumbs[i].title : ''
    },
    getPrev() {
      let i = this.breadcrumbIndex

      i-- // Prev item

      if (i < 0) {
        i = this.breadcrumbs.length - 1 // Go to last item
      }

      return `/portfolio/${this.breadcrumbs[i].name}`
    },
    getNext() {
      let i = this.breadcrumbIndex

      i++ // Next item

      if (i > this.breadcrumbs.length - 1) {
        i = 0 // Go to first item
      }

      return `/portfolio/${this.breadcrumbs[i].name}`
    }
  }
})
</script>

<template>
  <div class="content">
    <div class="breadcrumb">
      <router-link to="/portfolio">Portfolio</router-link> &#8250; {{ getBreadcrumb() }}
    </div>

    <div v-if="$route.params.portfolio == 'cooking-blog'" class="project">
      <h1>Cooking Blog (Sample Website)</h1>

      <p>A sample cooking blog created in Figma.</p>

      <ProjectSlide project="cooking-blog" slide="1" caption="Page Layout" />

      <!-- <ProjectVideo url="https://www.youtube.com/embed/GkipW7e4B5Q" /> -->
    </div>
    <div v-if="$route.params.portfolio == 'vc-chatbot'" class="project">
      <h1>Virtual Assistant for County of Ventura</h1>

      <p>The Ventura County IT department wanted a Virtual Assistant for the Ventura.org web site redesign. I was hired to write a new WordPress plugin for this express purpose.</p>

      <p>A custom FAQ post type was added to synchronize content with the Chatbot. Each time an FAQ is modified, the content is simultaneously published to the Microsoft QnA Maker Chat service, and to the front-end website FAQ section. Bilingual functionality was also included with the same web service.</p>

      <p>*Note* The admin module can't be displayed here for privacy reasons.</p>

      <ProjectSlide project="vc-chatbot" slide="1" caption="Screenshot" />
    </div>
    <div class="pagination">
      <router-link :to="getNext()" class="btn next" aria-label="Next Project">&#8250;</router-link>
      <router-link :to="getPrev()" class="btn prev" aria-label="Previous Project">&#8249;</router-link>
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
