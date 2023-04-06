/* Uma classe TypeScript é uma estrutura de programação orientada à objetos
   que possui um conjunto de propriedades e métodos.
   
   A classe é um modelo para criar objetos, permitindo que você defina
   uma estrutura com propriedades e comportamentos.
   
   this sempre vai chamar um atributo, ou uma propriedade, ou um método
*/

class Pessoa{
    nome: string = "";
    idade: number = 0;

    constructor(nome: string, idade: number){
        this.nome = nome;
        this.idade = idade;
    }

    comer(comida: string) {
        return `O ${this.nome} comeu ${comida}`;
    }

    fezAniversario (){
        return `O ${this.nome} vai fazer ${++this.idade} anos de idade`;
    }
}

const pessoa1 = new Pessoa ("Daniel Jordão", 39);
console.log(pessoa1.comer("Hamburguer"));
console.log(pessoa1.fezAniversario());

const pessoa2 = new Pessoa ("Filipe Jordão", 5);
console.log(pessoa2.comer("Feijoada"));
console.log(pessoa2.fezAniversario());


