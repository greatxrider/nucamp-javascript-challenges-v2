// Function to highlight the parent node of the first section
function highlightParent() {
    const section = document.querySelector(".section");
    const parent = section.parentNode;
    parent.style.backgroundColor = "#b3d6f0"; // Lighter shade of primary color for parent
}

// Function to highlight the children nodes of the first section
function highlightChildren() {
    const section = document.querySelector(".section");
    const children = section.children;
    for (let i = 0, len = children.length; i < len; i++) {
        children[i].style.backgroundColor = "#e6b3d9"; // Lighter shade of secondary color for children
    }
}

// Function to find an element by its ID and change its text
function findById() {
    const title = document.getElementById("title");
    title.innerHTML = "ID Found: Exploring the DOM";
}

// Function to find elements by class and change their text
function findByClass() {
    const subTitles = document.getElementsByClassName("sub-title");
    for (let i = 0; i < subTitles.length; i++) {
        subTitles[i].innerHTML = "Class Found: " + subTitles[i].innerHTML;
    }
}

// Function to find elements by tag name
function findByTagName() {
    const paragraphs = document.getElementsByTagName("p");
    for (let i = 0; i < paragraphs.length; i++) {
        paragraphs[i].style.fontWeight = "bold"; // Making all paragraphs bold
    }
}

// Function to find elements by query selector
function findByQuerySelector() {
    const firstSection = document.querySelector(".section");
    firstSection.style.border = "3px solid #0096dc"; // Use primary color
}

// Function to highlight the sibling node of the first section
function highlightSibling() {
    const section = document.querySelector(".section");
    const sibling = section.nextElementSibling || section.previousElementSibling;
    if (sibling) {
        sibling.style.backgroundColor = "#ffd699"; // Lighter shade for sibling
    }
}

//---------------Do not change the code below this line---------------------
//This function checks the answer to the question and returns feedback to the ui.
let attempts = 0;
function checkElement() {
    const maxAttempts = 3; // Maximum number of attempts allowed
    const answer = document
        .getElementById("element-input")
        .value.trim()
        .toLowerCase();
    const feedback = document.getElementById("feedback");
    const parentElementTag = document
        .querySelector(".section")
        .parentNode.tagName.toLowerCase();

    if (answer === parentElementTag) {
        feedback.textContent = "Correct! Great job!";
        feedback.style.color = "green";
        attempts = 0; // Reset the attempts for the next round
    } else {
        attempts++;
        if (attempts < maxAttempts) {
            feedback.textContent = "Incorrect. Try again.";
            feedback.style.color = "red";
        } else {
            feedback.textContent =
                "Incorrect. The correct answer is '" + parentElementTag + "'.";
            feedback.style.color = "red";
            attempts = 0;
        }
    }
}
