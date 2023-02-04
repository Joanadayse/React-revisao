import axios from "axios";
import FormularioCad from "../../componentes/formulario/FormularioCad";
import useForm from "../../hook/useForm";
import {BASE_URL} from "../../constantes/baseUrl";
import { goToFeed } from "../../router/coordinator";
import { useNavigate } from "react-router-dom";
import Header from "../../componentes/Header/Header";

export default function Cadastro() {
  const navigate = useNavigate();

  // estado inicial
  const data = {
    name: "",
    email: "",
    password: "",
  };

  // data com os dados preenchidos e passado como estado inicial no useForm , e la setado no estado
  const { form, onChange } = useForm(data);

//   console.log("formulario objeto", form);

  const cadastrarApi = async () => {
    try {
      const result = await axios.post(`${BASE_URL}/user/signup`, form);
   
      console.log(result.data);
      window.localStorage.setItem("token",result.data.token)
      goToFeed(navigate);
    }  catch (erro) {

        console.log(erro.response.data.message);
        
      }
  
  };

  return (
    <>
    <Header/>
    <div>
      <FormularioCad
        form={form}
        onChange={onChange}
        cadastrarApi={cadastrarApi}
      />
      </div>
    </>
  );
}
