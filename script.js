//your JS code here. If required.
// Function to delay execution
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

// Async function to handle form submission
async function handleSubmit(event) {
    event.preventDefault();

    // Get input values
    const textInput = document.getElementById('text').value;
    const delayInput = parseInt(document.getElementById('delay').value);

    // Validate delay input
    if (isNaN(delayInput) || delayInput <= 0) {
        alert('Please enter a valid positive number for delay.');
        return;
    }

    // Delay execution
    await delay(delayInput);

    // Display text on webpage
    const outputDiv = document.getElementById('output');
    outputDiv.textContent = textInput;
}

// Event listener for form submission
document.getElementById('btn').addEventListener('click', handleSubmit);

