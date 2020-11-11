import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './Sass/styles.scss'

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './Pages/Home';
import CharacterPage from './Pages/CharacterPage';
import Page_404 from './Pages/Page_404';


function Container(props) {
  return (
    <div className="container">
      <Header />
        {props.children}
      <Footer />
    </div>
  )
}


function App() {
  return (
    <BrowserRouter>
      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/character/:characterId" component={CharacterPage} />
          <Route component={Page_404} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;
