import React from "react";
import { Navbar, Alignment, Button, Intent } from "@blueprintjs/core";
import { Link } from "react-router-dom";

export class Header extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar className="navbar">
          <Navbar.Group align={Alignment.LEFT}>
            <Navbar.Heading>
              <img
                src="https://business.athabascau.ca/assets/BMO-logo.jpg"
                height="50px"
              />
            </Navbar.Heading>
            <Navbar.Divider />
            <Link to="/">
              <Button
                className="bp3-minimal text-white"
                icon="home"
                text="Home"
                intent={Intent.DANGER}
              />
            </Link>

            <Link to="/job-seeker/">
              <Button
                className="bp3-minimal text-white"
                icon="search"
                text="Find your ideal role"
                intent={Intent.DANGER}
              />
            </Link>
          </Navbar.Group>
        </Navbar>
      </React.Fragment>
    );
  }
}
