//armazena a tag tbody 
const tbody = document.getElementById("tbody")

function gerarTabela(listaDados){

    //função criarLinhas para criar e depois passar pra função gerarTabela, pois depois que executa o return, a função se encerra
    function criarLinhas(){
        return listaDados.map((item, index) => `
        <tr>
            <!-- +1 para o ID não começar com 0 -->
            <td>${index + 1}</td>
            <td>${item.nome}</td>
            <td>${item.email}</td>
            <td>
                <!-- Ao clicar no botão de Deletar chama a função DeletarDados passando o indice do objeto que quer deletar-->
                <button onclick="DeletarDados('${index}')">Deletar</button>
                <!-- Ao clicar no botão de Editar chama a função EditarForm do script EditarDados passando o indice do objeto que quer editar -->
                <button onclick="EditarForm('${index}')">Editar</button>
            </td>
        </tr>
        `).join(''); //join necessario para juntar as linhas do map e não ficarem uma ao lado da outra
    }
    const html = criarLinhas()
    tbody.innerHTML = html;
}
