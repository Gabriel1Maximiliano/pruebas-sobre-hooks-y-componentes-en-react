import { render, screen } from "@testing-library/react";
import { UserContext } from "../../useContex/context/UserContext";
import { HomePage } from "../../useContex/HomePage";


describe('Pruebas sobre <HomePage>', () => {
const user ={
    id:1,
    name:'Gabriel'
}

    test('Debe renderizar el componente', () => { 
        render( 
            <UserContext.Provider value={{ user: null }}>
                <HomePage /> 
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre')//usamos el aria-label
        //screen.debug()
        expect(preTag.innerHTML).toBe('null')
     });

     test('dEBE mostrar el componente con el nombre ', () => { 
        render( 
            <UserContext.Provider value={{ user}}>
                <HomePage /> 
            </UserContext.Provider>
        );
        const preTag = screen.getByLabelText('pre');

 expect(preTag.innerHTML).toContain(user.name)
 expect(preTag.innerHTML).toContain(user.id.toString())
      })











    });