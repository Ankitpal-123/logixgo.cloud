// Define the chatbot responses
const responses = {
  hi: "Hello! How can I help you today?",
  "how are you": "I am doing well, thank you for asking!",
  "what do you do":
    "I am a chatbot designed to help you with any questions or issues you may have.",
  "thank you": "You are welcome! Is there anything else I can help you with?",
  bye: "Goodbye! Have a great day!",
};

// Get references to the chat window and input form
const chatWindow = document.querySelector(".chat-body");
const inputForm = document.querySelector("form");

// Add event listener for the form submission
inputForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get the user's message and clear the input field
  const messageInput = inputForm.querySelector("input");
  const message = messageInput.value.trim();
  messageInput.value = "";

  // Add the user's message to the chat window
  addMessage("user", message);

  // Generate a response from the chatbot
  const response = generateResponse(message);

  // Add the chatbot's response to the chat window
  addMessage("chatbot", response);
});

// Function to generate a response from the chatbot
function generateResponse(message) {
  // Convert the user's message to lowercase and remove any punctuation
  const cleanedMessage = message.toLowerCase().replace(/[^\w\s]/gi, "");

  // Loop through the responses and check if the user's message matches any of them
  for (const key in responses) {
    if (cleanedMessage.includes(key)) {
      return responses[key];
    }
  }

  // If no match is found, return a default response
  return "I'm sorry, I didn't understand your question. Can you please try again?";
}

// Function to add a message to the chat window
function addMessage(sender, message) {
  const messageElement = document.createElement("div");
  messageElement.classList.add("chat-message");
  messageElement.classList.add(`chat-message-${sender}`);
  messageElement.innerHTML = `<p>${message}</p>`;
  chatWindow.appendChild(messageElement);
  chatWindow.scrollTop = chatWindow.scrollHeight;
}
