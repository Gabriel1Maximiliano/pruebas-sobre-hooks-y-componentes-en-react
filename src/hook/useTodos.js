import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-UseReducer/todoReducer";



const init = () =>{
    return JSON.parse(localStorage.getItem('todo'))|| []
}
export const useTodos = () => {

    const [todo, dispatch] = useReducer(todoReducer,[],init);

    useEffect(() => {
      localStorage.setItem('todo', JSON.stringify(todo))
    
      
    }, [todo])
    

    const handleValidate = (value) => {
        console.log(value)
        const validateTask = {
            type:'VALIDATE_TASK',
            payload: value
        }
        dispatch(validateTask)
    }
 console.log(todo);
    const handleAddToDo = (v) => {
      const newTask = {
        type:'ADD_TO_DO',
        payload: v
      }
      dispatch(newTask)
      
    }

    const handleDelete = (id) => {
        console.log('entre a delte')
        console.log(id)
         const deleteTask = {
             type: 'DELETE_TASK',
             payload: id
         }
         dispatch( deleteTask )
        }

        const todosCount = () => {
            return todo.length
        }
        const pendingTodos = () => {
            return (todo.filter(task => task.done === false)).length
        }
        return{
            todo,
            handleAddToDo,
            handleDelete,
            handleValidate,
            todosCount,
            pendingTodos
        }
}
