import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';

import Home from '../components/Home';
import FriendsList from '../components/FriendsList';
import FriendForm from '../components/FriendForm';
import Login from '../components/Login';
import PrivateRoute from '../components/PrivateRoute';
import FriendCard from '../components/FriendCard';

const Main = () => {
	return (
		<Container className='main'>
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/form' component={FriendForm} />
				<PrivateRoute exact path='/protected' component={FriendsList} />
				<Route path='/login' component={Login} />
				<Route path='/friends/:id' component={FriendCard}  />
				<Route component={Login} />
			</Switch>
		</Container>
	)
};

export default Main;