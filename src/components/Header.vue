<template>
  <header>
    <img class="mc-logo" src="@/assets/images/mc-consulting-logo.png" width="518" height="500">
  </header>
</template>

<style scoped>
header {
  position: relative;
  background-image: url(/images/mc-consulting-header-background.jpg); 
  background-size: cover; 
  height: 300px;
}

.mc-logo {
  display: block;
  height: 100%;
  width: auto;
  animation: swirl-in-left-fwd 0.6s ease-out both;
  margin-left: auto;
  margin-right: auto;
}

.site-banner {
  width: 100%;
  height:  auto;
}

@media (max-width: 480px) {
  header {
    height: 200px;
  }

  .mc-logo {
    animation: none;
  }
}

/**
 * ----------------------------------------
 * animation swirl-in-left-fwd
 * ----------------------------------------
 */
@keyframes swirl-in-left-fwd {
  0% {
    transform: rotate(-540deg) scale(0);
    transform-origin: 0 50%;
    opacity: 0;
  }
  100% {
    transform: rotate(0) scale(1);
    transform-origin: 0 50%;
    opacity: 1;
  }
}
</style>
