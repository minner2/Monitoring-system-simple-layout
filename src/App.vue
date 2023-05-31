<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Layout from './layout/Layout.vue'
</script>

<template>
 <div class="home">
  <Layout></Layout>
 </div>
</template>

<style scoped>
*{
  margin: 0;
  padding: 0px;
}
.home{
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
