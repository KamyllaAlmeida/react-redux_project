import React, { Component }from 'react';
import ComponentK from './ComponentK';

class App extends Component{
  state = {
    list :[
      {name: 'Kamylla', age: 25, belt: "black", id: 1},
      {name: "Mariah", age: 20, belt: "navy", id: 2},
      {name: "Sophie", age: 27, belt: "blue", id: 3}
    ]
  }
  render(){
    return(
      <div className="App">
        <h1>My first React app!</h1>
        <p>Welcome :)</p>
        <ComponentK list = {this.state.list}/>
      </div>
    )
  }
}

export default App;
