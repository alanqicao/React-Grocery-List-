import React,{Component}from 'react';
import './App.css';
import List from './component/List';
import GroceryForm from './component/GroceryForm';

class App extends Component{
  state = {grocerys:[{name: "123", complete: false }]}

  getUniqId=()=>{
    return Math.floor((1+Math.random())* 0x10000)
    .toString(16)
    .substring(1)
  }

  addItem = (name) =>{
    const {grocerys} = this.state;
    const grocery = {name,id: this.getUniqId(), complete: false}
    this.setState({grocerys: [grocery,...grocerys]});
  }
  
handleClick =(id)=>{
  const {grocerys} =this.state;
  const newgrocerys = grocerys.map( grocery=>{
    if (grocery.id === id){
      return {
        ...grocery,
        complete: !grocery.complete
      }
    }
    return grocery
  })
  this.setState({
    grocerys: newgrocerys
  })
}

  render(){
    const {grocerys} = this.state
    return(
      <div>
        <GroceryForm addItem={this.addItem}/>
        <List name ="Grocery List" items={grocerys} groceryClick={this.handleClick}/>
      </div>
    );
  }

}

export default App;
