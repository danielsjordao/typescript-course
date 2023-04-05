// Utilizado quando temos erro ou caso tenhamos um retorno infinito looping constante

const error =(): never => {
    throw new Error ("Algo deu errado")
};

const loop = (): never => {
    while(true) {
        console.log("Olá");
    }
};

// loop(); // vai dar um loop infinito, para não dar pau exclua.

const validate = (value: any) => {
    if(typeof value === "string"){
        return console.log ("É uma string");
    } else if (typeof value === "number"){
        return console.log ("É um number");
    }

    console.log(error());
};

validate({ nome: "Daniel" });