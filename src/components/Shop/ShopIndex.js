import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import "./ShopIndex.css";
import ShopCreate from "./ShopCreate";
import ShopEdit from "./ShopEdit";
// import ShopTable from "./ShopTable";
import ShopView from "./ShopView";
import APIURL from "../../helpers/environment";

function ShopIndex(props) {
  const [shops, setShops] = useState([]);

  const [updateActive, setUpdateActive] = useState(false);
  const [shopToUpdate, setShopToUpdate] = useState({});
  const [shop, setShop] = useState(false);
  const [shopTable, setShopTable] = useState({});

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

  const viewTableShop = shopTable => {
    setShopTable(shopTable);
  };

  const shopOn = () => {
    setShop(true);
  };

  const shopOff = () => {
    setShop(false);
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
            shopOn={shopOn}
            viewTableShop={viewTableShop}
          />
        </Col>
        {/* shop ? (
          <ShopTable
            shops={shops}
            shopOff={shopOff}
            token={props.token}
            shopTable={shopTable}
            viewTableShop={viewTableShop}
            updateOn={updateOn}
            // shopOne={shopOne}
          />
        ) : */}{updateActive ? (
          <ShopEdit
            shopToUpdate={shopToUpdate}
            updateOff={updateOff}
            token={props.token}
            shop={shop}
            editUpdateShop={editUpdateShop}
          />
        ) : (
          <React.Fragment />
        )}
      </Row>
    </Container>
  );
}

export default ShopIndex;
