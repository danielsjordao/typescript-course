/*
Classes, métodos e campos no TypeScript podem ser abstratos.

Um método abstrato ou campo é aquele que não teve uma
implementação fornecida.

O papel das classes abstratas é servir como uma classe base para
subclasses que implementam todos os membros abstratos.

Quando uma classe não possui membros abstratos, ele é chamado de concreto.
*/


abstract class Pessoa{
    protected nome: string = "";
    protected idade: number = 0;

    constructor(nome: string, idade: number){
        this.nome = nome;
        this.idade = idade;
    }

    public comer(comida: string) {
        return `O ${this.nome} comeu ${comida}`;
    }

    public fezAniversario (){
        return `O ${this.nome} vai fazer ${++this.idade} anos de idade`;
    }

    protected abstract profissao: string;
    public abstract qualSuaProfissao(): string;
    public abstract qualSeuSalario(salario: number): number;
}

class Maria extends Pessoa{
    protected profissao: string = "Tributarista";
    constructor(){
        super ("Maria", 37);
    }

    public qualSuaProfissao(): string {
        // validações
        return `Sua profissão é ${this.profissao}`;
    }

    public qualSeuSalario(salario: number): number {
        // validações
        return salario;
    }
}
class Daniel extends Pessoa{

    protected profissao: string = "Tributarista";

    constructor(){
        super("Daniel", 39);
    }

    public qualSuaProfissao(): string {
        return `Sua profissão é ${this.profissao}`;
    }

    public qualSeuSalario(salario: number): number {
        // validações
        return salario;
    }

    // get profissao () {
    //     if (this._profissao === "Chef de Cozinha"){
    //         return `Ele não é mais um desempregado, mudou para ${this._profissao}`;
    //     }
    //     // Função
    //     // Validar se contém @ / caracteres especiais
    //     return this._profissao;
    // }

    // set profissao(valor: string){
    //     this._profissao = valor
    //     // settters não podem retornar um valor "return"
        
    // }

}

const daniel = new Daniel();
const maria = new Maria();













