const chatForm = document.getElementById("chatForm");
const chatbox = document.getElementById("chatbox");

const knowledgeBase = {
  "hello": "Hi there! 👋 I'm Indian AI Tutor. Let's learn together!",
  "how are you": "I'm doing great, thank you! 😊",
  "2+2": "2 + 2 = 4 ✔️",
  "capital of india": "The capital of India is New Delhi 🇮🇳",
  "who is mahatma gandhi": "Mahatma Gandhi was the Father of the Nation of India. He believed in non-violence ✌️",
  "what is water": "Water is H2O 💧. It is essential for life!",
  "planet earth": "🌍 Earth is our home planet. It has land, water, and life.",
  "goodbye": "Goodbye! 👋 Keep learning every day!"
};

chatForm?.addEventListener("submit", (e) => {
  e.preventDefault();
  const userInput = document.getElementById("userInput").value.toLowerCase();

  addMessage("user", userInput);

  let reply = "🤔 Sorry, I don’t know that yet. Try asking about math, science, or India!";
  if (knowledgeBase[userInput]) {
    reply = knowledgeBase[userInput];
  }

  addMessage("bot", reply);
  document.getElementById("userInput").value = "";
});

function addMessage(sender, text) {
  const msg = document.createElement("div");
  msg.classList.add("message", sender);
  msg.textContent = `${sender === "user" ? "👦 You" : "🤖 AI Tutor"}: ${text}`;
  chatbox.appendChild(msg);
  chatbox.scrollTop = chatbox.scrollHeight;
}
