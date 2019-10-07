import React from 'react';
import { Button, Grid, Header } from 'semantic-ui-react';
import Photo from "../components/photo";

const Favorites = ({ allPhotos, onBackClicked, onPhotoClicked, onClearFavorites }) => {
		const handlePhotoClick = (photoId) => {
				onPhotoClicked(photoId);
		};

		return (
			<div className='favorites'>
					<Header as='h1'>Favorites</Header>
					<Button color='green' onClick={onBackClicked}>Back</Button>
					<Button color='red' onClick={onClearFavorites}>Clear Favorites</Button>
					<Grid>
							{allPhotos.map((photo, index) => {
									const { thumbnailUrl, title, id, isFavorite } = photo;

									return photo.isFavorite ?
										(<Photo isFavorite={isFavorite}
										        key={index}
										        onPhotoClick={handlePhotoClick}
										        photoUrl={thumbnailUrl}
										        photoTitle={title}
										        id={id}/>) : null

							})}
					</Grid>
			</div>
		);
};

export default Favorites;
