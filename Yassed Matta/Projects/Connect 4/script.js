/*var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
var btn5 = document.getElementById("btn5");
var btn6 = document.getElementById("btn6");
var btn7 = document.getElementById("btn7");
var btn8 = document.getElementById("btn8");
var btn9 = document.getElementById("btn9");
var btn10 = document.getElementById("btn10");
var btn11 = document.getElementById("btn11");
var btn12 = document.getElementById("btn12");
var btn13 = document.getElementById("btn13");
var btn14 = document.getElementById("btn14");
var btn15 = document.getElementById("btn15");
var btn16 = document.getElementById("btn16");
var btn17 = document.getElementById("btn17");
var btn18 = document.getElementById("btn18");
var btn19 = document.getElementById("btn19");
var btn20 = document.getElementById("btn20");
var btn21 = document.getElementById("btn21");
var btn22 = document.getElementById("btn22");
var btn23 = document.getElementById("btn23");
var btn24 = document.getElementById("btn24");
var btn25 = document.getElementById("btn25");
var btn26 = document.getElementById("btn26");
var btn27 = document.getElementById("btn27");
var btn28 = document.getElementById("btn28");
var btn29 = document.getElementById("btn29");
var btn30 = document.getElementById("btn30");
var btn31 = document.getElementById("btn31");
var btn32 = document.getElementById("btn32");
var btn33 = document.getElementById("btn33");
var btn34 = document.getElementById("btn34");
var btn35 = document.getElementById("btn35");
var btn36 = document.getElementById("btn36");
var btn37 = document.getElementById("btn37");
var btn38 = document.getElementById("btn38");
var btn39 = document.getElementById("btn39");
var btn40 = document.getElementById("btn40");
var btn41 = document.getElementById("btn41");
var btn42 = document.getElementById("btn42");*/

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

var cont = 0;

function slector (sel, rnd){

  var rnd = getRandomInt(1, 100); /* Generar un numero del 1-100 */

  if (rnd % 2 == 0){ /* Si es par le asigna un color */
    sel.style.backgroundColor = "#ff6464";
    cont = 2;
  }
  else {sel.style.backgroundColor = "#ffff99";
  cont =1;
}
}

playerselec.onclick = function () {
  slector (selector);
};

function contPar(btn) {
    if (cont % 2 == 0) {
        btn.style.backgroundColor = "#ff6464";
      } else btn.style.backgroundColor = "#ffff99";
      cont++;
}

btn1.onclick = function () {
  contPar(btn1);
};
btn2.onclick = function () {
  contPar(btn2);
};
btn3.onclick = function () {
  contPar(btn3);
};
btn4.onclick = function () {
  contPar(btn4);
};
btn5.onclick = function () {
  contPar(btn5);
};
btn6.onclick = function () {
  contPar(btn6);
};
btn7.onclick = function () {
  contPar(btn7);
};
btn8.onclick = function () {
  contPar(btn8);
};
btn9.onclick = function () {
  contPar(btn9);
};
btn10.onclick = function () {
  contPar(btn10);
};
btn11.onclick = function () {
  contPar(btn11);
};
btn12.onclick = function () {
  contPar(btn12);
};
btn13.onclick = function () {
  contPar(btn13);
};
btn14.onclick = function () {
  contPar(btn14);
};
btn15.onclick = function () {
  contPar(btn15);
};
btn16.onclick = function () {
  contPar(btn16);
};
btn17.onclick = function () {
  contPar(btn17);
};
btn18.onclick = function () {
  contPar(btn18);
};
btn19.onclick = function () {
  contPar(btn19);
};
btn20.onclick = function () {
  contPar(btn20);
};
btn21.onclick = function () {
  contPar(btn21);
};
btn22.onclick = function () {
  contPar(btn22);
};
btn23.onclick = function () {
  contPar(btn23);
};
btn24.onclick = function () {
  contPar(btn24);
};
btn25.onclick = function () {
  contPar(btn25);
};
btn26.onclick = function () {
  contPar(btn26);
};
btn27.onclick = function () {
  contPar(btn27);
};
btn28.onclick = function () {
  contPar(btn28);
};
btn29.onclick = function () {
  contPar(btn29);
};
btn30.onclick = function () {
  contPar(btn30);
};
btn31.onclick = function () {
  contPar(btn31);
};
btn32.onclick = function () {
  contPar(btn32);
};
btn33.onclick = function () {
  contPar(btn33);
};
btn34.onclick = function () {
  contPar(btn34);
};
btn35.onclick = function () {
  contPar(btn35);
};
btn36.onclick = function () {
  contPar(btn36);
};
btn37.onclick = function () {
  contPar(btn37);
};
btn38.onclick = function () {
  contPar(btn38);
};
btn39.onclick = function () {
  contPar(btn39);
};
btn40.onclick = function () {
  contPar(btn40);
};
btn41.onclick = function () {
  contPar(btn41);
};
btn42.onclick = function () {
  contPar(btn42);
};
