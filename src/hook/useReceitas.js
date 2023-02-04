// import axios from "axios"
// import { useState } from "react"
// import { BASE_URL } from "../constantes/baseUrl"


// export default function useReceitas (){
//     const [id, setId]= useState()

//     const[ receits, setReceits]= useState([])

// // preciso que essa função execute assin que entrar na pagina de fedd , então preciso coloca-la no useEffect
// const getReceita=async()=>{
//     try{
//         const result = await axios.get(`${ BASE_URL}/recipe/all`,{
//             headers:{
//                 Authorization: window.localStorage.getItem("token")
//             }

//         })
//         setReceits(result.data)
      
        


//     }
//     catch (erro){
//         console.log(erro.response.data.message)

//     }
// }

// return {receits, getReceita}



