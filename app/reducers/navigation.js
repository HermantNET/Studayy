import {LOAD_PAGE, SLIDE_CHANGED} from '../actions/actions.js';

export default function (state = {}, action) {
	switch (action.type) {
		case LOAD_PAGE:
			return {pages: state.pages, currentSlide: 0, page: action.page, title: action.title, subtitle: action.subtitle};
		case SLIDE_CHANGED:
			return Object.assign({}, state, {currentSlide: action.index});
		default:
			return state;
	}
}
