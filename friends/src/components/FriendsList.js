import React, { useState, useEffect } from 'react';
import { getData } from '../utils/getData';
import { Container } from 'reactstrap';

import FriendCard from './FriendCard';

const FriendsList = props => {
	const [friends, setFriends] = useState([]);

	useEffect(() => {
		getData()
			.then(res => {
				// console.log(res.data);
				setFriends(res.data)
		});
	}, []);

	return (
		<Container className='friends-list'>
			<h2>List of Friends</h2>
			{friends.map(friend => (
				<FriendCard key={friend.id} friend={friend} friends={friends} setFriends={setFriends} />
			))}
		</Container>
	)

}

export default FriendsList;