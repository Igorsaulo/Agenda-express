Agenda de Contatos com CRUD usando Mongoose, CSURF, Login e Autenticação
Este é um projeto de uma agenda de contatos feita em Node.js, Express e MongoDB usando o Mongoose para realizar operações de CRUD (
Create, Read, Update, Delete) nos contatos. Além disso, o projeto inclui recursos de autenticação e login de usuários,proteção
contra CSRF usando o "csurf".

Instalação:

1.Clone o repositório para o seu computador:
git clone https://github.com/Igorsaulo/Agenda-express

2.Navegue até a pasta do projeto:
cd Agenda-express

3.Instale as dependências do projeto:
npm install ou npm i

4.Configure as variáveis de ambiente:
Crie um arquivo .env na raiz do projeto e preencha com as seguintes variáveis de ambiente:
CSRF_SECRET="SECRET"
DATABASE_URL="SECRET"

5.Inicie o servidor:
npm start

Uso

Após iniciar o servidor, você pode acessar a agenda de contatos pelo seu navegador em http://localhost:3000. Você verá a tela de login, onde 
pode criar uma conta de usuário ou fazer login se já tiver uma conta. Depois de fazer login, você será redirecionado para a página principal
da agenda de contatos, onde poderá adicionar, editar ou excluir contatos.
