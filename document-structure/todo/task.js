const TEXT = document.getElementById("task__input");
const TASK = document.getElementById("tasks__list");


TEXT.addEventListener("keydown", (e) => {
  if (e.key == "Enter" && TEXT.value.length != 0) {
    TASK.innerHTML += `<div class="task">
            <div class="task__title">
              ${TEXT.value}
            </div>
            <a href="#" class="task__remove">&times;</a>
          </div>`;
    TEXT.value = null;
    e.preventDefault();
  }
});

document.addEventListener("click", delTask);
function delTask(event) {
  let tar = event.target;
  if (Array.from(tar.classList).includes("task__remove")) {
    tar.parentElement.remove();
  }
}