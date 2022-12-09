import React from 'react';
import  Left  from './components/left/';
import  Text  from './components/left/text/';
import  Title  from './components/left/title/';
import  Form  from './components/right/form/';
import  Input  from './components/right/input/';
import  PriceInfo  from './components/right/priceInfo/';
import  Right  from './components/right/';
import GlobalStyles from './styles/global'

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Left>
        <Title />
        <Text />
      </Left>

      <Right>
        <PriceInfo />
        <Form>
          <Input type ='text' placeholder='First Name' />
          <Input type ='text' placeholder='Last Name'/>
          <Input type ='email' placeholder='Email Address'/>
          <Input type ='text' placeholder='Password'/>
        </Form>
      </Right>
    </div>
  );
}

/* 


  

  Try it free 7 days then $20/mo. thereafter

  First Name 
  Last Name 
  Email Address
  Password

  Claim your free trial 

  By clicking the button, you are agreeing to our Terms and Services
*/

export default App;
