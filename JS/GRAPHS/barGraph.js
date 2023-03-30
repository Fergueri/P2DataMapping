document.addEventListener("DOMContentLoaded", async function () {
  // Fetch and parse the CSV data
  const url = "P2DataMapping/CSV/CPI.csv";

  const csvData = await fetchCSVData(url);
  const colors = [
    "rgba(112, 166, 133, 1)",
    "rgba(128, 177, 143, 1)",
    "rgba(140, 188, 148, 1)",
    "rgba(158, 201, 152, 1)",
    "rgba(186, 212, 153, 1)",
    "rgba(217, 220, 157, 1)",
    "rgba(248, 227, 162, 1)",
  ];
  const cpiRanges = [
    { min: 0, max: 0.5, colorIndex: 0 },
    { min: 0.5, max: 1, colorIndex: 1 },
    { min: 1, max: 1.5, colorIndex: 2 },
    { min: 1.5, max: 2, colorIndex: 3 },
    { min: 2, max: 2.5, colorIndex: 4 },
    { min: 2.5, max: 3, colorIndex: 5 },
    { min: 3, max: Infinity, colorIndex: 6 },
  ];
  // Extract labels and data from the parsed CSV data
  const years = csvData.map((row) => row["Year"]);
  const datasetData = csvData.map((row) => parseFloat(row["CPI"]).toFixed(2));
  const colorData = datasetData.map((cpi) => {
    let colorIndex = 0;
    for (const range of cpiRanges) {
      if (cpi >= range.min && cpi < range.max) {
        colorIndex = range.colorIndex;
        break;
      }
    }
    return colors[colorIndex];
  });
  const data = {
    datasets: [
      {
        label: "CPI",
        data: datasetData,
        backgroundColor: colorData,
        borderColor: colorData,
        borderWidth: 1,
        fill: true,
      },
    ],
    labels: years,
  };

  // Get the canvas element
  const ctx = document.getElementById("myBarGraph").getContext("2d");

  const options = {
    aspectRatio: 0.5,
    indexAxis: "y",
    plugins: {
      title: {
        display: true,
        text: "Consumer Price Index by Year",
        font: {
          size: 30,
          family: "BebasNeue",
        },
        color: "rgba(153, 160, 170,1)",
      },
      legend: {
        display: false,
      },
    },

    scales: {
      x: {
        position: "bottom",

        grid: {
          borderWidth: 1,
          color: "rgba(153, 160, 170,1)",
          drawBorder: false,
          drawOnChartArea: false,
          drawTicks: true,
        },
        title: {
          display: true,
          text: "Consumer Price Index (%)",
          color: "rgba(153, 160, 170,1)",
          font: {
            size: 15,
            family: "BebasNeue",
          },
        },
        beginAtZero: true,
        ticks: {
          color: "rgba(153, 160, 170,1)",
        },
      },
      y: {
        max: 2021,
        ticks: {
          font: {
            size: 10,
            family: "BebasNeue",
          },
          color: "rgba(153, 160, 170,1)",
        },
        grid: {
          borderWidth: 1,
          color: "rgba(153, 160, 170,1)",
          drawBorder: true,
          drawOnChartArea: true,
          drawTicks: false,
        },
        title: {
          display: true,
          text: "Year",
          color: "rgba(153, 160, 170,1)",
          font: {
            size: 15,
            family: "BebasNeue",
          },
        },
      },
    },
    elements: {
      point: {
        radius: 0,
      },
    },
  };

  // Create the chart
  myBarGraph = new Chart(ctx, {
    type: "bar",
    data: data,
    options: options,
  });
});

async function fetchCSVData(url) {
  const response = await fetch(url);
  const csvText = await response.text();
  const parsedData = Papa.parse(csvText, { header: true, dynamicTyping: true });
  return parsedData.data;
}
