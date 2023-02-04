import axios from "axios";
import { useState } from "react";
import Formulario from "../../componentes/formulario/Formulario";
import { BASE_URL } from "../../constantes/baseUrl";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import { goToFeed } from "../../router/coordinator";
import { useNavigate } from "react-router-dom";
import Header from "../../componentes/Header/Header";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro]= useState("")
  const [booleanErr, setBoleanErr] = useState(false)
  const navigate= useNavigate()

  const enviarDadosApi = async () => {
    try {
      const data = {
        email: email,
        password: senha,
      };

      const result = await axios.post(`${BASE_URL}/user/login`, data);
      console.log(result.data);
      window.localStorage.setItem("token",result.data.token)
      goToFeed(navigate)
      setBoleanErr(false)
    } catch (erro) {

      setErro(erro.response.data.message);
      setBoleanErr(true)
    }
  };

  console.log({ email, senha });

  return (
    <>
    <Header/>
        {booleanErr === true ?  
         <Alert status="error">
        <AlertIcon />
        <AlertTitle>Houve um erro</AlertTitle>
        <AlertDescription>
         {erro}
        </AlertDescription>
      </Alert> : <></>}
    
      <Formulario
        setEmail={setEmail}
        setSenha={setSenha}
        enviarDadosApi={enviarDadosApi}
      />
    </>
  );
}
