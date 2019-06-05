import React, { Component }from 'react';
import FormPerson from './FormPerson';
import AddPerson from './AddPerson';

class App extends Component{
  state = {
    list :[
      {name: 'Kamylla', age: 25, belt: "black", id: 1},
      {name: "Mariah", age: 20, belt: "navy", id: 2},
      {name: "Sophie", age: 27, belt: "blue", id: 3}
    ]
  }

  addPerson = (person) => {
    person.id = Math.random();
    let people = [...this.state.list, person];
    this.setState({
      list: people
    })
  }

  deletePerson = (id) => {
    let people = this.state.list.filter(person => {
      return person.id !== id;
    })
    this.setState({
      list: people
    })
  }

  componentDidMount() {
    console.log('component mounted');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('component updated');
    console.log(prevProps, prevState);
  }

  render(){
    return(
      <div className="App">
        <h1>My first React app!</h1>
        <p>Welcome :)</p>
        <FormPerson list = {this.state.list} deletePerson = {this.deletePerson}/>
        <AddPerson addPerson = {this.addPerson}/>
      </div>
    )
  }
}

export default App;
