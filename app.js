function getNumber(numb){
    var num = document.getElementById("result")
    num.value +=numb;
}

function clearResult(){
    var num = document.getElementById("result")
    num.value ="0";
}


function getResult(){
    var num = document.getElementById("result")
    num.value =eval(num.value)
}

function percentage(){
var num = document.getElementById("result")
num.value = num.value / 100;
}

function Sqare(){
var num = document.getElementById("result")
num.value = eval(num.value * num.value);
}


function Cube(){
  var num = document.getElementById("result")
  num.value = eval(num.value * num.value * num.value);
  }

function Factorial(){
    var num = document.getElementById("result")
    let number = 1;
    if (num.value === 0) {
        num.value = '1';
    } else if (num.value < 0) {
        num.value = NaN;
    } else {
      let number = 1;
      for (let i = num.value; i > 0; i--) {
        number *= i;
      }
      num.value = number;
    }

    }


function Exponent(){
    var num = document.getElementById("result")
    num.value = Math.exp(num.value);
}

function SinFunction(){
  var num = document.getElementById("result")
  num.value = Math.sin(num.value);
}

function CosFunction(){
  var num = document.getElementById("result")
  num.value = Math.cos(num.value);
}

function TanFunction(){
  var num = document.getElementById("result")
  num.value = Math.tan(num.value);
}

function LogFunction(){
  var num = document.getElementById("result")
  num.value = Math.tan(num.value);
}

function LnFunction(){
  var num = document.getElementById("result")
  num.value = Math.log(num.value);
}

function SqrFunction(){
  var num = document.getElementById("result")
  num.value = Math.sqrt(num.value);
}


function RadiusFunction(){
  var num = document.getElementById("result")
  num.value = num.value * (Math.PI / 180);

}


