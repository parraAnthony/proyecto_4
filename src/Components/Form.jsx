import { useEffect } from 'react'
import {useForm} from 'react-hook-form'
const Form =({addUser, editUser})=>{
    const {register,handleSubmit,reset} = useForm()
    useEffect(()=>{
        if(editUser){
            reset(editUser)
        }
    },[editUser])
    const submit =(data)=>{
        addUser(data)
        reset({
            first_name:"",
            last_name:"",
            email:"",
            password:"",
            birthday:""
        })
    }
    return (
        <div className="form__container">
            <h2>Ingrese un usuario</h2>
            <form onSubmit={ handleSubmit(submit) }>
                <label htmlFor="name">Nombre</label>
                <input 
                    name="name"
                    type="text" 
                    id="name" 
                    placeholder="Nombre"
                    {...register("first_name", {required: true})}
                />

                <label htmlFor="lastName">Apellido</label>
                <input 
                    type="text" 
                    id="lastName" 
                    placeholder="Apellido" 
                    {...register("last_name", {required: true})}
                />

                <label htmlFor="email">Correo</label>
                <input 
                    type="email" 
                    id="email" 
                    placeholder="Example@Example.com" 
                    {...register("email", {required: true})}
                />
                
                <label htmlFor="password">Contraseña</label>
                <input 
                    type="password"  
                    id="password" 
                    placeholder="password" 
                    {...register("password", {required: true})}
                />
                
                <label htmlFor="birthday">Fecha de nacimiento</label>
                <input  
                    name="birthday"
                    id="birthday" 
                    type="date"
                    {...register("birthday", {required: true})}
                />
                <button>Agregar</button>
            </form>
        </div>
       
    )
       
}
export default Form;