# Casos de Teste
## Utilizadores 
### Registar:
Inserir utilizador na base de dados
* **Entrada:** id,nome, apelido, password, idade, email
* **Saida:** mensagem de confirmacao
* **Exemplo:** Inserir dois utilizadores com o mesmo id, tentar editar código a partir das text box.
### Login: 
Fazer autenticacao do utilizador
* **Entrada:** email, password
* **Saida:** mensagem de confirmacao
* **Exemplo:** tentar entrar sem estar registado,tentar editar código a partir das text box.
### Remover:
Remove os dados do utilizador
* **Entrada:** id
* **Saida:** mensagem de confirmacao
* **Exemplo:** tentar remover um id removido,tentar editar código a partir das text box.
## Roteiros
### Criar:
Inserir roteiro na base de dados mas precisa de aprovacao do admin
* **Entrada:** id, nome, descricao
* **Saida:** mensagem de confirmacao
* **Exemplo:** Inserir dois roteiros com o mesmo id, tentar editar código a partir das text box.
### Editar:
Eliminar a entrada com esse id na base de dados e inserir uma nova com os dados alterados
* **Entrada:** id,nome, descricao
* **Saida:** mensagem de confirmacao
* **Exemplo:** Colocar um id ja utilizado,tentar editar código a partir das text box.
### Remover:
Remove os dados do roteiro
* **Entrada:** id
* **Saida:** mensagem de confirmacao
* **Exemplo:** tentar remover um id removido,tentar editar código a partir das text box.
### Listar:
lista toda a tabela dos roteiro
* **Entrada:** nada
* **Saida:** lista dos pontos dos roteiros
### Aprovar/Negar:
Aprova/Nega um novo roteiro
* **Entrada:** id
* **Saida:** nada
* **Exemplo:** tentar aprovar um id ja aprovado, tentar negar um id ja negado,tentar editar código a partir das text box.
## Interesses
### Inserir:
Inserir interesse na base de dados mas precisa de aprovacao do admin
* **Entrada:** id, titulo, descricao, coordenadas, data,tipo de edificio, id proprietario
* **Saida:** mensagem de confirmacao
* **Exemplo:** Inserir dois Interesses com o mesmo id, tentar editar código a partir das text box.
### Editar:
Eliminar a entrada com esse id na base de dados e inserir uma nova com os dados alterados
* **Entrada:** id,titulo, descricao, coordenadas, data,tipo de edificio, id proprietario
* **Saida:** mensagem de confirmacao
* **Exemplo:** Colocar um id ja utilizado,tentar editar código a partir das text box.	
### Remover:
Remove os dados do interesses
* **Entrada:** id
* **Saida:** mensagem de confirmacao
* **Exemplo:** tentar remover um id removido,tentar editar código a partir das text box.
### Listar:
lista toda a tabela dos interesses
* **Entrada:** nada
* **Saida:** lista dos interesses
### Pesquisar:
Obter ponto de interesse dado id do ponto
* **Entrada:** id
* **Saida:** Dados desse interesse
### Aprovar/Negar:
Aprova/Nega um novo interesse
* **Entrada:** id
* **Saida:** nada
* **Exemplo:** tentar aprovar um id ja aprovado, tentar negar um id ja negado,tentar editar código a partir das text box.
## Imagens
### Inserir:
Insere o caminho da imagem na bases de dados
* **Entrada:** id, legenda,autor da imagem, caminho da imagem, id interesses, id autor
* **Saida:** mensagem de confirmacao
* **Exemplo:** Inserir duas imagens com o mesmo id, tentar editar código a partir das text box.
### Editar:
Eliminar a entrada com esse id na base de dados e inserir uma nova com os dados alterados
* **Entrada:** id, legenda,autor da imagem, caminho da imagem, id interesses, id autor
* **Saida:** mensagem de confirmacao
* **Exemplo:** Colocar um id ja utilizado,tentar editar código a partir das text box.
### Remover:
Remove os dados das Imagens
* **Entrada:** id
* **Saida:** mensagem de confirmacao
* **Exemplo:** tentar remover um id removido,tentar editar código a partir das text box.
## Proprietario
### Inserir:
Insere proprietario na base de dados
* **Entrada:**  id, nome, ocupacao
* **Saida:** mensagem de confirmacao
* **Exemplo:** Inserir dois proprietarios com o mesmo id, tentar editar código a partir das text box.
### Editar:
Eliminar a entrada com esse id na base de dados e inserir uma nova com os dados alterados
* **Entrada:** id, nome, ocupacao
* **Saida:** mensagem de confirmacao
* **Exemplo:** Colocar um id ja utilizado,tentar editar código a partir das text box.
### Remover:
Remove os dados do proprietario
* **Entrada:** id
* **Saida:** mensagem de confirmacao
* **Exemplo:** tentar remover um id removido,tentar editar código a partir das text box.

## Extras tentar implodir o projeto
Inserir o ID 1, tentar inserir mais do que um ID  


