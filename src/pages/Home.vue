<template>
  <div>
    首頁內容
    <button @click="$router.push('/about')">去 About 頁面</button>
    <button @click="gotoAbout">去 About 頁面</button>
    <router-link to="/about">去 About 頁面</router-link>
  </div>
</template>

<script>
export default {
  methods: {
    gotoAbout() {
      this.$router.push('/about')
    }
  }
}
</script>

<style lang="scss" scoped>
  
</style>