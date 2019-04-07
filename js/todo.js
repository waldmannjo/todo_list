const addToDoButton = document.getElementById('addToDo');

//Add new item to Todo List
addToDoButton.addEventListener('click', () => {
  if (newToDo.value !== "") {
    const newListElement = document.createElement('LI');
    //add checkbox
    const newCheckbox = document.createElement('input');
    newCheckbox.type = 'checkbox';
    newCheckbox.id = document.querySelector('input').value;
    newListElement.appendChild(newCheckbox);
    //add new item
    const newToDo = document.createTextNode(document.querySelector('input').value);
    newListElement.id = document.querySelector('input').value;

    newListElement.appendChild(newToDo);
    document.getElementById("todoList").appendChild(newListElement);
    //clear input
    document.getElementById('newToDo').value = '';
  }
});
