import axios from "axios";
import FormAddReceita from "../../componentes/formulario/FormAddReceita";
import useForm from "../../hook/useForm";
import {BASE_URL} from "../../constantes/baseUrl"
import Header from "../../componentes/Header/Header";

export default function AddReceita (){

    const data={
        title:"",
        description:"",
        imageUrl:""
    }

    const {form, onChange , setForm}= useForm(data)

    const requisicao= async () =>{
     
         try{
            await axios.post(`${BASE_URL}/recipe` , form, {
                headers:{
                    Authorization: localStorage.getItem("token")
                }
            })
            setForm({
                title:"",
                description:"",
                imageUrl:""
            })
            alert("receita criada com sucesso!")

         } catch (erro){
            console.log(erro.response.data.message)

         }
    }

    console.log(form)


    return(
        <>
  
    <FormAddReceita form={form} onChange={onChange} requisicao={requisicao}/>
        </>
    )
}