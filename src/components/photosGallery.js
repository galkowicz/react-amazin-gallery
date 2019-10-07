import React from 'react';
import { Button, Grid, Header } from 'semantic-ui-react';
import Photo from '../components/photo';

const PhotosGallery = ({ allPhotos, onPhotoClicked, onBackClicked }) => {
		const handlePhotoClick = (photoId) => {
				onPhotoClicked(photoId);
		};

		return (
			<div className='photos-gallery'>
					<Header as='h1'>Photos Gallery</Header>
					<Button color='green' onClick={onBackClicked}>Back</Button>
					<Grid>
							{allPhotos.map((photo, index) => {
									const { thumbnailUrl, title, id, isFavorite } = photo;

									return (<Photo isFavorite={isFavorite}
									               key={index}
									               onPhotoClick={handlePhotoClick}
									               photoUrl={thumbnailUrl}
									               photoTitle={title}
									               id={id}/>);
							})}
					</Grid>
			</div>
		);
};

export default PhotosGallery;
