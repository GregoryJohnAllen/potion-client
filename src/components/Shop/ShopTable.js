import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardDeck,
  CardBody,
  Button,
  Table,
  Modal,
  ModalHeader,
  ModalBody
} from "reactstrap";
import APIURL from "../../helpers/environment";

const ShopTable = props => {
  

  function MyShopText(props) {
    return (
      <CardDeck>
      <Card
        body
        outline
        color="primary"
        style={{ color: "#17A2B8", margin: "30px", opacity: ".75" }}
      >
        <CardHeader style={{ color: "#007BFF", fontSize: "1.25em" }}>
          {" "}
          SHOP: {props.shopname} <br /> OWNER(S): {props.ownername}{" "}
        </CardHeader>
        <CardBody>
          <br />
          DESCRIPTION: <br /> {props.description}
          <br />
          LOCATION: <br /> {props.location}
          <br />
          <small className="text-muted">
            {" "}
            Last Exchange: {props.lastexchange}{" "}
          </small>
        </CardBody>
        <Row>
          <Col md="6">
            <Button
              color="success"
              onClick={() => {
                props.shopToUpdate();
                props.update()
              }}
            >
              Edit Info
            </Button>
          </Col>
        </Row>
      </Card>
    </CardDeck>
    )
  }
  //Add mapper for all potion items in this shop, need to access the values within potion table not shop table, attached to unique id.
  
  return (
    <Modal style={{ color: "#17A2B8"}} isOpen={true}>
      <ModalHeader>Shop View</ModalHeader>
      <ModalBody>
        <Container>
          
        </Container>
        <Table striped>
        </Table>
        <Button color="success" type="submit">Save Changes</Button>
      </ModalBody>
    </Modal>
  );
};

export default ShopTable;
