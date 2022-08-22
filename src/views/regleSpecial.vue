<template >
  <section>
    <article>
      <h3>Type de règle spécial recherché ?</h3>
      <button v-for="t in types"  :key="t" @click="reglesSpeciales(t.id)">{{t.RegS}}</button>
    </article>
    <article>
      <h3>{{types[idType].RegS}}</h3>
      <ul>
        <li v-for="k in regles"  :key="k" @click="affichage(k)">{{k.nomRS}}</li>
      </ul>
    </article>
    <article v-if="vueRS">
      <h3>{{nomRS}}</h3>
      <p class="paragrapge">{{texteRS}}</p>
    </article>
  </section>
</template>
<script>
export default {
  name: 'typeRS',
  data () {
    return {
      types: [{ id: 0, RegS: 'Armes' }, { id: 1, RegS: 'Figurine' }],
      idType: 0,
      RegS: '',
      regles: '',
      nomRS: '',
      texteRS: '',
      vueRS: false
    }
  },
  methods: {
    reglesSpeciales (idType) {
      this.idType = idType
      fetch('https://apir5.graines1901.com/sources/APIpublic/reglesSpeciale.php?typeRS=' + this.idType)
        .then(response => response.json())
        .then(response => {
          this.vueRS = false
          this.regles = response
        })
        .catch(e => {
        })
    },
    affichage (k) {
      this.vueRS = true
      this.nomRS = (k.nomRS)
      this.texteRS = (k.texteRS)
    }
  }
}
</script>
<style scoped>
button {
  margin-right: 1em;
  padding-left: 0.25em;
  padding-right: 0.25em;
}
ul {
  list-style: none;
  text-align: left;
  cursor: pointer;
}
h3 {
  text-align: left;
}
.paragrapge {
  text-align: justify;
}
</style>
