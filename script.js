document.addEventListener('DOMContentLoaded', () => {
    let user = '';

    function getBotResponse(userMessage) {
        if (user === '') {
            user = userMessage.trim();
            return `
                <div class="chat-message bot-message">
                    <div class="bot-avatar">
                        <img src="img/chatbot.gif" alt="Bot Avatar">
                    </div>
                    <div class="bot-message-content">
                        <div class="bot-message-text">Nice to meet you, ${user}! How can I assist you?</div>
                    </div>
                </div>
            `;
        }

        if (userMessage.toLowerCase().includes('hello')) {
            return `
                <div class="chat-message bot-message">
                    <div class="bot-avatar">
                        <img src="img/chatbot.gif" alt="Bot Avatar">
                    </div>
                    <div class="bot-message-content">
                        <div class="bot-message-text">Hello, ${user}! How can I assist you?</div>
                    </div>
                </div>
            `;
        }

        if (userMessage.toLowerCase().includes('what is lightning')) {
            return `
                <div class="chat-message bot-message">
                    <div class="bot-avatar">
                        <img src="img/lightning.gif" alt="Lightning">
                    </div>
                    <div class="bot-message-content">
                        <div class="bot-message-text">Lightning is a bright flash of light during a storm. It happens when electricity jumps around in the clouds. It can be very quick and loud. Remember to stay safe when you see lightning!</div>
                    </div>
                </div>
            `;
        }

        return `
            <div class="chat-message bot-message">
                <div class="bot-avatar">
                    <img src="img/chatbot.gif" alt="Bot Avatar">
                </div>
                <div class="bot-message-content">
                    <div class="bot-message-text">I'm sorry, I didn't understand that. Can you please rephrase?</div>
                </div>
            </div>
        `;
    }

    function sendUserMessage(event) {
        event.preventDefault();

        const userMessageInput = document.getElementById('user-message-input');
        const chatLog = document.getElementById('chat-log');
        const userMessage = userMessageInput.value.trim();

        if (userMessage !== '') {
            const userMessageElement = document.createElement('div');
            userMessageElement.classList.add('chat-message', 'user-message');
            userMessageElement.innerHTML = `
                <div class="user-message-content">
                    <div class="user-message-text">${userMessage}</div>
                </div>
            `;
            chatLog.appendChild(userMessageElement);

            const botResponse = getBotResponse(userMessage);
            const botMessageElement = document.createElement('div');
            botMessageElement.classList.add('chat-message', 'bot-message');
            botMessageElement.innerHTML = botResponse;
            chatLog.appendChild(botMessageElement);

            userMessageInput.value = '';
            chatLog.scrollTop = chatLog.scrollHeight;
        }
    }

    const messageForm = document.getElementById('message-form');
    messageForm.addEventListener('submit', sendUserMessage);
});
