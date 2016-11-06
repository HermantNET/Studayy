// Dependencies
import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

// Reducers
import reducer from './reducers/index.js';

// Default state
const state = {
	navigation: {
		pages: [
			'Home', 'Tasks', 'Record', 'Goals'
		],
		page: 'Home',
		currentSlide: 0,
		title: 'Studyy',
		subtitle: 'Home'
	}
};

// Store
const store = createStore(reducer, state);

// Components
import Main from './components/smart/Main.js';

// Application entry
export default function App() {
	return (
		<Provider store={store}>
			<Main/>
		</Provider>
	);
}
