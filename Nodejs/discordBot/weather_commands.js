import { REST, Routes, SlashCommandBuilder } from "discord.js";

const commands = [
  new SlashCommandBuilder()
    .setName("weather")
    .setDescription("Get the current weather for a city")
    .addStringOption((option) =>
      option.setName("city").setDescription("The city name").setRequired(true)
    ),
].map((command) => command.toJSON());

// Deploy the slash command
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
