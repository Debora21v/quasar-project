# Quasar Project - Integração com a API do GIPHY

Aplicação desenvolvida com Quasar Framework, Vue 3 e Pinia, consumindo a API do GIPHY para busca, exibição e gerenciamento de GIFs de forma interativa, persistente e visualmente atraente.

## Link do repositório

[https://github.com/Debora21v/quasar-project](https://github.com/Debora21v/quasar-project)

## Tecnologias utilizadas

- Quasar Framework
- Vue 3
- Pinia
- JavaScript
- Axios
- API do GIPHY
- Tailwind CSS

## Funcionalidades

- Busca de GIFs por meio da API do GIPHY
- Exibição dinâmica dos resultados
- Organização da aplicação em páginas, componentes e stores
- Gerenciamento de estado com Pinia
- Interface construída com recursos do Quasar Framework
- Estrutura pensada para separação de responsabilidades

## Pré-requisitos

Antes de executar o projeto localmente, é necessário ter instalado:

- Node.js
- npm

Para verificar se estão instalados, execute:

```bash
node -v
npm -v
Como clonar o projeto
git clone https://github.com/Debora21v/quasar-project.git
Entre na pasta do projeto:

cd quasar-project
Como instalar as dependências
npm install
Configuração da API do GIPHY
Este projeto utiliza a API do GIPHY. Caso seja necessário configurar uma chave de API manualmente, crie um arquivo .env na raiz do projeto e adicione sua chave, por exemplo:

VITE_GIPHY_API_KEY=sua_chave_aqui
Se a chave da API já estiver definida diretamente no código do projeto, esta etapa pode não ser necessária.

Como executar o projeto localmente
Para iniciar o servidor de desenvolvimento, execute:

quasar dev
Se preferir, também pode tentar:

npm run dev
Após iniciar, o terminal exibirá a URL local onde a aplicação estará disponível, normalmente algo como:

http://localhost:9000
Como gerar a build de produção
quasar build
Estrutura do projeto
Exemplo de organização dos principais diretórios:

src/pages - páginas da aplicação
src/components - componentes reutilizáveis
src/stores - stores do Pinia
src/services - serviços e integração com APIs
src/layouts - layouts da aplicação
src/router - configuração de rotas
Observações importantes
Certifique-se de instalar todas as dependências antes de executar o projeto.
Caso a aplicação dependa de chave da API do GIPHY, configure corretamente o arquivo .env.
O projeto foi desenvolvido com foco em organização do código, separação de responsabilidades e uso dos recursos oferecidos pelo Quasar Framework.
Autora
Debora
```
