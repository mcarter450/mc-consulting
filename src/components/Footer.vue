<script setup lang="ts">
import LinkExternalIcon from '../components/icons/LinkExternal.vue'
</script>

<template>
  <footer class="site-footer">
    <div class="social">
      <a href="https://www.facebook.com/mcwebsiteconsulting" rel="nofollow" target="_blank"><i class="fa-brands fa-facebook"></i></a> 
      <a href="https://www.linkedin.com/in/michael-a-carter/" rel="nofollow" target="_blank"> <i class="fa-brands fa-linkedin"></i></a>
    </div>
    <div class="links">
      <div class="site-logo">
        <img class="mc-logo" src="@/assets/images/mc-consulting-logo-200.png">
      </div>
      <div class="footer-element">
        <RouterLink class="nav--link" to="/privacy">Privacy Policy</RouterLink>
      </div>
      <div class="footer-element">
        <RouterLink class="nav--link" to="/terms">Terms and Conditions</RouterLink>
      </div>
      <div class="copyright">
        © 2024 MC Consulting. All rights reserved.
      </div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  clear: both;
  background-color: #def1e2;
  padding-bottom: 2rem;
  margin-top: 3rem;
}

.social {
  background-color: #def1eb;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid #fff;
}

.social > a {
  margin: 0 0.5rem;
}

.links {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 1.5rem;
}

.links .footer-element {
  font-size: 1rem;
}

.copyright {
  font-size: 1rem;
}

.site-logo {
  display: flex;
  align-items: center;
}

.mc-logo {
  max-height: 50px;
}

.fa-facebook,
.fa-linkedin {
  color: #333;
}

a:hover .fa-facebook,
a:hover .fa-linkedin {
  color: #666;
}


@media (max-width: 480px) {
  .mc-logo {
    display: none;
  }

  .links {
    flex-direction: column;
  }

  .footer-element {
    margin-bottom: 1rem;
  }
}
</style>
