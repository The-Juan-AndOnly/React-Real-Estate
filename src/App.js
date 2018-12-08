import React, { Component } from 'react';
import Header from './components/Header';
import Listings from './components/Listings';
import ListingFilter from './components/ListingFilter';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <section id="content-area">
          <ListingFilter />
          <Listings />
        </section>
      </div>
    );
  }
}

export default App;
