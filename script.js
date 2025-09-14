// script.js - JavaScript Functions & Animation Triggers

// Global variable for demonstration
let globalCounter = 0;

// Part 2: JavaScript Functions (scope, parameters, return values)

/**
 * Demonstrates local vs global scope
 */
function showScopeDemo() {
  // Local variable - only accessible within this function
  let localVariable = "I am a local variable!";

  // Accessing global variable
  globalCounter++;

  // Function that returns a value
  const currentTime = getCurrentTime();

  // Display results
  const resultElement = document.getElementById("scope-result");
  resultElement.innerHTML = `
    <strong>Local Variable:</strong> ${localVariable}<br>
    <strong>Global Counter:</strong> ${globalCounter}<br>
    <strong>Current Time:</strong> ${currentTime}<br>
    <strong>Function Call:</strong> add(5, 3) = ${add(5, 3)}
  `;

  // Add visual feedback
  resultElement.style.animation = "none";
  resultElement.offsetHeight; // Trigger reflow
  resultElement.style.animation = "fadeInUp 0.5s ease";
}

/**
 * Function with parameters that returns a value
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Sum of a and b
 */
function add(a, b) {
  return a + b;
}

/**
 * Function with parameters that returns a value
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Product of a and b
 */
function multiply(a, b) {
  return a * b;
}

/**
 * Function that returns current time as a formatted string
 * @returns {string} Current time
 */
function getCurrentTime() {
  const now = new Date();
  return now.toLocaleTimeString();
}

/**
 * Calculates values from user input and displays results
 */
function calculateAndDisplay() {
  // Get values from input fields
  const num1 = parseFloat(document.getElementById("num1").value) || 0;
  const num2 = parseFloat(document.getElementById("num2").value) || 0;

  // Use functions with parameters and return values
  const sum = add(num1, num2);
  const product = multiply(num1, num2);
  const average = calculateAverage(num1, num2);

  // Display results
  const resultElement = document.getElementById("calc-result");
  resultElement.innerHTML = `
    <strong>Numbers:</strong> ${num1} and ${num2}<br>
    <strong>Sum:</strong> ${sum}<br>
    <strong>Product:</strong> ${product}<br>
    <strong>Average:</strong> ${average.toFixed(2)}
  `;

  // Add animation
  resultElement.style.animation = "none";
  resultElement.offsetHeight;
  resultElement.style.animation = "slideInLeft 0.5s ease";
}

/**
 * Helper function to calculate average
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Average of the two numbers
 */
function calculateAverage(a, b) {
  return (a + b) / 2;
}

/**
 * String manipulation functions demonstration
 */
function manipulateText() {
  const input = document.getElementById("text-input").value;

  // Functions that transform strings
  const reversed = reverseString(input);
  const uppercase = input.toUpperCase();
  const wordCount = countWords(input);
  const vowelCount = countVowels(input);

  const resultElement = document.getElementById("text-result");
  resultElement.innerHTML = `
    <strong>Original:</strong> "${input}"<br>
    <strong>Reversed:</strong> "${reversed}"<br>
    <strong>Uppercase:</strong> "${uppercase}"<br>
    <strong>Word Count:</strong> ${wordCount}<br>
    <strong>Vowel Count:</strong> ${vowelCount}
  `;

  resultElement.style.animation = "none";
  resultElement.offsetHeight;
  resultElement.style.animation = "bounceIn 0.6s ease";
}

/**
 * Function to reverse a string
 * @param {string} str - String to reverse
 * @returns {string} Reversed string
 */
function reverseString(str) {
  return str.split("").reverse().join("");
}

/**
 * Function to count words in a string
 * @param {string} str - String to analyze
 * @returns {number} Number of words
 */
function countWords(str) {
  return str
    .trim()
    .split(/\s+/)
    .filter((word) => word.length > 0).length;
}

/**
 * Function to count vowels in a string
 * @param {string} str - String to analyze
 * @returns {number} Number of vowels
 */
function countVowels(str) {
  const vowels = "aeiouAEIOU";
  return str.split("").filter((char) => vowels.includes(char)).length;
}

// Part 3: Combining CSS & JavaScript

/**
 * Triggers CSS animation on the interactive box
 */
function triggerBoxAnimation() {
  const box = document.getElementById("js-animated-box");

  // Remove existing animation classes
  box.classList.remove("pop-animation", "color-cycle");

  // Force reflow to ensure class removal takes effect
  void box.offsetWidth;

  // Add animation class
  box.classList.add("pop-animation");

  // Remove animation class after animation completes
  setTimeout(() => {
    box.classList.remove("pop-animation");
  }, 800);
}

/**
 * Triggers color cycling animation
 */
function triggerColorCycle() {
  const box = document.getElementById("js-animated-box");

  // Remove existing animations
  box.classList.remove("pop-animation", "color-cycle");
  void box.offsetWidth;

  // Add color cycle animation
  box.classList.add("color-cycle");

  // Remove after 2 seconds
  setTimeout(() => {
    box.classList.remove("color-cycle");
  }, 2000);
}

/**
 * Toggles modal visibility with animation
 */
function toggleModal() {
  const modal = document.getElementById("modal");

  if (modal.classList.contains("show")) {
    // Hide modal
    modal.classList.remove("show");
    setTimeout(() => {
      modal.style.display = "none";
    }, 300);
  } else {
    // Show modal
    modal.style.display = "flex";
    setTimeout(() => {
      modal.classList.add("show");
    }, 10);
  }
}

/**
 * Demonstrates loading animation
 */
function startLoadingAnimation() {
  const loadingBar = document.querySelector(".loading-fill");
  const loadingText = document.getElementById("loading-text");

  // Reset animation
  loadingBar.classList.remove("animate");
  loadingBar.style.width = "0%";
  loadingText.textContent = "Loading...";

  // Start animation
  setTimeout(() => {
    loadingBar.classList.add("animate");

    // Simulate loading progress
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 15;
      if (progress >= 100) {
        progress = 100;
        loadingText.textContent = "Complete! 🎉";
        clearInterval(interval);

        // Reset after 2 seconds
        setTimeout(() => {
          loadingBar.classList.remove("animate");
          loadingBar.style.width = "0%";
          loadingText.textContent = "Ready to load...";
        }, 2000);
      } else {
        loadingText.textContent = `Loading... ${Math.round(progress)}%`;
      }
    }, 200);
  }, 100);
}

// Event listeners for enhanced interactivity
document.addEventListener("DOMContentLoaded", function () {
  // Add click event to animated boxes for interaction
  const animatedBoxes = document.querySelectorAll(".animated-box");
  animatedBoxes.forEach((box) => {
    box.addEventListener("click", function () {
      this.style.transform = "scale(1.1)";
      setTimeout(() => {
        this.style.transform = "";
      }, 200);
    });
  });

  // Add pulse animation to secondary button on click
  const secondaryBtn = document.querySelector(".fancy-btn.secondary");
  if (secondaryBtn) {
    secondaryBtn.addEventListener("click", function () {
      this.style.animation = "pulse 0.6s ease";
      setTimeout(() => {
        this.style.animation = "";
      }, 600);
    });
  }

  // Close modal when clicking outside of it
  const modal = document.getElementById("modal");
  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      toggleModal();
    }
  });
});

// CSS animations for JavaScript-triggered effects
const style = document.createElement("style");
style.textContent = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  @keyframes bounceIn {
    0% {
      opacity: 0;
      transform: scale(0.3);
    }
    50% {
      opacity: 1;
      transform: scale(1.05);
    }
    70% {
      transform: scale(0.9);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
  
  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
    }
  }
`;
document.head.appendChild(style);
