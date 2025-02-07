

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
    deleteButton.classList.add("delete-button");
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

    // Append checkbox, text, and delete button to the list item
    listItem.appendChild(checkbox);
    listItem.appendChild(taskText);
    listItem.appendChild(deleteButton);

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
