import React, { Component } from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import BookListItem from '../book-list-item/book-list-item';
import { Volume } from './volume';
interface BookListProps {
	items: Volume[];
	loadMore(): void;
	hasMore: boolean;
}
class BookList extends Component<BookListProps, any> {

	/**
	 *
	 */
	constructor(props: BookListProps) {
		super(props);

	}

	render() {
		return (
			<div className="book-list">
				<InfiniteScroll
					loadMore={this.props.loadMore}
					hasMore={this.props.hasMore}
					loader={<div className="loader" key={0}>Loading ...</div>}
				>
					{this.props.items.map((item, index) => {
						return (
							<BookListItem volumeInfo={item.volumeInfo} key={index} />
						);
					})}
				</InfiniteScroll>
			</div>
		);
	}
}

export default BookList;