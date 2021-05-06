const chatter = document.getElementById("chatter");
const msgTemplate = document.getElementById("chatMsg");

ComfyJS.onChat = (user, message) => {
  const newMsg = msgTemplate.content.cloneNode(true);
  newMsg.querySelector("strong").textContent = user;
  newMsg.querySelector("span").textContent = message;
  chatter.appendChild(newMsg);
};

ComfyJS.Init(twitchUsername);
