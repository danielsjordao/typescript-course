/*
    Os namespaces são uma forma específica do TypeScript para organizar código.
    Namespaces são simplesmente objetos JavaScript nomeados no namespace global.
    Isso torna os namespaces uma construção muito simples de usar.
    NameSpace torna um escopo global
*/

import {Pessoa1, Pessoa} from "./module"

console.log(Pessoa1.nome);
console.log(Pessoa1.calc());

console.log(Pessoa.Mona.nome)
console.log(Pessoa.Daniel.nome)
