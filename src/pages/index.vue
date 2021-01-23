<template>
  <div>
    <h1 class="test">linicons</h1>
    <h2>simple and clean</h2>
    <IconGrid />
  </div>
</template>

<script lang="ts">
import IconGrid from "~/components/icon-grid/IconGrid.vue"

export default {
  components: {
    IconGrid,
  },
}
</script>
<style lang="scss" scoped>
h1 {
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 4em;
  font-style: italic;
  margin-bottom: -0.5em;
  text-align: center;
}
h2 {
  font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 2em;
  margin-bottom: 2em;
  text-align: center;
}
div {
  margin-left: 10%;
      margin-right: 10%;
  @media (min-width: 767px) {
    margin-left: 10%;
      margin-right: 10%;
    }
    @media (min-width: 992px) {
      margin-left: 10%;
      margin-right: 10%;
    }
    @media (min-width: 1200px) {
      margin-left: 10%;
      margin-right: 10%;
    }
}
</style>
