// Enum: Aglutinador de dados, os dados podem ser
//representados por valores específicos e padronizados
// Possível criar mapas de valores que se repentem muito no código

enum Mes {
    Jan = "Janeiro",
    Fev = "Fevereiro",
    Mar = "Março",
    Abr = "Abril",
}
// console.log(Mes.Abr);

const pessoa: { nome: string, mesAniversario: string} = {
    nome: "Daniel",
    mesAniversario: Mes.Abr,
};

if(pessoa.mesAniversario === Mes.Abr){

    console.log(pessoa)
}

