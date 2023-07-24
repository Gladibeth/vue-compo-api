import { ref } from "vue"

const useCounter = () => {
  const counter = ref(5)

  return{
    counter,
    incremetar: () =>{
      counter.value++
    },
    disminuir: () =>{
      counter.value--
    }
  }

}

export default useCounter