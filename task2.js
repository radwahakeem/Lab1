 var name=prompt("what is your name?");

while(isFinite(name)){
var name=prompt("what is your name?");
}
document.write("name is ",name);
document.write("<br>");

 var BD=prompt("what is your Birthday?");
 while(isNaN(BD))
 var BD=prompt("what is your Birthday?");
while(isNaN(BD) || BD>2010){
var BD=prompt("what is your Birthday?");

}
document.write("BD is ",BD);
document.write("<br>");

var age=2022-BD;
document.write(" Age : ",age);
      