import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { MainApp } from '../../useContex/MainApp'


describe('pruebas sobre <MainApp />', () => {
    test('debe mostrar el HOmePage', () => {
        render(
            <MemoryRouter>

                <MainApp />
            </MemoryRouter>
        );
  //screen.debug()
        expect(screen.getByText('Home')).toBeTruthy()
    });
    test('debe mostrar el login', () => {
        render(
            <MemoryRouter initialEntries={['/login']} >

                <MainApp />
            </MemoryRouter>
        );
  //screen.debug()
        expect(screen.getByText('LoggingPage')).toBeTruthy()
    });
})