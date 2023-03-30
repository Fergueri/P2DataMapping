// Define an asynchronous function called areaGraph to fetch and display a line chart
async function areaGraph() { // Fetch and parse the CSV data
    const url = "https://fergueri.github.io/P2DataMapping/CSV/Total_EX.csv";
    const csvData = await fetchCSVData(url);

    // Extract labels and data from the parsed CSV data
    const labels = csvData.map((row) => row['Year']);

    // Define the datasets with their respective labels, data, and styles
    const datasets = [
        {
            label: 'University education',
            data: csvData.map((row) => row['University education']),
            backgroundColor: 'rgba(112, 166, 133, 1)',
            borderColor: 'rgba(112, 166, 133, 1)',
            borderWidth: 1,
            fill: true
        },
        {
            label: 'Pharmaceuticals',
            data: csvData.map((row) => row['Pharmaceuticals']),
            backgroundColor: 'rgba(128, 177, 143, 1)',
            borderColor: 'rgba(128, 177, 143, 1)',
            borderWidth: 1,
            fill: true
        },
        {
            label: 'Telecommunication services',
            data: csvData.map((row) => row['Telecommunication services']),
            backgroundColor: 'rgba(140, 188, 148, 1)',
            borderColor: 'rgba(140, 188, 148, 1)',
            borderWidth: 1,
            fill: true
        },
        {
            label: 'Clothing and footwear',
            data: csvData.map((row) => row['Clothing and footwear']),
            backgroundColor: 'rgba(158, 201, 152, 1)',
            borderColor: 'rgba(158, 201, 152, 1)',
            borderWidth: 1,
            fill: true
        }, {
            label: 'Rent',
            data: csvData.map((row) => row['Rent']),
            backgroundColor: 'rgba(186, 212, 153, 1)',
            borderColor: 'rgba(186, 212, 153, 1)',
            borderWidth: 1,
            fill: true
        }, {
            label: 'Food',
            data: csvData.map((row) => row['Food']),
            backgroundColor: 'rgba(217, 220, 157, 1)',
            borderColor: 'rgba(217, 220, 157, 1)',
            borderWidth: 1,
            fill: true
        }, {
            label: 'Insurance and Financial services',
            data: csvData.map((row) => row['Insurance and Financial services']),
            backgroundColor: 'rgba(248, 227, 162, 1)',
            borderColor: 'rgba(248, 227, 162, 1)',
            borderWidth: 1,
            fill: true

        }
    ];

    // Get the canvas element
    const ctx = document.getElementById('myAreaGraph').getContext('2d');

    // Defines the data and options
    const data = {
        labels: labels,
        datasets: datasets
    };

    const options = {
        aspectRatio: 2,
        plugins: {

            title: {
                display: true,
                text: 'Total Expenditures in Toronto by Year',
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
                max: Math.max(... datasets.flatMap(dataset => dataset.data)) * 1.1,
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
                max: 2021,
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
        },
        elements: {
            point: {
                radius: 0
            }
        }
    };

    // Creates the chart
    currentGraph = new Chart(ctx, {
        type: 'line',
        data: data,
        options: options
    });
};
// Defines an asynchronous function called fetchCSVData to fetch and parse the CSV data
async function fetchCSVData(url) {
    const response = await fetch(url);
    const csvText = await response.text();
    const parsedData = Papa.parse(csvText, {
        header: true,
        dynamicTyping: true
    });
    return parsedData.data;
}

