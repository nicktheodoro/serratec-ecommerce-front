import React from "react";

import style from "./index.module.scss";

import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

export default function Header() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark" className={style.navbar}>
      <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="mr-auto my-2 my-lg-0"
          style={{ maxHeight: "100px" }}
          navbarScroll
        >
          <Nav.Link href="#action1">Artesanais</Nav.Link>
          <Nav.Link href="#action2">Nacionais</Nav.Link>
          <Nav.Link href="#action3">Internacionais</Nav.Link>
        </Nav>
        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="mr-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
          
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}
