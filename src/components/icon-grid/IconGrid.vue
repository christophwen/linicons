<template>
  <div class="icon-grid">
    <div class="icon-grid__search">
      <input v-model="searchInput" type="text" placeholder="Search icons..." />
    </div>
    <div class="icon-grid__results">
      <IconGridTile v-for="icon in filteredResults" :key="icon.name" :icon="icon.name" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import IconGridTile from "~/components/icon-grid/IconGridTile.vue"

import tags from "~/tags.json"

export default Vue.extend({
  components: {
    IconGridTile,
  },
  data: () => ({
    searchInput: "",
  }),

  computed: {
    icons() {
      return Object.keys(tags).map((icon: string) => {
        return {
          name: icon,
          tags: tags[icon],
        }
      })
    },
    filteredResults() {
      return this.icons.filter((icon) => {
        const input = this.searchInput.toString().toLowerCase()
        return (
          icon.name.toLowerCase().includes(input) ||
          icon.tags.find((string: string) => string.toLowerCase().includes(input))
        )
      })
    },
  },
})
</script>

<style lang="scss" scoped>
.icon-grid {
  &__results {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
