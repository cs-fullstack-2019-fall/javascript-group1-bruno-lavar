// alert("Test it bruh");


// Press 1 to list all English to Spanish translations,
// press 2 to list all Spanish to English translations,
// press 3 to enter a new English translation,
// press 4 to enter a new Spanish translation, and press
// 5 or 'q' to quit.

class Translate{
  constructor(english, spanish){
    this.name = english;
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
        prompt("Enter english word"); // this option should list all english words
        break;
      case "2":
        translate(); // this option should list all spanish words
        break;
      case "3":
        english_to_spanish(); // this option should let the user enter a new trandlation from english to spanish 
        break;
      case "4":
        alert("You hit 4"); // this option should let the user enter a new trandlation from spanish to english 
        break;
    }
  }
}

function translate (){
  // Make sure both arrays are outside of the main function so it can be accessed anywhere in the program
  // this array should be defined OUTSIDE of a function
    let englishArray = ['Hello', 'Goodbye','Goodmorning','Goodnight'];

    let newArray2 = [];



    for(let x = 0; x < englishArray.length; x++)
    {
        let instanceOfEnglish = new Translate(englishArray[x]); // this new object is not connected to you spanish objects
        newArray2.push(instanceOfEnglish);
    }
    console.log(newArray2);
    //
    // let newString = "";
    // newArray.forEach
    // (
    //   function(eachElement)
    //   {
    //     newString = newString + eachElement.english;
    //     console.log(newString);
    //   }
    // )

}

main();

function english_to_spanish() {
  // Make sure both arrays are outside of the main function so it can be accessed anywhere in the program
  // this array should be defined OUTSIDE of a function
  let spanishArray = ['Hola', 'Adios', 'Buenosdias', 'Buenasnoches'];
  let newArray = [];
  for(let i = 0; i < spanishArray.length; i++)
  {
      let instanceOfTranslate = new Translate(spanishArray[i]); // this new object is not connected to your english objects
      newArray.push(instanceOfTranslate);
  }
  console.log(newArray);
}

// function spanish_to_english() {
//
// }
