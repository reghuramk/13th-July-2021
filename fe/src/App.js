import { Fragment } from 'react';
import './App.css';
import Button from './Components/button'
import CardComponent from './Components/card';

function App() {

  const styles = {
    display: 'inline-flex',
    marginLeft: '15px',
    padding: '55px'
  }

  return (

   
    <Fragment>
          <div className="App">
            <Button/>
          </div>
          
          <div style = {styles}>
            <CardComponent/>
            <CardComponent/>
            <CardComponent/>
            <CardComponent/>
          </div>
        
    
     </Fragment>
  );
}

export default App;
