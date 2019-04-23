import React, { Component } from 'react';
import SearchBar from '../components/search-bar/search-bar';
import BookList from '../components/book/book-list/book-list';
import BooksApi from '../services/books-api';
import './book-search.scss';

interface BookSearchState {
	items: any[];
	hasMore: boolean;
}
class BookSearch extends Component<any, BookSearchState> {

	private startIndex = 0;
	private currentSearchTotalItems = 0;
	private currentSearchValue = '';
	/**
	 *
	 */
	constructor(props: any) {
		super(props);

		this.state = {
			items: [],
			hasMore: false
		};
		this.launchSearch = this.launchSearch.bind(this);
		this.getBooks = this.getBooks.bind(this);
	}


	private launchSearch(searchValue: string) {
		this.startIndex = 0;
		this.currentSearchValue = searchValue;
		this.getBooks();
	}

	private getBooks() {
		BooksApi
			.getBooks(this.currentSearchValue, this.startIndex)
			.then(response => {
				this.startIndex += response.items.length;
				this.currentSearchTotalItems = response.totalItems;
				this.setState(
					{
						items: [...this.state.items, ...response.items],
						hasMore: this.startIndex <= this.currentSearchTotalItems
					}
				);
			});
	}

	render() {
		return (
			<div className="book-search">
				<header></header>
				<div className="book-search__search-bar">
					<SearchBar onSubmit={this.launchSearch} />
				</div>
				<div className="book-search__book-list">
					<BookList items={this.state.items} loadMore={this.getBooks} hasMore={this.state.hasMore} />
				</div>
			</div>
		);
	}
}

export default BookSearch;