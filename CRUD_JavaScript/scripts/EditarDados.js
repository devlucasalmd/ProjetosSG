//Função para mostrar no formulario do html as informações do objeto que o usuario quer editar
function EditarForm(index){
    //armazena o objeto passado através do indice
    obj = listaDados[index]

    //mostra no formulario as informações do objeto que o usuario quer editar
    document.getElementById('name').value = obj.nome; 
    document.getElementById('email').value = obj.email; 
    
    //Edit passa a ser true
    Edit = true
    //guarda a posição do indice passado para ser editado
    posicao = index
}

//Funcção que edita o objeto dentro da lista
function EditarDados(){
    //variaveis que armazena os novos valores
    var novoNome = document.getElementById('name').value
    var novoEmail = document.getElementById('email').value 
    //lista nova, com os novos objetos
    listaDados[posicao] = {...obj, nome: novoNome, email: novoEmail}
    //Edit volta ao estado padrão
    Edit = false
    //Chama a função gerarTabela para modificar na tela
    gerarTabela(listaDados)
}