import CardDetalhes from "../../componentes/CardDetalhes/CardDetalhes"
import { BASE_URL } from "../../constantes/baseUrl";
import Header from "../../componentes/Header/Header"

import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";



import axios from "axios";
import { Button } from "@chakra-ui/react";
import { goToFeed } from "../../router/coordinator";



export default function Detalhes(){
  const navigate= useNavigate()

const {id}= useParams()
const [receita, setReceita]= useState()

const pegarReceita=(id)=>{
 axios.get(`${BASE_URL}/recipe/${id}`, {
  headers:{
    Authorization: localStorage.getItem("token")
  }
 })
 .then((res)=>{
  setReceita(res.data)
 })
 .catch((err)=>{
  console.log(err.response.data)
 })
}
    
useEffect(()=>{
  pegarReceita(id)
},[])



    return receita && (
        <>
        <Header/>
        <CardDetalhes imagem={receita.imageUrl} titulo={receita.title} descricao={receita.description} />
        <Button
        bg="#FFC5D0"
        color={'white'}
        position="fixed"
        bottom="5px"
        right="5px"
        onClick={()=>goToFeed(navigate)}
        >
          voltar
        </Button>
        </>

    )
}