const discordUserId = "716306888492318790";
const presenceDiv = document.getElementById("discord");

async function fetchPresence() {
  try {
    const response = await fetch(`https://api.lanyard.rest/v1/users/${discordUserId}`);
    const data = await response.json();

    const { discord_status } = data.data;
    let output = `I am currently on <u>${discord_status}</u> mode in Discord!`;

    presenceDiv.innerHTML = output;
  } catch (error) {
    console.error("Error fetching presence:", error);
    presenceDiv.innerHTML = "Error fetching data.";
  }
}

fetchPresence();
setInterval(fetchPresence, 15000);
