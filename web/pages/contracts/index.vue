<template>
  <div></div>
</template>

<script>
import get from 'lodash/get'

import store from './store'

export default {
  name: 'Contracts',

  beforeCreate() {
    if (!get(this.$store, 'state.contracts')) {
      this.$store.registerModule('contracts', store)
    }
  },
}
</script>

<style scoped></style>
