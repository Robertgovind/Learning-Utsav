import { REST, Routes } from "discord.js";
import { config } from "dotenv";

config();
const commands = [
  {
    name: "date",
    description: "tells the current date",
  },
  {
    name: "time",
    description: "tells the current time",
  },
];

const rest = new REST({ version: "10" }).setToken(
  process.env.SHORTNER_BOT_TOKEN
);

(async () => {
  try {
    console.log("Started refreshing application (/) commands.");

    await rest.put(Routes.applicationCommands(process.env.DISCORD_CLIENT_ID), {
      body: commands,
    });

    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }
})();
