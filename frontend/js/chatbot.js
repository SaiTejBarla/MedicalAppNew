const chatbotInput = document.getElementById('chatbotInput');
const chatbotButton = document.getElementById('chatbotBtn');
const chatbotResult = document.getElementById('chatbotResult');

chatbotButton.addEventListener('click', () => {
    const userInput = chatbotInput.value;

    fetch('/api/chatbot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userInput })
    })
        .then(response => response.json())
        .then(data => {
            chatbotResult.innerHTML = `<p>${data.response}</p>`;
        })
        .catch(error => console.error('Error:', error));
});
