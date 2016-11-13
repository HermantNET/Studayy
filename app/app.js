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
	},
	subjects: [
		{
			name: 'Chemistry',
			expanded: false,
			tasks: [
				{
					name: "Make cake",
					expanded: false
				}
			]
		}, {
			name: 'History',
			expanded: false,
			tasks: [
				{
					name: "Read about the 90's",
					expanded: false
				}
			]
		}, {
			name: 'Maths',
			expanded: false,
			tasks: [
				{
					name: "Trig assignment",
					expanded: false
				}
			]
		}, {
			name: 'Computer Science',
			expanded: false,
			tasks: [
				{
					name: "Make React Native App",
					expanded: false
				}, {
					name: "Refactor school project",
					expanded: false
				}, {
					name: "Complete coding challenge for the christmas",
					expanded: false
				}
			]
		}
	]
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
