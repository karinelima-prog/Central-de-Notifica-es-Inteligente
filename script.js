
// Elementos do Toast
const toastElemento = document.getElementById("toastNotificacao");
const toastTitulo = document.getElementById("toastTitulo");
const toastMensagem = document.getElementById("toastMensagem");

// Criando uma única instância do Toast
const toast = bootstrap.Toast.getOrCreateInstance(toastElemento, {
    autohide: true,
    delay: 5000
});

// Elementos do histórico
const listaHistorico = document.getElementById("listaHistorico");
const contador = document.getElementById("contador");

// Variável que conta as atividades
let quantidadeAcoes = 0;

// Função para mostrar a notificação
function mostrarNotificacao(titulo, mensagem) {
    toastTitulo.textContent = titulo;
    toastMensagem.textContent = mensagem;

    toast.show();
}

// Função para adicionar atividades ao histórico
function adicionarHistorico(mensagem) {

    // Remove a mensagem inicial
    if (quantidadeAcoes === 0) {
        listaHistorico.innerHTML = "";
    }

    // Cria um novo item
    const item = document.createElement("li");

    item.className = "list-group-item";
    item.textContent = mensagem;

    // Adiciona o item à lista
    listaHistorico.appendChild(item);

    // Atualiza o contador
    quantidadeAcoes++;
    contador.textContent = quantidadeAcoes;
}

// Botão cadastrar usuário
document.getElementById("btnCadastro").addEventListener("click", function() {

    mostrarNotificacao(
        "Cadastro realizado",
        "O usuário foi cadastrado com sucesso."
    );

    adicionarHistorico("Cadastro realizado com sucesso.");
});

// Botão verificar acesso
document.getElementById("btnAcesso").addEventListener("click", function() {

    mostrarNotificacao(
        "Atenção à segurança",
        "Verifique suas credenciais de acesso."
    );

    adicionarHistorico("Verificação de segurança executada.");
});

// Botão verificar sistema
document.getElementById("btnSistema").addEventListener("click", function() {

    mostrarNotificacao(
        "Sistema atualizado",
        "Nenhuma atualização pendente foi encontrada."
    );

    adicionarHistorico("Consulta de atualizações realizada.");
});

// Função para limpar o histórico
function limparHistorico() {

    listaHistorico.innerHTML = `
        <li class="list-group-item text-muted">
            Nenhuma atividade registrada.
        </li>
    `;

    quantidadeAcoes = 0;
    contador.textContent = quantidadeAcoes;
}

// Botão limpar histórico
document.getElementById("btnLimpar").addEventListener("click", function() {
    limparHistorico();
});

// Botão confirmar limpeza no Modal
document.getElementById("btnConfirmarLimpeza").addEventListener("click", function() {

    limparHistorico();

    // Fecha o Modal
    const modalElemento = document.getElementById("modalConfirmacao");
    const modal = bootstrap.Modal.getOrCreateInstance(modalElemento);

    modal.hide();
});
