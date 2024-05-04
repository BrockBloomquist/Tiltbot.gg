require("dotenv").config();
const { Client, Collection, Events, GatewayIntentBits } = require("discord.js");
const { token } = process.env.DISCORD_TOKEN;
const fs = require("fs");

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.commands = new Collection();

const functionFolders = fs.readdirSync(`./src/functions`);

for (const folder of functionFolders) {
  const functionFiles = fs.readdirSync(`./src/functions/${folder}`);
}
// When the client is ready, run this code (only once).
// The distinction between `client: Client<boolean>` and `readyClient: Client<true>` is important for TypeScript developers.
// It makes some properties non-nullable.
client.once(Events.ClientReady, (readyClient) => {
  console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

// Log in to Discord with your client's token
client.login(token);
