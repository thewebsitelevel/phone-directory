import React, { Component } from 'react';
import './App.css';
import {Header} from './components/Header';
import {Form} from './components/Form';
import {List} from './components/List';

class App extends Component {
  constructor(){
    super();
    this.handleAddBtn = this.handleAddBtn.bind(this);
    this.handleBackBtn = this.handleBackBtn.bind(this);
    this.handleSubAdd = this.handleSubAdd.bind(this);
    this.handleDelete = this.handleDelete.bind(this);

    this.state = {
      isForm : false,
      subscribers : [],
      
    }
  }

  handleAddBtn(e){
    e.preventDefault();
    this.setState({
      isForm : !this.state.isForm
    })
  }

  handleSubAdd(sub){
    
    const subscribers = this.state.subscribers;
    subscribers.push(sub);
     this.setState({
      subscribers,
      isForm : !this.state.isForm
     })
  }

  

  handleBackBtn(e){
    e.preventDefault();
    this.setState({
      isForm : !this.state.isForm
    })
  }

  handleDelete(e){
    const subscribers = this.state.subscribers.filter((el,ind)=>{
      return ind !== parseInt(e.target.id);
    })
    this.setState({
      subscribers  
    })
  }


  render() {
    return (
      <div className="App">
        <Header />
        { this.state.isForm ? <button className="btn--back" onClick={this.handleBackBtn}>Back</button> : <button className="btn--add" onClick={this.handleAddBtn}>Add</button>}
        { this.state.isForm ? <Form  handleSubAdd={this.handleSubAdd}/> : <List handleDelete={this.handleDelete} subscribers={this.state.subscribers}/>}
        
      </div>
    );
  }
}

export default App;
