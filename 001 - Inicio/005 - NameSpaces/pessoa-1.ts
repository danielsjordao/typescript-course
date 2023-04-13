/*
    Os namespaces são uma forma específica do TypeScript para organizar código.
    Namespaces são simplesmente objetos JavaScript nomeados no namespace global.
    Isso torna os namespaces uma construção muito simples de usar.
    NameSpace torna um escopo global
*/

export namespace Pessoa1 {
    const data = 2023 - 1983;

    export let nome = "Daniel";
    export const calc = () => {
        return data;
    }
}

console.log(Pessoa1.nome);
console.log(Pessoa1.calc());

