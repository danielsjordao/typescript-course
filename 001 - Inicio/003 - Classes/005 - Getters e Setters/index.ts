/*
    Getters e Setters são usados para proteger seus dados,
    especialmente na criação de classes;
    
    Para cada instância da variável, um método getter retorna seu valor,
    enquando um método setter defineou atualiza.
*/


class Pessoa{
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
}

class Daniel extends Pessoa{

    private _profissao: string = "Programador";

    constructor(){
        super("Daniel", 39);
    }

    get profissao () {
        if (this._profissao === "Chef de Cozinha"){
            return `Ele não é mais um desempregado, mudou para ${this._profissao}`;
        }
        // Função
        // Validar se contém @ / caracteres especiais
        return this._profissao;
    }

    set profissao(valor: string){
        this._profissao = valor
        // settters não podem retornar um valor "return"
        
    }

}

const daniel = new Daniel();
console.log(daniel.profissao);
daniel.profissao = "Chef de Cozinha";
console.log(daniel.profissao);









