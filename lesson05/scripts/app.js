// input, button, and list elements js
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');


// Handle adding new chapters
button.addEventListener('click', function addChapter()
{
    if (input.value.trim() ==="")
    {
        alert("Please enter a chapter.");
        input.focus();
        return;
    }

    // new list item
const listItem = document.createElement('li');
listItem.textContent = input.value;

//delete button
const deleteButton = document.createElement('button');
deleteButton.textContent = "❌";
deleteButton.classList.add('delete');

//add delete button to the list item
listItem.appendChild(deleteButton);

//append list item to list
list.appendChild(listItem);

//event listener to delete item
deleteButton.addEventListener('click', function()
{
    list.removeChild(listItem);
});

//Reset input 
input.value = "";
input.focus();

// event listener for add chapter button
addButton.addEventListener('click', addChapter);
});