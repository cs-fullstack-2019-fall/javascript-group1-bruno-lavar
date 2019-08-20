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

while(user_choice !== "q") {
  user_choice = prompt(
    "Enter a number 1-5 or 'q' to quit"
  );

  switch (user_choice) {
    case "q":
      alert("you quit the program");
      break;
    case "1":
      alert("You hit 1");
      break;
  }
}

// let user_choice;

// while(user_choice !== "6") {
//   user_choice = prompt(
//     "Enter a number 1-5 or 6 to quit"
//   );
//   switch (user_choice) {
//     case "6":
//       console.log("Later");
//     case "1":
//       alert(1);
//       break;
//     case "2":
//       alert(2);
//       break;
//     case "3":
//       alert(3);
//       break;
//     case "4":
//       alert(4);
//       break;
//     case "5":
//       alert(5);
//       break;
//   }
// }


// main();
