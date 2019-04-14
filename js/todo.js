const addTodoButton = document.querySelector('button.addTodoButton');
const addTodoInput = document.querySelector('input.addTodoInput');
const ul = document.querySelector("ul.todoList");
//Add new item to Todo List
addTodoButton.addEventListener('click', () => {
  if (addTodoInput.value !== "") {
    let li = document.createElement('li');
    li.innerHTML = `<input type='checkbox'> ${addTodoInput.value}`;
    ul.appendChild(li);
    //clear input
    addTodoInput.value = '';
  }
});

ul.addEventListener('change', (e) => {
  let checkbox = e.target;
  let li = checkbox.parentNode;
  if (checkbox.checked) {
    li.style.textDecoration = "line-through";
  } else {
    li.style.textDecoration = "none";
  }
  //li.removeChild(checkbox);
  //ul.removeChild(li);
});
