function wordToNumber(word) {
  const numberWords = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    ten: 10,
    eleven: 11,
    twelve: 12,
    thirteen: 13,
    fourteen: 14,
    fifteen: 15,
    sixteen: 16,
    seventeen: 17,
    eighteen: 18,
    nineteen: 19,
    twenty: 20,
    thirty: 30,
    forty: 40,
    fifty: 50,
    sixty: 60,
    seventy: 70,
    eighty: 80,
    ninety: 90,
    hundred: 100,
    thousand: 1000,
    lakh: 100000,
    million: 1000000,
  };
  const ignoreWords = new Set(["rupees", "rupee", "only", "and"]);

  if (typeof word !== "string" || !word.trim()) {
    return "Invalid input. Please provide a valid number in words.";
  }

  const words = word.toLowerCase().replace(/-/g, " ").split(/\s+/);
  let total = 0,
    current = 0,
    isPaise = false;

  for (const w of words) {
    if (ignoreWords.has(w)) continue;

    if (w === "paise") {
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

async function fetchDataFromJSONServer() {
  try {
    const response = await fetch("http://localhost:4000/userInput");
    if (!response.ok) throw new Error("Failed to fetch data from the server");

    const data = await response.json();
    displayDataInCards(data);
  } catch (error) {
    console.error("Error:", error);
  }
}

function displayDataInCards(data) {
  let htmlString = "";
  data.forEach((item) => {
    htmlString += `
        <div class="card-content">
            <p><strong>Input:</strong> ${item.input}</p>
            <p><strong>Output:</strong> ${item.output}</p>
            <p><small>${new Date(item.timestamp).toLocaleString()}</small></p>
        </div>`;
  });
  document.getElementById("history").innerHTML = htmlString;
}

async function saveToJSONServer(input, output) {
  if (output.includes("Invalid")) return; // Prevent saving invalid inputs

  try {
    const response = await fetch("http://localhost:4000/userInput", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        input: input,
        output: output,
        timestamp: new Date().toISOString(),
      }),
    });

    if (!response.ok) throw new Error("Failed to save data into the server");

    console.log("Data Saved Successfully");
  } catch (error) {
    console.error("Error", error);
  }
}

function convertWordToNumber() {
  const inputWord = document.getElementById("text1").value.trim();
  const outputElement = document.getElementById("result");

  if (!inputWord) {
    outputElement.textContent = "Please enter a valid number in words.";
    outputElement.style.display = "block";
    return;
  }

  const outputNumber = wordToNumber(inputWord);
  outputElement.innerText = `The numerical value is: ${outputNumber}`;
  outputElement.style.display = "block";
  outputElement.style.opacity = "1";

  setTimeout(() => {
    outputElement.style.opacity = "0";
    saveToJSONServer(inputWord, outputNumber);
    setTimeout(() => {
      //saveToJSONServer(inputWord, outputNumber);
      outputElement.style.display = "none";
    }, 10000);
  }, 10000);

  //saveToJSONServer(inputWord, outputNumber);
}
