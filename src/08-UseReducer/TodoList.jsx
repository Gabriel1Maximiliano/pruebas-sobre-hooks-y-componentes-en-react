import React from 'react'

export const TodoList = ({todo,handleDelete,handleValidate}) => {
  
    
    
    console.log(todo)
    return (
        <>         <p>soy el no querido</p>
            <ul className='list-group' >
                  {
                   todo.map( (t,i)=>(
                    <div key={t.id} >
                    <li className='list-group-item' >
                    <span  className={`align-self-center ${t.done && 'text-decoration-line-through'}`}
                    onClick={()=>handleValidate(t.id)}>Item {i}</span>
                    <p  className={`${t.done && 'text-decoration-line-through'}`}>Tarea por completar: {t.description}</p>
                </li>
                <button className='btn btn-danger mt-2'
                
                onClick={ (e) => handleDelete(t.id)}
                >Borrar</button>
                   </div>)
                   ) 
                }
               

            </ul>
            </>

    )
}
