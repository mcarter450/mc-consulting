<script setup lang="ts">
import LinkExternalIcon from '../components/icons/LinkExternal.vue'
</script>

<template>
  <footer class="site-footer">
    <div class="footer-element">
      <img class="mc-logo" src="@/assets/images/mc-consulting-logo-200.png" width="175" height="100">
    </div>
    <div class="footer-element">
      <p class="hire">
        Profile on <a href="https://www.guru.com/freelancers/mcarter76" rel="nofollow" target="_blank">Guru<LinkExternalIcon size="17px" color="currentColor" /></a><br>
        Profile on <a href="https://www.upwork.com/freelancers/~01f7c1e3f5883b1b0e" rel="nofollow" target="_blank">Upwork<LinkExternalIcon size="17px" color="currentColor" /></a><br>
        <!-- View my profile on <a href="https://www.linkedin.com/in/michael-a-carter/" rel="nofollow" target="_blank">LinkedIn<LinkExternalIcon size="17px" color="currentColor" /></a> -->
      </p>
    </div>
    <div class="footer-element">
      <h3 class="phone"><a href="/contact">Contact us</a></h3>
    </div>
    <div class="copyright">
      © 2022 MC Consulting. All rights reserved.
    </div>
  </footer>
</template>

<style scoped>
p.hire {
  line-height: 1.5rem;
  margin-top: 0;
}

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

.footer-element h3,
.footer-element h4 {
  margin-top: 0;
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
  .footer-element > .phone {
    min-width: 165px;
  }
}
</style>
