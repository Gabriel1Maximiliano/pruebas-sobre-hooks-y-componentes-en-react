import { HomePage } from "../../useContex/HomePage";
import { render, screen,fireEvent } from "@testing-library/react";
import  {LoggingPage}  from "../../useContex/LoggingPage";
import { UserContext } from "../../useContex/context/UserContext";


 
describe('Pruebas sobre LoginPage', () => { 
    test('Debe mostrar el componente sin el usuario', () => { 

        render( 
            <UserContext.Provider value={{ user: null }}>
               <LoggingPage />
            </UserContext.Provider>
        );

       const preTag= screen.getByLabelText('pre')

       expect( preTag.innerHTML ).toBe('null')


     })
     test('Debe mostrar el componente con el usuario', () => { 
        const mockFunction = jest.fn()
        render( 
            <UserContext.Provider value={{ user: null, setUser:mockFunction }}>
               <LoggingPage />
            </UserContext.Provider>
        );

       const button = screen.getByRole('button');
       fireEvent.click( button );

       expect( mockFunction ).toHaveBeenCalled();
       expect( mockFunction ).toHaveBeenCalledWith({"email": "maximiliano@hotmail.com", "id": "1234", "name": "gabriel"})

    })

 
 
 
 
 
 
 
    })