import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';
class App extends Component {

  constructor(){
    super();
    this.state = {
      monster: [],
      searchfield: ''
  };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').then(Response => Response.json())
    .then(users1 => this.setState({monster:users1}));
  }
  render() {
    const {monster, searchfield } = this.state;
    const filteredMonster = monster.filter(monster => monster.name.toLowerCase().includes(searchfield.toLowerCase()))
    return (
      <div className='App'>
     <h1>Rolodex Mounstros</h1>
      <SearchBox 
      placeholder = 'search monster'
      handledChange = {e => this.setState({searchfield: e.target.value})}></SearchBox>
      <CardList monster = {filteredMonster}/>
      
    </div>
    );
    }
  }
export default App;