import { Component } from 'react'

import './App.css';

// Component - self-contained JS function that returns a visual representation of HTML
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
    }
  }
  // runs the first time a component gets placed onto the DOM
  // a component will only remount whenever there is a new instance
  // of the component placed onto the DOM after it had been unmounted
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => 
      // this.setState() here will re-render the component -> 
      // calling render() once again 
        this.setState(() => 
          {
            return {monsters : users }
          },
          () => {
            console.log(this.state);
          }))
    }
  /* 
    this.setState((state, props) => {
      // returns an object that will shallow merge against state
      // note that the state variable in the argument is equal to the local state
    },
    *** Optional Callback ***
      () => {
        // runs only AFTER all state changes have been applied
      }
    )
  */
  render() {
      return (
        <div className="App">
          {
            this.state.monsters.map((monster) => {
              return (
                  <div key={monster.id}> 
                     <h1>{monster.name}</h1>
                  </div>
            );
          })
        }
        </div>
      );
    }
  }

export default App;
