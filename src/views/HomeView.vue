<template>
  <div class="home">
   <h1>Reactive vs Ref</h1>
    <p>{{ iroman }}</p>
   <p>{{ hulk }}</p>

   <button @click="changeIroman">Change Iroman</button>
   <button @click="changeHulk">Change Hulk</button>


   <p>Iroman Reactive:{{ iromanIsAlive }}</p>
   <p>Hulk Ref:{{ hulkIsAlive }}</p>
   <button @click="changeStatus">Cambiar estatus</button>
  </div>
</template>

<script>
import {ref, reactive} from 'vue'
export default {
  name: 'HomeView',
  setup(){
    const iroman = ref({
      name: 'Tony', age: 50
    })
    const hulk = reactive({
      name: 'Bruce', age: 40
    })

    const iromanIsAlive = reactive(false)
    const hulkIsAlive = ref(true)

    const changeStatus = () => {
      hulkIsAlive.value = !hulkIsAlive.value
      //no funcionara ya que solo funciona en obj
      //iromanIsAlive = reactive(!iromanIsAlive)
    }


    return{
      iroman,
      hulk,
      iromanIsAlive,
      hulkIsAlive,
      changeStatus,
      changeIroman: () => {
        iroman.value.name = 'Tony Star',
        iroman.value.age = 55
      },
      changeHulk: () => {
        hulk.name = 'Bruce Banner',
        hulk.age = 45
      }
    }
  }
}
</script>
