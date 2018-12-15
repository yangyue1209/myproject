<template>
  <div id="app">
    <router-view ></router-view>
  </div>
</template>

<script>
  import login from '@/views/login'
  import home from '@/views/home/home'
export default {
  name: 'App',
  data () {
    return {

    }
},
components : {
  "login" : login,
  home
}
}
</script>

<style scoped>
  #app {
    height: 100%;
  }
</style>
