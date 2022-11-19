<template>
<div class="container">
  <div class="row">
    <div class="col-md-12">
     <h1> MY POKEMON TEAMS</h1>
    </div>
  </div>
</div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
export default {
  setup() {
    return {
      account: computed(() => AppState.account)
    }
  }
}
</script>

<style scoped>

</style>
