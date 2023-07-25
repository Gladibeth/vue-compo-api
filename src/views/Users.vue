<template>
  <h1 v-if="isLoading">Por favor espera</h1>
  <h2 v-else>Usuarios</h2>
  <h2 v-if="errorMessage">{{ errorMessage }}</h2>

  <div v-if="users.length > 0">
    <ul>
      <li v-for="{first_name, last_name,email, id} in users" :key="id">
        <h4>{{ first_name }} {{  last_name}}</h4>
        <h5>{{ email }}</h5>
      </li>
    </ul>
  </div>

  <button @click="prevPage">Atras</button>
  <button @click="nextPage">Siguiente</button>
  <span>Pagina: {{ currrentPage }}</span>
</template>

<script>
import {ref} from 'vue'
import axios from 'axios'
  export default{
    setup(){
      const isLoading = ref(true)
      const users = ref([])
      const errorMessage = ref(null)
      const currrentPage = ref(1)

      const getUsers = async(page = 1) => {
        if(page <= 0) page = 1
        isLoading.value = true

        const {data} = await axios.get('https://reqres.in/api/users',{
          params: { page}
        })
        
        if(data.data.length > 0) {
          users.value = data.data
          currrentPage.value = page
          errorMessage.value = null
        }else if(currrentPage.value > 0){
          errorMessage.value = "No hay mas usuarios"
        }

        isLoading.value = false
      }

      getUsers(1)

      return{
        currrentPage,
        errorMessage,
        isLoading,
        users,

        nextPage: () => getUsers(currrentPage.value + 1),
        prevPage: () => getUsers(currrentPage.value - 1),
      }
    }
  }
</script>