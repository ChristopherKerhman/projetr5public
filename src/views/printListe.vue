<template>
  <section>
    {{listeA}} {{listeB}}
  </section>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'PrintListe',
  computed: {
    ...mapState(['listeA', 'listeB'])
  }
}
</script>
