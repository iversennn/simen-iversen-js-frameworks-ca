import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import GamesList from '../games/GamesList';

export default function Home(){
    return(
        <Container>
            <GamesList/>
        </Container>
    )
}