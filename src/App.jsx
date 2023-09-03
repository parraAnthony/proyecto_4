import { useEffect, useState } from 'react'
import './App.css'
import Form from './Components/Form'
import UserInfo from './Components/userInfo'
import axios from 'axios'

function App() {
  const [users, setUsers] = useState([])
  const [fillForm, setFillForm] = useState(null)
  useEffect(()=>{
   getAllUsers()
  },[])
  const getAllUsers =()=>{
     axios
      .get("https://users-crud-so5y.onrender.com/users")
      .then(resp=>setUsers(resp.data))
      .catch(error=>console.error(error))
  }
  const newUser=(data)=>{ 
    if (fillForm){
      axios
        .put(`https://users-crud-so5y.onrender.com/users/${fillForm.id}`, data )
        .then(()=>setFillForm(null),getAllUsers())
        .catch(error=>console.error(error))
        .finally(()=>getAllUsers())
    }else{
      axios
        .post('https://users-crud-so5y.onrender.com/users',data)
        .then(()=>getAllUsers())
        .catch(error=>console.error(error)) 
    }
 
  }
  const deleteUser =(data)=>{
    axios
      .delete(`https://users-crud-so5y.onrender.com/users/${data.id}`)
      .then(()=>getAllUsers())
      .catch(error=>console.error(error))
  }
  const modifyUser=(data)=>{
    setFillForm(data)
  }
  
  return (
    <>
      <Form  addUser={newUser} editUser={fillForm}/>
      <UserInfo dataUsers={users} removeUser={deleteUser} editUser={modifyUser}/>
    </>
  )
}

export default App
