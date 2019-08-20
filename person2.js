//Create an English to Spanish dictionary. Provide the options below:
//Press 1 to list all English to Spanish translations,
// press 2 to list all Spanish to English translations,
// press 3 to enter a new English translation,
// press 4 to enter a new Spanish translation, and press 5 or 'q' to quit.

//Use an array for the English translation and a different array for the Spanish translation.
// Make sure both arrays are outside of the main function so it can be accessed anywhere in the program.
// Each word in the array should corrispond with the same word/index of the other array.

class Translate {
    constuctor(english, spanish){
        this.english = english;
        this.spanish = spanish;
    }
}

function translate (){
    let englisharray = ['Hello', 'Goodbye','Goodmorning','Goodnight'];
    let spanisharray1 = ['Hola', 'Adios', 'Buenosdias', 'Buenasnoches'];
    let newArray = [];
    for(let i = 0; i < spanisharray1.length; i++)
    {
        let instanceOfTranslate = new Translate(spanisharray1[i]);
        newArray.push(instanceOfTranslate);
    }
    for(let i = 0; i < englisharray.length; i++)
    {
        let instanceOfEnglish = new Translate(englisharray[i]);
        newArray.push(instanceOfEnglish);
    }

    console.log(newArray);
}


translate();










