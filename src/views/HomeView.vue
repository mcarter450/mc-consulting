<script lang="ts">
export default {
  data() {
    return {
      showFullDesc1: false,
      showFullDesc2: false,
    }
  }
}
</script>

<template>
  <div class="content">
    <div class="portrait top">
      <img src="@/assets/images/self-portrait-320x320.jpg" width="256" height="256">
      <p class="caption">Mike (Owner) is a Web Developer and Cyclist living in the Los Angeles area with his wife Ollie and wiener dog Kona.</p>
    </div>

    <h1>React | Vue.js | Full-Stack Development</h1>

    <p class="intro">MC Consulting is able to drive projects from concept to completion. We're small business friendly and take the time to fully understand the needs of our clients. Let us help you get your website up and running today.</p>

    <p class="intro"><a href="/contact">Contact us</a> for a free estimate.</p>

    <div class="portrait bottom">
      <img src="@/assets/images/self-portrait-320x320.jpg" width="256" height="256">
      <p class="caption">Mike (Owner) is a Web Developer and Cyclist living in the Los Angeles area with his wife Ollie and wiener dog Kona.</p>
    </div>

    <h1 class="services">Services</h1>

    <h2><i class="fa-solid fa-code"></i> Web Development</h2>

    <p class="service">Custom web application development in popular frameworks.</p>

    <ul class="service">
      <li>JavaScript development in React, Vue.js, Bootstrap or jQuery frameworks.</li>
      <li>Front-end CSS and Sass development.</li>
      <li>PHP development in Laravel & WordPress frameworks.</li>
      <li>Performance tuning and optimizations.</li>
    </ul>

    <h2><i class="fa-brands fa-figma"></i> Web & UI/UX Design</h2>

    <p class="service">Layout and design of new websites and apps.</p>

    <ul class="service">
      <li>Design comps in Sketch or Figma.</li>
      <li>Simulations of interactive components.</li>
      <li>Usability testing.</li>
    </ul>

    <h2><i class="fa-solid fa-cloud"></i> Cloud Hosting</h2>

    <p class="service">Expertise in hosting with platforms like AWS, Amazon Lightsail, or Linode. Looking to launch a new website or need a hand with your hosting configuration or web services, we can help.</p>

    <ul class="service">
      <li>DNS for web or mail servers</li>
      <li>Cloudflare or AWS configuration</li>
      <li>Firewall configuration</li>
      <li>Linux or system administration</li>
    </ul>

    <h2><i class="fa-solid fa-magnifying-glass"></i> SEO & Accessibility</h2>

    <p class="service">Please <RouterLink to="/contact">contact us</RouterLink> for a consultation on your website and recommendations for improving SEO and accessibility.</p>

    <aside class="open-source">

      <h2>Open Source Contributions</h2>

      <p class="service">Mike authored the Products Feed Generator and Free Shipping Kit WordPress plugins for his <a href="https://www.kahoycrafts.com" target="_blank">KahoyCrafts.com</a> website. Both were officially approved by the WordPress.org community and are actively maintained in his spare time.</p>

      <div class="wp-plugins">
        <h4>Products Feed Generator</h4>
        <div class="item">
          <div class="icon">
            <a href="https://wordpress.org/plugins/products-feed-generator/" target="_blank">
              <img style="margin-left: 17px;" src="@/assets/images/products-feed-generator-256x256.png" width="111" height="111" alt="Products Feed Generator"></a>
          </div>
          <div class="description">
            <div v-show="!showFullDesc1">
              <p>This plugin generates a Data Feed for Google Shopping using an existing catalog of…</p>
              <a href="#" @click.prevent="showFullDesc1 = true">See more <i class="fa-solid fa-angle-down"></i></a>
            </div>
            <div v-show="showFullDesc1">
              <p>This plugin generates a Data Feed for Google Shopping using an existing catalog of WooCommerce products.</p>
              <p>Products Feed Generator for WooCommerce provides all of the necessary features to create a Google Shopping feed and streamlines the process of mapping designated google variant-related fields to custom product attributes. We hope you’ll find the interface to be simple, clean, and uncluttered.</p>
            </div>
            <ul>
              <li>700 Downloads</li>
              <li>10+ Active Installations</li>
            </ul>
          </div>
        </div>

        <h4>Free Shipping Kit</h4>
        <div class="item">
          <div class="icon">
            <a href="https://wordpress.org/plugins/free-shipping-kit/" target="_blank">
            <img src="@/assets/images/free-shipping-kit-256x256.png" width="128" height="128" alt="Free Shipping Kit"></a>
          </div>
          <div class="description">
            <div v-show="!showFullDesc2">
              <p>This plugin was designed to address the inability of similar free shipping plugins, to…</p>
              <a href="#" @click.prevent="showFullDesc2 = true">See more <i class="fa-solid fa-angle-down"></i></a>
            </div>
            <div v-show="showFullDesc2">
              <p>This plugin was designed to address the inability of similar free shipping plugins, to assign a free shipping badge at the product level.</p>
              <p>There are several existing options for assigning free shipping based on the cart subtotal, but I wanted a convenient way to integrate a free shipping badge with a simple flat-rate based free shipping class. This is similar to the free shipping options available in marketplaces like Etsy where the shipping costs are factored into the price of the item. This also works well for lightweight items, where the shipping cost is less significant.</p>
            </div>
            <ul>
              <li>1,800+ Downloads</li>
            </ul>
          </div>
        </div>
      </div>

    </aside>
  </div>
</template>

<style scoped>
p.intro {
  color: #333;
  font-size: 1.3rem;
  line-height: 2.2rem;
  animation: slide-in-left 1.2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

h1.services {
  margin-bottom: 2rem;
}

.service {
  line-height: 1.4rem;
}

h2 > i {
  color: #03ac13;
}

.portrait {
  float: right;
  width: 256px;
  margin-left: 25px;
}

.portrait.bottom {
  display: none;
  width: auto;
  float: none;
  margin: 1rem 2rem 1.5rem 2rem;
}

.portrait.bottom p.caption {
  margin-top: auto;
  margin-bottom: auto; 
}

.portrait.bottom img {
  width: 128px;
  height: 128px;
  margin-right: 1rem;
}

.portrait > img {
  border-radius: 50%;
}

.portrait .caption {
  font-size: 0.8rem;
  text-align: center;
}

li {
  list-style: square;
}

.open-source {
  border: 1px dashed gray;
  margin: 4rem;
  padding: 0 2rem;
}

.wp-plugins {
  margin-bottom: 1.5rem;
}

.wp-plugins .item {
  display: flex;
}

.wp-plugins .icon {
  margin-right: 1rem;
}

.wp-plugins .icon .caption {
  text-align: center;
  margin-top: 0.5rem;
}

.wp-plugins .icon .caption {
  text-align: center;
  margin-top: 0.5rem;
}

.wp-plugins .description p {
  margin-top: 0;
}

.wp-plugins .description > a {
  margin-top: 0;
}

@media (max-width: 768px) {
  .open-source {
    margin: 1.5rem 0rem;
  }
}

@media (max-width: 576px) {

  .portrait.top {
    display: none;
  }

  .portrait.bottom {
    display: flex;
    margin-left: 1rem;
    margin-right: 1rem;
  }

  .open-source {
    padding: 0 1rem 1rem 1rem;
  }

  .wp-plugins .item {
    display: block;
  }

  .wp-plugins .icon {
    float: right;
    margin-right: 0;
    margin-left: 1rem;
    margin-bottom: 1rem;
  }

  .wp-plugins {
    margin-top: 0;
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
