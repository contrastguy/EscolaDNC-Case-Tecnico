# EscolaDNC-Case-Tecnico
Case Técnico para  a vaga de Full Stack Developer 

# Link do Desenho do Banco de Dados 
https://miro.com/app/board/uXjVPWoP4ng=/?share_link_id=151974271587

# Link do Wireframe de Todas as páginas
https://miro.com/app/board/uXjVPXXLP4A=/?share_link_id=878553939614

# Documentação Back-End :

  ## Todas as Techs e frameworks usados para este sistema :
  Node.js / Express.js / npm / Javasript / PostgreSQL / JWT / Bcrypt.js / PG
  
  ## Tela de Administração do Sistema:
    
    função criada que busca,edita e deleta por todos os componentes do sistema.
    
    input -> tabela de [turmas ,facilitadores,supervisores,alunos,calls] como body da requisição da função
    
    Ação -> Busca de todas as tabelas criadas no Banco de dados. Depois é criado várias rotas com métodos HTTP diferentes, tendo como rota principal, um GET de todas   as tabelas
    
    Output ->Visualização de todas as features do sistema na Tela de Administração do Sistema
    
    
  ## Tela de Acesso de alunos
  
    input -> Usuário e Password
    Ação -> Buscar no PostgreSQL se o Usuário já foi criado , se sim , ocorre a comparação da senha com Bcrypt, e depois é gerado o token JWT para validação. 
    Output -> Autenticação e liberação do Login do Usuário, para a call
    
    
   ## Tela de Acesso de Facilitador
  
    input -> Usuário e Password
    Ação -> Buscar no PostgreSQL se o Usuário já foi criado , se sim , ocorre a comparação da senha com Bcrypt, e depois é gerado o token JWT para validação. 
    Output -> Autenticação e liberação do Login do Usuário, para a call
    
    
    
  ## Tela de Acesso de Supervisor
 
    função de Login e senha , junto com a função que busca as turmas no banco de dados e devolve o Link de acesso à call da Turma.
    
    input -> Usuário e Password
    Ação -> Buscar no PostgreSQL se o Usuário já foi criado , se sim , ocorre a comparação da senha com Bcrypt, e depois é gerado o token JWT para validação. 
    Output -> Autenticação e liberação do Login do Usuário, para a call
    
    input -> id da turma
    Ação -> Busca no Banco de dados o id da turma
    Output -> Link de acesso para a call da Turma
    
