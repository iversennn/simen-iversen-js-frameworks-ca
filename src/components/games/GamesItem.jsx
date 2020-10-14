import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import FavouriteButton from '../layout/FavouriteButton';


export default function GameItem({ id, title, image, rating, released }) {
	return (
        <Card className='gameCard' bg='secondary' text='dark'>
            <Card.Img variant='top' src={image} />
            <Card.ImgOverlay>
                <FavouriteButton id={id} title={title} rating={rating} image={image} released={released}/>
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

GameItem.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    released: PropTypes.string.isRequired
};