import React from 'react';
import { Col, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function GameDetailsList({genres, platforms}){

    // console.log(platforms)

    return(
        <>
        <Row style={{textAlign: 'left'}}>
            <Col>
                {platforms.map(({platform}) => <li key={platform.id+platform.name}>{platform.name}</li>)}
            </Col>
            <Col>
                {genres.map(genres => <li key={genres.id+genres.name}>{genres.name}</li>)}
            </Col>
        </Row>    
        </>
    )
}

// GameDetailsList.propTypes = {
//     genres: PropTypes.arrayOf(PropTypes.object).isRequired,
//     platforms: PropTypes.arrayOf(PropTypes.object).isRequired,
//   }

const genreType = PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
});

const platformType = PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
})

GameDetailsList.propTypes = {
    platforms: PropTypes.arrayOf(platformType),
    genres: PropTypes.arrayOf(genreType),
}