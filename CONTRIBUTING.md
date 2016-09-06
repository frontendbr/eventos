# Como contribuir com esse projeto

1. Certifique-se de que você tem as dependências globais, listadas em [about.md](about.md);
- Faça um fork;
- Clone o projeto;
- Adicione um novo `remote` ao git, com `git remote add upstream git@github.com:frontendbr/eventos.git`;
- Crie uma branch `develop` (somente se já não existir), atualizada com a branch do `upstream`, com o comando: `git checkout upstream/develop -b develop`;
- Se já tiver a branch criada, acesse-a com `git checkout develop` e atualize com `git pull upstream develop --force`;
- Crie uma nova branch, onde você irá desenvolver a nova feature, com `git checkout -b <nome-da-sua-branch>`;
- Instale as dependências do projeto com `npm i`;
- Inicie o desenvolvimento da nova feature;
- Para subir o servidor, execute `npm run start:dev`, para iniciar o sevidor com _hot reloading_, no endereço `http://localhost:8080`;
- Escreva testes para as novas features;
- Envie apenas uma feature por pull request;
- Ao terminar o seu código, faça os commits **em inglês**;
- Verifique se não há erros de **lint** no código (com o servidor rodando, os erros de lint são mostrados se houver algum);
- Suba as alterações para o seu fork, com `git push origin <nome-da-sua-branch>`;
- Envie um pull request no repositório `https://github.com/frontendbr/eventos`, na branch **develop**;
- Marque algum dos administradores da organização, para que possamos analisar o pull request;
- Aguarde sua feature ser adicionada =)

## Adicionando um novo evento

Para adicionar um novo evento, edite o arquivo `src/data/events.json`, seguindo as seguintes regras:

1. Os eventos devem estar em ordem de data, crescente, ou seja, os mais próximos devem ficar no início do arquivo, e os próximos, seguindo a ordem de data, um após o outro;
- Não altere a entrada `innerLink`, pois ainda não temos a página interna do evento, que será desenvolvida futuramente;
- Verifique se todos os dados estão preenchidos corretamente;
- Se for adicionar uma imagem ao seu evento, não comite ela junto com o `json`. Utilize uma URL externa. **Dica:** se você arrastar uma imagem qualquer no campo de criar nova issue (ou pull request) aqui mesmo no GitHub, ele tá dá um link para um CDN próprio apontando para essa imagem. Você pode usar esse link para a imagem do evento ;)
- Após atualizar o JSON, suba o projeto localmente e verifique se está tudo correto;
- Envie um pull request na branch **develop** e marque algum dos administradores da organização, para que alguém possa validar e fazer o merge;
- Aguarde aprovação.

## Aos colaboradores que irão validar um pull request

Antes de aceitar um pull request, baixe a branch enviada, execute localmente na sua máquina e verifique se está tudo de acordo com as instruções acima. Se estiver tudo ok, o pull request já pode ser mergeado.
