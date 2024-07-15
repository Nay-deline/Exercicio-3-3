<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <title>Cadastro de Usuário</title>
</head>
<body>
    <h1>Cadastro de Usuário</h1>

    <form onsubmit="return cadastrarUsuario()">
        <label for="nome">Nome Completo:</label>
        <input type="text" id="nome" required><br>

        <label for="anoNascimento">Ano de Nascimento:</label>
        <input type="number" id="anoNascimento" required><br>

        <button type="submit">Cadastrar</button>
    </form>

    <p id="mensagem"></p>

    <script>
        function cadastrarUsuario() {
            const nome = document.getElementById('nome').value;
            const anoNascimento = parseInt(document.getElementById('anoNascimento').value);

            const dataAtual = new Date();
            const anoAtual = dataAtual.getFullYear();

            const idade = anoAtual - anoNascimento;

            if (idade >= 18) {
                // Usuário maior de idade
                const usuario = {
                    nome: nome,
                    nomeUsuario: prompt("Digite seu nome de usuário:"),
                    senha: prompt("Digite sua senha:")
                };

                // Salvar dados do usuário (ex: localStorage, banco de dados)
                console.log("Dados do usuário salvos:");
                console.log(usuario);

                document.getElementById('mensagem').textContent = `Bem-vindo(a), ${nome}!`;
            } else {
                // Usuário menor de idade
                document.getElementById('mensagem').textContent = "Cadastro não permitido para menores de idade.";
            }

            return false; // Evita o envio do formulário
        }
    </script>
</body>
</html>