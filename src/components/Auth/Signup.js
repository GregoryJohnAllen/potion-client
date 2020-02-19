import React, { useState } from "react";
import {
  Row,
  Container,
  Col,
  ButtonToggle,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";
import './Signup.css';
import APIURL from '../../helpers/environment'


function Signup(props) {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");

  let handleSubmit = event => {
    event.preventDefault();
    console.log(APIURL)

    fetch(`${APIURL}/user/signup`, {
      method: "POST",
      body: JSON.stringify({
        user: {
          username: username,
          password: password
        }
      }),
      headers: new Headers({
        "Content-Type": "application/json"
      })
    })
      .then(response => response.json())
      .then(user => props.updateToken(user.sessionToken));
  };

  return (
    <Container>
      <Row >
        <Col xs="8" sm="7" md="4">
          <h1>Sign Up</h1>
          <Form  className="form" onSubmit={handleSubmit}>
              <FormGroup>
                <Label>Email</Label>
                <Input
                  onChange={e => {
                    setUsername(e.target.value);
                  }}
                  placeholder="email@email.com"
                  name="username"
                  value={username}
                  type="email"
                  required
                />
              </FormGroup>
              <FormGroup>
                <Label>Password</Label>
                <Input
                  onChange={e => {
                    setPassword(e.target.value);
                  }}
                  type="password"
                  placeholder="password"
                  name="password"
                  value={password}
                  minLength="5"
                  required
                />
              </FormGroup>
              <Button color="success" type="submit">
                Grand Opening! (Signup)
              </Button>
              <div>
                <br></br>
              </div>
              <ButtonToggle color="primary" onClick={props.changeView}>
                Fly, You Fool! (Login)
              </ButtonToggle>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Signup;
