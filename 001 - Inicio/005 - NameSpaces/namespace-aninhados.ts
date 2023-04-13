/*
    Os namespaces são uma forma específica do TypeScript para organizar código.
    Namespaces são simplesmente objetos JavaScript nomeados no namespace global.
    Isso torna os namespaces uma construção muito simples de usar.
    NameSpace torna um escopo global
*/

export namespace Pessoa{
    export namespace Mona{
        export const data = 2023 - 1986;

        export let nome = "Mona";
        export const calc = () => {
            return data;
        };
    }
    export namespace Daniel{
        export const data = 2023 - 1983;

        export let nome = "Daniel";
        export const calc = () => {
            return data;
        };
    }
}

console.log(Pessoa.Mona.nome)
console.log(Pessoa.Mona.data)
console.log(Pessoa.Daniel.nome)
console.log(Pessoa.Daniel.data)