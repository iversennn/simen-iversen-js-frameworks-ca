import React, { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import { useParams } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { BASE_URL } from "../../constants/api";

export default function GameDetails() {
	const [detail, setDetail] = useState(null);
	const [loading, setLoading] = useState(true);

	let { id } = useParams();

	const url = BASE_URL + '/'+id;

	useEffect(() => {
		fetch(url)
			.then(response => response.json())
			.then(json => setDetail(json))
			.catch(error => console.log(error))
			.finally(() => setLoading(false));
	}, [url]);

	if (loading) {
		return <Spinner animation="border" className="spinner" />;
	}

	return (
		<Row>
			<Col sm={9} md={9}className="detail-image">
				<Image src={detail.background_image} fluid />
			</Col>
			<Col sm={3} md={3}>
				<h1>{detail.title}</h1>
				<p>
					<b>Id:</b> {detail.id}
				</p>
				<p>
					<b>Released:</b> {detail.released}
				</p>
				<p>
					<b>Rating:</b> {detail.rating}
				</p>
			</Col>
		</Row>
	);
}