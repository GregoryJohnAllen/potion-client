import React, { useState, useEffect } from "react";
import APIURL from "../../helpers/environment";
import {
  Table,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  Row,
  Col
} from "reactstrap";

const ShopTable = props => {
  const [currentShop, setCurrentShop] = useState({});

  const [hasGotShop, setHasGotShop] = useState(false);

  const tableFill = () => {
    console.log(currentShop.stockName);
    currentShop.stockName.map((item, index) => {
      fetch(`${APIURL}/potion/${item}`, {
        method: "GET",
        headers: new Headers({
          "Content-Type": "application/json"
        })
      })
        .then(res => res.json())
        .then(res => {
          console.log(res);
          return index == 0 ? (
            <tr>
              <td>{currentShop.playerNum}</td>
            </tr>
          ) : (
            <tr>
              <td>1</td>
            </tr>
          );
        });
    });
  };

  const fetchOneShop = () => {
    fetch(`${APIURL}/shop/${props.shopGet.id}`, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.token
      })
    })
      .then(res => res.json())
      .then(thisShop => {
        setCurrentShop(thisShop);
        console.log(thisShop);
        setHasGotShop(true);
      });
  };

  useEffect(() => {
    fetchOneShop();
  }, []);

  return (
    <Modal isOpen={true}>
      <ModalHeader>
        <Container>
          <Row>
            <Col md="9">{currentShop.shopname}</Col>
            <Col md="3">{currentShop.ownername}</Col>
          </Row>
          {/* //Add row here for location and description */}
          <Row>
            <Table dark>
              <thead>
                <tr>
                  <th>On Hand</th>
                  <th>Cost</th>
                  <th>Potion Name</th>
                  <th>Descrition</th>
                  <th>Rarity</th>
                  <th>Tags</th>
                </tr>
              </thead>
              <tbody>{hasGotShop ? tableFill() : null}</tbody>
            </Table>
          </Row>
        </Container>
      </ModalHeader>
    </Modal>
  );
};

export default ShopTable;
