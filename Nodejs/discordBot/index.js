import { Client, GatewayIntentBits, time } from "discord.js";
import { config } from "dotenv";
import express from "express";
import axios from "axios";

config();
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});
const TOKEN = process.env.SHORTNER_BOT_TOKEN;
const WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/weather`;
const PORT = process.env.PORT || 3000;

// Message create event
client.on("messageCreate", async (message) => {
  if (message.author.bot) return;

  if (message.content.startsWith("create")) {
    const url = message.content.split("create")[1];
    message.reply("Creating short url for " + url);
  } else if (
    message.content.startsWith("!weather") ||
    message.content.startsWith("!Weather")
  ) {
    const args = message.content.split(" ");
    if (args.length < 2) {
      return message.reply(
        "Please provide a city name. Example: `!weather Pokhara (city-name)`"
      );
    }

    const city = args.slice(1).join(" ");
    try {
      const response = await axios.get(`${WEATHER_API_URL}`, {
        params: {
          q: city,
          appid: process.env.OPENWEATHER_API_KEY,
          units: "metric",
        },
      });

      const { temp, humidity } = response.data.main;
      const weatherDescription = response.data.weather[0].description;
      message.reply(
        `🌤️ Weather in ${city}:\nTemperature: ${temp}°C\nHumidity: ${humidity}%\nCondition: ${weatherDescription}`
      );
    } catch (error) {
      console.error(error);
      message.reply(
        `Sorry, I couldn't fetch the weather for "${city}". Please check the city name.`
      );
    }
  } else if (message.content.startsWith("!shorten")) {
    const args = message.content.split(" ");
    console.log(args.length);
    if (args.length < 2) {
      return message.reply(
        "Please provide a url with greater length such as https://google.com"
      );
      const url = args.slice(1).join(" ");
      try {
        // Call URL shortener API (using shrtco.de)
        const response = await axios.get(
          `https://api.shrtco.de/v2/shorten?url=${url}`
        );
        const shortUrl = response.data.result.short_link;

        await interaction.reply(`🔗 Here's your shortened URL: ${shortUrl}`);
      } catch (error) {
        console.error(error);
        await interaction.reply(
          "🚨 Failed to shorten the URL. Please try again later."
        );
      }
    }
  } else {
    const reply = {
      author: message.author.toString(),
      date: message.createdAt.toDateString(),
      content: message.content,
    };
    message.reply({ content: JSON.stringify(reply) });
  }
});
client.login(TOKEN);

// Interaction create events
client.on("interactionCreate", (interaction) => {
  if (interaction.isChatInputCommand()) {
    if (interaction.commandName === "date") {
      interaction.reply({ content: interaction.createdAt.toDateString() });
    } else if (interaction.commandName === "time") {
      interaction.reply({
        content: interaction.createdAt.toTimeString(),
      });
    }
  }
});

// Ready events
client.on("ready", (client) => {
  ///console.log(client.user.tag);
});
