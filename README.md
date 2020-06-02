# BackEnd
## Login:

var myHeaders = new Headers();
myHeaders.append("Accept", "application/json"); myHeaders.append("Content-type", "application/json");
var raw = JSON.stringify({"user":{username},"password":{password}});
###Ex: user->admin, password->admin?

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw, mode:'cors',
  redirect: 'follow'
};
?
fetch("https://localhost:3000/users/login", requestOptions)
  .then(response => response = response.json()).then(response => console.log(response))
  .catch(error => console.log('error', error));

## Register:
var myHeaders = new Headers();
myHeaders.append("Accept", "application/json"); myHeaders.append("Content-type", "application/json");
var raw = JSON.stringify({"user":"admin","password":"admin", "token":"K(+?y/(Le0lMnpP+!vZ)GQToI=WesVRXapAc21AXqXx*M8S78KTgx7i-vn)dUu?0"});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw, mode:'cors',
  redirect: 'follow'
};

fetch("https://localhost:3000/users/register", requestOptions)
  .then(response => response = response.json()).then(response => console.log(response))
  .catch(error => console.log('error', error));
