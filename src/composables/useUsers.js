import {ref} from 'vue'
import axios from 'axios'
const useUsers = () =>{
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

export default useUsers