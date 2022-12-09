import React from 'react';
import  Left  from './components/left/';
import  Text  from './components/left/text/';
import  Title  from './components/left/title/';
import  Form  from './components/right/form/';
import  Input  from './components/right/input/';
import  PriceInfo  from './components/right/priceInfo/';
import  Right  from './components/right/';
import GlobalStyles from './styles/global'
import  Button  from './components/right/button/';
import  Terms  from './components/right/terms/';

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
          <Button />
          <Terms />
        </Form>
      </Right>
    </div>
  );
}


export default App;
