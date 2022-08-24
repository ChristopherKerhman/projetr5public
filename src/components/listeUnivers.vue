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
    <article v-if="OneFigurine != null">
      <h3>Details de la figurine</h3>
      <ul>
        <li>Nom figurine : {{OneFigurine.nomFigurine}} - {{role[OneFigurine.role]}} - {{OneFigurine[0].prixFigurine}} points</li>
        <li>Mouvement : {{OneFigurine.mouvement}}" / {{(Math.round((OneFigurine.mouvement)*1.4))}}" + 1D4"</li>
        <li>Présentation : {{OneFigurine.texteFigurine}}</li>
        <li>DQM: {{de[OneFigurine.DQM]}} / DC: {{de[OneFigurine.DC]}}</li>
        <li>Sauvegarde : {{armure[OneFigurine.svg]}} / Point de vie: {{OneFigurine.pdv}}</li>
        <li>Règle spécial de la figurine : <strong v-for="p in RSFigurine" :key="p">{{p.nomRS}}.</strong> </li>
        <li>Armes:
          <ul v-for="q in OneFigurine[2]" :key="q">
            <li v-if="q.typeArme > 0">
              {{q.nomArme}} - Type {{typeArme[q.typeArme]}} Range :{{q.range}}"/ {{Math.round((q.range)*2.54)}} cm
              - {{puissance[q.puissance]+de[OneFigurine.DC]}} -
            </li>
            <li v-if="q.gabarit >0">Gabarit de l'arme : {{gabarit[q.gabarit]}}</li>
            <li v-else>{{q.nomArme}} - Type {{typeArme[q.typeArme]}} - {{puissance[q.puissance]+de[OneFigurine.DC]}}</li>
            <li v-for="t in q[0]" :key="t">Règles spéciales : <strong v-for="u in t.RS" :key="u">{{u}}.</strong></li>
          </ul>
        </li>

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
      OneFigurine: null,
      de: ['D6', 'D8', 'D10', 'D12'],
      armure: ['Aucune', '6+', '5+', '4+', '3+', '2+'],
      typeArme: ['Close', 'Tir', 'Explosive'],
      role: ['Civile', 'Conscrit', 'Soldat professionnel', 'Elite', 'Officier', 'Officier suppérieur'],
      gabarit: ['Pas de gabarit', 'Petit', 'Moyen', 'Grand', 'Cône'],
      puissance: [1, 2, 3, 4, 5, 6],
      RSFigurine: null,
      RSArme: ['A']
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
      this.OneFigurine = detailsFigurine
      this.RSFigurine = this.OneFigurine[1]
    }
  }
}
</script>
