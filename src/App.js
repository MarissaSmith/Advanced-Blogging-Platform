// Import necessary libraries and components
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter'; // Import your connected component
import { Container, Navbar, Nav } from 'react-bootstrap'; // Import Bootstrap components

function App() {
  return (
    <Container fluid>
      {/* Navbar with Bootstrap styling */}
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Your React App</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Navbar>

      {/* Main content container */}
      <Container>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>

        {/* Use your connected component */}
        <Counter />
      </Container>
    </Container>
  );
}

export default App;

