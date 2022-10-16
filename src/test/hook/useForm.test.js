import { UseForm } from "../../hook/UseForm"
import { renderHook } from "@testing-library/react"
import { act } from "react-dom/test-utils";
describe('Pruebas sobre useForm',() => {

    const initialForm = {
        name:'Gabriel',
        email:'gabi@hotmail.com'
    }

    test('Evaluando el return del useform()', () => {
        const {result} =renderHook(()=>UseForm(initialForm));

        expect(result.current).toEqual( {
            name:initialForm.name,
            email:initialForm.email,
            input: { name: 'Gabriel', email: 'gabi@hotmail.com' },      
            handleInputChange:expect.any(Function),
            handleReset:expect.any(Function)
          })
    })
    test('debe cambiar el name del input',() => {
       
        const {result}= renderHook( () => UseForm() );
        let newName  = 'Pepito'
        const {handleInputChange,input} = result.current;
        act( () => {
            handleInputChange({target:{name:'name',value:newName}});
        } )
      
        expect(result.current.input.name).toBe(newName)
    })
    test('debe resetear el formulario',() => {
       
        const {result}= renderHook( () => UseForm(initialForm) );
        let newName  = 'Pepito'
        const {handleInputChange,input,handleReset} = result.current;
        act( () => {
            handleInputChange({target:{name:'name',value:newName}});
              handleReset()
        } )
        
        expect(result.current.input.name).toBe(initialForm.name);
    })
})