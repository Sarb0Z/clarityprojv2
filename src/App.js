import { useState } from 'react';
import logo from './logo.png';
import './App.css';
import { Form, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { CallFunction } from './contractCallFunctions';

function App() {
  const [address, setAddress] = useState("");
  const [beneficiary, setBeneficiary] = useState("");
  const [address2, setAddress2] = useState("");
  const [clearance, setClearance] = useState("");
  const updateWill = (e) => {
    console.log("Address is " + address + ". Beneficiary is " + beneficiary);
    //CallFunction(address);
  }
  const deleteWill = (e) => {
    console.log("Address is " + address2 + ". Clearance is " + clearance);

  }
  return (
    <div>    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        Welcome to the clarity-powered Bank Database
        <p>
        Do you wish to add a will or delete a will?
        </p>
      </header>
     
    </div>

    <div className='Form'>
    <h2>
          Add New Will
    </h2>
            <Form >
            <Form.Group className="mb-3 col-sm-3" controlId="formBasicEmail" >
                <Form.Label>Your Wallet Address</Form.Label>
                <Form.Control type="text" placeholder="Enter Principle" value={address}
                onChange={(e) => setAddress(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3 col-sm-3" controlId="formBasicPassword">
                <Form.Label>Beneficiary's Wallet Address</Form.Label>
                <Form.Control type="text" placeholder="Enter Principle" value={beneficiary}
                onChange={(e) => setBeneficiary(e.target.value)}/>
            </Form.Group>
            
            <Button variant="secondary" type="button" onClick={updateWill}>
                Draft Will
            </Button>
            </Form>
    </div>
    <div className='Form'>
    <h2>
          Delete Will
    </h2>
            <Form >
            <Form.Group className="mb-3 col-sm-3" controlId="formBasicEmail" >
                <Form.Label>Your Wallet Address</Form.Label>
                <Form.Control type="text" placeholder="Enter Principle" value={address2}
                onChange={(e) => setAddress2(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3 col-sm-3" controlId="formBasicPassword">
                <Form.Label>Your Security Clearance</Form.Label>
                <Form.Control type="text" placeholder="Enter Clearance" value={clearance}
                onChange={(e) => setClearance(e.target.value)}/>
            </Form.Group>
            
            <Button variant="danger" type="button" onClick={deleteWill}>
                Delete
            </Button>
            </Form>

    </div>
  
    </div>
  );
}

export default App;

