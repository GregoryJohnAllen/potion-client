import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import "./ShopIndex.css";
import ShopCreate from "./ShopCreate";
import ShopEdit from "./ShopEdit";
import ShopView from "./ShopView";
import ShopTable from "./ShopTable"
import APIURL from "../../helpers/environment";

function ShopIndex(props) {
  const [shops, setShops] = useState([]);

  const [updateActive, setUpdateActive] = useState(false);
  const [shopToUpdate, setShopToUpdate] = useState({});

  const [viewShop, setViewShop] = useState(false);
  const [shopGet, setShopGet] = useState({});

  const fetchShops = () => {
    fetch(`${APIURL}/shop/getall`, {
      method: "GET",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.token
      })
    })
      .then(response => response.json())
      .then(shopData => {
        setShops(shopData);
      });
  };

  const editUpdateShop = shop => {
    setShopToUpdate(shop);
    console.log(shop);
  };

  const updateOn = () => {
    setUpdateActive(true);
  };

  const updateOff = () => {
    setUpdateActive(false);
  };

  const viewOneShop = shop => {
    setShopGet(shop);
  };

  const shopOn = () => {
    setViewShop(true);
  };

  const shopOff = () => {
    setViewShop(false);
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
            editUpdateShop={editUpdateShop}
            // viewShop={shopView}
            viewOneShop={viewOneShop}
            shopOn={shopOn}
          />
        </Col>
        {updateActive ? (
          <ShopEdit
            editUpdateShop={editUpdateShop}
            updateOff={updateOff}
            token={props.token}
            fetchShops={fetchShops}
            shopToUpdate={shopToUpdate}
          />
        ) : viewShop ? (
          <ShopTable
            shopOff={shopOff}
            token={props.token}
            shopGet={shopGet}
          />
        ) : (
          <React.Fragment />
        )}
      </Row>
    </Container>
  );
}

export default ShopIndex;
