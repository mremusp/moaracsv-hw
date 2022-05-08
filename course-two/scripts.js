// 1. Creați o funcție care primește ca și parametru un număr și returnează dublul 
// său dacă numărul primit este impar, altfel returnează numărul scăzut cu 2 dacă 
// este par.

function logAsGroup(fnName, paramName,taskNr){
  console.group("Task #" + taskNr)
  console.log("Input value: " + paramName)
  console.log("Output value: " + fnName(paramName))
  console.groupEnd()
}

const inputTask1 = 17

const parImpar = function(inputNumber) {
  return (inputNumber % 2 != 0) ? (inputNumber * 2) : (inputNumber - 2)
}

logAsGroup(parImpar, inputTask1, 1)


// 2. Creați o funcție care stochează intr-un array doar numerele prime dintr-un array 
// primit ca si parametru. Parcurgeți array-ul folosind un “for loop”.

const inputTask2 = [1,1,2,3,4,7,9,11,14,19]

function onlyPrimes(inputArray) {
  let outputArray = []

  for(let i = 0; i < inputArray.length; i++) {
    let isPrimeNumber = true

    for(let j = 2; j < inputArray[i]; j++) {
      if (inputArray[i] % j == 0) {
        isPrimeNumber = false
        break
      }
    }

    if (isPrimeNumber) outputArray.push(inputArray[i])
  }

  return outputArray
}

logAsGroup(onlyPrimes, inputTask2, 2)


// 3. Creați o funcție care stochează intr-un array doar strings dintr-un array primit ca 
// si parametru. Parcurgeți array-ul folosind “forEach”.

const inputTask3 = [1, "1", "salut", 2, 6, true, "true"];

const onlyStrings = (inputArray) => {
  let outputArray = []

  inputArray.forEach((element) => {
    if (typeof element == "string") outputArray.push(element)
  })

  return outputArray
}

logAsGroup(onlyStrings, inputTask3, 3)


// 4. Creați o funcție care adună cifrele impare ale unui număr primit ca și parametru de tip 
// string folosind  “for loop” si keyword-ul “continue”.

const inputTask4 = "7891asdf3142"

const sumImpare = (inputString) => {
  let outputNumber = 0

  const inputArray = [...inputString]

  for(let i = 0; i < inputArray.length; i++) {
    if ( (Number(inputArray[i]) % 2 == 0) || isNaN(Number(inputArray[i])) ) continue

    outputNumber += Number(inputArray[i])
  }

  return outputNumber
}

logAsGroup(sumImpare, inputTask4, 4)


// 5. Creați un switch cu cel puțin 5 case-uri din care cel puțin 2 să aibă același rezultat, 
// după exemplul prezentat la curs.

function whatSeasonIs(inputMonth) {
  let season

  switch (inputMonth){
    case "January":
    case "February":
    case "December":
      season = "Winter"
      break
    case "March":
    case "April":
    case "May":
      season = "Spring"
      break
    case "June":
    case "July":
    case "August":
      season = "Summer"
      break
    case "September":
    case "October":
    case "November":
      season = "Autumn"
      break
    default:
      console.log("Not a valid month")
  }

  console.log("\nTask #4:\n" + inputMonth + " is in " + season)
}

whatSeasonIs("May")