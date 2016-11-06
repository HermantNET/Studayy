import {LOAD_PAGE} from '../actions/actions.js';

export default function (state = {}, action) {
	switch (action.type) {
		case LOAD_PAGE:
			return {pages: state.pages, page: action.page, title: action.title, subtitle: action.subtitle};
		default:
			return state;
	}
}
