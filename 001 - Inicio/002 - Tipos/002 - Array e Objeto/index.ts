let array1: [string, string, number, boolean] = ["Daniel", "Jordão", 1504, true]; //array limitado
let array2: Array<string | number | boolean> = ['Daniel', "da Silva", "Jordão", 1504, true];//array cheio de strings (|"ou")

console.log(array1);
console.log(array2);

let obj1: {nome: string, sobrenome: string, idade: number, deuCerto: boolean} = 
{nome: "Filipe", 
sobrenome: "Jordão",
idade: 5,
deuCerto: true
};

let obj2: Array<{nome: string, sobrenome: string, idade: number, deuCerto: boolean}> = 
[
    {   nome: "Filipe", 
        sobrenome: "Jordão",
        idade: 5,
        deuCerto: true
    },
    {   nome: "Filipe2", 
        sobrenome: "Jordão",
        idade: 6,
        deuCerto: false,
    }
];
console.log(obj1);
console.log(obj2);