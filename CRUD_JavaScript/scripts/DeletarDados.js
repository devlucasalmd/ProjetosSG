//função para deletar dados através do indice recebido 
function DeletarDados(index){
    //splice remove o indice recebido
    listaDados.splice(index, 1)
    //Chama a função gerarTabela para modificar na tela
    gerarTabela(listaDados)
}