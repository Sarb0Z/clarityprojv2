import { useState } from 'react';
import logo from './logo.png';
import './App.css';
import { Form, Button, Container, Col, Row } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
//import { CallFunction } from './contractCallFunctions';

function App() {
  const [address, setAddress] = useState("");
  const [beneficiary, setBeneficiary] = useState("");
  const [address2, setAddress2] = useState("");
  const [clearance, setClearance] = useState("");
  const [register, setRegister]=useState(true);
  //const [checked, setChecked]=useState(false);
  const updateWill = (e) => {
    console.log("Address is " + address + ". Beneficiary is " + beneficiary);
    //CallFunction(address);
  }
  const deleteWill = (e) => {
    console.log("Address is " + address2 + ". Clearance is " + clearance);

  }
  const pageUpdate = () => {
    if (register){
      setRegister(false);
    }
    else
    {
      setRegister(true);
    }

  }
  return (
    <div>    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        Welcome to the one-stop grocery solution for all your grocery related needs.
        <p>
        Do you wish to login as a buyer or seller?
        </p>
      </header>
       
     
    </div>
    {register ?
    <div>
    <div className="d-grid gap-2">
     <Button variant="success" id="register" type="Button" size="lg" onClick={pageUpdate}>Login</Button>
    </div>
  <Container>
  <div className='Form'>
  <h2>
        Input Registration Details
  </h2>
          <Form className='col'>
          <Form.Group className="mb-3 col-sm-4" controlId="formBasicEmail" >
              <Form.Label>Your Email Address</Form.Label>
              <Form.Control type="text" placeholder="Enter Email" value={address}
              onChange={(e) => setAddress(e.target.value)}/>
          </Form.Group>

          <Form.Group className="mb-3 col-sm-4" controlId="formBasicPassword">
              <Form.Label>Your Password</Form.Label>
              <Form.Control type="password" placeholder="Enter Password" value={beneficiary}
              onChange={(e) => setBeneficiary(e.target.value)}/>
          </Form.Group>
          <Form.Group className="mb-3 col-sm-4" controlId="formBasicEmail" >
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" value={address2}
              onChange={(e) => setAddress2(e.target.value)}/>
          </Form.Group>

          <Form.Group className="mb-3 col-sm-4" controlId="formBasicPassword">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" value={clearance}
              onChange={(e) => setClearance(e.target.value)}/>
          </Form.Group>

          <Form.Group className="mb-3 col-sm-4" controlId="dob">

            <Form.Label>Select Date</Form.Label>

            <Form.Control type="date" name="dob" placeholder="Date of Birth" />

          </Form.Group>
          <Form.Group >
            <Form.Check 
              label="Male"
            />
            <Form.Check 
              label="Female"
            />
          </Form.Group>
          <Form.Group>
            <Form.Check 
              label="Buyer"
            />
            <Form.Check 
              label="Seller"
            />
          </Form.Group>
          

          
          <Row>

          <Col>
          <Button variant="success" type="button" onClick={deleteWill}>
              Register!
          </Button>
          </Col>
          </Row>

          </Form>

  </div>
  </Container>
  </div>
    :
    <div>
      <div className="d-grid gap-2">
        <Button variant="success" id="register" type="Button" size="lg" onClick={pageUpdate}>Register As New User</Button>
      </div>
    <Container>
    <div className='Form'>
    <h2>
          Buyer
    </h2>
            <Form className='row'>
            <Form.Group className="mb-3 col-sm-4" controlId="formBasicEmail" >
                <Form.Label>Your Account Address</Form.Label>
                <Form.Control type="text" placeholder="Enter Email" value={address}
                onChange={(e) => setAddress(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3 col-sm-4" controlId="formBasicPassword">
                <Form.Label>User's Password</Form.Label>
                <Form.Control type="password" placeholder="Enter Password" value={beneficiary}
                onChange={(e) => setBeneficiary(e.target.value)}/>
            </Form.Group>
            <Row>
            <Col>
            <Button variant="secondary" type="button" onClick={updateWill}>
                Buyer Login
            </Button>
            </Col>
            </Row>

            </Form>
    </div>
    </Container>
    <Container>

    <div className='Form'>
    <h2>
          Seller
    </h2>
            <Form className='row'>
            <Form.Group className="mb-3 col-sm-4" controlId="formBasicEmail" >
                <Form.Label>Your Account Address</Form.Label>
                <Form.Control type="text" placeholder="Enter Email" value={address2}
                onChange={(e) => setAddress2(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3 col-sm-4" controlId="formBasicPassword">
                <Form.Label>Input Company Password</Form.Label>
                <Form.Control type="password" placeholder="Enter Password" value={clearance}
                onChange={(e) => setClearance(e.target.value)}/>
            </Form.Group>
            <Row>

            <Col>
            <Button variant="danger" type="button" onClick={deleteWill}>
                Seller Login
            </Button>
            </Col>
            </Row>

            </Form>

    </div>
    </Container>
    </div>
}

  
    </div>
  );
}

export default App;

