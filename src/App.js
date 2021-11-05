import { Component } from 'react';
import { CardList } from './Components/card-list/card-list.component';
import { SearchBox } from './Components/search-box/search-box.component';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state = {
      monsters : [
/*        { name: 'Frankenstein',
          id: '1dvsn'
        },
        { name: 'Dracula',
          id: '4sdbn'
        },
        { name: 'Zombie',
          id: '6bdbq'
        }        */
      ],

      searchField: ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}));
  }

  render(){

    const { monsters, searchField} = this.state;

    const filteredMonsters = monsters.filter(monster=>(monster.name.toLowerCase().includes(searchField.toLowerCase())));

    return(
    <div className="App">
      <h1>Monsters Rolodex</h1>
      <SearchBox 
        placeholder='search monsters' 
        handleChange={e=>(this.setState({searchField: e.target.value}))} 
      />
      <CardList monsters= {filteredMonsters}/>
    </div>
    );
  }

}

export default App;
