<template>
  <div class="main">
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

</script>

<style>
#app {
  font-family: "Inter", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  margin-top: 60px;
  background-color: var(--dark-blue);
}

.main {
  position: relative;
}
</style>
