# BackEnd
## Login 
```
var myHeaders = new Headers();
myHeaders.append("Accept", "application/json"); myHeaders.append("Content-type", "application/json");
var raw = JSON.stringify({"email":"admin@admin.com","password":"admin"});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw, mode:'cors',
  redirect: 'follow'
};

fetch("https://localhost:3000/users/login", requestOptions)
  .then(response => response = response.json()).then(response => console.log(response))
  .catch(error => console.log('error', error));
```
## Register:
```
var myHeaders = new Headers();
myHeaders.append("Accept", "application/json"); myHeaders.append("Content-type", "application/json");
var raw = JSON.stringify({email: "new@new.com", password:"new", name:"new", surname:"new", age:"10", tokenAdmin:"VNIMKOeoP0VBOIphd0RJGzlKytNMAREAR3mS6p4O7WCzpbZSGmg4yNUyEnkZni57"});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw, mode:'cors',
  redirect: 'follow'
};

fetch("https://localhost:3000/users/register", requestOptions)
  .then(response => response = response.json()).then(response => console.log(response))
  .catch(error => console.log('error', error));

```

-----------
## EndPoints
* [Autenticação](#autentica%C3%A7%C3%A3o)
  * [/ (list)](#-list)
  * [Register](#register-1)
  * [Login](#login-1)
  * [Get Users](#getuserstokenadmin)
  * [Update](#update)
  * [Delete](#delete)
  * [Give Admin](#giveadmin)
  * [Remove Admin](#removeadmin)
  * [Is Admin](#isadmin)
* [Roteiros](#roteiros)
  * [List](#list)
  * [Insert](#insert)
  * [Update](#update-1)
  * [Delete](#delete-1)
  * [User Search](#userSearch)
  * [Get non Validated](#getnonvalidated)
  * [Validate](#validate)
* [Pontos de Interesse](#pontos-de-interesse)
  * [Search](#search)
  * [Search Point](#searchpoint)
  * [Insert](#insert-1)
  * [Delete](#delete-2)
  * [Update](#update-2)
  * [Search User](#searchuser)
  * [Point to Route](#pointtoroute)
  * [Point out Route](#pointoutroute)
  * [Get non Validated](#getnonvalidated-1)
  * [Validate](#validate-1)
  * [List](#list-1)
* [Imagens](#imagens)
  * [Search Get Image](#searchgetimage)
  * [Search](#search-1)
  * [Insert](#insert-2)
  * [Get Image](#getimage)
  * [Delete Image](#deleteimage)
  * [Search Interest](#searchinterest)
  * [Point Data](#pointdata)
  * [Get non Validated](#getnonvalidated-2)
  * [Validate](#validate-2)
* [Proprietários](#propriet%C3%A1rios)
  * [List](#list-2)
  * [Insert](#insert-3)
  * [Update](#update-3)
-------------
### Autenticação
#### / (list)
Devolve lista de utilizadores
* metodo: **GET**
* Retorna:
  * id
  * name
  * surname
  * password
  * email
  * age

[Indice](#endpoints)
####  /register
Regista o utilizador.Obrigatório preencher todos os campos.
 * metodo: **POST**
* O body deve conter: 
  * name
  * surname
  * password
  * email
  * age
* Requer token: **tokenAdmin**
* Retorna:
  * sucess: true
  * message :
    * id
    * email
* Exemplo:
  * ```javascript "status": "OK"```
  * ```"code": 200```
  * ```body: "{\n    \"sucess\": true,\n    \"mesage\": {\n        \"id\": 11,\n        \"email\": \"email\"\n    }\n}"```					
* Mensagens de erro:
  * ```"code": 401```
    * ``` errormesage = { sucess : false , mesage: "User already exists" }```
  * ```"code": 400```
    * ``` errormesage = { sucess : false , mesage: "Incorrect parameters" }```
  * ```"code": 401```
    * ``` errormesage = { sucess : false , mesage: "The token provided is not the admin's" }```
  * ``` errormesage = { sucess : false , mesage: "something went wrong and we are working on it" }```
  * ```errormesage = { sucess : true , mesage: { id: select[0].id, email: select[0].email }```

[Indice](#endpoints)
#### /login
Autentica o utilizador
* metodo: **POST**
* O body deve conter:  
  * password
  * email 
* Retorna:
  * sucess: true
  * message :
    * id
    * name
    * surname
    * password
    * age
    * email
    * token
* Exemplo:
  * ```"status": "OK"```
  * ```"code": 200```
  * ```"body": "{\n    \"sucess\": true,\n    \"mesage\": {\n        \"id\": 1,\n        \"name\": \"admin\",\n        \"surname\": \"admin\",\n        \"password\": \"admin\",\n        \"age\": 20,\n        \"email\": \"admin@admin.com\",\n        \"token\": \"VNIMKOeoP0VBOIphd0RJGzlKytNMAREAR3mS6p4O7WCzpbZSGmg4yNUyEnkZni57\"\n    }\n}"```	
* Mensagens de erro:
  * ```"code": 401```
    * ``` errormesage = { sucess : false , mesage: "User or password incorret" }```
  * ```"code": 400```
    * ``` errormesage = { sucess : false , mesage: "Incorrect parameters" }```
  * ``` errormesage = { sucess : false , mesage: "something went wrong and we are working on it" }```

[Indice](#endpoints)
#### /getUsers/{tokenAdmin}
Lista os utilizadores
* metodo: **GET** 
* Retorna:
* O body deve conter:  
    * tokenAdmin
  * sucess: true
  * message :
    * id
    * name
    * surname
    * password
    * email
    * age
* Exemplo:
  * ```"status": "OK"```
  * ```"code": 200```
  * ```"body": "{\n    \"sucess\": true,\n    \"mesage\": [\n        {\n            \"id\": 2,\n            \"name\": \"Jacinto\",\n            \"surname\": \"Ribeiro\",\n            \"email\": \"a@email.com\",\n            \"age\": 21\n        },\n        {\n            \"id\": 3,\n            \"name\": \"Carolina\",\n            \"surname\": \"Silva\",\n            \"email\": \"b@email.com\",\n            \"age\": 34\n        },\n        {\n            \"id\": 4,\n            \"name\": \"Hugo\",\n            \"surname\": \"Oliveira\",\n            \"email\": \"c@email.com\",\n            \"age\": 52\n        }\n    ]\n}"```
* Mensagens de erro:
  * ```"code": 401```
    * ``` errormesage = { sucess : false , mesage: "The token provided is not the admin's" }```
  * ``` errormesage = { sucess : false , mesage: "something went wrong and we are working on it" }```

[Indice](#endpoints)
####  /update
Atualiza os dados do utilizador
* metodo: **POST**
* O body deve conter:
  * user 
  * data
    * name
    * surname
    * password
    * email
    * age
* Retorna:
  * sucess: true
  * message : update sucessfull
* Exemplo:
  * ```"status": "OK"```
  * ```"code": 200```
  * ```"body": "{\n    \"sucess\": true,\n    \"mesage\": \"update sucessfull\"\n}"```
* Mensagens de erro:
  * ``` errormesage = { sucess : false , mesage: "WE CANT UPDATE THIS" }```
  * ``` errormesage = { sucess : false , mesage: "token not used" }```
  * ``` errormesage = { sucess : false , mesage: "something went wrong and we are working on it" }```

[Indice](#endpoints)
 ####  /delete
 Apaga os dados do utilizador. Terá de ser verificado se o utilizador a solicitar o delete é um administrador.
* metodo: **Delete**
* O body deve conter:
  * user 
    * token
  * data
    * id
  * email
* Retorna:
  * sucess: true
  * message : User successfully deleted
* Exemplo:
  * ```"status": "OK"```
  * ```"code": 200```
  * ```"body": "{\n    \"sucess\": true,\n    \"mesage\": \"User successfully deleted\"\n}"```
* Mensagens de erro:
  * ``` errormesage = { sucess : false , mesage: "User doesn't exist" }```
  * ``` errormesage = { sucess : false , mesage: "token not used" }```
  * ``` errormesage = { sucess : false , mesage: "something went wrong and we are working on it" }```
  * ``` errormesage = {sucess: false, mesage: "admins cant be deleted"}``` 

[Indice](#endpoints)
####  /giveadmin
Torna um utilizador administrador
* metodo: **POST**
* O body deve conter:
  * user (email do utilizador para dar administrador)
  * email (email do utilizador atual)
* Retorna:
  * sucess: true
  * message : update sucessfull
* Exemplo:
  * ```"status": "OK"```
  * ```"code": 200```
  * ```"body": "{\n    \"sucess\": true,\n    \"mesage\": \"update sucessfull\"\n}"```
* Mensagens de erro:
  * ``` errormesage = { sucess : false , mesage: "something went wrong and we are working on it" }```
  * ``` errormesage= {sucess: false, mesage: "only admins can do this"}``` 

[Indice](#endpoints)
####  /removeadmin
Torna um administrador num utilizador (aka retira previlégios de administrador de um utilizador)
* metodo: **POST**
* O body deve conter:
  * user (email do utilizador para dar administrador)
  * email (email do utilizador atual)
* Retorna:
  * sucess: true
  * message : update sucessfull
* Exemplo:
  * ```"status": "OK"```
  * ```"code": 200```
  * ```"body": "{\n    \"sucess\": true,\n    \"mesage\": \"update sucessfull\"\n}"```
* Mensagens de erro:
  * ``` errormesage = { sucess : false , mesage: "something went wrong and we are working on it" }```
  * ``` errormesage= {sucess: false, mesage: "only admins can do this"}``` 

[Indice](#endpoints)
####  /isadmin
Verifica se um utilizador é administrador
* metodo: **POST**
* O body deve conter:
  * email (email do utilizador atual)
* Retorna:
  * sucess: true
  * message : is admin ou is not admin
* Exemplo:
  * ```"status": "OK"```
  * ```"code": 200```
  * ```"body": "{\n    \"sucess\": true,\n    \"mesage\": \"is admin\"\n}"```

[Indice](#endpoints)


-------------
 ### Roteiros
 ##### /list
Retorna a lista de roteiros
* metodo: **GET** 
* Retorna:
  * sucess: true
  * message : 
      * id
      * nome
      * descricao
      * user_id
      * isvalid
* Exemplo:
  * ```"status": "OK"```
  * ```"code": 200```
  * ```"body": "{\n    \"sucess\": true,\n    \"mesage\": [\n        {\n            \"id\": 1,\n            \"nome\": \"Roteiro dos Monumentos\",\n            \"descricao\": \"Se tem algo que eu adoro no centro oeste de Portugal é poder andar poucos quilômetros entre suas cidades. Tomar é um desses casos.\",\n            \"user_id\": 1\n ,\n            \"isvalid:\"true\n        },\n        {\n            \"id\": 2,\n            \"nome\": \"Roteiro dos Bares\",\n            \"descricao\": \"Restaurantes, bares, loja de discos, cafés, lojas de decoração  trouxeram uma vida de agitação constante e não faltam sítios para exercitar o cotovelo. \",\n            \"user_id\": 1\n ,\n            \"isvalid:\"true\n        },\n        {\n            \"id\": 3,\n            \"nome\": \"Roteiro de Tomar\",\n            \"descricao\": \"A cidade de Tomar, merece, sem dúvida alguma, uma visita, pela sua riqueza artística e cultural. Esta cidade encantadora, banhada pelo Rio Nabão, promete um dia em cheio. \",\n            \"user_id\": 1\n,\n            \"isvalid:\"true\n        }\n    ]\n}"```
* Mensagens de erro:
  * ``` errormesage = { sucess : false , mesage: "something went wrong and we are working on it" }```

[Indice](#endpoints)
 ####  /insert
Adiciona um roteiro
* metodo: **POST**
* O body deve conter:
  * data
    * nome
    * descricao
    * user id			
* Retorna:
  * sucess: true
  * message : Route sucessfully inserted
* Exemplo:
  * ```"status": "OK"```
  * ```"code": 200```
  * ```"body": "{\n    \"sucess\": true,\n    \"mesage\": \"Route sucessfully inserted\"\n}"```
* Mensagens de erro:
  * ``` errormesage = { sucess : false , mesage: "something went wrong and we are working on it" }```

[Indice](#endpoints)
####  /update
Atualiza os dados do roteiro.Terá de ser verificado se o utilizador a solicitar o update é um administrador ou o criador do roteiro.
Não poderá ser permitido o update ao ID do roteiro
* metodo: **POST**
* O body deve conter:
  * id (id do proprietário a actualizar)
  * email  
  * data
    * nome
    * descricao
    * user id	
    * isvalid
* Retorna:
  * sucess: true
  * message : Route sucessfully updated
* Exemplo:
  * ```"status": "OK"```
  * ```"code": 200```
  * ```"body": "{\n    \"sucess\": true,\n    \"mesage\": \"Route sucessfully updated\"\n}"```
* Mensagens de erro:
  * ``` errormesage = { sucess : false , mesage: "Route doesn't exist" }```
  * ``` errormesage = { sucess : false , mesage: "token not used" }```
  
[Indice](#endpoints)
 ####  /delete
Apaga os dados do roteiro.Terá de ser verificado se o utilizador a solicitar o delete é um administrador ou o utilizador que o criou
* metodo: **Delete**
* O body deve conter:
  * email 
  * data
    * id
* Retorna:
  * sucess: true
  * message : Route sucessfully deleted
* Exemplo:
  * ```"status": "OK"```
  * ```"code": 200```
  * ```"body": "{\n    \"sucess\": true,\n    \"mesage\": \"Route sucessfully deleted\"\n}"```
* Mensagens de erro:
  * ``` errormesage = { sucess : false , mesage: "Route doesn't exist" }```
  * ``` errormesage = { sucess : false , mesage: "token not used" }```
  * ```errormesage= {sucess: false, mesage: "admin only"}```

[Indice](#endpoints)
#### /userSearch
Devolve os roteiros que um utilizador criou
* metodo: **POST**
* O body deve conter:
  * data 
      * user id
* Retorna:
  * sucess: true
  * message : 
      * id
      * nome
      * descricao
      * user_id
      * isvalid
* Exemplo:
  * ```"status": "OK"```
  * ```"code": 200```
  * ```"body": "{\n    \"sucess\": true,\n    \"mesage\": [\n        {\n            \"id\": 1,\n            \"nome\": \"Roteiro dos Monumentos\",\n            \"descricao\": \"Se tem algo que eu adoro no centro oeste de Portugal é poder andar poucos quilômetros entre suas cidades. Tomar é um desses casos.\",\n            \"user_id\": 1\n,\n            \"isvalid:\"true\n        },\n ]\n}"```
* Mensagens de erro:
  * ``` errormesage = { sucess : false , mesage: "something went wrong and we are working on it" }```

[Indice](#endpoints)
#### /getnonvalidated
Mostra os roteiros não válidos
* metodo: **POST**
* O body deve conter:
  * email
* Retorna:
  * sucess: true
  * message : 
      * id
      * nome
      * descricao
      * user_id
      * isvalid
* Exemplo:
  * ```"status": "OK"```
  * ```"code": 200```
  * ```"body": "{\n    \"sucess\": true,\n    \"mesage\": [\n        {\n            \"id\": 1,\n            \"nome\": \"Roteiro dos Monumentos\",\n            \"descricao\": \"Se tem algo que eu adoro no centro oeste de Portugal é poder andar poucos quilômetros entre suas cidades. Tomar é um desses casos.\",\n            \"user_id\": 1\n,\n            \"isvalid:\"false\n        },\n ]\n}"```
* Mensagens de erro:
  * ``` errormesage = { sucess : false , mesage: "something went wrong and we are working on it" }```

[Indice](#endpoints)
#### /validate
Valida um roteiro
* metodo: **POST**
* O body deve conter:
  * id (id Roteiro)
  * email
* Retorna:
  * sucess: true
  * message : update sucessfull
* Exemplo:
  * ```"status": "OK"```
  * ```"code": 200```
  * ```"body": "{\n    \"sucess\": true,\n    \"mesage\": \"updated sucessfull\"\n}"```
* Mensagens de erro:
  * ``` errormesage = { sucess : false , mesage: "token not used" }```
  * ``` errormesage = { sucess : false , mesage: "only admins can do this" }```

[Indice](#endpoints)

-------------
### Pontos de interesse
#### /search
Lista os pontos de interesse dado id do roteiro
* metodo: **POST**
* O body deve conter:
  * data (id do Roteiro)
* Retorna:
  * sucess: true
  * message : 
      * id_inter
* Exemplo:
  * ```"status": "OK"```
  * ```"code": 200```
  * ```"body": "{\n    \"sucess\": true,\n    \"mesage\": [\n        {\n            \"id_inter\": 1\n        },\n        {\n            \"id_inter\": 2\n        },\n        {\n            \"id_inter\": 3\n        }\n    ]\n}"```
* Mensagens de erro:
  * ``` errormesage = { sucess : false , mesage: "something went wrong and we are working on it" }```

[Indice](#endpoints)
#### /searchpoint
Lista os pontos de interesse dado o seu id
* metodo: **POST**
* O body deve conter:
  * data (id do ponto)
* Retorna:
  * sucess: true
  * message :
      * id
      * titulo
      * descricao
      * coordenadas
      * data
      * tipoEdif
      * user_id
      * prop_id
      * isvalid
* Exemplo:
  * ```"status": "OK"```
  * ```"code": 200```
  * ```"body": "{\n    \"sucess\": true,\n    \"mesage\": [\n        {\n            \"id\": 1,\n            \"titulo\": \"Palácio da Justiça\",\n            \"descricao\": \"O edifício foi inaugurado em 1959. O piso térreo do edifício é elevado através de uma escadaria, e apresenta arcada com galeria; no piso nobre, abriram-se janelas de sacada no intercolúnio. Na construção sobressai o calcário dourado da região, profusamente aplicado em paredes, pavimentos e escadas. Os pavimentos beneficiaram da aplicação de revestimentos de madeira e mármore. No topo central, entre duas colunas, colocou-se um tríptico a fresco, da autoria de Guilherme Camarinha. A utilização de revestimentos cerâmicos policromados nas zonas públicas do edifício expressa uma prática comum na arquitetura judicial deste período. O edifício inclui, nas paredes laterais do pátio interior, painéis cerâmicos decorativos, com motivos alusivos à função simbólica do edifício, desenhados por Jorge Barradas.\",\n            \"coordenadas\": \"39.60092678,-8.41364175,39.60100945,-8.41395021,39.60114998,-8.4134835,39.60091989,-8.41336763,39.60090529,-8.4134084,39.60086423,-8.41339123,39.60084935,-8.4134295,39.60081959,-8.41341555,39.60073775,-8.41367126,39.60077247,-8.41369307,39.60074299,-8.4137814,39.60078019,-8.41380394,39.60077109,-8.41383398\",\n            \"data\": \"1951\",\n            \"tipoEdif\": \"Edifício Público\",\n            \"user_id\": 1,\n            \"prop_id\": 1\n        ,\n            \"isvalid\": true\n        }\n    ]\n}"```
* Mensagens de erro:
  * ``` errormesage = { sucess : false , mesage: "something went wrong and we are working on it" }```

[Indice](#endpoints)
 ####  /insert
Adiciona um ponto de interesse
* metodo: **POST**
* O body deve conter:
  * data
    * titulo
    * descricao
    * coordenadas
    * data
    * tipoEdif
    * user id
    * prop id
* Retorna:
  * sucess: true
  * message : 
    * id (id do ponto)
* Exemplo:
  * ```"status": "OK"```
  * ```"code": 200```
  * ```"body": "{\n    \"sucess\": true,\n    \"mesage\": [\n        {\n            \"id\": 1    }\n    ]\n}"```
* Mensagens de erro:
  * ``` errormesage = { sucess : false , mesage: "something went wrong and we are working on it" }```

[Indice](#endpoints)
 ####  /delete
Apaga os dados do ponto de interesse. Terá de ser verificado se o utilizador a solicitar o delete é um administrador ou o utilizador que o criou
* metodo: **Delete**
* O body deve conter: 
  * id
* Retorna:
  * sucess: true
  * message : Point sucessfully deleted
* Exemplo:
  * ```"status": "OK"```
  * ```"code": 200```
  * ```"body": "{\n    \"sucess\": true,\n    \"mesage\": \"Point sucessfully deleted\"\n}"```
* Mensagens de erro:
  * ``` errormesage = { sucess : false , mesage: "Point doesn't exist" }```

[Indice](#endpoints)
####  /update
Atualiza os dados do ponto de interesse.Terá de ser verificado se o utilizador a solicitar o update é um administrador ou o utilizador que criou o ponto. Não poderá ser permitido o update ao ID do ponto
* metodo: **POST**
* O body deve conter:
  * id 
  * data
    * titulo
    * descricao
    * coordenadas
    * data
    * tipoEdif
    * user id
    * prop id        
* Retorna:
  * sucess: true
  * message : Point sucessfully updated
* Exemplo:
  * ```"status": "OK"```
  * ```"code": 200```
  * ```"body": "{\n    \"sucess\": true,\n    \"mesage\": \"Point sucessfully updated\"\n}"```
* Mensagens de erro:
  * ``` errormesage = { sucess : false , mesage: "Point doesn't exist" }```
  * ``` errormesage = { sucess : false , mesage: "token not used" }```

[Indice](#endpoints)
#### /searchUser
Procura o utilizador que adicionao esses pontos de interesse ao roteiro
* metodo: **Post**
* O body deve conter: 
  * data (id do Roteiro)
* Retorna:
  * sucess: true
  * message : 
      * id ( id do ponto)
* Exemplo:
  * ```"status": "OK"```
  * ```"code": 200```
  * ```"body": "{\n    \"sucess\": true,\n    \"mesage\": [\n        {\n            \"id_inter\": 1\n        },\n        {\n            \"id_inter\": 2\n        },\n        {\n            \"id_inter\": 3\n        }\n    ]\n}"```
  * ``` errormesage = { sucess : false , mesage: "something went wrong and we are working on it" }```
  
[Indice](#endpoints)
####  /pointtoroute
Associa um ponto a uma rota
* metodo: **POST**
* O body deve conter:
  * id 
  * data
    * idrot (id do roteiro)
    * idpoint (id do ponto)
* Retorna:
  * sucess: true
  * message : Image sucessfully inserted
* Exemplo:
  * ```"status": "OK"```
  * ```"code": 200```
  * ```"body": "{\n    \"sucess\": true,\n    \"mesage\": \"Image sucessfully inserted\"\n}"```
* Mensagens de erro:
  * ``` errormesage = { sucess : false , mesage: "something went wrong and we are working on it" }```

[Indice](#endpoints)
####  /pointoutroute
Desassocia um ponto a uma rota
* metodo: **DELETE**
* O body deve conter:
  * id 
  * data
    * idrot (id do roteiro)
    * idpoint (id do ponto)
* Retorna:
  * sucess: true
  * message : Image sucessfully deleted
* Exemplo:
  * ```"status": "OK"```
  * ```"code": 200```
  * ```"body": "{\n    \"sucess\": true,\n    \"mesage\": \"image sucessfully deleted\"\n}"```
* Mensagens de erro:
  * ``` errormesage = { sucess : false , mesage: "something went wrong and we are working on it" }```

[Indice](#endpoints)
#### /getnonvalidated
Mostra os pontos não válidos
* metodo: **POST**
* O body deve conter:
  * email
* Retorna:
  * sucess: true
  * message : 
    * id
    * titulo
    * descricao
    * coordenadas
    * data
    * tipoEdif
    * user id
    * prop id
    * isvalid
* Exemplo:
  * ```"status": "OK"```
  * ```"code": 200```
  * ```"body": "{\n    \"sucess\": true,\n    \"mesage\": [\n        {\n            \"id\": 1,\n            \"titulo\": \"Palácio da Justiça\",\n            \"descricao\": \"O edifício foi inaugurado em 1959. O piso térreo do edifício é elevado através de uma escadaria, e apresenta arcada com galeria; no piso nobre, abriram-se janelas de sacada no intercolúnio. Na construção sobressai o calcário dourado da região, profusamente aplicado em paredes, pavimentos e escadas. Os pavimentos beneficiaram da aplicação de revestimentos de madeira e mármore. No topo central, entre duas colunas, colocou-se um tríptico a fresco, da autoria de Guilherme Camarinha. A utilização de revestimentos cerâmicos policromados nas zonas públicas do edifício expressa uma prática comum na arquitetura judicial deste período. O edifício inclui, nas paredes laterais do pátio interior, painéis cerâmicos decorativos, com motivos alusivos à função simbólica do edifício, desenhados por Jorge Barradas.\",\n            \"coordenadas\": \"39.60092678,-8.41364175,39.60100945,-8.41395021,39.60114998,-8.4134835,39.60091989,-8.41336763,39.60090529,-8.4134084,39.60086423,-8.41339123,39.60084935,-8.4134295,39.60081959,-8.41341555,39.60073775,-8.41367126,39.60077247,-8.41369307,39.60074299,-8.4137814,39.60078019,-8.41380394,39.60077109,-8.41383398\",\n            \"data\": \"1951\",\n            \"tipoEdif\": \"Edifício Público\",\n            \"user_id\": 1,\n            \"prop_id\": 1\n,\n            \"isvalid\": true\n        }\n    ]\n}"```
* Mensagens de erro:
  * ``` errormesage = { sucess : false , mesage: "something went wrong and we are working on it" }```
  * ```errormesage= {sucess: false, mesage: "only admins can do this"}```
  
[Indice](#endpoints)
#### /validate
Valida um ponto .Retorna todos os dados das imagens dado o ponto de interesse
* metodo: **POST**
* O body deve conter:
  * id (id do Ponto)
  * email
* Retorna:
  * sucess: true
  * message : update sucessfull
* Exemplo:
  * ```"status": "OK"```
  * ```"code": 200```
  * ```"body": "{\n    \"sucess\": true,\n    \"mesage\": \"updated sucessfull\"\n}"```
* Mensagens de erro:
  * ``` errormesage = { sucess : false , mesage: "token not used" }```
  * ``` errormesage = { sucess : false , mesage: "only admins can do this" }```

[Indice](#endpoints)
#### /list
Retorna a lista dos pontos de interesse
* metodo: **GET**
* Retorna:
  * sucess: true
  * message : 
    * id
    * titulo
    * descricao
    * coordenadas
    * data
    * tipoEdif
    * user id
    * prop id
    * isvalid
* Exemplo:
  * ```"status": "OK"```
  * ```"code": 200```
  * ```"body": "{\n    \"sucess\": true,\n    \"mesage\": [\n        {\n            \"id\": 1,\n            \"titulo\": \"Palácio da Justiça\",\n            \"descricao\": \"O edifício foi inaugurado em 1959. O piso térreo do edifício é elevado através de uma escadaria, e apresenta arcada com galeria; no piso nobre, abriram-se janelas de sacada no intercolúnio. Na construção sobressai o calcário dourado da região, profusamente aplicado em paredes, pavimentos e escadas. Os pavimentos beneficiaram da aplicação de revestimentos de madeira e mármore. No topo central, entre duas colunas, colocou-se um tríptico a fresco, da autoria de Guilherme Camarinha. A utilização de revestimentos cerâmicos policromados nas zonas públicas do edifício expressa uma prática comum na arquitetura judicial deste período. O edifício inclui, nas paredes laterais do pátio interior, painéis cerâmicos decorativos, com motivos alusivos à função simbólica do edifício, desenhados por Jorge Barradas.\",\n            \"coordenadas\": \"39.60092678,-8.41364175,39.60100945,-8.41395021,39.60114998,-8.4134835,39.60091989,-8.41336763,39.60090529,-8.4134084,39.60086423,-8.41339123,39.60084935,-8.4134295,39.60081959,-8.41341555,39.60073775,-8.41367126,39.60077247,-8.41369307,39.60074299,-8.4137814,39.60078019,-8.41380394,39.60077109,-8.41383398\",\n            \"data\": \"1951\",\n            \"tipoEdif\": \"Edifício Público\",\n            \"user_id\": 1,\n            \"prop_id\": 1\n,\n            \"isvalid\": true\n        }\n    ]\n}"```
* Mensagens de erro:
  * ```errormesage = { sucess : false , mesage: "something went wrong and we are working on it" }```
  
[Indice](#endpoints)

-------------
### Imagens
#### /searchgetimage
Retorna todos os dados das imagens incluindo as proprias imagens dado o ponto de interesse.
* metodo: **GET**
* O body deve conter:
  * id do ponto de interesse
* Retorna: 
  * sucess: true
  * message : 
    * id
    * Path
    * Legenda
    * AutorFonte
    * Interesse_id
    * usersid
    * ( imagem em base 64)
* Mensagens de erro:
  * ``` errormesage = { sucess : false , mesage: "something went wrong and we are working on it" }```
  
[Indice](#endpoints)
#### /search
Retorna todos os dados das imagens dado o ponto de interesse
* metodo: **POST**
* O body deve conter:
  * data (id do ponto de interesse)
* Retorna:
  * sucess: true
  * message : 
    * id
    * Path
    * Legenda
    * AutorFonte
    * Interesse_id
    * usersid
* Exemplo:
  * ```"status": "OK"```
  * ```"code": 200```
  * ```"body": "{\n    \"sucess\": true,\n    \"mesage\": [\n        {\n            \"id\": 1,\n            \"Path\": \"../www/img/2_Edif_Publicos/A_PalacJustica/_MG_5300.jpg\",\n            \"Legenda\": \"Tribunal da Comarca de Tomar: Vista exterior, 2017\",\n            \"AutorFonte\": \"Filipe Marques, LabIPT\",\n            \"Interesse_id\": 1,\n            \"usersid\": 1\n        },\n        {\n            \"id\": 2,\n            \"Path\": \"../www/img/2_Edif_Publicos/A_PalacJustica/_MG_6587.jpg\",\n            \"Legenda\": \"Tribunal da Comarca de Tomar: Fonte e estrutura da sala de audiências, 2017\",\n            \"AutorFonte\": \"Gonçalo Figueiredo, LabIPT\",\n            \"Interesse_id\": 1,\n            \"usersid\": 1\n        },\n        {\n            \"id\": 3,\n            \"Path\": \"../www/img/2_Edif_Publicos/A_PalacJustica/_MG_6591.jpg\",\n            \"Legenda\": \"Tribunal da Comarca de Tomar: Pátio interno, 2017\",\n            \"AutorFonte\": \"Gonçalo Figueiredo, LabIPT\",\n            \"Interesse_id\": 1,\n            \"usersid\": 1\n        },\n        {\n            \"id\": 4,\n            \"Path\": \"1586889539564\",\n            \"Legenda\": \"Legenda\",\n            \"AutorFonte\": \"AutorFonte\",\n            \"Interesse_id\": 1,\n            \"usersid\": 1\n        }\n    ]\n}"```
* Mensagens de erro:
  * ``` errormesage = { sucess : false , mesage: "something went wrong and we are working on it" }```
  
[Indice](#endpoints)
####  /insert
Adiciona uma imagem
* metodo: **POST**
* O body deve conter:
  * data
    * Path
    * Legenda
    * AutorFonte
    * Interesse_id
    * tipoEdif
    * usersid
    * imagem					
* Retorna:
  * sucess: true
  * message : Image sucessfully inserted
* Exemplo:
  * ```"status": "OK"```
  * ```"code": 200```
  * ```"body": "{\n    \"sucess\": true,\n    \"mesage\": \"Image sucessfully inserted\"\n}"```
* Mensagens de erro:
  * ``` errormesage = { sucess : false , mesage: "something went wrong and we are working on it" }```

[Indice](#endpoints)
#### /getImage
Retorna todas imagens dado o ponto de interesse
* metodo: **GET** 
* O body deve conter:
  * data (path da imagem)
* Retorna:
  * sucess: true
  * message : 
    * Path
    * Legenda
    * AutorFonte
    * Interesse_id
    * tipoEdif
    * usersid
    * imagem
* Mensagens de erro:
  * ``` errormesage = { sucess : false , mesage: "something went wrong and we are working on it" }```
  
[Indice](#endpoints)
 ####  /deleteImage
Apaga os dados da imagem
* metodo: **Delete**
* O body deve conter:
  * id 
* Retorna:
  * sucess: true
  * message : image sucessfully deleted
* Exemplo:
  * ```"status": "OK"```
  * ```"code": 200```
  * ```"body": "{\n    \"sucess\": true,\n    \"mesage\": \"image sucessfully deleted\"\n}"```
* Mensagens de erro:
  * ``` errormesage = { sucess : false , mesage: "something went wrong and we are working on it 2" }```
   * ```errormesage = { sucess : false , mesage: "something went wrong and we are working on it 3" }```
  
[Indice](#endpoints)
#### /searchinterest
Retorna todos os dados das imagens dado o ponto de interesse
* metodo: **POST**
* O body deve conter:
  * data
    * id (id do ponto de interesse)
* Retorna:
  * sucess: true
  * message :
    * id
    * titulo
    * descricao
    * data
    * isvalid
* Mensagens de erro:
  * ``` errormesage = { sucess : false , mesage: "something went wrong and we are working on it" }```
  
[Indice](#endpoints)
#### /pointdata
Retorna todos os dados das imagens dado o ponto de interesse
* metodo: **POST**
* O body deve conter:
  * data
    * id (id do ponto de interesse)
* Retorna:
  * sucess: true
  * message :   
    * Path
    * Legenda
    * AutorFonte
    * tipoEdif
    * usersid
    * imagem
* Mensagens de erro:
  * ``` errormesage = { sucess : false , mesage: "something went wrong and we are working on it" }```
  
[Indice](#endpoints)
#### /getnonvalidated
Mostra as imagens não válidas
* metodo: **POST**
* O body deve conter:
  * email
* Retorna:
  * sucess: true
  * message : 
    * Path
    * Legenda
    * AutorFonte
    * tipoEdif
    * usersid
    * imagem
    * isvalid
* Mensagens de erro:
  * ``` errormesage = { sucess : false , mesage: "something went wrong and we are working on it" }```
  * ```errormesage= {sucess: false, mesage: "only admins can do this"}```
  
[Indice](#endpoints)
#### /validate
Valida uma imagem. Retorna todos os dados das imagens.
* metodo: **POST**
* O body deve conter:
  * id (id da Imagem)
  * email
* Retorna:
  * sucess: true
  * message : update sucessfull
* Exemplo:
  * ```"status": "OK"```
  * ```"code": 200```
  * ```"body": "{\n    \"sucess\": true,\n    \"mesage\": \"updated sucessfull\"\n}"```
* Mensagens de erro:
  * ``` errormesage = { sucess : false , mesage: "token not used" }```
  * ``` errormesage = { sucess : false , mesage: "only admins can do this" }```

[Indice](#endpoints)

-------------
### Proprietários
#### /list
Devolve a lista de todos os proprietários
* metodo: **GET** 
* Retorna:
  * sucess: true
  * message : 
    * id
    * name
    * work
    * user_id 
* Mensagens de erro:
  * ``` errormesage = { sucess : false , mesage: "something went wrong and we are working on it" }```

[Indice](#endpoints)
#### /insert
Adiciona um proprietário
* metodo: **POST**
* O body deve conter:
  * data
    * name
    * work
    * user id	
* Retorna:
  * sucess: true
  * message : Point sucessfully inserted
* Exemplo:
  * ```"status": "OK"```
  * ```"code": 200```
  * ```"body": "{\n    \"sucess\": true,\n    \"mesage\": \"Proprietary sucessfully inserted\"\n}"```
* Mensagens de erro:
  * ``` errormesage = { sucess : false , mesage: "something went wrong and we are working on it" }```

[Indice](#endpoints)
####  /update
Atualiza os dados do proprietário.Terá de ser verificado se o utilizador a solicitar o update é um administrador. Não poderá ser permitido o update ao ID do ponto
* metodo: **POST**
* O body deve conter:
  * id (id do proprietario)
  * user (email do utilizador)
  * data
    * name
    * work
    * user id
* Retorna:
  * sucess: true
  * message : Proprietary sucessfully updated
* Exemplo:
  * ```"status": "OK"```
  * ```"code": 200```
  * ```"body": "{\n    \"sucess\": true,\n    \"mesage\": \"Proprietary sucessfully updated\"\n}"```
* Mensagens de erro:
  * ``` errormesage = { sucess : false , mesage: "Proprietary doesn't exist" }```
  * ``` errormesage = { sucess : false , mesage: "token not used" }```
  * ```errormesage= {sucess: false, mesage: "only admins can do this"}```

[Indice](#endpoints)
