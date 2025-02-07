

function todoFunction() {
    //creating the checkbox
    const parent = document.createElement('input')
    checkbox.type = "checkbox"; // Set type to checkbox
    checkbox.id = "myCheckbox"; // Set an ID
    const cbElement = document.getElementById('checkbox');
    cbElement.appendChild(parent);

    //creating the field for the input
    const input = document.getElementById('todoInput').value;
    document.getElementById('inputfield').innerHTML = input;

    //creating the delete button

}




// the Event for clicking the button or pressing enter:
document.getElementById('addButton').addEventListener('click', todoFunction);
document.getElementById('todoInput').addEventListener('enter??', todoFunction);