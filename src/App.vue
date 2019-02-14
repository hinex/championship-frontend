<template>
  <div id="app">
    <Header />
    <router-view/>
  </div>
</template>

<script>
    import Header from '@/components/Header.vue'

    export default {
        name: 'App',
        components: {
            Header,
        }
    }
</script>

<style lang="scss">
  @import '~bootstrap/dist/css/bootstrap.css';
  @import '~bootstrap-vue/dist/bootstrap-vue.css';

  h1 {
    padding: 20px 0;
  }
</style>
