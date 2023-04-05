// Enum: Aglutinador de dados, os dados podem ser
//representados por valores específicos e padronizados
// Possível criar mapas de valores que se repentem muito no código
var Mes;
(function (Mes) {
    Mes["Jan"] = "Janeiro";
    Mes["Fev"] = "Fevereiro";
    Mes["Mar"] = "Mar\u00E7o";
    Mes["Abr"] = "Abril";
})(Mes || (Mes = {}));
// console.log(Mes.Abr);
var pessoa = {
    nome: "Daniel",
    mesAniversario: Mes.Abr,
};
if (pessoa.mesAniversario === Mes.Abr) {
    console.log(pessoa);
}
