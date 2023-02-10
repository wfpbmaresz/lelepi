/*
File: app.js
Author: Szőllősi-Maruzs Eszter
Copyright: 2023, Szőllősi-Maruzs Eszter
Group: Szoft I/1-E
Date: 2023-02-09
Github: https://github.com/wfpbmaresz
Licenc: GNU GPL
*/


const calcButton = document.querySelector("#calcButton");
const heightA = document.querySelector("#heightA");
const heightB = document.querySelector("#heightB");
const heightC = document.querySelector("#heightC");
const area = document.querySelector("#area");

// var vagy const????
//A változók csak egyszer kerülnek inicializálásra, és értékük nem változik, ezért a const megfelelőbb opció lehet.
//A var a változó értékének módosítását is lehetővé teszi, amire nincs szükség. Az adatok változása esetén új paralelepipedont kell számítani, 
//így a változók értékét nem kell módosítani.
//A const a kód javíthatóságát, a hibakeresést, és az átláthatóságot is elősegíti.

calcButton.addEventListener("click", () => {
  const a = parseFloat(heightA.value);
  const b = parseFloat(heightB.value);
  const c = parseFloat(heightC.value);
  const volume = a * b * c;
  area.value = volume;
});


console.log("Szőllősi-Maruzs Eszter, Szoft 1/I-E, 2023.02.09.")