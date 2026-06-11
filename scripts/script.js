function mostrarDadosForm(event){
    event.preventDefault();
    
    let nome = document.getElementById("nome").value; //Se é byId vc coloca o id, se for byname coloca o name, e o value é para o input
    let email = document.getElementById("email").value;
    
    let DtNascimento = document.getElementById("dtNascimento").value;
    //configurando data de nascimento para o padrão brasileira
    
    let partes = DtNascimento.split("-");
    let data = new Date(partes[0],partes[1]-1,partes[2]);
    //converte para estrura de data br, dia, mês e ano
    let dataFormatada = data.toLocaleDateString("pt-BR")
    
    let mensagem = document.getElementById("mensagem").value;
    //let motivo = document.getElementById("slMotivo").value;//serviços n aparece com ç em baixo, pq o option tá puxando o value
    let motivo = document.getElementById("motivo");
    let motivoSelecionado = motivo.options[motivo.selectedIndex].text;
    let retorno = "Olá, " + nome + ", confira os dados informados:";
    let msgAlerta = `Olá, ${nome} dados enviados com sucesso!`;
    alert(nome + ", dados enviados!");
    alert(mensagem);

    //insere a mensagem no h2
    document.getElementById("resposta").innerText=retorno;
    document.getElementById("pNome").innerText="Nome: " + nome;
    document.getElementById("pEmail").innerText="Email: " + email;
    document.getElementById("pData").innerText="Data de nascimento: " + dataFormatada;
    document.getElementById("pMensagem").innerText="Mensagem: " + mensagem;
    document.getElementById("pMotivo").innerText="Motivo: " + motivoSelecionado;
    //O sinal de + é para fazer concatenização
}

function limparDados(event) {
    event.preventDefault(); // evita que a página tente enviar o formulário
    
    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("dtNascimento").value = "";
    document.getElementById("motivo").value = "";
    document.getElementById("mensagem").value = ""; // ID corrigido aqui

    document.getElementById("resposta").innerText = "";
    document.getElementById("pNome").innerText = "";
    document.getElementById("pEmail").innerText = "";
    document.getElementById("pData").innerText = "";
    document.getElementById("pMensagem").innerText = "";
    document.getElementById("pMotivo").innerText = "";
}