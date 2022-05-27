import { PrismaClient } from '@prisma/client';
import { Word } from '../src/models/wordEnglish';

export default class databaseRepository {
	private _prismaClient: PrismaClient;

	constructor() {
		this._prismaClient = new PrismaClient();
	}

	async create(model: Word): Promise<void> {
		await this._prismaClient.word.create({
			data: model,
		});
	}

	async update(model: Word): Promise<void> {
		await this._prismaClient.word.update({
			where: { id: model.id },
			data: model,
		});
	}
	async fetch(): Promise<Word[]> {
		return await this._prismaClient.word.findMany();
	}

	// async fetchByWord(word: string): Promise<WordEnglish | null> {
	// 	return await this._prismaClient.wordEnglish.findFirst({
	// 		where: { word: word },
	// 	});
	// }
}
