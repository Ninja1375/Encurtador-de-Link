## Descrição: ##

**Veja o projeto ao vivo:**

**[Encurtador de Links](https://ninja1375.github.io/Encurtador-de-Link/)**


O "**Encurtador de Links**" é uma aplicação web simples, feita em HTML, CSS e JavaScript, que permite ao usuário encurtar URLs longas de forma rápida e eficiente. Usando uma API pública do is.gd, o aplicativo faz chamadas diretamente do navegador, sem a necessidade de backend ou autenticação, oferecendo uma solução prática e acessível. 

O projeto conta com um design responsivo e Tema Dark, garantindo uma boa experiência de usuário tanto em desktops quanto em dispositivos móveis.

## Funcionalidades: ##

**Campo para Inserir a URL:**

O usuário pode inserir qualquer URL válida no campo de texto fornecido.
Caso o campo esteja vazio ou uma URL inválida seja inserida, a aplicação avisa o usuário com um alerta para corrigir o erro.

**Botão para Encurtar o Link:**

Ao clicar no botão "Encurtar", o aplicativo faz uma solicitação à API do is.gd, que processa e retorna um link encurtado.
O link gerado aparece logo abaixo do botão e pode ser clicado para abrir diretamente uma URL encurtada.

**Feedback de Erros:**

Se houver algum erro no processo de encurtamento (como uma URL inválida ou problema com a API), uma mensagem de erro será exibida abaixo do botão.
Isso garante que o usuário saiba o que aconteceu e possa tentar novamente.

**Design Responsivo:**

O layout é totalmente adaptável a diferentes tamanhos de tela, desde smartphones até monitores grandes.
O conteúdo centralizado e o estilo minimalista garantem que o projeto seja visualmente atraente em qualquer dispositivo.

**Tema Dark (Escuro):**

O projeto usa um esquema de cores escuras (preto e cinza), com contrastes de cores claras em textos e botões.
Botões interativos mudam de cor ao passar o mouse sobre eles, melhorando a experiência do usuário.

**Uso de API Pública sem Autenticação:**

O encurtador de links utiliza uma API gratuita do is.gd, permitindo chamadas diretas do navegador, o que elimina a necessidade de configuração de servidores ou tokens de autenticação.
Isso simplifica o desenvolvimento e facilita o uso imediato do projeto em qualquer ambiente.

**Links Clicáveis:**

O link encurtado retornado pela API é exibido como um link clicável, permitindo que o usuário possa facilmente copiar ou visitar o endereço encurtado.

## Como o Projeto Funciona: ##

O usuário insere uma URL no campo de texto.
Ao clicar no botão, o JavaScript faz uma chamada ```fetch``` para a API do is.gd, enviando uma URL que o usuário quer encurtar.

A API processa uma solicitação e retorna um link encurtado no formato JSON.
Esse link é exibido na página, com um texto informando que o processo foi bem-sucedido.
Caso haja algum problema, o usuário será informado com uma mensagem de erro.

## Possíveis Melhores Melhores Futuras: ##

**Copiar link automaticamente:** adicione um botão que copie o link encurtado para a área de transferência do usuário.

**Histórico de links encurtados:** permite que o usuário veja uma lista dos últimos links encurtados.

**Estatísticas de cliques:** integrar o recurso de monitoramento de cliques no link encurtado.

Esse projeto é ideal para quem busca uma ferramenta rápida e simples para encurtar URLs com uma interface intuitiva, moderna e responsiva.
