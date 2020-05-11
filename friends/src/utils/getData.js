import { axiosWithAuth } from './axiosWithAuth';

export const getData = () => {
	return (
		axiosWithAuth().get('/friends/')
			.then(res => res)
			.catch(err => console.log(err))
	)
};