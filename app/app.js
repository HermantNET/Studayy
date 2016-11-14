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
					expanded: false,
					estimatedTime: [0, 2, 30],
					actualTime: [0, 1, 15],
					finishBy: [2017, 11, 26],
					days: [0, 6],
					distribute: false
				}
			]
		}, {
			name: 'History',
			expanded: false,
			tasks: [
				{
					name: "Read about the 90's",
					expanded: false,
					estimatedTime: [0, 2, 30],
					actualTime: [0, 1, 15],
					finishBy: [2017, 2, 11],
					days: [0, 6],
					distribute: true
				}
			]
		}, {
			name: 'Maths',
			expanded: false,
			tasks: [
				{
					name: "Trig assignment",
					expanded: false,
					estimatedTime: [0, 2, 30],
					actualTime: [0, 1, 15],
					finishBy: [2017, 1, 1],
					days: [0, 6],
					distribute: true
				}
			]
		}, {
			name: 'Computer Science',
			expanded: false,
			tasks: [
				{
					name: "Make React Native App",
					expanded: false,
					estimatedTime: [0, 2, 30],
					actualTime: [0, 1, 15],
					finishBy: [2017, 14, 26],
					days: [0, 6],
					distribute: true
				}, {
					name: "Refactor school project",
					expanded: false,
					estimatedTime: [0, 2, 30],
					actualTime: [0, 1, 15],
					finishBy: [2016, 11, 12],
					days: [0, 6],
					distribute: true
				}, {
					name: "Complete coding challenge for the christmas",
					expanded: false,
					estimatedTime: [0, 2, 30],
					actualTime: [0, 1, 15],
					finishBy: [2016, 11, 24],
					days: [0, 6],
					distribute: true
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
