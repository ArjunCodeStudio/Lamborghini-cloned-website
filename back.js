const text = "Welcome to Lamborghini";
const outputElement = document.getElementById("output");
const logoElement = document.getElementById("logo");

let index = 0;

function typeText() {
  if (index < text.length) {
    outputElement.textContent += text.charAt(index);
    index++;
    setTimeout(typeText, 500); // Adjust typing speed by changing the delay
  } else {
    setTimeout(() => {
      logoElement.classList.remove("hidden");
    }, 500); // Delay before showing the logo
  }
}

// Start typing effect
typeText();
