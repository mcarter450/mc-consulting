<script setup lang="ts">
import WebDevelopmentIcon from '../components/icons/WebDevelopment.vue'
import CloudHostingIcon from '../components/icons/CloudHosting.vue'
import SearchIcon from '../components/icons/Search.vue'
import OpenSourceIcon from '../components/icons/OpenSource.vue'
import LinkExternalIcon from '../components/icons/LinkExternal.vue'
</script>

<template>
  <div class="content">
    <img class="portrait" src="@/assets/images/self-portrait-320x320.jpg" width="320" height="320">

    <h1>React | Vue.js | Full-Stack Developer</h1>
    <p class="intro">Hi, I'm Mike 👋 After working for companies of various sizes, I'm finally striking out on my own as a freelance web developer. My focus is on front-end development and bringing visual components to life. Customer service is very important to me and maintaining good relations with clients. <!-- My background is in the visual arts and I take a design-first approach to building web applications. If that sounds like a good fit for your project, let's connect… --></p>

    <p class="connect">Hire me on <a href="https://www.guru.com/freelancers/mcarter76" rel="nofollow" target="_blank">Guru<LinkExternalIcon size="18px" color="currentColor" /></a> or view my profile on <a href="https://www.linkedin.com/in/michael-a-carter/" rel="nofollow" target="_blank">LinkedIn<LinkExternalIcon size="18px" color="currentColor" /></a></p>

    <h1 class="services">Services</h1>

    <h2><WebDevelopmentIcon color="#03ac13" size="20px" /> Web Development</h2>

    <p class="service">Strong familiarity with all stages of the SDLC; especially testing, backporting, documentation, and reporting. Experienced in: OOP, Data Modeling, Interface & Responsive Design, Usability, Analytics, SEO, Agile, TDD, Release Management, Deployment, Build Configuration, and CI.</p>

    <ul class="service">
      <li>JavaScript development in React, Vue.js, Bootstrap or jQuery frameworks.</li>
      <li>Front-end CSS and Sass development.</li>
      <li>PHP development in Laravel & WordPress frameworks.</li>
    </ul>

    <h2><CloudHostingIcon color="#03ac13" size="20px" /> Cloud Hosting</h2>

    <p class="service">Expertise in hosting with popular cloud hosting platforms, including AWS, Amazon Lightsail, and Linode. Looking to launch a new website or need a hand with your hosting configuration or web services, we can help.</p>

    <ul class="service">
      <li>DNS for web or mail servers</li>
      <li>Firewall configuration</li>
      <li>Cloudflare configuration</li>
      <li>Linux or system administration</li>
    </ul>

    <h2><SearchIcon color="#03ac13" size="20px" /> SEO & Accessibility</h2>

    <p class="service">Please <RouterLink to="/contact">contact us</RouterLink> for a consultation on your website today and recommendations for improving SEO and accessibility.</p>

    <h2><OpenSourceIcon color="#03ac13" size="20px" /> Open Source Development</h2>

    <p class="service">I wrote the Free Shipping Kit and Products Feed Generator WordPress plugins for my <a href="https://www.kahoycrafts.com" target="_blank">KahoyCrafts.com<LinkExternalIcon size="17" color="currentColor" /></a> website. Both were approved for the WordPress.org plugin directory and I still actively maintain them.</p>

    <div class="wp-plugins">
      <div class="item products-feed-generator">
        <a href="https://wordpress.org/plugins/products-feed-generator/" target="_blank">
          <img src="@/assets/images/products-feed-generator-256x256.png" alt="Products Feed Generator" width="218" height="256"> 
          <div class="caption">View on WordPress.org<LinkExternalIcon size="17px" color="currentColor" /></div></a></div>

      <div class="item free-shipping-kit">
        <a href="https://wordpress.org/plugins/free-shipping-kit/" target="_blank">
          <img src="@/assets/images/free-shipping-kit-256x256.png" alt="Free Shipping Kit" width="256" height="256"> 
          <div class="caption">View on WordPress.org<LinkExternalIcon size="17px" color="currentColor" /></div></a></div>
    </div>
  </div>
</template>

<style scoped>
p.intro {
  color: #333;
  font-size: 1.5rem;
  line-height: 2.2rem;
  padding-left: 1rem;
  border-left:  2px solid #333;
  animation: slide-in-left 1.2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

p.connect {
  font-size: 1.1rem;
}

.link-external {
  vertical-align: text-top;
  margin-left: 0.2rem;
}

h1.services {
  margin-bottom: 2rem;
}

.service {
  line-height: 1.4rem;
}

.portrait {
  float: right;
  border-radius: 50%;
  margin-left: 25px;
}

li {
  list-style: square;
}

.wp-plugins {
  display: grid;
  grid-template-columns: repeat(2, [col-start] 1fr);
  align-items: flex-end;
  grid-row-gap: 5%;
  margin-top: 15px;
  margin-bottom: 4.5rem;
}

.products-feed-generator {
  justify-self: end;
}

.free-shipping-kit {
  justify-self: start;
}

.products-feed-generator {
  position: relative;
  left: -38px;
}

.wp-plugins .caption {
  text-align: center;
  margin-top: 0.5rem;
}

.wp-plugins .free-shipping-kit .caption {
  margin-left: 38px;
}

@media (max-width: 559px) {
  .wp-plugins {
    align-items: initial;
    column-gap: 0;
    margin-top: 0;
  }

  .wp-plugins > .item {
    grid-column: col-start 1 / span 4;
  }

  .free-shipping-kit, 
  .products-feed-generator {
    justify-self: center;
  }

  .products-feed-generator {
    left:  0;
  }

  .free-shipping-kit {
    position: relative;
    left: -19px;
  }

  .portrait {
    float: none;
  }
}

/**
 * ----------------------------------------
 * animation slide-in-left
 * ----------------------------------------
 */
@keyframes slide-in-left {
  0% {
    transform: translateX(-700px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
