#BackEnd
##Login 

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

##Register:
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