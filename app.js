import { db } from "./firebase.js";
import { ref, push, onChildAdded } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

const chatBox = document.getElementById("chat-box");
const sendBtn = document.getElementById("sendBtn");

const usernameInput = document.getElementById("username");
const messageInput = document.getElementById("message");

const chatRef = ref(db, "messages");


// 🔹 Send Message
sendBtn.addEventListener("click", () => {
  const user = usernameInput.value.trim();
  const message = messageInput.value.trim();

  if (!user || !message) return;

  push(chatRef, {
    user: user,
    text: message,
    time: new Date().toLocaleTimeString()
  });

  messageInput.value = "";
});


// 🔹 Receive Messages (Real-Time)
onChildAdded(chatRef, (data) => {
  const msg = data.val();

  const currentUser = usernameInput.value;

  const msgDiv = document.createElement("div");
  msgDiv.classList.add("message");

  if (msg.user === currentUser) {
    msgDiv.classList.add("me");
  } else {
    msgDiv.classList.add("other");
  }

  msgDiv.innerHTML = `
    <strong>${msg.user}</strong><br>
    ${msg.text}<br>
    <small>${msg.time}</small>
  `;

  chatBox.appendChild(msgDiv);

  // Auto scroll
  chatBox.scrollTop = chatBox.scrollHeight;
});
