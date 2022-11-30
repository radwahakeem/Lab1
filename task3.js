  var x = prompt("Enter the first number: ");
var y = prompt("Enter the second number: ");
var z = prompt("Enter the third number: ");


var equation = y * y - 4 * x * z;
if (equation > 0){
root1 = (-y + Math.sqrt(equation)) / (2 * x);
root2 = (-y - Math.sqrt(equation)) / (2 * x);

    
    document.write(root1, "and", root2);

}
