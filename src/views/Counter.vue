<template>
  <h1>Counter</h1>
  <h3>{{ counter }}</h3>
  <button @click="disminuir">Menos</button>
  <button @click="incremetar">Mas</button>
</template>

<script>
import useCounter from '@/composables/useCounter.js';
  export default{

    setup(){
     const {counter,incremetar,disminuir } = useCounter();
     return{
      counter,incremetar,disminuir
     }
    }
    /* data(){
      return{
        counter: 1
      }
    },
    methods:{
      increment(){
        this.counter++
      }
    } */

  }
</script>