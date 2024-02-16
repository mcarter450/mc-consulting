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

    <h2 class="clients">Clients</h2>

    <div class="clients container">
      <a href="https://www.washrunner.com" target="_blank">
        <img src="@/assets/images/washrunner.webp" width="88" height="89" alt="Washrunner Logo"></a>
      <a href="https://www.sooribali.com" target="_blank">
        <img class="sooribali-logo" src="@/assets/images/sooribali.svg" style="min-height: 59px;" alt="Soori Bali Logo"></a>
      <a href="https://www.soorihighlineny.com" target="_blank">
        <img src="@/assets/images/soorihighline.svg" style="min-height: 89px;" alt="Soori High Line Logo"></a>
      <a href="https://polyculturegroup.com" target="_blank">
        <img src="@/assets/images/polyculture.svg" style="min-width: 200px;" alt="Polyculture Logo"></a>
    </div>

    <h2 class="services">Services</h2>

    <div class="card web-dev">
      <h3><i class="fa-solid fa-code"></i> Web Development</h3>

      <p class="service">Custom web application development in popular frameworks.</p>

      <ul class="service">
        <li>JavaScript development in React, Vue.js, Bootstrap or jQuery frameworks.</li>
        <li>Front-end CSS and Sass development.</li>
        <li>PHP development in Laravel & WordPress frameworks.</li>
        <li>Performance tuning and optimizations.</li>
      </ul>
    </div>

    <div class="card web-design">
      <h3><i class="fa-brands fa-figma"></i> Web & UI/UX Design</h3>

      <p class="service">Layout and design of new websites and apps.</p>

      <ul class="service">
        <li>Design comps in Sketch or Figma.</li>
        <li>Simulations of interactive components.</li>
        <li>Usability testing.</li>
      </ul>
    </div>

    <div class="card cloud-hosting">
      <h3><i class="fa-solid fa-cloud"></i> Cloud Hosting</h3>

      <p class="service">Expertise in hosting with platforms like AWS, Amazon Lightsail, or Linode.</p>

      <p class="service"><i>Whether you're launching a new website or need help with your hosting configuration or web services, we can help.</i></p>

      <ul class="service">
        <li>DNS for web or mail servers</li>
        <li>Cloudflare or AWS configuration</li>
        <li>Firewall configuration</li>
        <li>Linux or system administration</li>
      </ul>
    </div>

    <div class="card seo">
      <h3><i class="fa-solid fa-magnifying-glass"></i> SEO & Accessibility</h3>

      <p class="service">Please <RouterLink to="/contact">contact us</RouterLink> for a consultation on your website and recommendations for improving SEO and accessibility.</p>
    </div>

    <p class="contact">Please <a href="/contact">contact us</a> for a free estimate.</p>
  </div>
</template>

<style scoped>
p.intro {
  color: #333;
  font-size: 1.3rem;
  line-height: 1.7;
  animation: slide-in-left 1.2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

p.contact {
  color: #333;
  font-size: 1.3rem;
  line-height: 1.7;
}

h2 {
  font-size: 1.8rem;
}

h3 {
  font-size: 1.5rem;
  margin-top: 0.7rem;
}

h2.clients {
  border-bottom: 1px solid #5588b4;
  padding-left: 1rem;
  padding-bottom: 0.5rem;
  margin-left: -1rem;
}

h2.services {
  border-bottom: 1px solid #5588b4;
  padding-left: 1rem;
  padding-bottom: 0.5rem;
  margin-left: -1rem;
  margin-top: 2rem;
  margin-bottom: 0;
}

.service {
  line-height: 1.4;
}

h3 > i {
  color: #03ac13;
}

.card {
  /*width: 50%;*/
  padding: 1rem 1.5rem;
}

.card.web-dev {
  background-color: #ffffe0;
}

.card.web-design {
  background-color: #e0fff0;
}

.card.cloud-hosting {
  background-color: #e0e0ff;
}

.cloud-hosting > h3 > i {
  color: #9861cf;
}

.card.seo {
  background-color: #ffe0f0;
}

.seo > h3 > i {
  color: #9861cf;
}

.clients.container {
  display: flex;
  align-items: center;
  justify-content: center;
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

  h2.clients,
  h2.services {
    padding-left: 1.5rem;
    margin-left: -1.5rem;
    margin-right: -1.5rem;
  }

  h2.clients {
    margin-top: 2rem;
  }

  h2.services {
    margin-top: 3rem;
  }

  .card {
    margin-left: -1.5rem;
    margin-right: -1.5rem;
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
