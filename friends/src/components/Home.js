import React from 'react';
import { Container } from 'reactstrap';

import poster from '../assets/img/friends-poster-cast.jpg';

const Home = () => {
	return (
		<Container className='home'>
			<h2>Come Join The Friends</h2>
			<img className='poster' src={poster} alt='friends cast' />
		</Container>
	)
};

export default Home;