/*
    As interfaces TypeScript definem os contratos em seu código.
    Eles também fornecem nomes explícitos para verificação de tipo.
*/

interface IPessoa {
    nome: string,
    idade: number;
    readonly cpf: number; //funciona apenas para leitura
    enabled(): boolean
}

const pessoa: IPessoa = { 
    nome: "Daniel", 
    idade: 39, 
    cpf: 12312312345,
    enabled:() => {
      return true  
    } 
};

class Filipe implements IPessoa {
    nome: string = "Filipe";
    idade: number = 5;
    readonly cpf: number = 32132132154;
    enabled(): boolean {
        return true
    }
};

class Mona implements IPessoa {
    nome: string = "Mona";
    idade: number = 37;
    readonly cpf: number = 13513513524;
    enabled(): boolean {
        return true
    }
}














