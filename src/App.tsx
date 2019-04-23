import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import BookSearch from './containers/book-search';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Router>
					<Route path="/" exact component={BookSearch} />
				</Router>
			</div>
		);
	}
}

export default App;
