function updateChildCheckbox(e) {
    const CHILD_CHECK_BOXES = e.parentElement.parentElement.querySelectorAll(
      ".interest__check"
    );
    if (CHILD_CHECK_BOXES) {
        CHILD_CHECK_BOXES.forEach((event) => {
        event.checked = e.checked;
        event.indeterminate = false;
      });
    }
}  

const CHECK_BOXES = document.querySelectorAll(".interest__check");
  
CHECK_BOXES.forEach((e) => {
    e.addEventListener("change", () => {
      updateChildCheckbox(e);
    });
  });