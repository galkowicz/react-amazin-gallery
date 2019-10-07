import React, { useState } from 'react';
import { Message, Form, Button } from 'semantic-ui-react';
import { validateEmail, validateFavorites, validateNotes } from '../utils/formValidations';
import '../style/orderFavorites.css';

const OrderFavorites = ({onBackClicked}) => {
		const [emailField, setEmailField] = useState({ value: '', isValid: false });
		const [favoritesField, setFavoritesField] = useState({ value: '', isValid: false });
		const [notesField, setNotesField] = useState({ value: '', isValid: true });
		const [isFormValid, setFormValid] = useState(true);

		const handleEmailChange = (event) => {
				setEmailField({ value: event.target.value, isValid: true });
		};

		const handleFavoritesChange = (event) => {
				setFavoritesField({ value: event.target.value, isValid: true });
		};

		const handleNotesChange = (event) => {
				setNotesField({ value: event.target.value, isValid: true });
		};

		const handleSubmit = (event) => {
				event.preventDefault();
				const isEmailValid = validateEmail(emailField.value);
				const isFavoriteValid = validateFavorites(favoritesField.value);
				const isNotesValid = validateNotes(notesField.value);
				const isFormValid = isEmailValid && isFavoriteValid && isNotesValid;
				setEmailField((prevState) => {
						return { value: prevState.value, isValid: isEmailValid }
				});
				setFavoritesField((prevState) => {
						return { value: prevState.value, isValid: isFavoriteValid }
				});
				setNotesField((prevState) => {
						return { value: prevState.value, isValid: isNotesValid }
				});
				setFormValid(isFormValid);
		};

		return (
			<div className='order-favorites'>
					<Button color='green' onClick={onBackClicked}>Back</Button>
					<Form error={!isFormValid} onSubmit={handleSubmit}>
							<Form.Input id='email' label='Email' placeholder='email' onChange={handleEmailChange}/>
							{!emailField.isValid && <Message
								error
								content='Illegal email address'
							/>}
							<Form.Input id='favorites' label='Favorites' placeholder='favorites' onChange={handleFavoritesChange}/>
							{!favoritesField.isValid && <Message
								error
								content='You must enter favorites id'
							/>}
							<Form.TextArea id='notes' label='Notes' placeholder='Your notes...' onChange={handleNotesChange}/>
							{!notesField.isValid && <Message
								error
								content='Notes has a maximum length of 300'
							/>}
							<Button primary type='submit'>Submit</Button>
					</Form>
			</div>
		);
};

export default OrderFavorites;
