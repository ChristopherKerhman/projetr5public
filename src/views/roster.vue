<template>
  <h3>Roster</h3>
  <!--<addListe></addListe>-->
  <triUnivers></triUnivers>
  <oneFigurine></oneFigurine>
</template>
<script>
import { mapState } from 'vuex'
// import addListe from '@/components/addListe.vue'
import triUnivers from '@/components/listeUnivers.vue'
import oneFigurine from '@/components/oneFigurine.vue'
export default {
  name: 'MyRoster',
  components: {
    triUnivers,
    oneFigurine
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapState(['idFigurine', 'dataFigurine'])
  }
}
</script>
