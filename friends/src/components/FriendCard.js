import React from 'react';
import { Card, CardHeader, ListGroup, ListGroupItem, Button } from 'reactstrap';

const FriendCard = props => {

	return (
		<Card style={{ color: '#191970' }} className='friend-card' key={props.key}>
			<CardHeader><h4>{props.friend.name}</h4></CardHeader>
			<ListGroup style={{ fontSize: '1.1rem' }}>
				<ListGroupItem>Age: <span className='value'>{props.friend.age}</span></ListGroupItem>
				<ListGroupItem>Email: <span className='value'>{props.friend.email}</span></ListGroupItem>
			</ListGroup>
			<Button className='buttons'>Delete Friend</Button>
		</Card>
	)
};

export default FriendCard;