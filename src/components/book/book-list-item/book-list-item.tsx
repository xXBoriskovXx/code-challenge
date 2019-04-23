import React, { Component } from 'react';
import { VolumeInfo } from './volume-info';

interface BookListItemProps {
	volumeInfo: VolumeInfo;
}
class BookListItem extends Component<BookListItemProps, any> {

	/**
	 *
	 */
	constructor(props: BookListItemProps) {
		super(props);
	}

	render() {
		return (
			<div className="book-list-item" >
				<div className="book-header">
					<div className="book-header__title">{this.props.volumeInfo.title}</div>
					<div className="book-header__category">{this.props.volumeInfo.categories}</div>
				</div>
				<div className="book-body">
					<div className="book-body__description">{this.props.volumeInfo.description}</div>
					<div className="book-body__thumbnail">
						{this.props.volumeInfo.imageLinks ? <img src={this.props.volumeInfo.imageLinks.thumbnail} /> : ''}
					</div>
				</div>
			</div>
		);
	}
}

export default BookListItem;