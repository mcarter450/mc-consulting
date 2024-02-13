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
    <h1>About</h1>
    
    <div class="portrait-block">
      <img src="@/assets/images/self-portrait-320x320.jpg" width="120" height="120">
      <p>
        Mike is a web developer and cyclist living in the Los Angeles area with his wife Ollie and wiener dog Kona.
      </p>
    </div>
    
    <p class="description">
      I've always been more of a generalist and enjoy working with different languages and technologies. I'd describe myself as a lifelong learner who relishes the opportunity of a new challenge.
    </p>
    
    <h2>Open Source Contributions</h2>
    <p>
      <ul>
        <li><a href="https://wordpress.org/plugins/products-feed-generator/" target="_blank">Products Feed Generator</a></li>
        <li><a href="https://wordpress.org/plugins/free-shipping-kit/" target="_blank">Free Shipping Kit</a></li>
      </ul>
    </p>
  </div>
</template>

<style scoped>
p {
  color: #333;
}

p.description {
  font-size: 1.3rem;
  line-height: 2.2rem;
  margin-top: 2rem;
}

h2 {
  margin-top: 2.5rem;
}

.portrait-block {
  display: flex;
  background-color: #f1deed;
  height: 120px;
  align-items: center;
}

.portrait-block > p {
  margin-left: 2rem;
  margin-right: 1rem;
}

.portrait-block > img {
  transform: rotate(350deg) scale(1.1);
  margin-left: 1.5rem;
}

li {
  list-style: square;
  font-size: 1.3rem;
}

@media (max-width: 480px) {
  .portrait-block > img {
    transform: none;
    margin-left: 0;
  }

  .portrait-block > p {
    font-size: .7rem;
    line-height: 1.3;
    margin-left: 1rem;
  }
}
</style>
