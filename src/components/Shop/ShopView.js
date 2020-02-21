import React from "react";
import {
  Row,
  Col,
  Button,
  CardHeader,
  Card,
  CardBody,
  CardDeck,
  Container
} from "reactstrap";
import APIURL from "../../helpers/environment";

const ShopView = props => {
  const deleteShop = id => {
    fetch(`${APIURL}/shop/delete/${id}`, {
      method: "DELETE",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.token
      })
    }).then(() => {
      props.fetchShops();
    });
  };

  function MyCard(props) {
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
            <Col md="4">
              <Button color="success">Open Up Shop</Button>
            </Col>
            <Col md="4">
              <Button
                color="warning"
                onClick={() => {
                  props.editUpdateShop(props.shopItem);
                  props.updateOn();
                }}
              >
                Edit Shop Information
              </Button>
            </Col>
            <Col md="4">
              <Button
                color="danger"
                onClick={() => {
                  deleteShop(props.id);
                }}
              >
                Close Up Shop
              </Button>
            </Col>
          </Row>
        </Card>
      </CardDeck>
    );
  }
  return (
    <div>
      <Container>
        <h2 style={{ color: "#f7d695" }}>SHOP QUICKVIEW</h2>
        <Row>
          {props.shops.map((item, index) => {
            return (
              <Col md="6" key={`k${index}`}>
                <MyCard
                  key={index}
                  shopname={item.shopname}
                  ownername={item.ownername}
                  image={item.image}
                  description={item.description}
                  location={item.location}
                  lastexchange={item.lastexchange}
                  id={item.id}
                  fetchShops={props.fetchShops}
                  shopItem={item}
                  editUpdateShop={props.editUpdateShop}
                  updateOn={props.updateOn}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default ShopView;
