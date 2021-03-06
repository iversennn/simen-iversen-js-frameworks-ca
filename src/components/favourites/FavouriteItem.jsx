import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


export default function FavouriteItem({ id, title, image, rating, released }) {
	return (
        <Card className='gameCard' bg='secondary' text='dark'>
            <Card.Img variant='top' src={image} />
            <Card.ImgOverlay>
                <Card.Title><h1>{title}</h1></Card.Title>
                <Card.Text>
                        <li>{released}</li>
                        <li>Rating: {rating}</li>    
                </Card.Text>
                <Link to={'game/' + id}>
					<Button variant='secondary' block>
						More details
					</Button>
				</Link>
            </Card.ImgOverlay>
        </Card>
    );
}

FavouriteItem.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    released: PropTypes.string.isRequired
};