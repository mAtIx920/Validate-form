import React from 'react'

function Message({messageLevel, messageBoolean}) {
  //Here we have avaiable messages to launch
  const emptyInputMessage = 'Empty input, please type something!';
  const onylNumberMessage = 'Pesel includes only numbers, please type correct';
  const maxMinLenghtMessage = 'Last name must includes from 3 to 20 signs'
  const peselLenghtMessage = 'Pesel must includes 11 signs';

  let currentMessage = null;

  //Checking which error messagelevel was reported and display right communique
  if(messageLevel === 1) {
    currentMessage = emptyInputMessage;
  } else if(messageLevel === 2) {
    currentMessage = onylNumberMessage;
  } else if(messageLevel === 3) {
    currentMessage = maxMinLenghtMessage;
  } else if(messageLevel === 4) {
    currentMessage = peselLenghtMessage;
  }

  return messageBoolean ? (
    <p className='text-danger'>{currentMessage}</p>

  ) : null
}

export default Message
