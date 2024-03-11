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
const totalContainer = document.getElementById("total-container");
const settleContainer = document.getElementById("settle-container")
const people = [];
let totalPaidOverall = 0;


function saveName(){

    person = nameInput.value
    if(person === ""){
        alert("Please add a name!");
    }
    else{
        people.push({
            name: person,
            totalPaid: 0
        })


        let li = document.createElement("li");
        li.innerHTML = person;
        li.setAttribute("id", person);
        listContainer.appendChild(li);
        let moneyInput = document.createElement("input");
        moneyInput.setAttribute("id", person);
        moneyInput.setAttribute("type", "number");

        moneyInput.addEventListener("keypress", (event) => {
            if(event.key != "Enter") return;
            addNewBill(event)
            event.target.value = null
        })

        li.appendChild(moneyInput);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        let total = document.createElement("p");
        total.innerHTML = "Total: 0";
        li.appendChild(total);
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

const addNewBill = (event) => {
    amount = event.target.value
    if(amount == null) return
    name = event.target.parentElement.id
    people.forEach(person => {
        if(person.name == name){
            person.totalPaid += parseInt(amount);
            let person_li = document.getElementById(name);
            person_li.lastChild.innerHTML = "Total: " + person.totalPaid;
            updateTotalPaidOverall();
        }
    })
   
}

const updateTotalPaidOverall = () => {
    totalPaidOverall = 0;
    people.forEach(person => {
        totalPaidOverall += person.totalPaid;
    });
    totalContainer.innerHTML = "Total Paid Overall: £" + totalPaidOverall; 
}


