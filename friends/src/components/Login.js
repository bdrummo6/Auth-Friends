import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import Loader from 'react-loader-spinner';
import { Container, Form, Label, Input, Button } from 'reactstrap';

const Login = props =>  {
	const [credentials, setCredentials] = useState({
		  username: '',
		  password: ''
	});

	const [isFetching, setIsFetching] = useState(false);

	const handleChange = event => {
		setCredentials({
			...credentials,
			[event.target.name]: event.target.value
		});
	};

	const handleLogin = event => {
		event.preventDefault();
		setIsFetching(true);
		axiosWithAuth()
		  .post('/login', credentials)
		  .then(res => {
				localStorage.setItem('token', res.data.payload);
				props.history.push('/protected');
		  })
		  .catch(err => {
				console.log('Error: ', err);
		  });
	  };

	return (
		<Container>
			<h2>Sign In</h2>
			<Form className='form' onSubmit={handleLogin}>
				<Label htmlFor='inputUsername'> </Label>
				<Input
					className='login-input'
					type='text'
					name='username'
					id='inputUsername'
					placeholder='username'
					value={credentials.username}
					onChange={handleChange}
				/>
				<Label htmlFor='inputUsername'> </Label>
				<Input
					className='login-input'
					type='password'
					name='password'
					id='inputPassword'
					placeholder='password'
					value={credentials.password}
					onChange={handleChange}
				/>
				<Button type='submit' className='buttons'>
					{!isFetching
						? <span>Log In</span>
						: <Loader visible='true' type='Circles' color='#191970' height={50} width={50} />
					}
				</Button>
			</Form>
		</Container>
	);
}

export default Login;