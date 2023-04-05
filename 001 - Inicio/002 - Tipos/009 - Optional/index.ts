// ? Optional
const fn = (nome: string, idade ?: number) => {
    if (!idade){
        return `nome: ${nome}, idade: sem valor definido`;        
    }

    return `nome: ${nome}, idade: ${idade}`;
}

console.log(fn("Daniel", 39));
console.log(fn("Daniel"));

const pessoa: { nome: string; idade?: number} =
{nome: "Daniel", idade: 39}



