// function saveName(){
//     var nameInput = document.getElementById("nameInput").value;
//     var user1 = {};
//     user1.nameInput = nameInput;

//     var outputDiv = document.getElementById('outputDiv');
//     outputDiv.innerHTML = "Name: " + user1.nameInput;

// Above is the original idea but when trying to add a second person, it overwrites the first person you input.
// }

const nameInput = document.getElementById("name-input");
const listContainer = document.getElementById("list-container");

function saveName(){
    if(nameInput.value === ""){
        alert("Please add a name!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = nameInput.value
        listContainer.appendChild(li);
        let input = document.createElement("input");
        listContainer.appendChild(input);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    nameInput.value = "";
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
}, false);
