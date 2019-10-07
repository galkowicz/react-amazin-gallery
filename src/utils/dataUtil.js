import { GALLERY_SIZE } from '../constants';

const randomNumbersArray = Array.from({ length: GALLERY_SIZE }, () => Math.floor(Math.random() * 4999));

export function parsePhotosArray(photosArray) {
		return randomNumbersArray.map((randomIndex) => {
				return { ...photosArray[randomIndex], isFavorite: false };
		})
}

export function updateFavoriteOnArray(allPhotos, favoriteId, isFavorite) {
		return allPhotos.map((photo) => {
				if (photo.id === favoriteId) {
						return { ...photo, isFavorite };
				}
				return photo;
		});
}

export function clearAllFavoritesOnArray(allPhotos) {
		return allPhotos.map((photo) => {
				return { ...photo, isFavorite: false }
		});
}