<template>
  <section>
    <article class="roster">
      <triUnivers></triUnivers>
      <oneFigurine></oneFigurine>
    </article>
      <listeFigurines></listeFigurines>
  </section>
</template>
<script>
import { mapState } from 'vuex'
import triUnivers from '@/components/listeUnivers.vue'
import oneFigurine from '@/components/oneFigurine.vue'
import listeFigurines from '@/components/listeFigurines.vue'
export default {
  name: 'MyRoster',
  components: {
    triUnivers,
    oneFigurine,
    listeFigurines
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
<style scoped>
.roster {
  display: flex;
}
</style>
