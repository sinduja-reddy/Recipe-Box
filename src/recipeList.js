import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import { Collapse, Button, CardBody, Card } from 'reactstrap';

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
        <Container>
        <Row>
          <Col>
          	<Button color="success" size="sm" onClick={this.toggle} style={{ marginBottom: '1rem' }}>{this.props.name}</Button>
		      </Col>
		  <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
             {this.props.ing.map((item,i)=>{
               return <li key={i}>{item}</li>
             })}
            </CardBody>
          </Card>
        </Collapse>
        </Row>
        </Container>
      </div>
    );
  }
}

export default RecipeList;