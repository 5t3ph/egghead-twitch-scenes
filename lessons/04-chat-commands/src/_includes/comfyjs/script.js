const chatter = document.getElementById("chatter");
const msgTemplate = document.getElementById("chatMsg");
const main = document.querySelector("main");

ComfyJS.onChat = (user, message) => {
  const newMsg = msgTemplate.content.cloneNode(true);
  newMsg.querySelector("strong").textContent = user;
  newMsg.querySelector("span").textContent = message;
  chatter.appendChild(newMsg);
};

ComfyJS.onCommand = (_user, command) => {
  if (chatCommands.includes(command)) {
    const originalNode = document.querySelector(`.command-${command}`);
    const commandNode = originalNode.cloneNode(true);
    main.appendChild(commandNode);

    setTimeout(() => {
      commandNode.classList.add("active");
    }, 50);

    setTimeout(() => {
      commandNode.classList.remove("active");
    }, 1500);
  }
};

ComfyJS.Init(twitchUsername);
