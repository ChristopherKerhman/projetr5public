<template>
  <section v-for="ab in data[0]" :key="ab">
    <h3>Détail de la figurine {{ab.nomFigurine}}</h3>
    <ul>
      <li>Nom de la figurine : {{ab.nomFigurine}}</li>
      <li>Rôle : {{role[ab.role]}}</li>
      <li>DQM: {{de[ab.DQM]}} / DC {{de[ab.DC]}}</li>
      <li>Mouvement : {{ab.mouvement}} "/ {{Math.round(ab.mouvement * 1.4, 0)}}" + 1D4"</li>
      <li>Point de vie : {{ab.pdv}} / Armure: {{armure[ab.svg]}}</li>
      <li v-if="data[1].length">Règles spéciales : <strong v-for="rs in data[1]"  :key="rs">{{rs.nomRS}}.</strong></li>
      <li>Description : {{ab.texteFigurine}}</li>
    </ul>
    <ul v-for="armes in data[2]" :key="armes">
      <li v-if="armes.typeArme == 0">{{armes.nomArme}} {{puissance[armes.puissance]}}{{de[ab.DC]}}{{surPuissance[armes.surPuissance]}} (<strong v-for="RSarme in armes[0]" :key="RSarme">{{RSarme.nomRS}}.</strong>)</li>
      <li v-if="armes.typeArme == 1">{{armes.nomArme}} {{puissance[armes.puissance]}}{{de[ab.DC]}}{{surPuissance[armes.surPuissance]}} portée: {{armes.range}}" (<strong v-for="RSarme in armes[0]" :key="RSarme">{{RSarme.nomRS}}.</strong>)</li>
      <li v-if="armes.typeArme == 2">{{armes.nomArme}} {{puissance[armes.puissance]}}{{de[ab.DC]}}{{surPuissance[armes.surPuissance]}} portée: {{armes.range}}"
      Gabarit {{gabarit[armes.gabarit]}}  (<strong v-for="RSarme in armes[0]" :key="RSarme">{{RSarme.nomRS}}.</strong>)</li>
    </ul>
  </section>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'OneFigurine',
  data () {
    return {
      de: ['D6', 'D8', 'D10', 'D12'],
      armure: ['Aucune', '6+', '5+', '4+', '3+', '2+'],
      typeArme: ['Close', 'Tir', 'Explosive'],
      role: ['Civile', 'Conscrit', 'Soldat professionnel', 'Elite', 'Officier', 'Officier suppérieur'],
      gabarit: ['Pas de gabarit', 'Petit', 'Moyen', 'Grand', 'Cône'],
      puissance: [1, 2, 3, 4, 5, 6],
      surPuissance: [null, '+'],
      RSFigurine: null,
      RSArme: ['A'],
      message: 'Pas de règle spéciales'
    }
  },
  computed: {
    ...mapState({ id: 'idFigurine', data: 'dataFigurine' })
  }
}

</script>
