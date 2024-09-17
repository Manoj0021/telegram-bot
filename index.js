const { Telegraf } = require("telegraf");
require("dotenv").config();
const axios = require("axios");

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => ctx.reply("Welcome"));
bot.command("pattern", async (ctx) => {
  const response = await axios.get(
    "https://raw.githubusercontent.com/Manoj0021/DSA/main/recursion/printpattern.js"
  );
  ctx.reply(response.data);
});

bot.launch();
