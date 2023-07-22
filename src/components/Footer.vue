<script setup lang="ts">
import LinkExternalIcon from '../components/icons/LinkExternal.vue'
</script>

<template>
  <footer class="site-footer">
    <div class="footer-element">
      <img class="mc-logo" src="@/assets/images/mc-consulting-logo-200.png" width="175" height="100">
    </div>
    <div class="footer-element">
      <a href="https://www.facebook.com/mcwebsiteconsulting" rel="nofollow" target="_blank"><i class="fa-brands fa-facebook"></i></a> 
      <a href="https://www.linkedin.com/in/michael-a-carter/" rel="nofollow" target="_blank"> <i class="fa-brands fa-linkedin"></i></a>
    </div>
    <div class="footer-element">
      <a href="/contact">Contact us</a>
    </div>
    <div class="copyright">
      © 2023 MC Consulting. All rights reserved.
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  display: grid;
  grid-template-columns: repeat(3, [col-start] 1fr);
  column-gap: 5%;
  align-items: stretch;
  justify-items: center;
  background-color: #def1e2;
  padding-top: 2rem;
  padding-bottom: 2rem;
}

.copyright {
  grid-column: col-start / span 3;
  font-size: 0.8rem;
  margin:  0.5rem;
  padding:  0.5rem;
}

.footer-element {
  font-size: 1.7rem;
}

.footer-element > a {
  margin-left: 0.7rem;
  margin-right: 0.7rem;
}

@media (max-width: 480px) {
  .mc-logo {
    display: none;
  }

  .footer-element {
    grid-column: col-start / span 3;
  }

  .footer-element h4 {
    margin-top: 1.33em;
    margin-bottom: 1em;
  }

  .footer-element > .hire {
    margin-bottom: 0;
  }

  .footer-element > .hire,
  .footer-element > .contact {
    min-width: 165px;
  }

  .footer-element > .contact {
    margin-top: 1rem;
  }
}
</style>
