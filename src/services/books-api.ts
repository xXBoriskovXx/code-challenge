import 'whatwg-fetch';
import { BooksResponse } from './books-response';

class BooksApi {

	private apiUrl = 'https://www.googleapis.com/books/v1/volumes';


	public getBooks(query: string, startIndex: number, maxResults: number = 40): Promise<BooksResponse> {
		const requestURL = `${this.apiUrl}?q=${query}&startIndex=${startIndex}&maxResults=${maxResults}`;
		return fetch(requestURL).then(response => response.json());
	}
}

export default new BooksApi