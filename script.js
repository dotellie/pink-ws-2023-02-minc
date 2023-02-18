const itemsContainer = document.querySelector(".items-container");
const newItemInput = document.querySelector(".new-item-input");

const itemTemplate = document.querySelector("#item-template");

function addItem(text) {
  const item = itemTemplate.content.cloneNode(true);
  const itemText = item.querySelector(".item-text");
  itemText.textContent = text;
  itemsContainer.appendChild(item);
}

newItemInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addItem(newItemInput.value);
    newItemInput.value = "";
  }
});

addItem("Create workshop");
addItem("Finish school");
addItem("Get rich");
