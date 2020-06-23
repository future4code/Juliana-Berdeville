import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";


describe("Testes realizados no código do exercício de hoje", () => {
/*Teste proposto pelo exercício 1*/
    test ("Testa se quando o usuário digita algo no input e clica em 'Adicionar', um post é criado.", () =>{
            const {getByPlaceholderText} = render(<App/>)
            const input = getByPlaceholderText("Novo post")
            expect(input).toBeInTheDocument()

    })
/*Teste proposto pelo exercício 1*/
})


