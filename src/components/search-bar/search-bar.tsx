import React, { Component, FormEvent, ChangeEvent } from 'react';

interface SearchBarProps {
	onSubmit(value: string): void;
}

interface SearchBarState {
	searchValue: string;
}
class SearchBar extends Component<SearchBarProps, SearchBarState> {

	/**
	 *
	 */
	constructor(props: SearchBarProps) {
		super(props);
		this.state = {
			searchValue: ''
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	private handleSubmit(event: FormEvent) {
		event.preventDefault();
		if (this.state.searchValue && this.state.searchValue.length) {
			this.props.onSubmit(this.state.searchValue);
		}
	}

	private handleChange(event: ChangeEvent<HTMLInputElement>) {
		this.setState({
			searchValue: event.target.value
		});
	}

	render() {
		return (
			<div className="search-bar">
				<form onSubmit={this.handleSubmit}>
					<input type="text" value={this.state.searchValue} onChange={this.handleChange} />
					<input type="submit" />
				</form>
			</div>
		);
	}
}

export default SearchBar;