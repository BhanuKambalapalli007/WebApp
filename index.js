// /**function wordToNumber(word) {
//     const numberWords = {
//         'zero': 0, 'one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5,
//         'six': 6, 'seven': 7, 'eight': 8, 'nine': 9, 'ten': 10, 'eleven': 11,
//         'twelve': 12, 'thirteen': 13, 'fourteen': 14, 'fifteen': 15, 'sixteen': 16,
//         'seventeen': 17, 'eighteen': 18, 'nineteen': 19, 'twenty': 20, 'thirty': 30,
//         'forty': 40, 'fifty': 50, 'sixty': 60, 'seventy': 70, 'eighty': 80, 'ninety': 90,
//         'hundred': 100, 'thousand': 1000, 'lakh': 100000, 'lakhs': 100000, 'million': 1000000
//     };
//     const ignoreWords = new Set(['rupees', 'rupee', 'only', 'and']);
//     if (typeof word !== 'string' || !word.trim()) {
//         return "Invalid input. Please provide a valid number in words.";
//     }
//     const words = word.toLowerCase().replace(/-/g, ' ').replace(/ and /g, ' ').split(/\s+/);
//     let total = 0;
//     let current = 0;
//     let isPaise = false;

//     for (const w of words) {
//         if (w === 'paise') { 
//             isPaise = true;
//             continue;
//         }

//         if (ignoreWords.has(w)) { 
//             continue;
//         }

//         if (numberWords.hasOwnProperty(w)) {  
//             const num = numberWords[w];

//             if (num === 100) {
//                 if (current === 0) {
//                     current = 1; 
//                 }
//                 current *= num;
//             } else if (num >= 1000) { 
//                 current *= num;
//                 total += current;
//                 current = 0;
//             } else {
//                 current += num;
//             }
//         } else {
//             return `Invalid word detected: '${w}'. Please enter a valid number in words.`;
//         }
//     }

//     total += current;  

//     if (isPaise) {
//         total /= 100;
//     }

//     return total.toFixed(2);  
// }



// async function fetchDataFromJSONServer() {

//     try{
//         const response = await fetch('http://localhost:3000/userInput');
//         if(!response.ok){
//             throw new Error("Failed to fetch data from the server");

//         }

//         const data = await response.json();
//         //console.log(data);
//         displayDataInCards(data);
//     } catch(error){
//         console.error("Error:",error);
//     }
    
// }



// function displayDataInCards(data){
//     let htmlString = ``;
//     data.forEach(item =>{
//         htmlString =htmlString+ `
//         <div class = "card-content">
//         <p><strong>Input:</strong>${item.input}</p>
//          <p><strong>Output:</strong>${item.output}</p>
//           <p><small>${new Date(item.timestamp).toLocaleString()}</small></p>
//           </div>`;

//     });
//     document.getElementById("history").innerHTML = htmlString
// }


// async function saveToJSONServer(input,output) {
//     try{

//         const response = await fetch('http://localhost:3000/userInput',{
//             method:'POST',
//             headers:{
//                 'Content-Type':'application/json'
//             },
//             body:JSON.stringify({
//                 input:input,
//                 output:output,
//                 timestamp : new Date().toISOString()
//             })
//         });

//         if(!response.ok){
//             throw new Error("Failed to save data into the server");
//         }
//         console.log("Data Saved Succesfully");
//     }catch(error){
//         console.error("Error",error);
//     }
// }




// function convertWordToNumber() {
    
//     const inputWord = document.getElementById('text1').value;
//     const outputElement = document.getElementById('result');
//     const outputNumber = wordToNumber(inputWord);
//     outputElement.textContent = `The numerical value is: ${outputNumber}`;
//     outputElement.style.display = "block";
//     outputElement.style.opacity = "1";
//     setTimeout(() => {
//         outputElement.style.opacity = "0"; // Fades out the result
//         setTimeout(() => {
//             outputElement.style.display = "none"; // Hides it after fade-out
//         }, 500); // Wait for fade-out to complete
//     }, 5000);
//     saveToJSONServer(inputWord,outputNumber);
    
// }**/
// function wordToNumber(word) {
//     const numberWords = {
//         'zero': 0, 'one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5,
//         'six': 6, 'seven': 7, 'eight': 8, 'nine': 9, 'ten': 10, 'eleven': 11,
//         'twelve': 12, 'thirteen': 13, 'fourteen': 14, 'fifteen': 15, 'sixteen': 16,
//         'seventeen': 17, 'eighteen': 18, 'nineteen': 19, 'twenty': 20, 'thirty': 30,
//         'forty': 40, 'fifty': 50, 'sixty': 60, 'seventy': 70, 'eighty': 80, 'ninety': 90,
//         'hundred': 100, 'thousand': 1000, 'lakh': 100000, 'million': 1000000
//     };
//     const ignoreWords = new Set(['rupees', 'rupee', 'only', 'and']);
    
//     if (typeof word !== 'string' || !word.trim()) {
//         return "Invalid input. Please provide a valid number in words.";
//     }
    
//     const words = word.toLowerCase().replace(/-/g, ' ').split(/\s+/);
//     let total = 0, current = 0, isPaise = false;

//     for (const w of words) {
//         if (ignoreWords.has(w)) continue; 

//         if (w === 'paise') {
//             isPaise = true;
//             continue;
//         }

//         if (numberWords.hasOwnProperty(w)) {
//             const num = numberWords[w];

//             if (num === 100) {
//                 current = current === 0 ? 1 : current;
//                 current *= num;
//             } else if (num >= 1000) {
//                 current *= num;
//                 total += current;
//                 current = 0;
//             } else {
//                 current += num;
//             }
//         } else {
//             return `Invalid word detected: '${w}'. Please enter a valid number in words.`;
//         }
//     }

//     total += current;
//     if (isPaise) total /= 100;

//     return total.toFixed(2);
// }


// async function fetchDataFromJSONServer() {
//     try {
//         const response = await fetch('http://localhost:3000/userInput');
//         if (!response.ok) throw new Error("Failed to fetch data from the server");

//         const data = await response.json();
//         displayDataInCards(data);
//     } catch (error) {
//         console.error("Error:", error);
//     }
// }


// function displayDataInCards(data) {
//     let htmlString = "";
//     data.forEach(item => {
//         htmlString += `
//         <div class="card-content">
//             <p><strong>Input:</strong> ${item.input}</p>
//             <p><strong>Output:</strong> ${item.output}</p>
//             <p><small>${new Date(item.timestamp).toLocaleString()}</small></p>
//         </div>`;
//     });
//     document.getElementById("history").innerHTML = htmlString;
// }


// async function saveToJSONServer(input, output) {
//     if (output.includes("Invalid")) return; // Prevent saving invalid inputs

//     try {
//         const response = await fetch('http://localhost:3000/userInput', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({
//                 input: input,
//                 output: output,
//                 timestamp: new Date().toISOString()
//             })
//         });

//         if (!response.ok) throw new Error("Failed to save data into the server");

//         console.log("Data Saved Successfully");
//     } catch (error) {
//         console.error("Error", error);
//     }
// }


// function convertWordToNumber() {
//     const inputWord = document.getElementById('text1').value.trim();
//     const outputElement = document.getElementById('result');

//     if (!inputWord) {
//         outputElement.textContent = "Please enter a valid number in words.";
//         outputElement.style.display = "block";
//         return;
//     }

//     const outputNumber = wordToNumber(inputWord);
//     outputElement.innerText = `The numerical value is: ${outputNumber}`;
//     outputElement.style.display = "block";
//     outputElement.style.opacity = "1";

//     // setTimeout(() => {
//     //     outputElement.style.opacity = "0";
//     //     setTimeout(() => {
//     //         outputElement.style.display = "none";
//     //     }, 5000);
//     // }, 5000);

//     saveToJSONServer(inputWord, outputNumber);
// }


// function wordToNumber(word) {
//     const numberWords = {
//         'zero': 0, 'one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5,
//         'six': 6, 'seven': 7, 'eight': 8, 'nine': 9, 'ten': 10, 'eleven': 11,
//         'twelve': 12, 'thirteen': 13, 'fourteen': 14, 'fifteen': 15, 'sixteen': 16,
//         'seventeen': 17, 'eighteen': 18, 'nineteen': 19, 'twenty': 20, 'thirty': 30,
//         'forty': 40, 'fifty': 50, 'sixty': 60, 'seventy': 70, 'eighty': 80, 'ninety': 90,
//         'hundred': 100, 'thousand': 1000, 'lakh': 100000, 'million': 1000000
//     };
//     const ignoreWords = new Set(['rupees', 'rupee', 'only', 'and']);

//     if (typeof word !== 'string' || !word.trim()) {
//         return "Invalid input. Please provide a valid number in words.";
//     }

//     const words = word.toLowerCase().replace(/-/g, ' ').split(/\s+/);
//     let total = 0, current = 0, isPaise = false;

//     for (const w of words) {
//         if (ignoreWords.has(w)) continue;

//         if (w === 'paise') {
//             isPaise = true;
//             continue;
//         }

//         if (numberWords.hasOwnProperty(w)) {
//             const num = numberWords[w];

//             if (num === 100) {
//                 current = current === 0 ? 1 : current;
//                 current *= num;
//             } else if (num >= 1000) {
//                 current *= num;
//                 total += current;
//                 current = 0;
//             } else {
//                 current += num;
//             }
//         } else {
//             return `Invalid word detected: '${w}'. Please enter a valid number in words.`;
//         }
//     }

//     total += current;
//     if (isPaise) total /= 100;

//     return total.toFixed(2);
// }

// // Function to fetch data from JSON server
// async function fetchDataFromJSONServer() {
//     try {
//         const response = await fetch('http://localhost:3000/userInput');
//         if (!response.ok) throw new Error("Failed to fetch data from the server");

//         const data = await response.json();
//         displayDataInCards(data);
//     } catch (error) {
//         console.error("Error:", error);
//     }
// }

// // Function to display data in UI
// function displayDataInCards(data) {
//     const htmlString = data.map(item => `
//         <div class="card-content">
//             <p><strong>Input:</strong> ${item.input}</p>
//             <p><strong>Output:</strong> ${item.output}</p>
//             <p><small>${new Date(item.timestamp).toLocaleString()}</small></p>
//         </div>
//     `).join('');
    
//     document.getElementById("history").innerHTML = htmlString;
// }

// // Function to save data to JSON server
// async function saveToJSONServer(input, output) {
//     if (output.includes("Invalid")) return; // Prevent saving invalid inputs

//     try {
//         const response = await fetch('http://localhost:3000/userInput', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({
//                 input: input,
//                 output: output,
//                 timestamp: new Date().toISOString()
//             })
//         });

//         if (!response.ok) throw new Error("Failed to save data into the server");

//         console.log("Data Saved Successfully");
//     } catch (error) {
//         console.error("Error", error);
//     }
// }

// // Function to convert words to numbers
// function convertWordToNumber() {
//     const inputWord = document.getElementById('text1').value.trim();
//     const outputElement = document.getElementById('result');
//     let outputNumber = "Invalid input"; // Default value in case of empty input

//     if (!inputWord) {
//         outputElement.textContent = "Please enter a valid number in words.";
//     } else {
//         outputNumber = wordToNumber(inputWord);
//         outputElement.textContent = `The numerical value is: ${outputNumber}`;
//     }

//     saveToJSONServer(inputWord, outputNumber); // Now, outputNumber is always defined

//     // Ensure the result is shown without re-triggering visibility changes
//     outputElement.style.display = "block";
//     outputElement.style.opacity = "1";
// }

// /**function wordToNumber(word) {
//     const numberWords = {
//         'zero': 0, 'one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5,
//         'six': 6, 'seven': 7, 'eight': 8, 'nine': 9, 'ten': 10, 'eleven': 11,
//         'twelve': 12, 'thirteen': 13, 'fourteen': 14, 'fifteen': 15, 'sixteen': 16,
//         'seventeen': 17, 'eighteen': 18, 'nineteen': 19, 'twenty': 20, 'thirty': 30,
//         'forty': 40, 'fifty': 50, 'sixty': 60, 'seventy': 70, 'eighty': 80, 'ninety': 90,
//         'hundred': 100, 'thousand': 1000, 'lakh': 100000, 'lakhs': 100000, 'million': 1000000
//     };
//     const ignoreWords = new Set(['rupees', 'rupee', 'only', 'and']);
//     if (typeof word !== 'string' || !word.trim()) {
//         return "Invalid input. Please provide a valid number in words.";
//     }
//     const words = word.toLowerCase().replace(/-/g, ' ').replace(/ and /g, ' ').split(/\s+/);
//     let total = 0;
//     let current = 0;
//     let isPaise = false;

//     for (const w of words) {
//         if (w === 'paise') { 
//             isPaise = true;
//             continue;
//         }

//         if (ignoreWords.has(w)) { 
//             continue;
//         }

//         if (numberWords.hasOwnProperty(w)) {  
//             const num = numberWords[w];

//             if (num === 100) {
//                 if (current === 0) {
//                     current = 1; 
//                 }
//                 current *= num;
//             } else if (num >= 1000) { 
//                 current *= num;
//                 total += current;
//                 current = 0;
//             } else {
//                 current += num;
//             }
//         } else {
//             return `Invalid word detected: '${w}'. Please enter a valid number in words.`;
//         }
//     }

//     total += current;  

//     if (isPaise) {
//         total /= 100;
//     }

//     return total.toFixed(2);  
// }



// async function fetchDataFromJSONServer() {

//     try{
//         const response = await fetch('http://localhost:3000/userInput');
//         if(!response.ok){
//             throw new Error("Failed to fetch data from the server");

//         }

//         const data = await response.json();
//         //console.log(data);
//         displayDataInCards(data);
//     } catch(error){
//         console.error("Error:",error);
//     }
    
// }



// function displayDataInCards(data){
//     let htmlString = ``;
//     data.forEach(item =>{
//         htmlString =htmlString+ `
//         <div class = "card-content">
//         <p><strong>Input:</strong>${item.input}</p>
//          <p><strong>Output:</strong>${item.output}</p>
//           <p><small>${new Date(item.timestamp).toLocaleString()}</small></p>
//           </div>`;

//     });
//     document.getElementById("history").innerHTML = htmlString
// }


// async function saveToJSONServer(input,output) {
//     try{

//         const response = await fetch('http://localhost:3000/userInput',{
//             method:'POST',
//             headers:{
//                 'Content-Type':'application/json'
//             },
//             body:JSON.stringify({
//                 input:input,
//                 output:output,
//                 timestamp : new Date().toISOString()
//             })
//         });

//         if(!response.ok){
//             throw new Error("Failed to save data into the server");
//         }
//         console.log("Data Saved Succesfully");
//     }catch(error){
//         console.error("Error",error);
//     }
// }




// function convertWordToNumber() {
    
//     const inputWord = document.getElementById('text1').value;
//     const outputElement = document.getElementById('result');
//     const outputNumber = wordToNumber(inputWord);
//     outputElement.textContent = `The numerical value is: ${outputNumber}`;
//     outputElement.style.display = "block";
//     outputElement.style.opacity = "1";
//     setTimeout(() => {
//         outputElement.style.opacity = "0"; // Fades out the result
//         setTimeout(() => {
//             outputElement.style.display = "none"; // Hides it after fade-out
//         }, 500); // Wait for fade-out to complete
//     }, 5000);
//     saveToJSONServer(inputWord,outputNumber);
    
// }**/
// function wordToNumber(word) {
//     const numberWords = {
//         'zero': 0, 'one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5,
//         'six': 6, 'seven': 7, 'eight': 8, 'nine': 9, 'ten': 10, 'eleven': 11,
//         'twelve': 12, 'thirteen': 13, 'fourteen': 14, 'fifteen': 15, 'sixteen': 16,
//         'seventeen': 17, 'eighteen': 18, 'nineteen': 19, 'twenty': 20, 'thirty': 30,
//         'forty': 40, 'fifty': 50, 'sixty': 60, 'seventy': 70, 'eighty': 80, 'ninety': 90,
//         'hundred': 100, 'thousand': 1000, 'lakh': 100000, 'million': 1000000
//     };
//     const ignoreWords = new Set(['rupees', 'rupee', 'only', 'and']);
    
//     if (typeof word !== 'string' || !word.trim()) {
//         return "Invalid input. Please provide a valid number in words.";
//     }
    
//     const words = word.toLowerCase().replace(/-/g, ' ').split(/\s+/);
//     let total = 0, current = 0, isPaise = false;

//     for (const w of words) {
//         if (ignoreWords.has(w)) continue; 

//         if (w === 'paise') {
//             isPaise = true;
//             continue;
//         }

//         if (numberWords.hasOwnProperty(w)) {
//             const num = numberWords[w];

//             if (num === 100) {
//                 current = current === 0 ? 1 : current;
//                 current *= num;
//             } else if (num >= 1000) {
//                 current *= num;
//                 total += current;
//                 current = 0;
//             } else {
//                 current += num;
//             }
//         } else {
//             return `Invalid word detected: '${w}'. Please enter a valid number in words.`;
//         }
//     }

//     total += current;
//     if (isPaise) total /= 100;

//     return total.toFixed(2);
// }


// async function fetchDataFromJSONServer() {
//     try {
//         const response = await fetch('http://localhost:3000/userInput');
//         if (!response.ok) throw new Error("Failed to fetch data from the server");

//         const data = await response.json();
//         displayDataInCards(data);
//     } catch (error) {
//         console.error("Error:", error);
//     }
// }


// function displayDataInCards(data) {
//     let htmlString = "";
//     data.forEach(item => {
//         htmlString += `
//         <div class="card-content">
//             <p><strong>Input:</strong> ${item.input}</p>
//             <p><strong>Output:</strong> ${item.output}</p>
//             <p><small>${new Date(item.timestamp).toLocaleString()}</small></p>
//         </div>`;
//     });
//     document.getElementById("history").innerHTML = htmlString;
// }


// async function saveToJSONServer(input, output) {
//     if (output.includes("Invalid")) return; // Prevent saving invalid inputs

//     try {
//         const response = await fetch('http://localhost:3000/userInput', {
//             method: 'POST',
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({
//                 input: input,
//                 output: output,
//                 timestamp: new Date().toISOString()
//             })
//         });

//         if (!response.ok) throw new Error("Failed to save data into the server");

//         console.log("Data Saved Successfully");
//     } catch (error) {
//         console.error("Error", error);
//     }
// }


// function convertWordToNumber() {
//     const inputWord = document.getElementById('text1').value.trim();
//     const outputElement = document.getElementById('result');

//     if (!inputWord) {
//         outputElement.textContent = "Please enter a valid number in words.";
//         outputElement.style.display = "block";
//         return;
//     }

//     const outputNumber = wordToNumber(inputWord);
//     outputElement.innerText = `The numerical value is: ${outputNumber}`;
//     outputElement.style.display = "block";
//     outputElement.style.opacity = "1";

//     // setTimeout(() => {
//     //     outputElement.style.opacity = "0";
//     //     setTimeout(() => {
//     //         outputElement.style.display = "none";
//     //     }, 5000);
//     // }, 5000);

//     saveToJSONServer(inputWord, outputNumber);
// }


function wordToNumber(word) {
    const numberWords = {
        'zero': 0, 'one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5,
        'six': 6, 'seven': 7, 'eight': 8, 'nine': 9, 'ten': 10, 'eleven': 11,
        'twelve': 12, 'thirteen': 13, 'fourteen': 14, 'fifteen': 15, 'sixteen': 16,
        'seventeen': 17, 'eighteen': 18, 'nineteen': 19, 'twenty': 20, 'thirty': 30,
        'forty': 40, 'fifty': 50, 'sixty': 60, 'seventy': 70, 'eighty': 80, 'ninety': 90,
        'hundred': 100, 'thousand': 1000, 'lakh': 100000, 'million': 1000000
    };
    const ignoreWords = new Set(['rupees', 'rupee', 'only', 'and']);

    if (typeof word !== 'string' || !word.trim()) {
        return "Invalid input. Please provide a valid number in words.";
    }

    const words = word.toLowerCase().replace(/-/g, ' ').split(/\s+/);
    let total = 0, current = 0, isPaise = false;

    for (const w of words) {
        if (ignoreWords.has(w)) continue;

        if (w === 'paise') {
            isPaise = true;
            continue;
        }

        if (numberWords.hasOwnProperty(w)) {
            const num = numberWords[w];

            if (num === 100) {
                current = current === 0 ? 1 : current;
                current *= num;
            } else if (num >= 1000) {
                current *= num;
                total += current;
                current = 0;
            } else {
                current += num;
            }
        } else {
            return `Invalid word detected: '${w}'. Please enter a valid number in words.`;
        }
    }

    total += current;
    if (isPaise) total /= 100;

    return total.toFixed(2);
}

// Function to fetch data from JSON server
async function fetchDataFromJSONServer() {
    try {
        const response = await fetch('http://localhost:3000/userInput');
        if (!response.ok) throw new Error("Failed to fetch data from the server");

        const data = await response.json();
        displayDataInCards(data);
    } catch (error) {
        console.error("Error:", error);
    }
}

// Function to display data in UI
function displayDataInCards(data) {
    const htmlString = data.map(item => `
        <div class="card-content">
            <p><strong>Input:</strong> ${item.input}</p>
            <p><strong>Output:</strong> ${item.output}</p>
            <p><small>${new Date(item.timestamp).toLocaleString()}</small></p>
        </div>
    `).join('');
    
    document.getElementById("history").innerHTML = htmlString;
}

// Function to save data to JSON server
async function saveToJSONServer(input, output) {
    if (output.includes("Invalid")) return; // Prevent saving invalid inputs

    try {
        const response = await fetch('http://localhost:3000/userInput', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                input: input,
                output: output,
                timestamp: new Date().toISOString()
            })
        });

        if (!response.ok) throw new Error("Failed to save data into the server");

        console.log("Data Saved Successfully");
    } catch (error) {
        console.error("Error", error);
    }
}

// Function to convert words to numbers
function convertWordToNumber() {
    const inputWord = document.getElementById('text1').value.trim();
    const outputElement = document.getElementById('result');
    let outputNumber = "Invalid input"; // Default value in case of empty input
    //saveToJSONServer(inputWord, outputNumber);

    if (!inputWord) {
        outputElement.textContent = "Please enter a valid number in words.";
    } else {
        outputNumber = wordToNumber(inputWord);
        outputElement.innerHTML = `<p>The numerical value is: ${outputNumber}<p/>`;
    }
    console.log(outputNumber)

     // Now, outputNumber is always defined

    // Ensure the result is shown without re-triggering visibility changes
    //outputElement.style.display = "block";
    //outputElement.style.opacity = "1";
    saveToJSONServer(inputWord, outputNumber);
}
