alert("Test it bruh");


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
    user_choice = prompt(
      "Enter a number 1-4 or 'q' to quit"
    );

    switch (user_choice) {
      case "q":
        alert("you quit the program");
        break;
      case "1":
        prompt("Enter english word");
        break;
      case "2":
        alert("You hit 2");
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

// function english() {
//   user_input = prompt("Enter a english word to ")
//
//   switch (user_input) {
//     case:
//   }
// }

main();


function english_to_spanish() {

}

function spanish_to_english() {

}
