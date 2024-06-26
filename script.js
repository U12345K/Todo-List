function newElement() {
    const inputValue = document.getElementById("myInput").value;
    if (inputValue.trim() === "") return;

    const li = document.createElement("li");
    li.textContent = inputValue;

    li.onclick = function () {
        li.classList.toggle("checked");
    };

    document.getElementById("myUL").appendChild(li);
    document.getElementById("myInput").value = "";
}


