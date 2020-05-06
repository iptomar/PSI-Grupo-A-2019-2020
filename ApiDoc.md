# Backend
## EndPoints
### Autenticação
#### /register
Regista um utilizador
- metodo: **POST**
- No body deve conter: 
  -name(string) 
  -surname(string) 
  -password(string) 
  -email(string) 
  -age(string) 
-Requer token: **tokenAdmin**
-Retorna:
  -code:**200**
  -```body: "{\n    \"sucess\": true,\n    \"mesage\": {\n        \"id\": 11,\n        \"email\": \"email\"\n    }\n}"```					
