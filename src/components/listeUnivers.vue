<template>
  <section>
    <ul>
      <li v-for="l in listeUnivers" v-bind:key="l" @click="searchFactions(l.idUnivers, l.nomUnivers)">{{l.nomUnivers}}</li>
    </ul>
    <ul  v-if="listeFaction != null">
      <li><h3>{{nomUnivers}}</h3></li>
      <li v-for="k in listeFaction" v-bind:key="k">{{k.nomFaction}}</li>
    </ul>

  </section>
</template>
<script>
export default {
  name: 'triUnivers',
  data () {
    return {
      listeUnivers: null,
      listeFaction: null,
      nomUnivers: null
    }
  },
  mounted () {
    fetch('https://apir5.graines1901.com/sources/APIpublic/listeUnivers.php')
      .then(response => response.json())
      .then(response => {
        this.listeUnivers = response
      })
      .catch(e => {
      })
  },
  methods: {
    searchFactions (id, nom) {
      this.listeFaction = null
      this.nomUnivers = nom
      fetch('https://apir5.graines1901.com/sources/APIpublic/listeFactions.php?idUnivers=' + id)
        .then(response => response.json())
        .then(response => {
          this.listeFaction = response
        })
        .catch(e => {
        })
    }
  }
}
</script>
