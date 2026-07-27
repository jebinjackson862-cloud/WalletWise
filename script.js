let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

const form = document.getElementById("form");
const list = document.getElementById("list");

form.addEventListener("submit", addTransaction);

function addTransaction(e){

e.preventDefault();

const transaction={

id:Date.now(),

type:document.getElementById("type").value,

desc:document.getElementById("desc").value,

amount:Number(document.getElementById("amount").value),

category:document.getElementById("category").value,

date:document.getElementById("date").value

};

transactions.push(transaction);

saveData();

displayTransactions();

updateSummary();

form.reset();

}

function displayTransactions(){

list.innerHTML="";

transactions.forEach(transaction=>{

const li=document.createElement("li");

li.innerHTML=`

<div>

<strong>${transaction.desc}</strong><br>

<small>${transaction.category} | ${transaction.date}</small>

</div>

<div>

<span>

${transaction.type==="income" ? "+" : "-"}₹${transaction.amount}

</span>

<button class="delete"

onclick="deleteTransaction(${transaction.id})">

❌

</button>

</div>

`;

list.appendChild(li);

});

}

function deleteTransaction(id){

transactions=transactions.filter(item=>item.id!==id);

saveData();

displayTransactions();

updateSummary();

}

function updateSummary(){

let income=0;

let expense=0;

transactions.forEach(item=>{

if(item.type==="income"){

income+=item.amount;

}else{

expense+=item.amount;

}

});

document.getElementById("income").innerText="₹"+income;

document.getElementById("expense").innerText="₹"+expense;

document.getElementById("balance").innerText="₹"+(income-expense);

}

function saveData(){

localStorage.setItem(

"transactions",

JSON.stringify(transactions)

);

}

displayTransactions();

updateSummary();