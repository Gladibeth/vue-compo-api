<template>
  <h1>Buscar un pokémon</h1>
  <form @submit.prevent="onSubmit">
    <input 
    type="number"
    placeholder="Buscar un pokemon por id"
    autofocus
    v-model="pokemonId"
    >
  </form>
  <span>Presione enter para burcar su pokémon</span>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
  export default{
    setup(){
      const router = useRouter()

      const pokemonId = ref(1)

      return{
        pokemonId,

        onSubmit: () => {
          router.push({name: 'pokemon', params: {id: pokemonId.value}})
        }
      }
    }
  }
</script>