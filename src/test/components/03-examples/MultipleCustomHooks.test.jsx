import { renderHook,screen,render,fireEvent } from "@testing-library/react";

import { MultipleCustomHooks } from "../../../components/03-examples/MultipleCustomHooks";
import { useCounter } from "../../../hook/useCounter";
import { useFetch } from "../../../hook/useFetch";

jest.mock("../../../hook/useCounter");
jest.mock("../../../hook/useFetch");

describe('Pruebas sobre MultipleCustomHook',() => {

   
    test('Debe mostrar el componente por defecto',() => {
        const mockIncrement = jest.fn();

        useCounter.mockReturnValue({
           counter:1,
           increment:mockIncrement
        })
       
        useFetch.mockReturnValue({
            data     :null,
            isLoading:true,
            hasError :null
        })
        render(<MultipleCustomHooks/>);
        expect( screen.getAllByText('Loading...') );
        expect( screen.getByText('Breaking Bad Quotes'));
     
        //screen.debug();
    })
    test('Debe mostrar un Quote', () => {
        const mockIncrement = jest.fn();

    useCounter.mockReturnValue({
       counter:1,
       increment:mockIncrement
    })
        useFetch.mockReturnValue({
            data     :[{author:'Gabriel',quote:'hola mundo'}],
            isLoading:false,  
            hasError :null
        })
        render(<MultipleCustomHooks/>);
       expect( screen.getByText('hola mundo')).toBeTruthy();
       expect( screen.getByText('Gabriel') ).toBeTruthy()
       const nextButton = screen.getByRole('button',{name:'Next Quote'});
       //console.log(nextButton.className: 'btn btn-dark',)
        expect( nextButton.className ).toBe('btn btn-dark')
       //const backButton = screen.getByRole('button',{name:'Back Quote'});
         
    })
    test('Debe llamar a la funcion incrementar', () => {
        const mockIncrement = jest.fn();

        useCounter.mockReturnValue({
           counter:1,
           increment:mockIncrement
        })
        useFetch.mockReturnValue({
            data     :[{author:'Gabriel',quote:'hola mundo'}],
            isLoading:false,  
            hasError :null
        })
        render(<MultipleCustomHooks/>);
        const nextButton = screen.getByRole('button',{name:'Next Quote'});
        fireEvent.click( nextButton );

        expect( mockIncrement ).toHaveBeenCalled()
    })
})