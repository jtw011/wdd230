const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', () => {
    if (input.value.trim() === '') {
        alert('Please enter a chapter.');
        input.focus();
        return;
    }

    const li = document.createElement('li');
    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';
    deleteButton.ariaLabel = `Remove ${input.value}`;
    
    // Add chapter to list
    li.textContent = input.value;
    
    // Add delete button to list
    li.appendChild(deleteButton);
    
    // Add item to list
    list.appendChild(li);
    
    // Add event listener to delete button
    deleteButton.addEventListener('click', () => {
        list.removeChild(li);
    });
    
    // Clear input and set focus
    input.value = '';
    input.focus();
});