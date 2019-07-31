import React from "react";
import "./App.css";
import PhotoGrid from './Components/PhotoGrid.js'
import { Container, Header, Segment } from 'semantic-ui-react'
import { whileStatement } from "@babel/types";


// NASA Logo : https://api.nasa.gov/images/logo.png
// NASA API Key: UttC42JeTEKmPG409NUpS1UG0tmeUv81EvJtcDuf

function App() {
  return (
    <Container className="App" style={{backgroundColor: 'black'}}>
      <Header style={{fontSize: '2.5rem', margin: '10px', color: 'white'}}>Astronomy Photo of the Day</Header>
      <Header style={{fontSize: '1.8rem', marginBottom: '10px', color: 'white'}}>From NASA</Header>


      <Segment>
        <PhotoGrid />
      </Segment>
    </Container>
  );
}

export default App;
