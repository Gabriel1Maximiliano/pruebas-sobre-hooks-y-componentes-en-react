import { renderHook } from "@testing-library/react"
import { act } from "react-dom/test-utils";
import { useCounter } from "../../hook/useCounter"

describe('pruebas en el useCounter', () => {
    // aca uso rnder hook para visualizar el HOOK
    const { result } = renderHook(() => useCounter());
    // resul es un objeto que tiene la propiedad current en donde se hace destructuracion
    const { counter,increment,decrement,reset } = result.current;

    test('Debe retornar el valor de counter de su useCounter', () => {
        expect( counter ).toBe(1);
    })
    test('Debe probar la funcion "increment"',() => {

        expect( increment ).toStrictEqual( expect.any(Function) );
        
    })-
    test('Debe probar la funcion decrement de useCounter',() => {
        expect( decrement ).toStrictEqual( expect.any(Function));
    })
    test('Debe probar el "reset" de useCounter',() => {
        expect( reset ).toStrictEqual( expect.any(Function) )
    })
    test('Debe retornar el valor de 100 en el counter',() => {
        const {result}=renderHook( () => useCounter(100));
         
        const {counter}=result.current;
        expect( counter ).toBe(100)
    })
    test('Debe incrementar el contador ',() => {
        const { result } = renderHook(() => useCounter());
        const{counter,increment} = result.current;
        act( () => {

            increment();
        } )
        expect( result.current.counter ).toBe(2)
    })
    test('Debe decrementar el contador ',() => {
        const { result } = renderHook(() => useCounter(10));
        const{counter,decrement} = result.current;
        act( () => {

            decrement(2);
        } )
        expect( result.current.counter ).toBe(8)
    })
    test('Debe resetaer el contador ',() => {
        const { result } = renderHook(() => useCounter());
        const{counter,reset,decrement} = result.current;
        act( () => {
            decrement(1)
            reset();
        } )
        expect( counter ).toBe(1)
    })
})