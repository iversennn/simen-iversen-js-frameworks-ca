import React, { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import { useParams } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { BASE_URL } from '../../constants/api';
import GameDetailsList from './GameDetailsList';

export default function GameDetails() {
	const [detail, setDetail] = useState(null);
	const [loading, setLoading] = useState(true);

	let { id } = useParams();

	const url = BASE_URL + '/'+id;

	useEffect(() => {
		fetch(url)
			.then(response => response.json())
			.then(json => {setDetail(json);/*console.log(json);*/})
			.catch(error => console.log(error))
			.finally(() => setLoading(false));
	}, [url]);

	if (loading) {
		return <Spinner animation='border' className='spinner' />;
	}

	return (
		<>
			<Row>
				<Col><h1>{detail.name}</h1></Col>
			</Row>
			<Row className='mt-5'>
				<Col className='detail-image'>
					<Image src={detail.background_image} thumbnail fluid />
				</Col>
			</Row>
			<Row className='mt-5'>
				<Col className='text-left' dangerouslySetInnerHTML={ {__html: detail.description} } />
			</Row>
			
			<GameDetailsList genres={detail.genres} platforms={detail.platforms}/>

			<Row className='mt-5 mb-5'>
				<Col lg={6}>
					<p><b>Released:</b> {detail.released}</p>
				</Col>
				<Col lg={6}>
					<p><a href={detail.website} rel='noreferrer noopener' target='_blank'>Go to website</a></p>
				</Col>
			</Row>
		</>
	);
}