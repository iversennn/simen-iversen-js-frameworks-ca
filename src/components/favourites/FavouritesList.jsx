import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FavouriteItem from './FavouriteItem';

export default function FavouritesList(){

    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while ( i-- ) {
        values.push( JSON.parse(localStorage.getItem(keys[i])) );
    }
    
    return(
        <>
            <Row>
                {values.map(games => {
                    const { 
                        id,
                        title, 
                        image, 
                        rating,
                        released
                    } = games;

                    return (
                        <Col md={12} lg={6} key={id}>
                            <FavouriteItem 
                                id={id}
                                title={title} 
                                image={image}
                                rating={rating}
                                released={released} />
                        </Col>
                    );
                })}
            </Row>
        </>
    )
}