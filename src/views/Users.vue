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
  <span class="page-current">{{ currrentPage }}</span>
  <button @click="nextPage">Siguiente</button>
</template>

<script>
import useUsers from '@/composables/useUsers'

  export default{
    setup(){
      const { currrentPage, errorMessage, isLoading, users, nextPage,prevPage} = useUsers();
      return{
        currrentPage, errorMessage, isLoading, users, nextPage,prevPage
      }
    }
  }
</script>

<style scoped>
  .page-current{
    padding: 0 20px;
  }
</style>