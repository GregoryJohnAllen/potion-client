import React, { useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Modal,
  ModalHeader,
  ModalBody
} from "reactstrap";

const ShopEdit = props => {
  const [editShopName, setEditShopName] = useState(props.shopToUpdate.shopname);
  const [editOwnerName, setEditOwnerName] = useState(
    props.shopToUpdate.ownername
  );
  const [editDescription, setEditDescription] = useState(
    props.shopToUpdate.description
  );
  const [editLocation, setEditLocation] = useState(props.shopToUpdate.location);

  //BELOW: Function to edit TEXT information of shop, not to edit quantities or alter the number of players or player level
  


  const shopTextUpdate = (event, shop) => {
    event.preventDefault();
    fetch(`http://localhost:4000/shop/updatetext/${props.shopToUpdate.id}`, {
      method: "PUT",
      body: JSON.stringify({
        definition: {
          shopname: editShopName,
          ownername: editOwnerName,
          description: editDescription,
          location: editLocation
        }
      }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.token
      })
    }).then(res => {
      props.fetchShops();
      props.updateOff();
    });
  };

  const shopPotionUpdate = (event, potion) => {
    event.preventDefault()
    fetch(`http://localhost:4000/shop/updatepotion/${props.shopToUpdate.id}`)
  }

  return (
    <Modal isOpen={true}>
      <ModalHeader>Edit Shop Information</ModalHeader>
      <ModalBody>
        <Form onSubmit={shopTextUpdate}>
          <FormGroup>
            <Label htmlFor="shopname">Edit Shop Name:</Label>
            <Input
              name="shopname"
              value={editShopName}
              onChange={e => setEditShopName(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="ownername"> Edit Owner Name:</Label>
            <Input
              name="ownername"
              value={editOwnerName}
              onChange={e => setEditOwnerName(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="description"> Edit Description:</Label>
            <Input
              name="description"
              value={editDescription}
              onChange={e => setEditDescription(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="location"> Edit Location:</Label>
            <Input
              name="location"
              value={editLocation}
              onChange={e => setEditLocation(e.target.value)}
            />
          </FormGroup>
          <Button type="submit">Update Shop Info</Button>
        </Form>
      </ModalBody>
    </Modal>
  );
};

export default ShopEdit;
