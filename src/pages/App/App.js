import './App.css';
import NavBar from '../../components/NavBar';
import { Route } from 'react-router-dom';
import ShipIndex from '../Ships/ShipIndex'
import Details from '../Ships/Details';
import React, { Component } from 'react';



class App extends Component {
  state = {
    navBar: [
      { url: '/ships', name: "Star Ships" },
    ]
  }
  render() {
    return (
      <>
        <NavBar navBar={this.state.navBar} />
        <Route
          exact path='/ships'
          render={() => < ShipIndex />}
        />
        <Route
          exact path='/details'
          render={({ location }) =>
            <Details location={location}
            />
          }
        />
      </>


    );
  }
}

export default App;
