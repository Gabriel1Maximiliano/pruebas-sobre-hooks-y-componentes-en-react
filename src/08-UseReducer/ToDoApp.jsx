
import React from 'react'
import { useTodos } from '../hook/useTodos'
import { ToDoAdd } from './ToDoAdd'
import { TodoList } from './TodoList'


const initialSate = [
    {
        id: new Date().getTime(),
        description: 'eliminar a las Malditas feminazis',
        done: false
    },
    {
        id: new Date().getTime() * 2,
        description: 'Matar a Thanos',
        done: false
    }, {
        id: new Date().getTime() * 3,
        description: 'Buscar la gema del alma',
        done: false
    }
]

export const ToDoApp = () => {

    const { 
        handleAddToDo,
        handleDelete,
        handleValidate,
        todosCount,
        pendingTodos,
        todo
    } = useTodos()
 
    return (
        <>
            <h1>To Do app</h1>
            <p> Tareas por hacer : {pendingTodos()}</p>
            <p> Tareas completadas: {todosCount()}</p>
            <hr></hr>
            <div className='row' >
                <div className='col-7' >
                    <TodoList  todo={todo} handleDelete={(id)=>handleDelete(id)} handleValidate={handleValidate}/>
                </div>  
            </div>

            <div className='col-5' >
                <h4>Agregar TODO</h4>
                <hr></hr>
              <ToDoAdd  handleAddToDo={handleAddToDo} />
            </div>
        </>
    )
}
