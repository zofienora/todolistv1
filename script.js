

function todoFunction() {
    // Get the input value
    const inputText = document.getElementById('todoInput').value;

    // Check if the input is empty
    if (inputText.trim() === "") {
        alert("Please enter a task!"); // Prevent adding empty tasks
        return;
    }

    // Create a new list item (`li`)
    const listItem = document.createElement('li');

    // Create a checkbox
    const checkbox = document.createElement('input');
    checkbox.type = "checkbox";
    checkbox.classList.add("task-checkbox"); // Optional class for styling

    // Create a span to hold the task text
    const taskText = document.createElement('span');
    taskText.textContent = inputText;
    taskText.classList.add("task-text"); // Optional class for styling

    // Create a delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = "❌"; // Use an emoji or style it in CSS
    deleteButton.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="blue">
        <line x1="5" y1="5" x2="19" y2="19" stroke="blue" stroke-width="3" stroke-linecap="round"/>
        <line x1="5" y1="19" x2="19" y2="5" stroke="blue" stroke-width="3" stroke-linecap="round"/>
    </svg>
`;    deleteButton.classList.add("delete-button");
    // Add event listener to delete button
    deleteButton.addEventListener('click', function() {
        listItem.remove(); // Remove the task when delete button is clicked
    });

    // Add event listener to checkbox to mark task as done
    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            taskText.style.textDecoration = "line-through";
        } else {
            taskText.style.textDecoration = "none";
        }
    });

    // Create the divs inside <li> (matching your HTML structure)
    const checkboxDiv = document.createElement('div');
    checkboxDiv.classList.add("checkbox"); // Ensure it matches your existing class
    checkboxDiv.appendChild(checkbox); // Put checkbox inside its div

    const textDiv = document.createElement('div');
    textDiv.classList.add("listvalue"); // Ensure it matches your existing class
    textDiv.appendChild(taskText); // Put task text inside its div

    const deleteDiv = document.createElement('div');
    deleteDiv.classList.add("delete"); // Ensure it matches your existing class
    deleteDiv.appendChild(deleteButton); // Put delete button inside its div

    // Append the divs to the <li> task
    listItem.appendChild(checkboxDiv);
    listItem.appendChild(textDiv);
    listItem.appendChild(deleteDiv);

    // Append the new task to the existing <ul> list
    document.getElementById('todo-list').appendChild(listItem);

    // Clear the input field after adding the task
    document.getElementById('todoInput').value = "";

}


// the Event for clicking the button or pressing enter:
document.getElementById('addButton').addEventListener('click', todoFunction);
document.getElementById('todoInput').addEventListener('keydown', function(event) {
    if (event.key === "Enter") { // Check if Enter was pressed
        event.preventDefault(); // Prevent default behavior (like form submission)
        todoFunction(); // Call your function
    }
});

// having an array of affirmations, randomly selected

const affirmations = [
    "I am capable of achieving my goals.",
    "I believe in myself and my abilities.",
    "I radiate confidence and positivity.",
    "I can do hard things.",
    "I am strong, resilient, and fearless.",
    "I attract success and happiness.",
    "I deserve love, success, and abundance.",
    "I am constantly growing and evolving.",
    "I choose to focus on what I can control.",
    "I am enough just as I am.",
    "I embrace challenges as opportunities for growth.",
    "I am surrounded by love and support.",
    "I have the power to create change in my life.",
    "I am grateful for all that I have.",
    "I trust myself to make the right decisions.",
    "I am worthy of happiness and peace.",
    "I release self-doubt and welcome confidence.",
    "I am in charge of my own happiness.",
    "I have everything I need within me.",
    "I am proud of who I am becoming."
  ];

  
  function randomAff() {
    const x = document.getElementById('aff');
    
  }