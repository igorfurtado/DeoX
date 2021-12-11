function random() {
    let number = parseInt(Math.random() * 10000);
    return number;
};

const doubtsItems = [{
    title: "Quanto custa ter uma conta Deo X?",
    description: "Abrir e manter uma conta na Deo X não tem custos.",
    open: false,
    id: random()
},
{
    title: "Qual a taxa de transferência de dinheiro para outros bancos?",
    description: "Não há custo para realização de operações de TED, DOC ou Pix.",
    open: false,
    id: random()
},
{
    title: "O Deo X tem agência física?",
    description: "Não. O Deo X é um banco 100% digital.",
    open: false,
    id: random()
},
{
    title: "É possível abrir uma conta conjunta?",
    description: "Sim, é possível abrir uma conta na modalidade conjunta.",
    open: false,
    id: random()
}
]

export default doubtsItems;