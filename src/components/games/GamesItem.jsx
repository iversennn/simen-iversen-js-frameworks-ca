import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";

export default function GameItem({ id, title, image, rating, released }) {
	return (
        <Card className='gameCard' bg='secondary' text='dark'>
            <Card.Img variant='top' src={image} /*style={{height: "100%"}}*/ />
            <Card.ImgOverlay>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    <li>{rating}</li>
                    <li>{released}</li>
                </Card.Text>
                <Link to={"game/" + id}>
					<Button variant="secondary" block>
						View
					</Button>
				</Link>
            </Card.ImgOverlay>
        </Card>
    );
}

GameItem.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    released: PropTypes.string.isRequired
};