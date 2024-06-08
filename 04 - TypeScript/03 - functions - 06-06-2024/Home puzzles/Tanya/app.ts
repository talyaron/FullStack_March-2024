                    
                    /* Birthday calculator */

//load after page fully loads

document.addEventListener('DOMContentLoaded', () => {
    let birthdayForm = document.getElementById('birthdayForm') as HTMLFormElement;
    let results = document.getElementById('result') as HTMLDivElement;
    // Check if the form is intact
    if (!birthdayForm || !results) {
        results.innerHTML = 'Huston, we have a problem!';
        results.classList.add('error');
        return;
    }
    // Form submission - prevent auto submission
    birthdayForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Handle submission from form
        let nameInput = document.getElementById('name') as HTMLInputElement;
        let birthdayInput = document.getElementById('birthday') as HTMLInputElement;
        // Handle input
        let name = nameInput.value.trim();
        let birthdayString = birthdayInput.value.trim();
        // Input validation
        if (!name) {
            results.innerHTML = 'Why won\'t you play with me?';
            results.classList.add('error');
            return;
        }
        // If the birthday wasn't entered
        if (!birthdayString) {
            results.innerHTML = `Hello ${name}, are you a spy?`;
            results.classList.add('error');
            return;
        }
        try {
            let birthday = new Date(birthdayString);
            // No date entered
            if (isNaN(birthday.getTime())) {
                results.innerHTML = `Hello ${name}, please enter a valid date.`;
                results.classList.add('error');
                return;
            }
            // Calculate birthday call function
            let age = calculateAge(birthday);
            // Birthday in the future - weren't born yet
            if (birthday.getTime() > Date.now()) {
                results.innerHTML = 'Are you trying to mess with me, time traveler?';
                results.classList.add('error');
                return;
            }
            // Output
            results.innerHTML = `Hello ${name}, you are ${age} years old.`;
            results.classList.remove('error');
        } catch (error) {
            results.innerHTML = (error as Error).message;
            results.classList.add('error');
        }
    });
});

// Function which calculates current age from birthday input
function calculateAge(birthday: Date): number {
    let ageCalculation = Date.now() - birthday.getTime();
    let ageDate = new Date(ageCalculation);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}



                 /*       Concatenation form            */


//load after page fully loads                
document.addEventListener('DOMContentLoaded', () => {
    // Check if the form is intact
    let form = document.getElementById("ConcatenationForm");
    if (!form) {
        let results2 = document.getElementById("result2");
        if (results2) {
            results2.innerHTML = "Check the code. Something's missing";
            results2.classList.add('error');
        }
        return;
    }
    // Form submission - prevent auto submission
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        try {
            // Handle submission from form
            let firstWordInput = document.getElementById("firstWord") as HTMLInputElement | null;
            let secondWordInput = document.getElementById("secondWord") as HTMLInputElement | null;
            
            if (!firstWordInput || !secondWordInput) {
                throw new Error("Input elements not found");
            }
            // Get trimmed values
            let firstWord = firstWordInput.value.trim();
            let secondWord = secondWordInput.value.trim();

            // Clear previous error styles
            firstWordInput.classList.remove('inputError');
            secondWordInput.classList.remove('inputError');
            let results2 = document.getElementById("result2");
            // Handle input validation
            if (!firstWord && !secondWord) {
                if (results2) {
                    results2.innerHTML = "Please enter both words.";
                    results2.classList.add('error');
                }
                firstWordInput.focus();
                firstWordInput.classList.add('inputError');
                secondWordInput.classList.add('inputError');
                return;
            } else if (!firstWord) {
                if (results2) {
                    results2.innerHTML = "Please enter the first word.";
                    results2.classList.add('error');
                }
                firstWordInput.focus();
                firstWordInput.classList.add('inputError');
                return;
            } else if (!secondWord) {
                if (results2) {
                    results2.innerHTML = "Please enter the second word.";
                    results2.classList.add('error');
                }
                secondWordInput.focus();
                secondWordInput.classList.add('inputError');
                return;
            }
            // Handle input
            let concatenated = concatenateWords(firstWord, secondWord);
            // Output
            if (results2) {
                results2.innerText = concatenated;
                results2.classList.remove('error');
            } else {
                throw new Error("Check the code. Something's missing");
            }
        } catch (error) {
            // Print out error
            let results2 = document.getElementById("result2");
            if (results2) {
                results2.innerText = (error as Error).message;
                results2.classList.add('error');
            }
        }
    });
     // Function which takes 2 words, concatenates them with a space, and returns a new string
     function concatenateWords(firstWord: string, secondWord: string): string {
        return firstWord + " " + secondWord;
    }
});


                            /* Capitalize me */


//load after page fully loads
document.addEventListener('DOMContentLoaded', () => {
    let form = document.getElementById('CapitalForm');
    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();
            try {
                let sentenceInput = document.getElementById('sentence') as HTMLTextAreaElement;
                let sentence = sentenceInput.value.trim();
                // Handle no input
                if (!sentence) {
                    throw new Error('Y U no cooperate?');
                }
                let capitalizedSentence = capitalizeMe(sentence);
                let results3 = document.getElementById('result3');
                if (results3) {
                    results3.innerText = capitalizedSentence;
                    results3.classList.remove('error'); 
                } else {
                    throw new Error('Result div not found.');
                }
            } catch (error) {
                let results3 = document.getElementById('result3');
                if (results3) {
                    results3.innerText = (error as Error).message;
                    results3.classList.add('error'); 
                }
            }
        });
    } else {
        let results3 = document.getElementById('result3');
        if (results3) {
            results3.innerHTML = "Check the code. Something's missing";
            results3.classList.add('error');
        }
    }
});

// Function to capitalize the first letter in a sentence.
function capitalizeMe(sentence: string): string {
    // Takes the first letter, capitalizes it and then concatenates the rest of the sentence without the first letter.
    return sentence.charAt(0).toUpperCase() + sentence.slice(1);
}



/********************************************************************************** */

                        /* changing timed background */

window.onload = function () {
     var backgroundImg=["https://images.unsplash.com/photo-1476820865390-c52aeebb9891?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                       "https://images.unsplash.com/photo-1519751138087-5bf79df62d5b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                       "https://plus.unsplash.com/premium_photo-1667761634654-7fcf176434b8?q=80&w=2037&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                       "https://images.unsplash.com/photo-1495195129352-aeb325a55b65?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                       ]

       setInterval(changeImage, 5000);
      function changeImage() {   
       var i = Math.floor((Math.random() * 3));

       document.body.style.backgroundImage = "url('"+backgroundImg[i]+"')";

     }
   }