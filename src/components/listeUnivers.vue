<template>
  <section>
    <article>
      <h3>Les univers et faction disponible</h3>
      <ul>
        <li v-for="l in listeUnivers" v-bind:key="l" @click="searchFactions(l.idUnivers, l.nomUnivers)">{{l.nomUnivers}}</li>
      </ul>
      <ul  v-if="listeFaction != null">
        <li><h3>{{nomUnivers}}</h3></li>
        <li v-for="k in listeFaction" v-bind:key="k" @click="listeFigurine(k.idFaction, k.nomFaction)">{{k.nomFaction}}</li>
      </ul>
      <ul v-if ="listeFigurines != null">
          <li v-for="m in listeFigurines" v-bind:key="m" @click="affichage(m)">{{m.nomFigurine}} Prix figurine : {{[m][0][0].prixFigurine}} points</li>
      </ul>
    </article>
  </section>
</template>
<script>
export default {
  name: 'triUnivers',
  data () {
    return {
      listeUnivers: null,
      listeFaction: null,
      nomUnivers: null,
      nomFaction: null,
      listeFigurines: null,
      idFigurine: null,
      dataFigurine: null
    }
  },
  mounted () {
    fetch('https://apir5.graines1901.com/sources/APIpublic/listeUnivers.php')
      .then(response => response.json())
      .then(response => {
        this.listeUnivers = response
        this.$store.dispatch('ListeUnivers', {
          ListeUnivers: this.listeUnivers
        })
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
    },
    listeFigurine (idF, nomF) {
      this.nomFaction = nomF
      fetch('https://apir5.graines1901.com/sources/APIpublic/listeFigurine.php?idFaction=' + idF)
        .then(response => response.json())
        .then(response => {
          this.listeFigurines = response
        })
        .catch(e => {
        })
    },
    affichage (detailsFigurine) {
      this.idFigurine = detailsFigurine.idFigurine
      // Ajouter id de la figurine dans le store
      this.$store.dispatch('idFigurine', {
        idFigurine: this.idFigurine
      })
      fetch('https://apir5.graines1901.com/sources/APIpublic/oneFigurine.php?idFigurine=' + this.idFigurine)
        .then(response => response.json())
        .then(response => {
          this.dataFigurine = response
          this.$store.dispatch('dataFigurine', {
            dataFigurine: this.dataFigurine
          })
        })
        .catch(e => {
        })
    }
  }
}
</script>
