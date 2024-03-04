function InserirDados(){
    // Se Edit == true, chama a função EditarDados
    if(Edit){
        EditarDados()
        return //Encerra a execução da função
    }

    //Cria as variveis para guardar a informação inseridas
    const nome = document.querySelector("#name");
    const email = document.querySelector("#email");
    
    //cria um objeto com as variaveis
    const data = {nome: nome.value, email: email.value};
    nome.value = '';
    email.value = '';
    
    //inseri na lista o objeto criado
    listaDados.push(data);
    
    //chama a função gerarTabela do script MostrarDados para mostrar na pagina
    gerarTabela(listaDados);
}