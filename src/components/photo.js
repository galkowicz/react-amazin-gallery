import React from 'react';
import { Image } from 'semantic-ui-react';
import '../style/photo.css';

const Photo = ({ isFavorite, onPhotoClick, photoUrl, photoTitle, id }) => {
		const className = isFavorite ? ' favorite' : '';

		const handlePhotoClicked = () => {
				onPhotoClick(id);
		};

		return (
			<div className={'photo' + className} onClick={handlePhotoClicked} key={id}>
					<div className='title'>{photoTitle}</div>
					<Image wrapped src={photoUrl}/>
			</div>
		);
};

export default Photo;
