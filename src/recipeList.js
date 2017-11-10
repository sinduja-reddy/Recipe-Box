import React, { Component } from 'react';

import { Collapse, Button, CardBody, Card, CardFooter } from 'reactstrap';

class RecipeList extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };

  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }
  

  render() {
    return (
      <div>
      <Button block color="info" size="sm" onClick={this.toggle} style={{ marginBottom: '1rem' , marginTop:'1rem', textAlign:'left'}}>{this.props.name}</Button>
		  <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
             {this.props.ing.map((item,i)=>{
               return <li key={i}>{item}</li>
             })}
            </CardBody>
            <CardFooter>
            <Button color="warning" onClick={this.props.edit}>edit</Button>
            <Button color="danger" onClick={this.props.deleteRecipe} style={{marginLeft:'1rem'}}> delete</Button>

            </CardFooter>
          </Card>
        </Collapse>
      </div>
    );
  }
}

export default RecipeList;