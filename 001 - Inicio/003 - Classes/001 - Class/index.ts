/* Uma classe TypeScript é uma estrutura de programação orientada à objetos
   que possui um conjunto de propriedades e métodos.
   
   A classe é um modelo para criar objetos, permitindo que você defina
   uma estrutura com propriedades e comportamentos. 
*/

class Pessoa{
    nome: string = "";
    idade: number = 0;

    constructor(nome: string, idade: number){
        this.nome = nome;
        this.idade = idade;
    }
}

const pessoa1 = new Pessoa("Daniel Jordão", 39);
const pessoa2 = new Pessoa("Filipe Jordão", 5);

console.log(pessoa1.nome);
console.log(pessoa1.idade);

console.log(pessoa2.nome);
console.log(pessoa2.idade);



