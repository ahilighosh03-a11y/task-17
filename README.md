# Promise-Based Division App

A lightweight web application built to demonstrate asynchronous JavaScript handling using Promises. The application performs division operations, safely handles edge cases like division by zero, and dynamically updates the DOM with formatted test case results.

---

## 🚀 Features

* **JavaScript Promises:** Handles asynchronous operation resolution (`.then()`) and rejection (`.catch()`).
* **Error Handling:** Gracefully captures division-by-zero attempts and displays custom error messages.
* **Dynamic DOM Manipulation:** Renders test results directly onto the HTML page using vanilla JavaScript.
* **Clean UI:** Basic CSS layout designed to match structured output requirements.

---

## 📁 Project Structure

```text
├── index.html   # Main HTML layout structure
├── style.css    # Styling for test result cards and page layout
└── script.js    # Promise division logic and DOM rendering script
const divideNumbers = (a, b) => {
    return new Promise((resolve, reject) => {
        if (b === 0) {
            reject("Error: Division by zero is not allowed.");
        } else {
            resolve(a / b);
        }
    });
};
