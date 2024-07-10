//bibliotecas e códigos de terceiros
const formatador = (data) => {
    // console.log(dayjs(data).format('hh:mm'))

    return {
        dia:dayjs(data).format('dddd')
    }
}

// formatador(new Date('2024-02-15'))

//object {}
const atividade = {
    nome: "Almoço",
    data: new Date("2024-07-08 13:00"),
    finalizada: true
}

//list, array, vetor[a, b, c]
let atividades = [
    atividade,
    {
        nome: 'Academia em grupo',
        data :new Date('2027-07-09 12:00'),
        finalizada: false
    },
    {
        nome: 'Gamming session',
        data :new Date('2027-07-09 16:00'),
        finalizada: true
    }
]

// atividades = []

//arrow function
const criarItemDeAtividade = (atividade) => {
    let input = '<input type="checkbox" '

    if(atividade.finalizada) {
        input += 'checked'
    }

    input += '>' 

    const formatar = formatador(atividade.data);

return `
<div>
    ${input}
    <span>${atividade.nome}</span>
    <time>${formatar.dia}</time>
</div>
`
}

const atualizarListaDeAtividades = () => {
    const section = document.querySelector('section')

    //verificar se a lista está vazia
    if(atividades.length == 0) {
        section.innerHTML = `<p>Nenhuma atividade cadastrada.</p>`
        return
    }

    for(let atividade of atividades) {
        section.innerHTML += criarItemDeAtividade(atividade)
    }

}

atualizarListaDeAtividades()