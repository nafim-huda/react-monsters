import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

import { useState, useEffect } from 'react';

// Component - self-contained JS function that returns a visual representation of HTML
/*
Pure Function - the scope of the function's vars is limited to props passed/always returns
same result AND contains no side effect(effect outside of the scope of the function)
ex.)
  const functB = (a,b) => {
    return a * b;
  }
vs.
Impure Function - the scope of the function is not limited to props passed/body/modifies
something outside of the scope of the function
ex.)
let c = 3
const funcB = (a,b) => {
  c = a * b;
  return a * b;
}

Side Effects - modification of data outside of the scope of the function i.e.) useEffect() hook

*/ 
const App = () => {
  // useState() = lets us encapsulate local state in a functional component 
  // React is intelligent enough to understand that passing in identical state values
  // into a useState() call -> no re-render will occur
  const [searchField, setSearchField] = useState('') // returns array [value, setValue()]
  const [monsters, setMonsters] = useState([])
  const [filteredMonsters, setFilteredMonsters] = useState(monsters)

  console.log('render');

  // we cannot do fetch() -> .then(users) => setMonsters(users) because it will fail
  // equality check(the users array that we fetch from a third party is different 
  // from the array we saved in memory) -> solution? useEffect()

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => setMonsters(users));
  }, []); 

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
    return monster.name.toLocaleLowerCase().includes(searchField)
    })
    setFilteredMonsters(newFilteredMonsters)
  }, [monsters, searchField])

  const onSearchChange = (event) => { 
      // Best Practice: Array immutability -> create a new array when needed rather than 
      // modifying existing array 
        const searchFieldString = event.target.value.toLocaleLowerCase();
        setSearchField(searchFieldString)
      };
      
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

export default App;
