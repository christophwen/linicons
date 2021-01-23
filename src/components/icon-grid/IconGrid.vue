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
    grid-template-columns: repeat(5, 1fr);

    @media (min-width: 767px) {
      grid-template-columns: repeat(10, 1fr);
    }
    @media (min-width: 992px) {
      grid-template-columns: repeat(15, 1fr);
    }
    @media (min-width: 1200px) {
      grid-template-columns: repeat(20, 1fr);
    }
  }
}
.icon-grid__search input {
  border-color: #000000;
  border-width: 0 0 2px;
  display: block;
  font-size: 1.5em;
  margin-bottom: 40px;
  margin-left: auto;
  margin-right: auto;
  outline: 0;
  text-align: center;
  width: 100%;
  
  &::placeholder {
  opacity: 0.2;
  }
}
</style>
