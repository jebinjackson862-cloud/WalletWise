let balance = 0;
let income = 0;
let expense = 0;

const form = document.getElementById("form");
const list = document.getElementById("list");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const type = document.getElementById("type").value;
    const desc = document.getElementById("desc").value;
    const amount = Number(document.getElementById("amount").value);

    if(type === "income"){
        income += amount;
        balance += amount;
    }else{
        expense += amount;
        balance -= amount;
    }

    document.getElementById("income").innerText = "₹" + income;
    document.getElementById("expense").innerText = "₹" + expense;
    document.getElementById("balance").innerText = "₹" + balance;

    const li = document.createElement("li");

    li.innerHTML = `
        <span>${desc}</span>
        <span>${type === "income" ? "+" : "-"}₹${amount}</span>
    `;

    list.appendChild(li);

    form.reset();

});