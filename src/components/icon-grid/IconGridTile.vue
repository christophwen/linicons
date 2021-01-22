<template>
  <div class="icon-grid-tile">
    <component :is="dynamicIcon" class="icon-grid-tile__icon" />
  </div>
</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({
  name: "IconGridTile",

  props: {
    icon: {
      type: String,
      required: true,
    },
  },

  computed: {
    dynamicIcon() {
      return require(`../../../icons/${this.icon}.svg?inline`)
    },
  },
})
</script>

<style lang="scss" scoped>
.icon-grid-tile {
  &__icon {
    height: 2rem;
    width: 2rem;
  }
}
</style>
