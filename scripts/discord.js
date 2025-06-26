const discordUserId = "716306888492318790";
const discordDiv = document.getElementById("discord");

async function fetchPresence() {
  try {
    const response = await fetch(`https://api.lanyard.rest/v1/users/${discordUserId}`);
    const data = await response.json();

    const { discord_status } = data.data;
    let output;
    if (data.discord_status != "dnd") {
      output = `I am currently <u>${discord_status}</u> in Discord!`;
    } if (data.discord_status == "dnd") {
      output = `I am currently on <u>do not disturb</u> in Discord!`;
    }

    discordDiv.innerHTML = output;
  } catch (error) {
    console.error("Error fetching presence:", error);
    discordDiv.innerHTML = "Error fetching data.";
  }
}

fetchPresence();
setInterval(fetchPresence, 15000);
