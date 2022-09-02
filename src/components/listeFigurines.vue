<template>
      <h3>Listes figurines</h3>
  <section class="ligne">
    <article class="colonne">
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
      <aside>
        <ul>
          <li v-for="listeNote in liste1"  :key="listeNote">{{listeNote.nomListe}}</li>
        </ul>
      </aside>
      <aside>
        <ul>
          <li v-for="listeNote in liste2"  :key="listeNote">{{listeNote.nomListe}}</li>
        </ul>
      </aside>
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
      nomListe1: '',
      nomListe2: '',
      liste1: [],
      liste2: []
    }
  },
  computed: {
    ...mapState(['listeAlpha', 'listeBravo'])
  },
  methods: {
    record (alpha, bravo) {
      // Controle des champs alpha et Bravo
      if ((alpha.length === 0) || (bravo.length === 0)) {
        this.message = 'Un ou plusieurs champs sont vides.'
      } else {
      // Récupération des données dans les tableaux des listes
        if (this.liste1.length > 0) {
          this.message = 'Erreur de traitement'
        } else {
          const construct = { nomListe: alpha }
          this.liste1.push(construct)
        }
        if (this.liste2.length > 0) {
          this.message = 'Erreur de traitement'
        } else {
          const construct = { nomListe: bravo }
          this.liste2.push(construct)
        }
      }
    },
    resetMessage () {
      this.message = null
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
