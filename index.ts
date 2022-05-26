/* eslint-disable @typescript-eslint/no-non-null-assertion */
import env from 'dotenv';
import { Client, Intents, TextChannel } from 'discord.js';

env.config();

const client = new Client({
	intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
	retryLimit: 2,
});

client.once('ready', async (client) => {
	// URL = await ngrok.connect({
	// 	authtoken: process.env.AUTH_TOKEN_NGROK,
	// 	proto: 'tcp',
	// 	addr: 1433,
	// 	onStatusChange: () => {
	// 		// eslint-disable-next-line no-console
	// 		console.log('url changed');
	// 	},
	// });

	// id do canal -> word-of-the-day
	const channel = client.channels.cache.find(
		(channel) => channel.id === '979531669889503302'
	);
	(<TextChannel>channel).send(`All right man what you need an`);
});

client.on('messageCreate', async (msg) => {
	if (msg.author.bot) return;

	if (!msg.content.startsWith(process.env.PREFIX!)) return;

	if (msg.content.startsWith(process.env.PREFIX! + 'url')) {
		msg.channel.send('oi');
	}
});

client.login(process.env.TOKEN_BOT);
