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
import APIURL from '../../helpers/environment'

const ShopView = props => {

  // Use CardImg to put the image as the top most aspect of the card
  // Or use CardImgOverlay along with CardImg to put the image over   
  //  the card itself entirely???

  

  function MyCard(props) {
    const deleteShop = (id) => {
      fetch(`${APIURL}/shop/delete/${id}`, {
        method: 'DELETE',
        headers: new Headers({
          'Content-Type': 'application/json',
          'Authorization': props.token
        })
      })
      .then(() => {props.fetchShops()})
    }
    console.log(props.id)
    //add a modal state here (true or false) so that when the button on the card is clicked it pulls up the modal view of the One shop
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
            <img src={props.image} width="100%" alt="img" />
            <br />
            DESCRIPTION: <br /> {props.description}
            <br />
            LOCATION: <br /> {props.location}
            <br />
            <small className="text-muted"> Last Exchange: {props.lastexchange} </small>
            {console.log(props.id)}
          </CardBody>
          <Button color="danger" onClick={() => deleteShop(props.id)} >Close Up Shop</Button>
          <Button color="success" >Open Up Shop</Button>
          
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
                  fetchShops={props.fetchShops}
                  id={item.id}
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
