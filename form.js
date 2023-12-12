


function enviar() {
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var mensagem = document.getElementById('mensagem').value;

    if (nome && sobrenome && email && turno && turma && mensagem) {
        alert('Sua ocorrencia foi registrada com Sucesso');
        form.reset()
        return true; 
    } else {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return false; 
    }
}

