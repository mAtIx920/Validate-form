import React from 'react'

function Modal({inputValues}) {
  const {firstName, lastName, pesel, address, phoneNumber, email} = inputValues;

  return (
       <div className='modal-content p-5 text-center shadow'>
        <h1 className='fs-2'>Thank you! Your account form was sent to administartor</h1>
        <p className='fs-5 pb-3  border-bottom'>Please wait, creating your account can be taken until 5 minutes</p>
        <div>
        <h5>Your passed primary data from account form</h5>
          <div className='modal-wrapper d-flex justify-content-around mt-3 fs-5'>
            <div>
              <p>Name: <span>{firstName}</span></p>
              <p>Lastname: <span>{lastName}</span></p>
              <p>Pesel: <span>{pesel}</span></p>
            </div>
            <div>
              <p>Address: <span>{address}</span></p>
              <p>Phone number: <span>{phoneNumber}</span></p>
              <p>Email: <span>{email}</span></p>
            </div> 
          </div>    
        </div>
      </div>
  )
}

export default Modal
