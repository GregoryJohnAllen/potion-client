import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import "./ShopIndex.css";
import ShopCreate from "./ShopCreate";
import ShopEdit from "./ShopEdit";
import ShopView from "./ShopView";
import APIURL from "../../helpers/environment";

function ShopIndex(props) {
  const [shops, setShops] = useState([]);

  const [updateActive, setUpdateActive] = useState(false);
  const [shopToUpdate, setShopToUpdate] = useState({});

  const fetchShops = () => {
    fetch(`${APIURL}/shop/getall`, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        'Authorization': props.token
      })
    })
      .then(response => response.json())
      .then(shopData => {
        setShops(shopData);
      });
  };

  const editUpdateShop = shop => {
    setShopToUpdate(shop);
  };

  const updateOn = () => {
    setUpdateActive(true);
  };

  const updateOff = () => {
    setUpdateActive(false);
  };

  useEffect(() => {
    fetchShops();
  }, []);

  return (
    <Container>
      <Row>
        <Col md="8">
          <ShopCreate fetchShops={fetchShops} token={props.token} />
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          <ShopView
            fetchShops={fetchShops}
            token={props.token}
            shops={shops}
            updateOn={updateOn}
          />
        </Col>
        {updateActive ? (
          <ShopEdit
            shopToUpdate={shopToUpdate}
            updateOff={updateOff}
            token={props.token}
            fetchShops={fetchShops}
          />
        ) : (
          <React.Fragment />
        )}
      </Row>
    </Container>
  );
}

export default ShopIndex;
