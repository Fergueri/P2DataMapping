async function foodGraph() { // Fetch and parse the CSV data
    const url = "CSV/FOODvsCPI.csv";
    const csvData = await fetchCSVData(url);
    console.log(csvData);
    // Extract labels and data from the parsed CSV data
    const labels = csvData.map((row) => row['Year']);

    const datasets = [
        {
            label: 'Food and non-alcoholic beverages Using C.P.I.',
            data: csvData.map((row) => row['Food and non-alcoholic beverages using CPI']),
            backgroundColor: 'rgba(248, 227, 162, 1)',
            borderColor: 'rgba(248, 227, 162, 1)',
            borderWidth: 5,
            fill: false
        }, {
            label: 'Food and non-alcoholic beverages (Actual)',
            data: csvData.map((row) => row['Food and non-alcoholic beverages']),
            backgroundColor: 'rgba(112, 166, 133, 1)',
            borderColor: 'rgba(112, 166, 133, 1)',
            borderWidth: 5,
            fill: false
        }

    ];

    const ctx = document.getElementById('foodGraph').getContext('2d');

    const data = {
        labels: labels,
        datasets: datasets
    };

    const options = {
        aspectRatio: 2,
        plugins: {

            title: {
                display: true,
                text: 'Comparison of Actual vs Inflation-Adjusted Food and non-alcoholic beverage Expenditures in Toronto',
                font: {
                    size: 30,
                    family: "BebasNeue"
                },
                color: "rgb(248, 241, 208)"
            },
            legend: {
                labels: {
                    color: 'rgba(153, 160, 170,1)',
                    font: {
                        size: 15,
                        family: "BebasNeue"
                    }
                }
            }
        },

        scales: {
            y: {
                position: 'right',

                grid: {
                    borderWidth: 1,
                    color: 'rgba(153, 160, 170,1)',
                    drawBorder: false,
                    drawOnChartArea: false,
                    drawTicks: true
                },
                title: {
                    display: true,
                    text: 'Expenditures (Billions)',
                    color: 'rgba(153, 160, 170,1)',
                    font: {
                        family: "BebasNeue",
                        size: 20
                    }
                },
                beginAtZero: true,
                ticks: {
                    font: {
                        size: 15,
                        family: "BebasNeue"
                    },
                    color: 'rgba(153, 160, 170,1)',
                    callback: function (value, index, values) {
                        return value / 1_000_000_000 + 'B';
                    }
                }
            },
            x: {
                max: 2022,
                ticks: {
                    color: 'rgba(153, 160, 170,1)',
                    font: {
                        size: 15,
                        family: "BebasNeue"
                    }
                },
                grid: {
                    borderWidth: 1,
                    color: 'rgba(153, 160, 170,1)',
                    drawBorder: false,
                    drawOnChartArea: false,
                    drawTicks: true
                },
                title: {
                    display: true,
                    text: 'Year',
                    color: 'rgba(153, 160, 170,1)',
                    font: {
                        family: "BebasNeue",
                        size: 20
                    }
                }
            }
        }

    };


    // Create the chart
    currentGraph = new Chart(ctx, {
        type: 'line',
        data: data,
        options: options
    });
};

async function fetchCSVData(url) {
    const response = await fetch(url);
    const csvText = await response.text();
    const parsedData = Papa.parse(csvText, {
        header: true,
        dynamicTyping: true
    });
    return parsedData.data;
}
