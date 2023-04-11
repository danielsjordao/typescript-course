/*
    A palavra chave "Static" define um método estático para a classe.
    Métodos estáticos não são chamados nas instâncias de classes.
    Em vez disso, eles são chamados na própria classe.
    Geralmente, são funções utilitárias, como funções para criar ou
    clonar objetos.
*/

class Utils{
    static cloneObject(object: Array<{}>) {
        return JSON.parse(JSON.stringify(Object.assign(object)));
        //deep clone

    }
}

// const utils = new Utils() 
//utilizando o static não é mais necessário, é preciso inserir o 
// nome da classe no console.log

const tenis1: { tamanho: number, estoque: boolean } = {
    tamanho: 41,
    estoque: true
}

const tenis2: { tamanho: number, estoque: boolean } = {
    tamanho: 41,
    estoque: true
}

console.log(Utils.cloneObject([tenis1, tenis2]));














