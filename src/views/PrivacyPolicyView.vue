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
    <h1>Privacy Policy</h1>

    <h2>Who we are</h2>
    <p>Our website address is: https://mcarter.consulting.</p>
    
    <h2>Cookies</h2>
    <p>Google Analytics (GA) is used to track interactions with our website. Although we do not have control over the information Google collects, it is possible to view this website with tracking disabled and have complete privacy when desired.</p>

    <p>Google Analytics uses “cookies to identify unique users across browsing sessions.” These cookies help remember a visitor’s previous interactions on a website and identify unique users.</p>

    <p>When someone visits a website, Google Analytics creates a cookie that stores a ClientID (cid), which is used to identify users. GA also uses UserID (uid) to help websites to associate a single user with sessions across multiple devices. Cookies used by Google Analytics include:</p>

    <ul>
      <li>_gid, distinguishes users for 24 hours</li>
      <li>_ga, distinguishes users on a domain and lasts 2 years</li>
      <li>_gat, limits the number of user requests and lasts 1 minute</li>
      <li>_utmv, user-defined variable cookies that can last 2 years</li>
    </ul>

    <p>GA sets first-party cookies i.e. set by the domain a user is visiting. But it can also set third-party cookies by DoubleClick if websites use the advertiser features for retargeting.</p>

    <h2>Embedded content from other websites</h2>

    <p>Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor had visited the other website.</p>

    <p>These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracking your interaction with the embedded content if you have an account and are logged in to that website.</p>

    <h2>Who we share your data with</h2>

    <p>Although data is not shared with any outside sources directly, Google Analytics does collect and store information on its servers.</p>

    <h2>How long we retain your data</h2>

    <p>Please contact Google for more information about data retention policies.</p>

    <h2>What rights you have over your data</h2>

    <p>If you have sent us any email in the past, you can request that it be removed or scrubbed from our servers. Please contact Google in regards to removing any Google Analytics data, or use a browser with better privacy features like Firefox or Brave.</p>

    <h2>Where we send your data</h2>

    <p>Any contact form submission will automatically send an email that is housed on our own mail server and is not shared with any other party.</p>
</div>
</template>

<style scoped>
p {
  color: #333;
  font-size: 1.3rem;
  line-height: 2.2rem;
}

li {
  list-style: square;
  font-size: 1.3rem;
}
</style>
