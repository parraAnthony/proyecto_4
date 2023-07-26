import 'boxicons'
const userInfo =({dataUsers, removeUser, editUser})=>{
    return (
        <>
            <div className="users__container">
                <h1>Lista de usuarios</h1>
                <div className='container__cards'>
                    {dataUsers.map(print=>(
                        <div key={print.id} className='user__container'>
                            <p>{print.first_name} {print.last_name}</p>
                            <div className='email'>
                                <p><box-icon type='logo' name='gmail'></box-icon></p>
                                <p>{print.email}</p>
                            </div>
                            <p>Fecha de nacimiento</p>
                            <p>{print.birthday}</p>
                            <div className='button__container'>
                                <button onClick={()=>removeUser(print)}><box-icon name='trash'></box-icon></button>
                                <button onClick={()=>editUser(print)}><box-icon name='edit-alt'></box-icon></button>
                            </div>
                            
                        </div>
                    ))
                    }   
                </div>
      
            </div>
        </>

       
    )
}
export default userInfo