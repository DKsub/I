const ListaNome = document.querySelector("#nome")
const PessoaTarefa = document.querySelector("#nome01")
const BtnLista =document.querySelector("#btnADD")
const DivLista = document.querySelector("#listaTarefas")

const tarefas = []

class Lista{
    constructor(nome, nomeTarefa){
        this.nome = nome
        this.nomeTarefa = nomeTarefa
       
    }
}
const addItem = (lista)=>{
    tarefas.push(lista)

    listItens()
}
const listItens = () => {

    DivLista.innerHTML = ""

    tarefas.map((elem, i)=>{
    
        const Divlista = document.createElement("div")
        Divlista.setAttribute("class", "itemLista")

        Divlista.innerHTML = `${i + 1} - ${elem.nome} R$ ${elem.nomeTarefa}`

        const imgRemover = document.createElement("img")
        imgRemover.setAttribute("src", "imagens/remover.png")
        imgRemover.setAttribute("title",`Remover ${elem.nomeTarefa}`)

        imgRemover.addEventListener("click", (evt) =>{
            if(confirm(`TEM CERTEZA QUE DESEJA REMOVER ${elem.nomeTarefa}?`)){
                removeItem(evt)
                listItens()
            }
        })
         Divlista.appendChild(imgRemover)

         DivLista.appendChild(Divlista)
    })

}

const removeItem = (posicao)=>{
    tarefas.splice(posicao,1)
}



BtnLista.addEventListener("click", () =>{
    const nometarefa = ListaNome.value
    const nomePessoa = PessoaTarefa.value
    

    const objItem = new Lista(nomePessoa, nometarefa)

    addItem(objItem)

    ListaNome.value = ""
    PessoaTarefa.value = ""

})