<template>
  <header>
    <img class="mc-logo" src="@/assets/images/mc-consulting-logo.png" width="518" height="500">
    <img class="site-banner" src="@/assets/images/mc-consulting-header-background.jpg" width="2000" height="500">
  </header>
</template>

<style scoped>
header {
  position: relative;
}

.mc-logo {
  position: absolute;
  left:  39%;
  height: 100%;
  width: auto;
  animation: swirl-in-left-fwd 0.6s ease-out both;
}

.site-banner {
  width: 100%;
  height:  auto;
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
