const body = document.querySelector('body');
//const addTodoButton = document.querySelector('button.addTodoButton');
const addTodoInput = document.querySelector('input.addTodoInput');
const ul = document.querySelector("ul.todoList");
const lis = ul.children;

body.addEventListener('click', (e) => {
  //add new item to Todo List
  if (e.target.className == "addTodoButton" && addTodoInput.value !== "") {
    let li = document.createElement('li');
    li.innerHTML = `<input type='checkbox'> ${addTodoInput.value}`;
    ul.appendChild(li);
    //clear input
    addTodoInput.value = '';
  }

  //remove crossed out items from list
  if (e.target.id == "removeButton") {
    if (lis.length > 0) {
      for (let i = lis.length; i>0; i--) {
        if (lis[i-1].style.textDecoration == "line-through") {
          ul.removeChild(lis[i-1]);
        }
      }
    }
  }
});

//cross out checked items
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
