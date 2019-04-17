<template>
  <section class="app-main" style="height: calc(100% - 120px);margin: 18px;background: #fcfcfc;    box-shadow: 0px 0px 10px #ddd;">
    <transition name="fade" mode="out-in">
      <keep-alive :include="cachedViews">
        <router-view></router-view>
      </keep-alive>
    </transition>
  </section>
</template>

<script>
  export default {
    name: "AppMain",
    computed: {
      cachedViews() {
        return this.$store.state.tagsView.cechedViews
      }
    }
  }
</script>

<style scoped>

</style>
