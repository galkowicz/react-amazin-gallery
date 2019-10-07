import React from 'react';
import { Button, Container, Header } from 'semantic-ui-react';
import '../style/menu.css';

const Menu = ({onItemClick}) => {
		const handleItemClick = (event) => {
				onItemClick(event.target.id);
		};

		return (
			<div className='menu'>
					<Header as='h1'>Welcome</Header>
					<Container textAlign='center'>
							<Button.Group vertical onClick={handleItemClick}>
							<Button primary id='photos'>Photos</Button>
							<Button primary id='favorites'>Favorites</Button>
							<Button primary id='order'>Order Favorites</Button>
							</Button.Group>
					</Container>
			</div>
		);
};

export default Menu;
