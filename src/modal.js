import React from 'react';

import { Form, FormGroup, Label, Input } from 'reactstrap';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const RecipeModal =(props)=>{
	return	(<div>
		    <Button outline color="success" style={{ marginLeft: '1rem'}} onClick={props.toggle}>
    ADD RECIPE
    </Button>
        <Modal isOpen={props.modal} toggle={this.toggle} >
          <ModalHeader toggle={props.toggle}>{props.edit? 'Edit Recipe' : 'Add Recipe'}</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="Recipe">Recipe</Label>
                <Input type="text" name="title" id="Recipe" placeholder="Enter Recipe" value={ props.currentTitle } onChange={props.change} />
              </FormGroup>
              <FormGroup>
                <Label for="Ingredients">Ingredients</Label>
                <Input type="textarea" name="ing" id="Ingredients" placeholder="Enter Ingredients"  value={props.ing} onChange={props.change}/>
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={props.edit? props.editAdd : props.add}>{props.edit? 'Edit Recipe' : 'Add Recipe'}</Button>
            <Button color="secondary" onClick={props.close}>Close</Button>
          </ModalFooter>
        </Modal>
        </div>)
}

export default RecipeModal