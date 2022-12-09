import React from 'react';
import  Left  from './components/left/';
import  Text  from './components/left/text/';
import  Title  from './components/left/title/';
import GlobalStyles from './styles/global'

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Left>
        <Title />
        <Text />
      </Left>
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
