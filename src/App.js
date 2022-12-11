import './App.css';
import List from './List';
import data from './data';
import { useState } from 'react';
function App() {
  const [people,setPeople] = useState(data);
  console.log(people)
  return (
    <div className="App">
      <h4 className='title'> {people.length} birthday today</h4>
      {
        people.map(person =>{
          return (
            <List person={person} />
          )
        })
      }
      
      <button className='btn' onClick={()=>{setPeople([])}}>Clear All</button>
    </div>
  );
}

export default App;
