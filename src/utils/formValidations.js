import {MAX_NOTES_LENGTH} from '../constants';

export function validateEmail(emailAddress) {
		const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(String(emailAddress).toLowerCase());
}

export function validateFavorites(favorites) {
		let isFavoriteValid = true;

		if (favorites === '') {
				return false;
		}

		return isFavoriteValid;
}

export function validateNotes(notes) {
		let isNotesValid= true;

		if (notes.length >= MAX_NOTES_LENGTH) {
				return false;
		}

		return isNotesValid;
}