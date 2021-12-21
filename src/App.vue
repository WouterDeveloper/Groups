<template>
  <div id="app">
    <router-view/>
    
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
