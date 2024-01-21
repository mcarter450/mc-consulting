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
    
    <div class="portrait-block"><img src="@/assets/images/self-portrait-320x320.jpg" width="120" height="120"></div>
    <p>
      Hi, I'm Mike, a web developer and cyclist living in the Los Angeles area with my wife Ollie and wiener dog Kona.
    </p>
    <p>
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
  font-size: 1.3rem;
  line-height: 2.2rem;
}

p.bio {
  margin-right: 25%;
}

h2 {
  margin-top: 2.5rem;
}

.portrait-block > img {
  margin-right: 1rem;
  float: left;
}

li {
  list-style: square;
  font-size: 1.3rem;
}
</style>
