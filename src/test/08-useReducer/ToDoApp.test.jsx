import { render, screen } from "@testing-library/react";
import { ToDoApp } from "../../08-UseReducer/ToDoApp";
import { useTodos } from "../../hook/useTodos";


//jest.mock("../../hook/useTodos");

describe('Probando <ToDOApp></ToDOApp>', () => { 

//    useTodos.mockReturnValue({
//     handleAddToDo:jest.fn(),
//     handleDelete:jest.fn(),
//     handleValidate:jest.fn(),
//     todosCount:jest.fn(),
//     pendingTodos:1,
//     todo:[
//         {
//             id:1,
//             description: 'eliminar a las Malditas feminazis',
//             done: false
//         },
//         {
//             id:2,
//             description: 'Matar a Thanos',
//             done: false
//         }, {
//             id:3,
//             description: 'Buscar la gema del alma',
//             done: false
//         }
//     ]
//    })
    test('Debe renderizar el componente', () => { 
         render(<ToDoApp />);
     })
})