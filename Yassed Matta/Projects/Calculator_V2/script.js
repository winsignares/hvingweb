var number1 = "";
var number2 = "";
var result = null;
var operation = null;
var cont = 1;
var clicked1 = false;
var clicked2 = false;

function actBtn(valor, cont) {
  if (cont == 1) {
    number1 = number1 + valor;
    document.getElementById("num1").innerHTML = number1;
  } else {
    number2 = number2 + valor;
    document.getElementById("num2").innerHTML = number2;
  }
}

function string_to_number(a) {
  var Value = +(a);
  return Value;
}

btn_1.onclick = function () {
  actBtn("1", cont);
};
btn_2.onclick = function () {
  actBtn("2", cont);
};
btn_3.onclick = function () {
  actBtn("3", cont);
};
btn_4.onclick = function () {
  actBtn("4", cont);
};
btn_5.onclick = function () {
  actBtn("5", cont);
};
btn_6.onclick = function () {
  actBtn("6", cont);
};
btn_7.onclick = function () {
  actBtn("7", cont);
};
btn_8.onclick = function () {
  actBtn("8", cont);
};
btn_9.onclick = function () {
  actBtn("9", cont);
};
btn_0.onclick = function () {
  actBtn("0", cont);
};

//Presiona el boton - (Resta ambos numeros)
btn_minus.onclick = function () {
  operation = "minus";
  document.getElementById("oper").innerHTML = "-";
  cont = 2;
};

//Presiona el boton + (Suma ambos numeros)
btn_plus.onclick = function () {
  operation = "plus";
  document.getElementById("oper").innerHTML = "+";
  cont = 2;
};

//Presiona el boton x (Multiplica ambos numeros)
btn_x.onclick = function () {
  operation = "x";
  document.getElementById("oper").innerHTML = "*";
  cont = 2;
};

//Presiona el boton / (Divide ambos numeros)
btn_divide.onclick = function () {
  operation = "divide";
  document.getElementById("oper").innerHTML = "/";
  cont = 2;
};

// Presiona boton % (Convertir el numero en un porcentaje 100 = 1, 20 = 0.2)
btn_percent.onclick = function () {
  if (cont == 1){
  number1 = round(number1)*0.01;
  actBtn("", cont);
  cont = 2;
  } else {
    number2 = round(number2)*0.01;
  actBtn("", cont);
    cont =1;
  }
};

// Preciona boton DEL (Elimina el ultimo numero)
btn_del.onclick = function () {
  operation = "del";
  if (cont == 1) {
    number1 = "";
    document.getElementById("num1").innerHTML = "";
    document.getElementById("oper").innerHTML = "";
    console.log("Numero 1 eliminado");
    console.log("Contador"+cont);
  } else {
    number2 = "";
    document.getElementById("num2").innerHTML = "";
    console.log("Numero 2 eliminado");
    console.log("Contador"+cont);
  }
};

//Priciona boton AC (Elimina toda la ecuacion)
btn_ac.onclick = function () {
number1 = "";
number2 = "";
result = null;
operation = null;
cont = 1;
clicked1 = false;
clicked2 = false;
  document.getElementById("display_r").innerHTML = "";
  document.getElementById("num1").innerHTML = "";
  document.getElementById("num2").innerHTML = "";
  document.getElementById("oper").innerHTML = "";
};

//Presiona el boton . (Para agregar decimales a el numero)
btn_point.onclick = function () {
    if (cont == 1 && clicked1 == false){
    actBtn(".", cont);
    clicked1 = true
    }
    if (cont == 2 && clicked2 == false){
      actBtn(".", cont);
      clicked2 = true
    }
};

// Presiona boton = (Da el resultado de la funcion)
btn_equals.onclick = function () {
  switch (operation) {
    case "minus":
      result = string_to_number(number1) - string_to_number(number2);
      break;
    case "plus":
      result = string_to_number(number1) + string_to_number(number2);
      break;
    case "x":
      result =string_to_number(number1) * string_to_number(number2);
      break;
    case "divide":
      result = string_to_number(number1) / string_to_number(number2);
      break;
      default: result = number1;
  }
  result = (result).toFixed(2).replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/,'$1');
  document.getElementById("display_r").innerHTML = result;
};


// Arreglar el DEL
// Cuando tenga operando 2 terminos y quera agregar otra operacion, el resultado se coloca en el div number1
// Agregar la cadena de oiperaciones, cuando realizo una operacion y quiero sumarle otro el numero aparece en el primer div como numero1

