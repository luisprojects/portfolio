// Get the element to display the last updated date
const lastUpdatedElement = document.getElementById('last-updated-date');

// Set the last updated date (change this to the current date whenever you update your website)
const lastUpdatedDate = new Date('2024-05-20T12:00:00'); // Example date, update this as needed

// Format the date to a more readable format
const formattedDate = lastUpdatedDate.toLocaleDateString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit'
});

// Display the last updated date
lastUpdatedElement.textContent = formattedDate;