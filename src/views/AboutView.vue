<template>
  <div class="about">
    <h1>Ciclo de via</h1>

    <h2>{{ title }}</h2>

    <button @click="changeTitle">Cambiar titulo</button>
  </div>
</template>

<script>
import { onActivated, onBeforeMount, onDeactivated, onErrorCaptured, onRenderTracked, onRenderTriggered, onUpdated,onMounted,onBeforeUpdate,onBeforeUnmount,onUnmounted, ref } from 'vue'
export default{
  setup(){

    const title = ref('About')
    console.log("Setup se llamo...")

    onBeforeMount(()=>{
      console.log('OnBeforeMount')
    })
    onMounted(()=>{
      console.log('OnMounted')
    })
    onBeforeUpdate(()=>{
      console.log('OnBeforeUpdate')
    })
    onUpdated(()=>{
      console.log('onUpdated')
    })
    onBeforeUnmount(()=>{
      console.log('OnBeforeUnmount')
    })
    onUnmounted(()=>{
      console.log('onUnmounted')
    })
    onErrorCaptured(()=>{
      console.log('onErrorCaptured')
    })
    onRenderTracked(()=>{
      console.log('onRenderTracked')
    })
    onRenderTriggered(()=>{
      console.log('onRenderTriggered')
    })
    onActivated(()=>{
      console.log('onActivated')
    })
    onDeactivated(()=>{
      console.log('onDeactivated')
    })

    return{
      title,
      changeTitle:() =>{
        title.value = 'Nueva pagina de about'
      }
    }
    
  }
}
</script>
