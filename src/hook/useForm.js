import { useState } from "react";

export default function useForm(inicialState){
    const [form, setForm]= useState(inicialState)

    const onChange=(event)=>{
        const name= event.target.name
        const value= event.target.value
        setForm({...form, [name]:value})
    }
    return {form , onChange , setForm}

}