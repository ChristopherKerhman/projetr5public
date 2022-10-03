<template>
      <h3>Créer deux listes</h3>
  <section class="ligne">
    <article v-if="listeA === null" class="colonne">
      <label for="liste1">Nom de la liste Alpha</label>
      <input id="liste1" v-model="nomListe1">
      <label for="liste2">Nom de liste Bravo</label>
      <input id="liste2" v-model="nomListe2">
      <button type="button" @click="record(nomListe1, nomListe2)">Enregistrer</button>
    </article>
    <article class="colonne">
    <ul>
    </ul>
    </article>
    <article>
      <p @click="resetMessage" v-if="message">{{message}}</p>
      <p v-if="listeA" @click="charger">Charger les deux listes</p>
    </article>
  </section>
  <section v-if="ok == true">
    <article>
      <h3>Vos deux listes</h3>
      <ul v-for="indFigurine in dataFigurine[0]" :key="indFigurine">
        <li>{{liste1[0].nomListe}}</li>
        <li v-if="dataFigurine !=[]">
          <p v-for="indData in dataFigurine[0]" :key="indData">
          <button type="button" @click="add(1, indData.idFigurine, indData.nomFigurine)">+ {{indData.nomFigurine}}</button>
          </p>
        </li>
        <ul v-for="tb in liste1"  :key="tb">
                  <li v-if="tb.nomListe">{{tb.nomListe}} Total : {{sumListeA}}</li>
                  <li v-else>Nom : {{tb.nomFigurine}} prix : {{tb.prix}}</li>
        </ul>
        <li v-if="dataFigurine !=[]">{{liste2[0].nomListe}}</li>
          <li><p v-for="indData in dataFigurine[0]" :key="indData">
          <button type="button" @click="add(2, indData.idFigurine, indData.nomFigurine)">+ {{indData.nomFigurine}}</button>
          </p>
        </li>
        <ul v-for="tc in liste2"  :key="tc">
                  <li v-if="tc.nomListe">{{tc.nomListe}} Total : {{sumListeB}}</li>
                  <li v-else>Nom : {{tc.nomFigurine}} prix : {{tc.prix}}</li>
        </ul>
      </ul>
    </article>
    <article >
      <button v-if="!save" type="button" @click="sauvegarderLocal">Sauver les deux listes</button>
    </article>
  </section>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'listeFigurine',
  data () {
    return {
      message: null,
      ok: false,
      nomListe1: '',
      nomListe2: '',
      sumListeA: 0,
      sumListeB: 0,
      liste1: [],
      liste2: [],
      save: false
    }
  },
  computed: {
    ...mapState(['dataFigurine', 'price', 'listeA', 'listeB'])
  },
  methods: {
    resetMessage () {
      this.message = null
    },
    record (alpha, bravo) {
      // Controle des champs alpha et Bravo
      if ((alpha.length === 0) || (bravo.length === 0)) {
        this.message = 'Un ou plusieurs champs sont vides.'
      } else {
      // Récupération des données dans les tableaux des listes
        if (this.liste1.length > 0) {
          this.message = 'Erreur de traitement'
        } else {
          this.resetMessage()
          const construct = { nomListe: alpha }
          this.liste1.push(construct)
          this.ok = true
        }
        if (this.liste2.length > 0) {
          this.message = 'Erreur de traitement'
        } else {
          this.resetMessage()
          const construct = { nomListe: bravo }
          this.liste2.push(construct)
          this.ok = true
        }
      }
    },
    add (liste, idF, name) {
      if (liste === 1) {
        const construct = { idFigurine: idF, nomFigurine: name, prix: this.price }
        this.liste1.push(construct)
      }
      if (liste === 2) {
        const construct = { idFigurine: idF, nomFigurine: name, prix: this.price }
        this.liste2.push(construct)
      }
      // Addition des sommes des deux listes
      this.sumListeA = 0
      for (var i = 1; i < this.liste1.length; i++) {
        this.sumListeA = this.sumListeA + this.liste1[i].prix
      }
      // Addition des sommes des deux listes
      this.sumListeB = 0
      for (var j = 1; j < this.liste2.length; j++) {
        this.sumListeB = this.sumListeB + this.liste2[j].prix
      }
    },
    storeListe () {
      this.$store.dispatch('listeA', {
        listeA: this.liste1
      })
      this.$store.dispatch('listeB', {
        listeB: this.liste2
      })
    },
    sauvegarderLocal () {
      this.save = true
      this.storeListe()
    },
    charger () {
      this.liste1 = this.listeA
      this.liste2 = this.listeB
      this.ok = true
    }
  }
}
</script>
<style>
  .colonne {
    display: flex;
    flex-direction: column;
  }
  .ligne {
    display: flex;
    flex-direction: row;
  }
</style>
