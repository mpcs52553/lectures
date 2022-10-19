// When you type a grocery item into the text input and press [Enter]:
// - the new item appears at the bottom of the list
// - the text input is cleared
// - the cursor is in the text input again, ready for the next item

document.addEventListener("DOMContentLoaded", setupListeners)

function setupListeners() {
  document.querySelector("form").addEventListener("submit", addItem)
}

// More code goes here (probably)
function addItem(e) {
  console.log(e);
  e.preventDefault();
  let newItem = document.createElement("li")
  newItem.innerHTML = "<b>" + document.querySelector("input").value + "</b>"
  document.querySelector("#groceries").appendChild(newItem)

  document.querySelector("input").value = ""
  document.querySelector("input").focus();
}
