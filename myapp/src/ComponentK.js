import React from 'react';

//const ComponentK = ({list}) => {     *I can pass the props like this
const ComponentK = (props) => {
  const { list } = props;
/*   const listPeople = list.map(element => {
    if (element.age > 20) {
      return(
        <div className="component" key={element.id}>
          <div>Name: {element.name}</div>
          <div>Age: {element.age}</div>
          <div>Belt: {element.belt}</div>
        </div>
      )
    } else {
      return null;
    }
  }) */
  const listPeople = list.map(element => {
    return element.age > 20 ? (
      <div className="component" key={element.id}>
        <div>Name: {element.name}</div>
        <div>Age: {element.age}</div>
        <div>Belt: {element.belt}</div>
      </div>
    ) : null
  })
  
  return(
    <div className="list">
      {listPeople}
    </div>

  )
}

export default ComponentK;