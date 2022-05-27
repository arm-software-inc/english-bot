/* eslint-disable @typescript-eslint/no-non-null-assertion */
import env from 'dotenv';
import { Client, Intents } from 'discord.js';
import wordService from './services/word.service';

env.config();

let prismaClient: wordService;

const client = new Client({
	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
	retryLimit: 2,
});

client.once('ready', async () => {
	prismaClient = new wordService();
});

client.on('messageCreate', async (msg) => {
	if (msg.author.bot) return;

	if (!msg.content.startsWith(process.env.PREFIX!)) return;

	// id do canal -> word-of-the-day
	const channel = client.channels.cache.find(
		(channel) => channel.id === '979531669889503302'
	);

	if (msg.channel !== channel) {
		msg.channel.send("You're dumb man, shut up! This is the wrong channel.");
		return;
	}

	if (msg.content.startsWith(process.env.PREFIX! + 'word')) {
		msg.channel.send('oi');
	}

	if (msg.content.startsWith(process.env.PREFIX! + 'all')) {
		msg.channel.send('fetching all...');
		const words = await prismaClient.fetchAll();
		msg.channel.send(JSON.stringify(words));
	}
});

client.login(process.env.TOKEN_BOT);
