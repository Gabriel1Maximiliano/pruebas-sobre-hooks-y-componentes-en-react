import { useReducer } from "react"
import { todoReducer } from "../../08-UseReducer/todoReducer"

describe('Pruebas sobre el useReducer', () => {
    const initialState = [{
        id: '1234',
        description: 'hola',
        done: false
    }]
    test('Debe regresar el estado inicial ', () => {
        const newState = todoReducer(initialState, {});

        expect(newState).toBe(initialState)
    })
    test('Debe agregar un todo', () => {
        const action = {
            type: 'ADD_TO_DO',
            payload: {
                id: '123',
                description: 'Aprender React',
                done: false
            }
        }
        let newState = todoReducer(initialState, action);

        expect(newState.length).toBe(2);
        expect(newState).toContain(action.payload)
    })
    it('Debe eliminar TODO', () => {
        const action = {
            type: 'DELETE_TASK',
            payload: '1234'
        }

        let newState = todoReducer(initialState, action);
        expect(newState.length).toBe(0)
    })
    it('De probar el toogle', () => {
        const action ={
            type   : 'VALIDATE_TASK',
            payload:'1234'
        }
        let newState = todoReducer(initialState, action);

        expect(newState).toEqual([{ id: '1234',
        description: 'hola',
        done: true}]);

        expect(newState[0].done).toBe(true)
    })
})