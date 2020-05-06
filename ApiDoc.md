# Backend
## EndPoints
### Autenticação
#### * /register
.. Regista o utilizador
* metodo: **POST**
* O body deve conter: 
  * name(string) 
  * surname(string) 
  * password(string) 
  * email(string) 
  * age(string) 
* Requer token: **tokenAdmin**
* Retorna:
  * ```"status": "OK"```
  * ```"code": 200```
  * ```body: "{\n    \"sucess\": true,\n    \"mesage\": {\n        \"id\": 11,\n        \"email\": \"email\"\n    }\n}"```					

#### /login
Autetica o utilizador
* metodo: **POST**
* O body deve conter:  
  * password(string) 
  * email(string)  
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
