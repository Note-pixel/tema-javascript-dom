document.getElementById('formCadastro').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const senha = document.getElementById('senha').value;
    const confirmaSenha = document.getElementById('confirmaSenha').value;
    const perfil = document.getElementById('perfil').value;
    const termos = document.getElementById('termos').checked;
    
    const mensagemStatus = document.getElementById('mensagemStatus');

    mensagemStatus.style.display = 'none';
    mensagemStatus.className = 'mensagem';

    if (senha !== confirmaSenha) {
        mensagemStatus.innerText = 'Erro: As senhas digitadas não são iguais!';
        mensagemStatus.classList.add('erro');
        mensagemStatus.style.display = 'block';
        return;
    }

    mensagemStatus.innerText = 'Cadastro realizado com sucesso via Client-Side!';
    mensagemStatus.classList.add('sucesso');
    mensagemStatus.style.display = 'block';

    console.log('Dados processados via DOM:');
    console.log('Nome:', nome);
    console.log('E-mail:', email);
    console.log('Perfil Técnico:', perfil);
    console.log('Termos aceitos:', termos);
});
