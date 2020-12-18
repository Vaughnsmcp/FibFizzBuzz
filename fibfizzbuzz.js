function FizzBuzz(value1, value2) {
  let returnValue = "";
  for (let i = 1; i <= 100; i++) {
    if (i % value1 == 0 && i % value2 == 0) {
      returnValue += "FizzBuzz ";
    } else if (i % value1 == 0) {
      returnValue += "Fizz ";
    } else if (i % value2 == 0) {
      returnValue += "Buzz ";
    } else {
      returnValue += i + " ";
    }
  }
  return returnValue;
}
function Fibbonacci (){
 
  var f0=0 
  var f1=1
  let returnValue = "";
  for (let i = 2; i <=100; i++) {
    var v=f0+f1
    returnValue +=v+" "

  }
  return returnValue;

}


function buzzIt() {
  let output = "";
  let val1 = document.getElementById("Fizzvalue").value;
  let val2 = document.getElementById("Buzzvalue").value;
  // output = FizzBuzz(val1, val2);
  output = Fibbonacci()
  
  document.getElementById("results").innerHTML = output;
}
