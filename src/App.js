import React, { Component } from 'react';
import RecipeList from './recipeList';
import './App.css';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

var recipeBox= (typeof localStorage["recipe"] != "undefined")? JSON.parse(localStorage["recipe"]):[{ title: 'curry',ing: ['aloo','jeera']}];

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      modal: false,
      title:'',
      ing: ''
    };

    this.toggle = this.toggle.bind(this);
    this.handleChange=this.handleChange.bind(this);
    this.add = this.add.bind(this);
  }
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  handleChange(e){
    const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state);
  }
  add(){
   recipeBox.push({title:this.state.title,ing: this.state.ing.split(',')});
   localStorage.setItem('recipe', JSON.stringify(recipeBox));
   this.setState({
      modal: !this.state.modal
    });
  }
  
  render() {
    return (
      <div>
        <header>
          <h1 className="App-title">Recipe Box</h1>
        </header>
        <div>
        {recipeBox.map((item,i)=>{
              return  <RecipeList name={item.title} ing={item.ing}/>

          })}</div>
        <Button color="primary" onClick={this.toggle}>ADD RECIPE</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Add a Recipe</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="Recipe">Recipe</Label>
                <Input type="text" name="title" id="Recipe" placeholder="Enter Recipe" onChange={this.handleChange} />
              </FormGroup>
              <FormGroup>
                <Label for="Ingredients">Ingredients</Label>
                <Input type="textarea" name="ing" id="Ingredients" placeholder="Enter Ingredients" onChange={this.handleChange}/>
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.add}>Add Recipe</Button>
            <Button color="secondary" onClick={this.toggle}>Close</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default App;
