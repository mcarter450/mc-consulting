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

    <h1>React | Vue.js | PHP | Full-Stack Development</h1>

    <p class="intro">MC Consulting is able to drive projects from concept to completion. We're small business friendly and take the time to fully understand the needs of our clients. Let us help you get your website up and running today.</p>

    <p class="intro"><a href="/contact">Contact us</a> for a free estimate.</p>

    <h1 class="clients">Clients</h1>

    <div class="clients container">
      <a href="https://www.washrunner.com" target="_blank">
        <img src="@/assets/images/washrunner.webp" width="88" height="89" alt="Washrunner Logo"></a>
      <a href="https://www.sooribali.com" target="_blank">
        <img class="sooribali-logo" src="@/assets/images/sooribali.svg" style="min-height: 59px;" alt="Soori Bali Logo"></a>
      <a href="https://www.soorihighlineny.com" target="_blank">
        <img src="@/assets/images/soorihighline.svg" style="min-height: 89px;" alt="Soori High Line Logo"></a>
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

    <p class="service">Expertise in hosting with platforms like AWS, Amazon Lightsail, or Linode.</p>

    <p class="service"><i>Whether you're launching a new website or need help with your hosting configuration or web services, we can help.</i></p>

    <ul class="service">
      <li>DNS for web or mail servers</li>
      <li>Cloudflare or AWS configuration</li>
      <li>Firewall configuration</li>
      <li>Linux or system administration</li>
    </ul>

    <h2><i class="fa-solid fa-magnifying-glass"></i> SEO & Accessibility</h2>

    <p class="service">Please <RouterLink to="/contact">contact us</RouterLink> for a consultation on your website and recommendations for improving SEO and accessibility.</p>
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

.clients.container {
  display: flex;
  align-items: center;
}

.sooribali-logo {
  margin-left: 3rem;
}

li {
  list-style: square;
}

@media (max-width: 480px) {
  .clients.container {
    flex-direction: column;
  }

  .clients.container > a {
    margin-bottom: 1rem;
  }

  .clients.container > a:last-child {
    margin-bottom: 0;
  }

  .sooribali-logo {
    margin-left: 0;
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
