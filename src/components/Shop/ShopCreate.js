import React, { useState } from "react";
import {
  Col,
  Container,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Collapse
} from "reactstrap";

const ShopCreate = props => {
  const [isOpen, setIsOpen] = useState(false);

  const [shopname, setShopname] = useState("");
  const [ownername, setOwnername] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [playerNum, setPlayerNum] = useState("");
  const [levelNum, setLevelNum] = useState("");

  //possible use states to be added here once I need to generate and pull potions from the potions table

  const toggle = () => setIsOpen(!isOpen);

  const handleSubmit = e => {
    e.preventDefault();
    fetch("http://localhost:4000/shop/create", {
      method: "POST",
      body: JSON.stringify({
        definition: {
          shopname: shopname,
          ownername: ownername,
          description: description,
          location: location,
          playerNum: playerNum,
          levelNum: levelNum
        }
      }),
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: props.token
      })
    })
      .then(res => res.json())
      .then(shopData => {
        console.log(shopData);
        setShopname("");
        setOwnername("");
        setDescription("");
        setLocation("");
        setPlayerNum("");
        setLevelNum("");
        props.fetchShops();
      });
  };

  return (
    <Container>
      <Button color="info" onClick={toggle} style={{ marginBottom: "1rem", marginTop: "1rem" }}>
        Create A Shop Here
      </Button>
      <Collapse isOpen={isOpen}>
        <Form onSubmit={handleSubmit}>
          <FormGroup row>
            <Label htmlFor="shopname" sm={4}>
              Shop Name
            </Label>
            <Col sm={8}>
              <Input
                name="shopname"
                placeholder="Name of the Shop"
                value={shopname}
                onChange={e => setShopname(e.target.value)}
                required
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label htmlFor="ownername" sm={4}>
              Owner's Name
            </Label>
            <Col sm={8}>
              <Input
                name="ownername"
                placeholder="Shopowner's Name"
                value={ownername}
                onChange={e => setOwnername(e.target.value)}
                required
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label htmlFor="description" sm={4}>
              Description
            </Label>
            <Col sm={8}>
              <Input
                type="textarea"
                name="description"
                placeholder="Paint a Word Picture about this Shop"
                value={description}
                onChange={e => setDescription(e.target.value)}
                required
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label htmlFor="location" sm={4}>
              Location
            </Label>
            <Col sm={8}>
              <Input
                name="location"
                placeholder="Location, Location, Location"
                value={location}
                onChange={e => setLocation(e.target.value)}
                required
              />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label htmlFor="playerNum" sm={4}>
              Number of Players
            </Label>
            <Col sm={4}>
              <Input
                type="select"
                name="playerNum"
                value={playerNum}
                onChange={e => setPlayerNum(e.target.value)}
                required
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10 (I feel sorry for you)</option>
              </Input>
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label htmlFor="levelNum" sm={4}>
              Average Player Level
            </Label>
            <Col sm={4}>
              <Input
                type="select"
                name="levelNum"
                value={levelNum}
                onChange={e => setLevelNum(e.target.value)}
                required
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
                <option>13</option>
                <option>14</option>
                <option>15</option>
                <option>16</option>
                <option>17</option>
                <option>18</option>
                <option>19</option>
                <option>20 (they better have a lot of money)</option>
              </Input>
            </Col>
          </FormGroup>
          <Button color="success" type="submit">
            Open Up Shop (Save)
          </Button>
        </Form>
      </Collapse>
    </Container>
  );
};

export default ShopCreate;
