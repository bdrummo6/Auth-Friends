import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';

const FriendForm = () => {
   const [newFriend, setNewFriend] = useState({
      name: '',
      age: '',
      email: ''
   })

   const handleChange = e => {
      setNewFriend({
            ...newFriend,
            [e.target.name]: e.target.value
      });
   };

   const addFriend = e => {
      e.preventDefault();

      axiosWithAuth()
         .post('/friends', newFriend)
         .then(res => {
            console.log(res);
            localStorage.setItem('token', res.data.payload);
         })
         .catch(err => {
            console.log(err);
         });

      setNewFriend({
         name: '',
         age: '',
         email: ''
      });
   };

   return (
      <Container>
         <h2>Enter the New Friend's Info</h2>
         <Form className='form' onSubmit={addFriend}>
            <FormGroup className='form-group'>
               <Label className='form-label' htmlFor='inputName'>Name</Label>
               <Input
                  type='text'
                  name='name'
                  id='inputName'
                  placeholder='ex. John Smith'
                  onChange={handleChange}
                  value={newFriend.name}
                  autoFocus='true'
               />
         </FormGroup>
            <FormGroup className='form-group'>
               <Label className='form-label' htmlFor='inputAge'>Age</Label>
               <Input
                  type='text'
                  name='age'
                  id='inputAge'
                  placeholder='ex. 28'
                  onChange={handleChange}
                  value={newFriend.age}
               />
            </FormGroup>
            <FormGroup className='form-group'>
               <Label className='form-label' htmlFor='inputEmail'>Email</Label>
               <Input
                  type='email'
                  name='email'
                  id='inputEmail'
                  placeholder='myemail@email.com'
                  onChange={handleChange}
                  value={newFriend.email}
               />
            </FormGroup>
            <Button className='buttons'>Submit</Button>
         </Form>
      </Container>
   )
}

export default FriendForm;
  