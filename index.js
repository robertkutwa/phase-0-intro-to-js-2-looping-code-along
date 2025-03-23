// Code your solutions in this file
// Function to create thank you cards
function writeCards(names, event) {
    const thankYouCards = []; // Step 1: Create an empty array to hold the messages
  
    for (let i = 0; i < names.length; i++) {
      // Step 2: Iterate through the input array
      const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`; // Create the message
      thankYouCards.push(message); // Add the message to the new array
    }
  
    return thankYouCards; // Step 3: Return the new array
  }
  
  // Function to count down from a given number to zero
  function countDown(startingNumber) {
    while (startingNumber >= 0) {
      console.log(startingNumber); // Log the current number
      startingNumber--; // Decrement the number
    }
  }