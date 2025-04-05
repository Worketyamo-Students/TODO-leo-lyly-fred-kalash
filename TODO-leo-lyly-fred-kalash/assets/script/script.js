const inputField = document.getElementById("input");
const checkIcon = document.getElementById("check-icon");
const todoList = document.getElementById("todo-list");
const itemsLeft = document.getElementById("items-left");
const filterSection = document.getElementById("filter-section");
const dragText = document.getElementById("drag-text");

let todoCount = 0;
let todoListTop = 17; // Initial top value for the todo list

function updateItemsLeft() {
  itemsLeft.textContent = todoCount;
}

function updateFilterPosition() {
  const todoListHeight = todoList.offsetHeight;
  const newFilterTop = todoListTop + todoListHeight + 16; // 16px gap
  filterSection.style.marginTop = `${newFilterTop}rem`;
  dragText.style.marginTop = `${newFilterTop + 5.4}rem`; // Keep drag text relative to the filter section
}

inputField.addEventListener("input", () => {
  const userInput = inputField.value;

  if (userInput.length > 5) {
    checkIcon.classList.remove("opacity-0");
    checkIcon.classList.add("opacity-100");
  } else {
    checkIcon.classList.remove("opacity-100");
    checkIcon.classList.add("opacity-0");
  }
});

inputField.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    const todoText = inputField.value.trim();

    if (todoText !== "") {
      addTodoItem(todoText);
      inputField.value = "";
      checkIcon.classList.remove("opacity-100");
      checkIcon.classList.add("opacity-0");
    }
  }
});

function addTodoItem(todoText) {
  const todoItem = document.createElement("div");
  todoItem.classList.add(
    "w-[100%]",
    "bg-[white]",
    "flex",
    "items-center",
    "justify-between",
    "px-[2rem]",
    "py-[1.4rem]",
    "gap-[1.2rem]"
  );

  todoItem.innerHTML = `
                <div class="flex items-center gap-[1.2rem]">
                    <div class="w-[2.2rem] h-[2.2rem] rounded-[50%] bg-[gray] flex items-center justify-center">
                        <div class="w-[2rem] h-[2rem] rounded-[50%] bg-[white] flex items-center justify-center">
                            <img class="w-[2rem] h-[2rem] opacity-0" src="assets/imgs/check.svg" alt="image coché">
                        </div>
                    </div>
                    <span>${todoText}</span>
                </div>
                <div class="flex items-center justify-center size-[1.2rem]">
                    <img src="./assets/imgs/cross.svg" alt="">
                </div>
            `;

  const hr = document.createElement("hr");
  hr.classList.add("w-[100%]", "h-[0.1rem]", "bg-[gray]");

  todoList.appendChild(todoItem);
  todoList.appendChild(hr);

  todoCount++;
  updateItemsLeft();
  updateFilterPosition(); // Update position after adding a todo
}

updateItemsLeft();
updateFilterPosition(); // Initial update
