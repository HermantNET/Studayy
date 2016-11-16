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
			tasks: [
				{
					name: "Make cake",
					estimatedTime: [0, 2, 30],
					actualTime: [0, 1, 15],
					finishBy: [2017, 11, 26],
					days: [1, 6],
					distribute: false
				}
			]
		}, {
			name: 'Computer Science',
			tasks: [
				{
					name: "Make React Native App",
					estimatedTime: [0, 2, 30],
					actualTime: [0, 1, 15],
					finishBy: [2017, 14, 26],
					days: [2, 6],
					distribute: true
				}, {
					name: "Refactor school project",
					estimatedTime: [0, 2, 30],
					actualTime: [0, 1, 15],
					finishBy: [2016, 11, 12],
					days: [5, 6],
					distribute: true
				}, {
					name: "Complete coding challenge for the christmas",
					estimatedTime: [0, 2, 30],
					actualTime: [0, 1, 15],
					finishBy: [2016, 11, 24],
					days: [6, 7],
					distribute: true
				}
			]
		}
	],
	interactions: {
		// items in showSubjectTasks refer to the index of the subject(s)
		showSubjectTasks: [null],
		selectedTask: {
			subjectIndex: null,
			taskIndex: null
		},
		showTaskDetails: false
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
