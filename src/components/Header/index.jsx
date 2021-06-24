import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

import style from "./index.module.scss";

export default function Header() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark" className={style.navbar}>
      <Navbar.Brand href="/">
        <img src="https://img.icons8.com/officel/40/000000/beer.png" />
        <span>
          <strong>Mercado do Malte</strong>
        </span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />

      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="mr-auto my-2 my-lg-0"
          style={{ maxHeight: "100px" }}
          navbarScroll
        >
          <Nav.Link href="/artesanais">Artesanais</Nav.Link>
          <Nav.Link href="/nacionais">Nacionais</Nav.Link>
          <Nav.Link href="/importadas">Importadas</Nav.Link>
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
      <Nav
        className="mr-auto my-2 my-lg-0"
        style={{ maxHeight: "100px" }}
        navbarScroll
      >
        <Nav.Link href="#action3" className={style.login}>
          Login
        </Nav.Link>
        <Nav.Link href="/register">Cadastro</Nav.Link>
      </Nav>
      <Nav.Link href="#action3">
        <img src="https://img.icons8.com/glyph-neue/35/26e07f/fridge.png" />
      </Nav.Link>
    </Navbar>
  );
}
