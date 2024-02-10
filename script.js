var textInput = document.querySelector("#input");
var btnAdd = document.querySelector(".btnAdd");
var todoList = document.querySelector(".todoList");

btnAdd.onclick = createTodo;

function createTodo(e) {
  e.preventDefault();
  if (textInput.value.trim()) {
    var newLi = document.createElement("li");
    newLi.classList.add("todoLi");
    var newPara = document.createElement("p");
    newPara.classList.add("listText");
    newPara.innerHTML = textInput.value;

    var tickBtn = document.createElement("button");
    tickBtn.classList.add("tickBtn");
    tickBtn.innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>';
    tickBtn.onclick = markTick;
    function markTick() {
      newLi.classList.toggle("completed");
    }

    var editBtn = document.createElement("button");
    editBtn.classList.add("editBtn");
    editBtn.innerHTML = '<i class="fa fa-pencil" aria-hidden="true"></i>';
    editBtn.onclick = startEditing;

    var dltBtn = document.createElement("button");
    dltBtn.classList.add("dltBtn");
    dltBtn.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';
    dltBtn.onclick = deleteLi;
    function deleteLi() {
      dltBtn.parentElement.remove();
      displayTotalItems();
    }
    newLi.appendChild(newPara);
    newLi.appendChild(tickBtn);
    newLi.appendChild(editBtn);
    newLi.appendChild(dltBtn);
    todoList.appendChild(newLi);
    textInput.value = "";
  } else {
    alert("Please right something first");
    textInput.value = "";
  }
  displayTotalItems();
  function startEditing() {
    newLi.innerHTML =
      '<form class="editForm"> <input type="text" class="editInput" required placeholder="Start Typing"/><button class="btnEditDone tickBtn"><i class="fa fa-check" aria-hidden="true"></i></button></form>';
    document.querySelector(".editInput").value = newPara.innerHTML;
    document
      .querySelector(".btnEditDone")
      .addEventListener("click", function (e) {
        e.preventDefault();

        newPara.innerHTML = document.querySelector(".editInput").value;
        document.querySelector(".editForm").remove();
        newLi.appendChild(newPara);
        newLi.appendChild(tickBtn);
        newLi.appendChild(editBtn);
        newLi.appendChild(dltBtn);
      });
  }
}

function displayTotalItems() {
  var items = document.querySelector(".items");
  items.innerHTML = document.querySelectorAll(".todoLi").length;
}
