// alert("Test it bruh");


// Press 1 to list all English to Spanish translations,
// press 2 to list all Spanish to English translations,
// press 3 to enter a new English translation,
// press 4 to enter a new Spanish translation, and press
// 5 or 'q' to quit.

class Translate {
  constuctor(english, spanish){
    this.english = english;
    this.spanish = spanish;
  }
}

let user_choice;

function main() {
  while(user_choice !== "q") {
    user_choice = prompt("Enter a number 1-4 or 'q' to quit");
    switch (user_choice) {
      case "q":
        alert("you quit the program");
        break;
      case "1":
        prompt("Enter english word");
        break;
      case "2":
        translate();
        break;
      case "3":
        alert("You hit 3");
        break;
      case "4":
        alert("You hit 4");
        break;
    }
  }
}

function translate (){
    let englishArray = ['Hello', 'Goodbye','Goodmorning','Goodnight'];
    let spanishArray = ['Hola', 'Adios', 'Buenosdias', 'Buenasnoches'];
    let newArray = [];
    let newArray2 = [];
    for(let i = 0; i < spanishArray.length; i++)
    {
        let instanceOfTranslate = new Translate(spanishArray[i]);
        newArray.push(instanceOfTranslate);
    }
    console.log(newArray);
    for(let x = 0; x < englishArray.length; x++)
    {
        let instanceOfEnglish = new Translate(englishArray[x]);
        newArray2.push(instanceOfEnglish);
    }
    console.log(newArray2);

    let newString = "";
    newArray.forEach
    (
      function(eachElement)
      {
        newString = newString + eachElement.english;
        console.log(newString);
      }
    )

}

main();

// function english_to_spanish() {
//
// }
//
// function spanish_to_english() {
//
// }
