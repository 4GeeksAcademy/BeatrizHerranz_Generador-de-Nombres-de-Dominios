/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let pronombres = ["the", "our"];
  let adjetivos = ["great", "big"];
  let nombres = ["jogger", "racoon"];

  let dominios = [];
  //Primer bucle
  pronombres.forEach(pronombre => {
    //Segundo bucle
    adjetivos.forEach(adjetivo => {
      //Tercer bucle
      nombres.forEach(nombre => {
        //Unir elementos
        let resultado = pronombre + adjetivo + nombre + ".com";
        //Agregar elementos a la variable
        dominios.push(resultado);
        //Ver resultado en la consola
        console.log(dominios);
      });
    });
  });
};
