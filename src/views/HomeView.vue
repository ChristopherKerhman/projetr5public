<template>
  <div class="home">
    <h3>Le projet R5</h3>
    <h4>La liste des univers disponible</h4>
    <triUnivers></triUnivers>
  </div>
</template>

<script>
// @ is an alias to /src
import triUnivers from '@/components/listeUnivers.vue'
export default {
  name: 'HomeView',
  components: {
    triUnivers
  }
}
</script>
