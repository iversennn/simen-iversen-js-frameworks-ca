import React, { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GamesItem from './GamesItem';
import { BASE_URL } from '../../constants/api';
import Search from './Search';

export default function GamesList() {
    const [games, setGames] = useState([]);
    const [filteredGames, setFilteredGames] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        fetch(BASE_URL)
            .then(response => response.json())
            .then(json => {
                setGames(json.results);
                setFilteredGames(json.results);
                // console.log(json.results);
            })
            .catch(error => console.log(error))
            .finally(() => setLoading(false));
    }, []);
    
    const filterCards = function(e) {
	    const searchValue = e.target.value.toLowerCase();
	    const filteredArray = games.filter(function(game) {
            const lowerCaseName = game.name.toLowerCase();
            if (lowerCaseName.includes(searchValue)) {
                return true;
            }
            return false;
        });
    
        setFilteredGames(filteredArray);
    };
    
    if (loading) {
        return <Spinner animation='border' className='spinner' />;
    }
    
    return (
        <>
            <h1>Games</h1>
            <Search handleSearch={filterCards} />
            <Row>
                {filteredGames.map(games => {
                    const { 
                        id,
                        name, 
                        background_image, 
                        rating,
                        released
                    } = games;

                    return (
                        <Col md={12} lg={6} key={id}>
                            <GamesItem 
                                id={id}
                                title={name} 
                                image={background_image}
                                rating={rating}
                                released={released} />
                        </Col>
                    );
                })}
            </Row>
        </>
    );
}