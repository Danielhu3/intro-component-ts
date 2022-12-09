import React from 'react';
import  Left  from './components/left/';
import  Text  from './components/left/text/';
import  Title  from './components/left/title/';
import  Form  from './components/right/form/';
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
        <Form />
      </Right>
    </div>
  );
}
// cannot be empty > looks like it's not an email / password error

export default App;
