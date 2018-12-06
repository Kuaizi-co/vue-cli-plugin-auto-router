<template>
  <div class="app-view">
    <home-layout></home-layout>
  </div>
</template>

<script>
import homeLayout from './components/layout'
export default {
  name: 'app',
  components: {
    homeLayout
  }
}
</script>

<style lang="less">
  h1 {
    color: @color;
  }
  .app-view {
    
    min-height: 100%;
  }
</style>
