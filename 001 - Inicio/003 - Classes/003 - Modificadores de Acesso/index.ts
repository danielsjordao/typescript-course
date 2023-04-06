/*
    Public: Pode ser acessado tanto pela mesma classe,
            Classes Filhas e outras classe.
    ***************************************************************
    Protected: Pode ser acessado pela mesma clase e classes filhas,
               não podem ser acessados por outras classes.
    ***************************************************************
    Private: Pode ser acesssado somente pela própria classe.
    Qdo identificar um método private _profissao: string = "programador"
    contendo private e "_" é um método utilizado para falar que é privado                     
*/
// ( public ( protected ( private )))

class Pessoa{
    public nome: string = "";
    public idade: number = 0;

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

const pessoa = new Pessoa ("Daniel", 39);




