import React, {useState} from "react";

import Form from "./Components/Form";
import Input from "./Components/Input";
import './app.css';
import Buttons from "./Components/Button";
import "bootstrap/dist/css/bootstrap.css"
import Message from "./Components/Message";
import Modal from "./Components/Modal";

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('')
  const [pesel, setPesel] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitted, setSubmit] = useState(false);
  const [hasMessage, setMessage] = useState(false);
  const [messageLevel, setLevel] = useState(0);//Message level ows some numbers error. error 1, error 2, error 3, error 4. It allows to display right communique

  //Function which sets current input value to above states
  const setInputValue = (e, elementName) => {
    const currentInputValue = e.currentTarget.value;

    switch(elementName) {
      case 'firstname':
        setFirstName(currentInputValue);
      break;
      case 'lastname':
        setLastName(currentInputValue);
      break;
      case 'yourpesel':
        setPesel(currentInputValue);
      break
      case 'youraddress':
        setAddress(currentInputValue);
      break;
      case 'phonenumber':
        setPhoneNumber(currentInputValue);
      break;
      case 'youremail':
        setEmail(currentInputValue);
      break;
    }
  }

  //Checking if some input are empty
  const checkEmptyInput = () => {
    if(!firstName || !lastName || !pesel || !address || !phoneNumber || !email) {
      setLevel(1);

      return 1
    }
  }

  //Function chceckin if pesel includes only numbers and it will has only 11 signs
  const peselNumberHandler = () => {
    const numbers = '1234567890'//Here we have all avaiable numbers

    for(let i = 0; i < pesel.length; i++) {
      if(!numbers.includes(pesel[i])) {
        setLevel(2);

        return 1
      }
    }

    //Here we checking length of input pesel value
    if(pesel.length !== 11) {
      setLevel(4);

      return 1
    }
  } 

  //Checking if lastname input has correct value length
  const lastNameHandler = () => {
    if(lastName.length > 20 || lastName.length < 3) {
      setLevel(3);

      return 1
    }
  }

  //Function which launches after click submit button form
  const checkForm = e => {
    e.preventDefault();
    let error = 0;//Here will be added amount errors elements

    //If checking function find error, it will returns 1 so it will be true
    if(lastNameHandler()) {
      error++;
    }

    if(peselNumberHandler()) {
      error++;
    }

    if(checkEmptyInput()) {
      error++;
    }


    if(error) {//If variable has some errors state function sets message with errors on DOM screen
      setMessage(true);
    } else {
      setSubmit(true);
    }
  }

  return !isSubmitted ? (
    <>
      <Form submit={checkForm}>
        <Input nameElement='FirstName' setValue={setInputValue} value={firstName}/>
        <Input nameElement='LastName' setValue={setInputValue} value={lastName}/>
        <Input nameElement='Your Pesel' setValue={setInputValue} value={pesel}/>
        <Input nameElement='Your Address' setValue={setInputValue} value={address} avaiableProvince='true'/>
        <Input nameElement='Phone Number' setValue={setInputValue} value={phoneNumber}/>
        <Input nameElement='Your Email' setValue={setInputValue} value={email}/>
        <input type='file'/>

        <div className="d-flex justify-content-around mt-3 border border-dark rounded-3 p-2 bg-dark bg-opacity-25">
          <Buttons text='Send form' type='submit'/>
          <Buttons text='Save form' type='button'/>
        </div>
        
        <Message messageLevel={messageLevel} messageBoolean={hasMessage}/>
      </Form>
    </>
    
  ) : <Modal inputValues={{firstName, lastName, pesel, address, phoneNumber, email}}/>
}

export default App;
