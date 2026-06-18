function mostrarDadosForm(event){
    event.preventDefault();
    

    let form = document.getElementById("formulario");

    // 2. Verificamos se o formulário é válido (se o email tem @, se os required estão preenchidos)
    if (!form.checkValidity()) {
        form.reportValidity(); // Exibe o balão de erro nativo do navegador
        return; // Interrompe a função aqui, não exibindo o alert nem salvando os dados
    }

    let nome = document.getElementById("nome").value; 
    let email = document.getElementById("email").value;
    
    let DtNascimento = document.getElementById("dtNascimento").value;
    //configurando data de nascimento para o padrão brasileira
    
    let partes = DtNascimento.split("-");
    let data = new Date(partes[0],partes[1]-1,partes[2]);
    //converte para estrura de data br, dia, mês e ano
    let dataFormatada = data.toLocaleDateString("pt-BR")
    
    let mensagem = document.getElementById("mensagem").value;
   
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

// Função para enviar feedback
function enviarFeedback(event) {
    event.preventDefault();
    
    // Obter valor do nome
    const nome = document.getElementById('nome').value;
    
    // Mostrar alerta de sucesso
    alert(`Obrigado ${nome}! Seu feedback foi enviado com sucesso. Apreciamos sua opinião!`);
    
    // Limpar o formulário
    document.getElementById('formularioFeedback').reset();
}

// Adicionar listener ao formulário de feedback quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    const formularioFeedback = document.getElementById('formularioFeedback');
    if (formularioFeedback) {
        formularioFeedback.addEventListener('submit', enviarFeedback);
    }
});

// ================================================
// CARROSSEL DE DEPOIMENTOS (feedbacks.html)
// Funcionamento por visibilidade (classe .ativo)
// ================================================

(function () {
    var lista   = document.getElementById('carrosselLista');
    var btnPrev = document.getElementById('btnPrev');
    var btnNext = document.getElementById('btnNext');

    // Só executa se os elementos existirem na página
    if (!lista || !btnPrev || !btnNext) return;

    var itens = lista.querySelectorAll('.carrossel-item');
    var total = itens.length;
    var atual = 0;

    function irPara(indice) {
        // Remove .ativo do item atual
        itens[atual].classList.remove('ativo');
        // Calcula o próximo índice com wraparound
        atual = (indice + total) % total;
        // Adiciona .ativo ao novo item
        itens[atual].classList.add('ativo');
    }

    btnPrev.addEventListener('click', function () { irPara(atual - 1); });
    btnNext.addEventListener('click', function () { irPara(atual + 1); });

    // Suporte a swipe (touch)
    var inicioX = 0;
    lista.addEventListener('touchstart', function (e) {
        inicioX = e.touches[0].clientX;
    }, { passive: true });
    lista.addEventListener('touchend', function (e) {
        var diff = inicioX - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 40) {
            irPara(diff > 0 ? atual + 1 : atual - 1);
        }
    }, { passive: true });

    // Suporte a teclado (acessibilidade)
    document.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowLeft')  irPara(atual - 1);
        if (e.key === 'ArrowRight') irPara(atual + 1);
    });
}());

// ================================================
// FORMULÁRIO DE FEEDBACK 
// ================================================

(function () {
    var lista   = document.getElementById('carrosselLista');
    var btnNext = document.getElementById('btnNext');

    // Só executa se os elementos existirem na página
    if (!lista || !btnNext) return;

    var itens = lista.querySelectorAll('.carrossel-item');
    var total = itens.length;
    var atual = 0;

    function irPara(indice) {
        // Remove .ativo do item atual
        itens[atual].classList.remove('ativo');
        // Calcula o próximo índice com wraparound
        atual = (indice + total) % total;
        // Adiciona .ativo ao novo item
        itens[atual].classList.add('ativo');
    }

    btnNext.addEventListener('click', function () { irPara(atual + 1); });

    // Suporte a swipe (touch)
    var inicioX = 0;
    lista.addEventListener('touchstart', function (e) {
        inicioX = e.touches[0].clientX;
    }, { passive: true });
    lista.addEventListener('touchend', function (e) {
        var diff = inicioX - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 40) {
            irPara(diff > 0 ? atual + 1 : atual - 1);
        }
    }, { passive: true });

    // Suporte a teclado (acessibilidade)
    document.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowLeft')  irPara(atual - 1);
        if (e.key === 'ArrowRight') irPara(atual + 1);
    });
}());


