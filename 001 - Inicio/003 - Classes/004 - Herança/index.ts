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

    private profissao: string = "Programador";

    constructor(){
        super("Daniel", 39);
    }

    public getprofissao() {
        return `${this.nome} trabalha como ${this.profissao}`;
    }
}
// class Mona extends Pessoa{
//     constructor(){
//         super("Mona", 37);
//     }
// }
// super é usado no constructor para não dar erro

const daniel = new Daniel();
console.log(daniel.getprofissao());
// const mona = new Mona();

// console.log(mona.nome);
// console.log(mona.idade);
// console.log(mona.comer("Gyros"));
// console.log(mona.fezAniversario());







