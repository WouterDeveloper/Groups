<template>
  <div id="app">
    <router-view/>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Nav/>
    </div>
</template>
<script>
  import Nav from '@/components/nav.vue'

  export default {
    name: 'Home',
    components: {
      Nav
    }
  }
</script>
