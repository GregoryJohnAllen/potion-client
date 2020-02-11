import React, { useState } from "react";
import { Nav, NavItem, NavLink, Button, Collapse } from "reactstrap";
import { Route, Switch } from "react-router-dom";
import ShopCreate from "../Shop/ShopCreate";
import ShopView from "../Shop/ShopView";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <div>
        <Button color="info" onClick={toggle} style={{ margin: "1rem" }}>
          Quick Links
        </Button>
        <Collapse isOpen={isOpen}>
          <Nav vertical>
            <NavItem>
              <NavLink style={{ color: "#f7d695" }} href="/Shop/ShopCreate">
                Create A Shop
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink style={{ color: "#f7d695" }} href="/Shop/ShopView">
                View All Shops
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                target="blank"
                style={{ color: "#f7d695" }}
                href="https://www.dndbeyond.com/"
              >
                DND Beyond
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </div>
      <div>
        <Switch>
          <Route exact path="/shopcreate">
            <ShopCreate />
          </Route>
          <Route exact path="/shopview">
            <ShopView />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Sidebar;
