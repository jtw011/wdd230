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

let chaptersArray = getChapterList() || [];
chaptersArray.forEach(chapter => displayList(chapter));
button.addEventListener('click', () => {
    const chapter = input.value.trim();
    if (chapter !== '') {
        displayList(chapter);
        chaptersArray.push(chapter);
        setChapterList();
        input.value = '';
        input.focus(); 
    }
});
function displayList(item) {
    const li = document.createElement('li');
    li.textContent = item;
    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';
    deleteButton.addEventListener('click', () => deleteChapter(item));

    li.appendChild(deleteButton);
    list.appendChild(li);
}

function setChapterList() {
    localStorage.setItem('bomChapters', JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem('bomChapters'));
}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, -1); 
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList(); 
    list.innerHTML = ''; 
    chaptersArray.forEach(displayList);
}
