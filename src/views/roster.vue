<template>
  <h3>Roster</h3>
  <addListe></addListe>
  <triUnivers></triUnivers>
</template>
<script>
import addListe from '@/components/addListe.vue'
import triUnivers from '@/components/listeUnivers.vue'
export default {
  name: 'MyRoster',
  components: {
    triUnivers,
    addListe
  },
  data () {
    return {
    }
  }
}
</script>
