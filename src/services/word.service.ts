import wordRepository from '../../prisma';
import { Word } from '../models/word.model';

export default class wordService {
	private _wordRepository: wordRepository;

	constructor() {
		this._wordRepository = new wordRepository();
	}

	public async fetchAll(): Promise<Word[]> {
		return await this._wordRepository.fetch();
	}
}
