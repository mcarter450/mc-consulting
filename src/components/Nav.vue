<template>
  <ul class="nav">
    <li><RouterLink class="nav--link" to="/">Home</RouterLink></li>
    <li><RouterLink class="nav--link" to="/portfolio">Portfolio</RouterLink></li>
    <li><RouterLink class="nav--link" to="/contact">Contact</RouterLink></li>
  </ul>
</template>

<style scoped>
.nav {
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
}

.nav > li {
  display: inline-block;
}

.nav--link {
  display: inline-block;
  padding: 0 0.7rem;
  text-decoration: none;
  color: #000;
}

.nav--link:hover {
  color: #03ac13;
}

.nav--link.router-link-active {
  font-weight: 600;
  /*animation: bounce-in-top 0.8s both;*/
}

.nav--link.router-link-active:hover {
  color: #000;
}

/**
 * ----------------------------------------
 * animation bounce-in-top
 * ----------------------------------------
 */
@keyframes bounce-in-top {
  0% {
    transform: translateX(-150px);
    animation-timing-function: ease-in;
    opacity: 0;
  }
  38% {
    transform: translateX(0);
    animation-timing-function: ease-out;
    opacity: 1;
  }
  55% {
    transform: translateX(-28px);
    animation-timing-function: ease-in;
  }
  72% {
    transform: translateX(0);
    animation-timing-function: ease-out;
  }
  81% {
    transform: translateX(-15px);
    animation-timing-function: ease-in;
  }
  90% {
    transform: translateX(0);
    animation-timing-function: ease-out;
  }
  95% {
    transform: translateX(-5px);
    animation-timing-function: ease-in;
  }
  100% {
    transform: translateX(0);
    animation-timing-function: ease-out;
  }
}
</style>
