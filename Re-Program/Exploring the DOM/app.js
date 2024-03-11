// Function to highlight the parent node of the first section
function highlightParent() {
    const section = document.querySelector('.section');
    let parent = section.parentNode;
    parent.style.backgroundColor = '#b3d6f0';
}

// Function to highlight the children nodes of the first section
function highlightChildren() {
    const section = document.querySelector('.section');
    const children = section.children;
    for(let i = 0, len = children.length; i < len; i++) {
        children[i].style.backgroundColor = '#E6B3D9';
    }
}

// Function to find an element by its ID and change its text
function findById() {
   const id = document.getElementById('title');
   id.innerHTML = 'ID Found: Exploring the DOM';
}

// Function to find elements by class and change their text
function findByClass() {
    const classElements = document.getElementsByClassName('section');
    for(let i = 0, len = classElements.length; i < len; i++) {
        classElements[i].firstElementChild.innerHTML = `Class Found: ${classElements[i].firstElementChild.innerHTML}`;
    }
}

// Function to find elements by tag name
function findByTagName() {
    const tagElements = document.getElementsByTagName('p');
    for(let i = 0, len = tagElements.length; i < len; i++) {
        tagElements[i].style.fontWeight = 'bold';
    }
}

// Function to find elements by query selector
function findByQuerySelector() {
    const firstSection = document.querySelector('.section');
    firstSection.style.border = "3px solid #0096dc"; // Use primary color
}

// Function to highlight the sibling node of the first section
function highlightSibling() {
    const section = document.querySelectorAll('.section')[1];
    section.style.backgroundColor = '#FFD699';
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
