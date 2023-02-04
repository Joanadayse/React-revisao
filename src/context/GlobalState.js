import axios from "axios"
import { useState } from "react"
import { BASE_URL } from "../constantes/baseUrl"
import {GlobalContext} from "./GlobalContext"



export const GlobalState=(props)=>{
    const[ recipes, setRecipes]= useState([])

    

const getReceita=()=>{

axios.get(`${BASE_URL}/recipe/all`, {
    headers:{
        Authorization: localStorage.getItem("token")
    }
})

.then((res)=>{
    setRecipes(res.data)

})
.catch((err)=>{
console.log(err.response)
})


}


    const data ={
        recipes,
        getReceita,
        setRecipes
    }

    

    return(
        <GlobalContext.Provider value={data}>
{props.children}
        </GlobalContext.Provider>
    )

}