let pieChart;
let barChart;

function updateCharts(transactions) {

    let income = 0;
    let expense = 0;

    transactions.forEach(transaction => {

        if (transaction.type === "income") {
            income += transaction.amount;
        } else {
            expense += transaction.amount;
        }

    });

    const monthlyExpenses = {
    Jan: 0,
    Feb: 0,
    Mar: 0,
    Apr: 0,
    May: 0,
    Jun: 0,
    Jul: 0,
    Aug: 0,
    Sep: 0,
    Oct: 0,
    Nov: 0,
    Dec: 0
};

transactions.forEach(transaction => {

    if (transaction.type === "expense") {

        const month = new Date(transaction.date)
            .toLocaleString("default", { month: "short" });

        monthlyExpenses[month] += transaction.amount;

    }

});

    if (pieChart) {
        pieChart.destroy();
    }

    pieChart = new Chart(document.getElementById("pieChart"), {

        type: "pie",

        data: {

            labels: ["Income", "Expense"],

            datasets: [{

                data: [income, expense],

                backgroundColor: [
                    "#22c55e",
                    "#ef4444"
                ]

            }]

        }

    });

    if (barChart) {
    barChart.destroy();
}
barChart = new Chart(document.getElementById("barChart"), {

    type: "bar",

    data: {

        labels: Object.keys(monthlyExpenses),

        datasets: [{

            label: "Monthly Expenses",

            data: Object.values(monthlyExpenses),

            backgroundColor: "#2563eb",

            borderRadius: 8

        }]

    },

    options: {

        responsive: true,

        plugins: {

            legend: {

                display: false

            }

        },

        scales: {

            y: {

                beginAtZero: true

            }

        }

    }

});

}
