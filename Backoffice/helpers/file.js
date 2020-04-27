var fs = require('fs');
const file = async (fileName, mode, toSave) => {
  var msg=" ";
  if(Array.isArray(toSave))
    msg=toSave.join('\r\n')+'\r\n';
    else
    msg=toSave+'\r\n';
    if(mode.toString()=="r")//open to read || If the file does not exist, returns NULL.
  { 
   
      var a =await fs.readFileSync("./files/"+fileName+".log", 'utf8').split('\r\n');
      var str=[];
      if(a==null)
      return null;
      if(toSave !=""){
      for(var x=0;x<a.length;x++)
      {
        if(a[x].toString().indexOf(toSave)!=-1){
        str.push(a[x].toString());
        console.log("yay");
        }
      }
      return str; 
    }
    else
    return a;
    
}
else if(mode.toString()=="ri")//open to read || If the file does not exist, returns NULL || returns line index in whitch the subString is located.
{ 
 
    var a =await fs.readFileSync("./files/"+fileName+".log", 'utf8').split('\r\n');
    var str=[];
    if(toSave !="" ||a==null){
    for(var x=0;x<a.length;x++)
    {
      if(a[x].toString().indexOf(toSave)!=-1){
      str.push(x.toString());
      console.log("yay");
      }
    }
    return str; 
  }
  else
  return null;
  
}
else if(mode.toString()=="ri+")//open to read || If the file does not exist, returns NULL || returns lines in whitch corresponds to the required indexes (Ex: 0,1,2).
{ 
 
    var a =await fs.readFileSync("./files/"+fileName+".log", 'utf8').split('\r\n');
    var str=[];
    if(toSave !="" ||a==null){
      var read= toSave.split(",");
    for(var x=0;x<a.length;x++)
    {
      if(read.includes(x+""))
      str.push(a[x].toString());
      }
    
    return str; 
  }
  else
  return null;
  
}
else if(mode.toString()=="w")//replaces the specified file and content if it exists. || If the file does not exist, a new file, containing the specified content, will be created
{
    return fs.writeFileSync("./files/"+fileName+".log", msg);
}
else if(mode.toString()=="a")//appends specified content to a file. || If the file does not exist, the file will be created
{
  
  return fs.appendFileSync("./files/"+fileName+".log", msg);
}
else if(mode.toString()=="d")//deletes the every line that contains the value of toSave
{ 
 
    var a =await fs.readFileSync("./files/"+fileName+".log", 'utf8').split('\r\n');
    var str=[];
    if(toSave !="" ){
    for(var x=0;x<a.length;x++)
    {
      if(a[x].toString().indexOf(toSave)==-1){
      str.push(a[x].toString());
      }
    }
     fs.writeFileSync("./files/"+fileName+".log", str.join('\r\n')+'\r\n');
    return 1;
  }
  else
  return -1;
}
else if(mode.toString()=="di")//deletes all indexes example (1,2,3)
{ 
 
    var a =await fs.readFileSync("./files/"+fileName+".log", 'utf8').split('\r\n');
    var str=[];
    if(toSave !=""){
     var delet= toSave.split(",");
    for(var x=0;x<a.length;x++)
    {
      if(delet.includes(x+"")==false)
      str.push(a[x].toString());
      }
     if(str.length!=-1){
      fs.writeFileSync("./files/"+fileName+".log", str.join('\r\n')+'\r\n');
      return 1;}
      else
      return -1;
    }
    return -1;
}
else if(mode.toString()=="fl")//returns the nunber of lines in the folder starting from 1
{ 
 
    var a =await fs.readFileSync("./files/"+fileName+".log", 'utf8').split('\r\n');
    if(a!=null)
    return a.length;
    else 
    return null;
}
else
{
return false;
}

}

module.exports = file;

/*
var a = await file(fileName, "r",""); - read the file and output ; a is an array that each position is a line
await file(fileName, "w",toSave); - overrites or creates a new file (tosave can be a String or array)
await file(fileName, "a",toSave); - append to the end or creates a new file (tosave can be a String or array)
*/



/*
//log example
var d = new Date();
await file("logs/"+d.getFullYear()+"_"+d.getMonth()+"_"+d.getDate(), "a","para guardar");
//error example
var d = new Date();
await file("error/"+d.getFullYear()+"_"+d.getMonth()+"_"+d.getDate(), "a","para guardar");
*/