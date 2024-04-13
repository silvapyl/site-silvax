const express = require('express');
const app = express();
const port = 3000;

// Configura o Express para servir arquivos estáticos
app.use(express.static('public'));

// Configuração para permitir o parsing de dados do corpo das requisições
app.use(express.urlencoded({ extended: true }));

// Rota para lidar com a submissão do formulário de descrição do vídeo
app.post('/submit-descricao', (req, res) => {
  const descricao = req.body.descricao; // Captura a descrição do vídeo enviada pelo formulário

  // Aqui você pode implementar a lógica de análise de sentimento
  // Por enquanto, vamos apenas retornar a descrição do vídeo para o cliente
  res.send(descricao);
});

// Rota padrão para o restante das requisições
app.get('/', (req, res) => {
  res.send('Bem-vindo ao nosso site!');
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`O servidor está rodando em http://localhost:${port}`);
});

