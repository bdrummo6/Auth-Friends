import React from 'react';
import { axiosWithAuth } from './axiosWithAuth';

const getMovie = id => {
	return (
		axiosWithAuth().get(`/friends/${id}`)
			.then(res => res)
			.catch(err => console.log(err))
	)
};

export default getMovie;