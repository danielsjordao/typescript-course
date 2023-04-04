// TypeScript
//instalar na pasta raíz do projeto
// npm install -g typescript
// tsc --init

//Plugin: Code Runner
//npm i -g ts-node
//ctrl + alt + n

console.log("npm install -g typescript");

const pedido = (pedido: string) => {
    return `Deu certo o seu pedido ${pedido}`;
};

console.log(pedido('123'));