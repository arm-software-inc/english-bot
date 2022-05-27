import { PrismaClient } from '@prisma/client';
import { Word } from '../src/models/wordEnglish';

export default class databaseRepository {
	private _prismaClient: PrismaClient;

	constructor() {
		this._prismaClient = new PrismaClient();
		this._prismaClient.$connect();
	}

	async create(model: Word): Promise<void> {
		await this._prismaClient.words.create({
			data: model,
		});
	}

	async update(model: Word): Promise<void> {
		await this._prismaClient.words.update({
			where: { id: model.id },
			data: model,
		});
	}
	async fetch(): Promise<Word[]> {
		return await this._prismaClient.words.findMany();
	}

	// async fetchByWord(word: string): Promise<WordEnglish | null> {
	// 	return await this._prismaClient.wordEnglish.findFirst({
	// 		where: { word: word },
	// 	});
	// }
}
