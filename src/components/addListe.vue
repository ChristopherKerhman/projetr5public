<template>
  <section>
    <ul>
      <li><h4>Choissiez votre univers</h4></li>
      <li v-for="a in ListeUnivers" :key="a"><button type="button" @click="selectionUnivers(a)">{{a.nomUnivers}}</button></li>
      <li><input v-model="nomListe" placeholder="Ajouter le nom de votre liste"></li>
      <li><button type="button" @click="Enregistrer">Nouvelle liste ?</button></li>
    </ul>
  </section>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'addListe',
  data () {
    return {
      nomListe: '',
      indexUnivers: null
    }
  },
  computed: {
    ...mapState(['ListeUnivers'])
  }
}
</script>
