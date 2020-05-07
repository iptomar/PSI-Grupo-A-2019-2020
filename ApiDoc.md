# Backend
## EndPoints
### Autenticação
####  /register
 Regista o utilizador
* metodo: **POST**
* O body deve conter: 
  * name
  * surname
  * password
  * email
  * age
* Requer token: **tokenAdmin**
* Retorna:
  * ```"status": "OK"```
  * ```"code": 200```
  * ```body: "{\n    \"sucess\": true,\n    \"mesage\": {\n        \"id\": 11,\n        \"email\": \"email\"\n    }\n}"```					

#### /login
Autetica o utilizador
* metodo: **POST**
* O body deve conter:  
  * password
  * email 
* Retorna:
  * ```"status": "OK"```
  * ```"code": 200```
  * ```"body": "{\n    \"sucess\": true,\n    \"mesage\": {\n        \"id\": 1,\n        \"name\": \"admin\",\n        \"surname\": \"admin\",\n        \"password\": \"admin\",\n        \"age\": 20,\n        \"email\": \"admin@admin.com\",\n        \"token\": \"VNIMKOeoP0VBOIphd0RJGzlKytNMAREAR3mS6p4O7WCzpbZSGmg4yNUyEnkZni57\"\n    }\n}"```	
  
#### /getUsers/{tokenAdmin}
Lista os utilizadores
* metodo: **Get** 
* Retorna:
  * ```"status": "OK"```
  * ```"code": 200```
  * ```"body": "{\n    \"sucess\": true,\n    \"mesage\": [\n        {\n            \"id\": 2,\n            \"name\": \"Jacinto\",\n            \"surname\": \"Ribeiro\",\n            \"email\": \"a@email.com\",\n            \"age\": 21\n        },\n        {\n            \"id\": 3,\n            \"name\": \"Carolina\",\n            \"surname\": \"Silva\",\n            \"email\": \"b@email.com\",\n            \"age\": 34\n        },\n        {\n            \"id\": 4,\n            \"name\": \"Hugo\",\n            \"surname\": \"Oliveira\",\n            \"email\": \"c@email.com\",\n            \"age\": 52\n        }\n    ]\n}"```

####  /update
 Atualiza os dados do utilizador
* metodo: **POST**
* O body deve conter:
  * user 
  * data
    * email
* Retorna:
  * ```"status": "OK"```
  * ```"code": 200```
  * ```"body": "{\n    \"sucess\": true,\n    \"mesage\": \"update sucessfull\"\n}"```
 
 ####  /delete
 Apaga os dados do utilizador
* metodo: **Delete**
* O body deve conter:
  * user 
  * id
* Retorna:
  * ```"status": "OK"```
  * ```"code": 200```
  * ```"body": "{\n    \"sucess\": true,\n    \"mesage\": \"User successfully deleted\"\n}"```

 ### Roteiros
 
 ##### /list
 Retorna a lista de roteiros
* metodo: **Get** 
* Retorna:
  * ```"status": "OK"```
  * ```"code": 200```
  * ```"body": "{\n    \"sucess\": true,\n    \"mesage\": [\n        {\n            \"id\": 1,\n            \"nome\": \"Roteiro dos Monumentos\",\n            \"descricao\": \"Se tem algo que eu adoro no centro oeste de Portugal é poder andar poucos quilômetros entre suas cidades. Tomar é um desses casos.\",\n            \"user_id\": 1\n        },\n        {\n            \"id\": 2,\n            \"nome\": \"Roteiro dos Bares\",\n            \"descricao\": \"Restaurantes, bares, loja de discos, cafés, lojas de decoração  trouxeram uma vida de agitação constante e não faltam sítios para exercitar o cotovelo. \",\n            \"user_id\": 1\n        },\n        {\n            \"id\": 3,\n            \"nome\": \"Roteiro de Tomar\",\n            \"descricao\": \"A cidade de Tomar, merece, sem dúvida alguma, uma visita, pela sua riqueza artística e cultural. Esta cidade encantadora, banhada pelo Rio Nabão, promete um dia em cheio. \",\n            \"user_id\": 1\n        }\n    ]\n}"```
 
 ####  /insert
 Adiciona um roteiro
* metodo: **POST**
* O body deve conter:
  * data
    * nome
    * descricao
    * user id			
* Retorna:
  * ```"status": "OK"```
  * ```"code": 200```
  * ```"body": "{\n    \"sucess\": true,\n    \"mesage\": \"Route sucessfully inserted\"\n}"```

####  /update
 Atualiza os dados do roteiro
* metodo: **POST**
* O body deve conter:
  * user 
  * data
    * nome
    * descricao
    * user id		
* Retorna:
  * ```"status": "OK"```
  * ```"code": 200```
  * ```"body": "{\n    \"sucess\": true,\n    \"mesage\": \"Route sucessfully updated\"\n}"```

 ####  /delete
 Apaga os dados do roteiro
* metodo: **Delete**
* O body deve conter:
  * user 
  * id
* Retorna:
  * ```"status": "OK"```
  * ```"code": 200```
  * ```"body": "{\n    \"sucess\": true,\n    \"mesage\": \"Route sucessfully deleted\"\n}"```

### Points

####
