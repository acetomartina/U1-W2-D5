/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ["dog", "cat", "hamster", "redfish"];

for (i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

pets.sort();
console.log(pets);

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

pets.reverse();
console.log(pets);

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

const firstPet = pets.shift();
pets.push(firstPet);

console.log(pets); // non ha calcolato l'array originile ma quello ordinato nell'esercizio tre. Idk . . .

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];

const plates = ["AB123CD", "EF456GH", "IJ789KL"]; // le ho fatte generare random da chatGPT

const licensePlate = function (cars) {
  cars.forEach((car, index) => {
    // la funzione con la freccia l'ho studiata ieri sera dopo il debrief. Ci ho smanettato un po' ma credo di esserci e mi piace perché esce pulito (Secondo me). In attesa di feedback.
    cars.licensePlate = plates[index];
  });
};

licensePlate(cars);
console.log(cars);

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

const year = [2018, 2020, 2023];

const addYear = function (cars) {
  cars.forEach((car, index) => {
    car.year = year[index];
    car.trims.pop();
  });
};

// ho usato la stessa logica di prima (letteralmente copia e incolla). Se poi dovessi aver tempo, vorrei che li vedessimo insieme perché non sono sicura che in console stampi bene. Probabilmente è perché ho scelto tre valori diversi? E quindi avrei dovuto assegnarli singolarmente? Se ne avessi scelto uno per tutte e tre?
// soprattutto in console mi stampa di fila due righe con la targa (ma aprendoli gli anni ci sono).

addYear(cars);
console.log(cars);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/

const justTrims = [];

cars.forEach((car) => {
  justTrims.push(car.trims[0]); // push il primo di trims in justTrims
});

console.log(justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

for (let i = 0; i < cars.length; i++)
  if (cars[i].color[0].toLowerCase() === "b") console.log("Fizz.");
  else console.log("Buzz.");

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
];

// let i = 0;

// while (i < numericArray.length)
//  if (numericArray[i] <= 32) console.log(numericArray);
// non capisco come mai in console restituisce errore perché la i non è dichiarata nonostante la variabile i=0.

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
/* const charactersArray = ["g", "n", "u", "z", "d"];
const cPosition = [];

for (let i = 0; i < charactersArray.length; i++) {
  let position = cPosition;
  switch (charactersArray[i]) {
    case "a":
      position = 1;
      break;
    case "b":
      position = 2;
      break;
    case "c":
      position = 3;
      break;
    case "d":
      position = 4;
      break;
    case "e":
      position = 5;
      break;
    case "f":
      position = 6;
      break;
    case "g":
      position = 7;
      break;
    case "h":
      position = 8;
      break;
    case "i":
      position = 9;
      break;
    case "l":
      position = 10;
      break;
    case "m":
      position = 11;
      break;
    case "n":
      position = 12;
      break;
    case "o":
      position = 13;
      break;
    case "p":
      position = 14;
      break;
    case "q":
      position = 15;
      break;
    case "r":
      position = 16;
      break;
    case "s":
      position = 17;
      break;
    case "t":
      position = 18;
      break;
    case "u":
      position = 19;
      break;
    case "v":
      position = 20;
      break;
    case "z":
      position = 21;
      break;
    default:
      position = 0;
  }
  cPosition.push(Position);
}

console.log(cPosition);

Ti commento anche questo perché restituisce errore secondo cui position non è dichiarata. Ma lo è nello switch. */
