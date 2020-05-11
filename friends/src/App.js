import React from 'react';

import Header from './containers/Header';
import Main from './containers/Main';

import { Container } from 'reactstrap';

const App = () => {
   return (
      <Container className='App'>
         <Header />
         <Main />
      </Container>
   )
}

export default App;
