import React, { useState, useEffect } from 'react';
import './App.css';
import Menu from './components/menu';
import { getPhotosFromServer } from './utils/serverUtil';
import { parsePhotosArray, updateFavoriteOnArray, clearAllFavoritesOnArray } from './utils/dataUtil';
import PhotosGallery from './components/photosGallery';
import Favorites from './containers/favorites';
import OrderFavorites from './containers/orderFavorites';

function App() {
		const [allPhotos, setAllPhotos] = useState([]);
		const [favoritesIds, setFavoritesIds] = useState([]);
		const [currentPage, setCurrentPage] = useState('menu');

		useEffect(() => {
				getPhotosFromServer()
					.then((response) => {
							const parsedPhotosArray = parsePhotosArray(response.data);
							setAllPhotos(parsedPhotosArray);
					})
					.catch((e) => {
							console.error(e);
					})
		}, []);

		const handleMenuItemClick = (chosenItem) => {
				setCurrentPage(chosenItem)
		};

		const handlePhotoClicked = (photoId) => {
				const isFavorite = favoritesIds.includes(photoId);

				if (isFavorite) {
						setFavoritesIds(prevFavorites => {
								const newArray = prevFavorites.filter(item => item !== photoId);
								return [...newArray];
						});
				} else {
						setFavoritesIds(prevFavoritesIds => [...prevFavoritesIds, photoId])
				}

				setAllPhotos(prevAllPhotos => {
						const newAllPhotos = updateFavoriteOnArray(prevAllPhotos, photoId, !isFavorite);
						return [...newAllPhotos]
				});
		};

		const handleBackClicked = () => {
				setCurrentPage('menu')
		};

		const handleClearFavorites = () => {
				setFavoritesIds([]);
				setAllPhotos(prevAllPhotos => {
						const newAllPhotos = clearAllFavoritesOnArray(prevAllPhotos);
						return [...newAllPhotos]
				});
		};

		return (
			<div className='App'>
					{currentPage === 'menu' &&
					<Menu onItemClick={handleMenuItemClick}/>}
					{currentPage === 'photos' &&
					<PhotosGallery allPhotos={allPhotos} onPhotoClicked={handlePhotoClicked} onBackClicked={handleBackClicked}/>}
					{currentPage === 'favorites' &&
					<Favorites allPhotos={allPhotos} onBackClicked={handleBackClicked} onPhotoClicked={handlePhotoClicked}
					           onClearFavorites={handleClearFavorites}/>}
					{currentPage === 'order' &&
					<OrderFavorites onBackClicked={handleBackClicked}/>}
			</div>
		);
}

export default App;
