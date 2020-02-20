import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Login.css";
import {
  Row,
  ButtonToggle,
  Container,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";
import APIURL from '../../helpers/environment'

function Login(props) {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");

  let handleSubmit = e => {
    

    e.preventDefault();
    fetch(`${APIURL}/user/signin`, {
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
      .then(user => props.updateToken(user.sessionToken))
      .catch(err => console.log(err));
  };

  return (

    <Container>
      <Row>
        <Col xs="8" sm="7" md="4">
          <h1>Login</h1>
          <Form className="form" onSubmit={handleSubmit}>
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
                required
              />
            </FormGroup>
            <Button color="primary" type="submit">
              Open up Shop! (Login)
            </Button>
            <div>
              <br></br>
            </div>
            <ButtonToggle color="success" onClick={props.changeView}>
              Start a Shop! (Sign Up)
            </ButtonToggle>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
