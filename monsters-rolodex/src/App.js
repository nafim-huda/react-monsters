import { Component } from 'react'
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

// Component - self-contained JS function that returns a visual representation of HTML
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: '',
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
        this.setState(() => {
            return {monsters : users }
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
   /* 
      <div>, <h1>, <input> are HTML Look-Alike tags but in reality 
      they are React HTML Components 
   */

  onSearchChange = (event) => { 
    // Best Practice: Array immutability -> create a new array when needed rather than 
    // modifying existing array 
      const searchField = event.target.value.toLocaleLowerCase();
      this.setState(() => {
        return { searchField } // shorthand for matching key and values with same name
      });
    }; 

  render() {
    const { monsters, searchField } = this.state
    const { onSearchChange } = this
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField)
    })
      return (
        // In general, we only want one parent/top-level component in our return () 
        // in this return the parent component is <div className="App"> </div>
        <div className="App">
          <h1 className='app-title'>Monsters Rolodex</h1>
          <SearchBox 
            className='monsters-search-box'
            onChangeHandler={onSearchChange} 
            placeholder='search monsters'
          />
          <CardList monsters={filteredMonsters}/>
        </div>
      );
    }
  }

export default App;
