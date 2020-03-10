import React from 'react'

const Grocery = ({id,name,complete, groceryClick})=>(
  <li 
  style ={ complete ? {...style.grocery,...style.complete}: style.grocery}
  onClick={()=> groceryClick(id)}>
    {name}
  </li>
);

const style={
  grocery:{cursor:'pointer'},
  complete:{color:'grey',textDecoration: 'line-through'},
};


export default Grocery;