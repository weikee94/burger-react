import React, { Component } from 'react';
import classes from './App.css';
import Radium from 'radium';
import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundary';
import Cockpit from '../components/Cockpit/Cockpit';
import People from '../components/People/People';


class App extends Component {

  state = {
    people: [
      {id: 'ddsda', name: 'max', age: 28},
      {id: 'frgfv', name: 'manu', age: 29},
      {id: 'bcvbg', name: 'st', age: 26}
    ],
    showPeople: false,
    toggleClickedCounter: 0,
    authenticated: false,
  }

  
  render() {

    let people = null;

    if (this.state.showPeople) {
      people = (
        <People people={this.state.people}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler} />
      );
    }

    return (
      <div>
        <button onClick={() => {this.setState({showPeople: true})}}>Show people</button>
        <Cockpit
          appTitle={this.props.title}
          people={this.state.people}
          showPeople={this.state.showPeople}
          click={this.togglePeopleHandler}
          login={this.loginHandler} />
        <p>button clicked {this.state.toggleClickedCounter} times</p>
        {/* <AuthContext.Provider value={this.state.authenticated}>
          {people}
        </AuthContext.Provider>  */}
      </div>
    );
  }
}

export default Radium(App);
