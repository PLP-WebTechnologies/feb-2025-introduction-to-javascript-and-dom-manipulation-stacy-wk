// Change text content dynamically
const textButton = document.getElementById("change-text-btn");
const mainText = document.getElementById("text");

textButton.addEventListener("click", function () {
    mainText.textContent = "See, there it goes!";
    mainText.style.color = "crimson"; // Modifying CSS style
    mainText.style.fontStyle = "italic";
    mainText.style.fontWeight = "bold";
});

// Add and remove list items
const addButton = document.getElementById("add-item-btn");
const removeButton = document.getElementById("remove-item-btn");
const list = document.getElementById("my-list");

// Function to update item numbers
function updateItemNumbers() {
    const items = list.children;
    for (let i = 0; i < items.length; i++) {
        items[i].textContent = `Item ${i + 1}`;
    }
}

addButton.addEventListener("click", function () {
    const newItem = document.createElement("li");
    list.appendChild(newItem);
    updateItemNumbers(); // Call after adding
});

removeButton.addEventListener("click", function () {
    if (list.children.length > 0) {
        list.removeChild(list.lastElementChild);
        updateItemNumbers(); // Call after removing
    }
});

