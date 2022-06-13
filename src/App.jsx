/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './assets/img/logo.png';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

import "./App.css";

function App() {
  return (
    <div className="App" data-spy="scroll" data-target="#navbar" data-offset="30">
      <Navbar fixed="top" className="navbar">
        <Container>
          <Row>
            <Container className="col-md-12">
              <Navbar.Brand href="#" className="textbrand"><img src={logo} className="img-fluid imgLogo" alt="logo" /></Navbar.Brand>
            </Container>
          </Row>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text className="navbar-nav">
              <Nav className="me-auto nav-item">
                <Nav.Link className="nav-link active" href="#">HOME</Nav.Link>
                <Nav.Link className="nav-link" href="#">PEOPLE</Nav.Link>
                <Nav.Link className="nav-link" href="#">CALCULATOR</Nav.Link>
            </Nav>
           </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="bg-gradient header" id="home">
       <Container className="container mt-5">
            <h1 style={{fontWeight: 'bold'}}>React Practice</h1>
            <p class="tagline">Integral Web Development</p>
            <p class="tagline">Wendy Alondra Cordoba Esparza</p>
            <br/><br/><br/><br/><br/><br/><br/>
        </Container>
      </Container>

      <Container className="section borderSection1" id="people">
        <Container className="container">
            <Container className="section-title">
                <small>PEOPLE</small>
                <h3>Add People</h3>
                <hr></hr>
               <Container  className="justify-content-center">
               <InputGroup className="mb-2">
                  <Form.Control aria-label="First name" className="col-3" style={{marginRight: '5px'}} placeholder="Name"/>
                  <Form.Control aria-label="Last name" className="col-3" placeholder="Last name"/>
              </InputGroup>
              <Button variant="btn btn-outline-dark">Add</Button>

                  <ol class="list">
                    <li><a href="">List item</a></li>
                  </ol>
               </Container>
            </Container>
        </Container>
      </Container>

      <Container className="section borderSection2" id="calculator">
        <Container className="container">
            <Container className="section-title">
                <small>CALCULATOR</small>
                <h3>Add People</h3>
                <hr></hr>
            </Container>
        </Container>
      </Container>

      <Container className="light-bg py-5 footer1"  id="footer">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 text-center text-lg-left">
                    <p className="mb-2 text-white"> <span className="ti-location-pin mr-2"></span> 20264 Mexico Mx, Aguascalientes, UTAGS</p>
                    <div className=" d-block d-sm-inline-block">
                        <p className="mb-2" style={{marginRight:'10px'}}>
                            <span className="ti-email mr-2"></span> <a className="mr-4" href="#">191286@utags.edu.mx</a>
                        </p>
                    </div>
                    <div className="d-block d-sm-inline-block">
                        <p className="mb-0">
                            <span className="ti-headphone-alt mr-2"></span> <a href="#">449-211-2513</a>
                        </p>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="social-icons">
                        <a href="#"><span className="ti-facebook"></span></a>
                        <a href="#"><span className="ti-twitter-alt"></span></a>
                        <a href="#"><span className="ti-instagram"></span></a>
                    </div>
                </div>
            </div>
        </div>
    </Container>

    <footer className="text-center">
        <p className="mb-2"><small  className="text-white">COPYRIGHT © 2022. ALL RIGHTS RESERVED</small></p>
        <small>
            <a href="#" className="m-2">191286</a>
            <a href="#" className="m-2">IDGS 9A</a>
            <a href="#" className="m-2">DWI</a>
            <a href="#" className="m-2">UTAGS</a>
        </small>
    </footer>

    </div>
  );
}

export default App;