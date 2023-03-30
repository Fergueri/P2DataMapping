// Add a DOMContentLoaded event listener to the document
// This ensures that the areaGraph function will be called when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    areaGraph();
});

// Add a resize event listener to the window
// This function will be called when the window is resized
window.addEventListener('resize', function () { // Get the chart container DOM elements by their IDs
    const chartContainer = document.getElementById('chartContainer');
    const chartContainer2 = document.getElementById('chartContainer2');

    // Define the aspect ratio for resizing the chart containers
    const aspectRatio = 2;
    // Adjust this value according to your desired aspect ratio

    // Calculate the new height based on the width and the aspect ratio
    const newHeight = chartContainer.clientWidth / aspectRatio;

    // Set the new height to the chart containers
    chartContainer.style.height = `${newHeight}px`;
    chartContainer2.style.height = `${newHeight}px`;

    // Log the new height value to the console for debugging purposes
    console.log(newHeight);

    // Resize and render the first chart (currentGraph)
    currentGraph.resize();
    currentGraph.render();

    // Resize and render the second chart (myBarGraph)
    myBarGraph.resize();
    myBarGraph.render();
});
