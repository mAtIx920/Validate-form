import React from 'react';

function Input({nameElement, setValue, avaiableProvince = null, value}) {
  const lowerNameElement = nameElement.toLowerCase();
  let newNameElement = ''

  //Function which removes white mark in passing variable
  const trimWord = () => {
    for(const letter of lowerNameElement) {
      if(letter === ' ') {
        continue;
      }

      newNameElement += letter;
    }
  }
  trimWord();

  //avaiableprobinc variable allows to display DOM select elements
  return avaiableProvince ? (
    <div>
      <label className='form-label'>
        <p>{nameElement}</p>
        <input className='form-control' value={value} type='text' onChange={e => setValue(e, newNameElement)}/>
      </label>

      <label>
        <p>Province</p>
        <select className='form-select'>
          <option value="zp">Zach.Pomorskie</option>
          <option value="p">Pomorskie</option>
          <option value="wm">Warmińsko-Mazurskie</option>
          <option value="p">Podlsakie</option>
          <option value="kp">Kujawsko-Pomorskie</option>
          <option value="l">Lubuskie</option>
          <option value="w">Wielkopolskie</option>
          <option value="m">Mazowieckie</option>
          <option value="ł">Łódzkie</option>
          <option value="lu">Lubelskie</option>
          <option value="ś">Świętokrzyskie</option>
          <option value="pr">Podkarpackie</option>
          <option value="mł">Małopolskie</option>
          <option value="śl">Śląskie</option>
          <option value="op">Opolskie</option>
          <option value="d">Dolonośląskie</option>
        </select>
      </label>
    </div>
  ) : (
    <label className='form-label'>
      <p>{nameElement}</p>
      <input className='form-control' value={value} type='text' onChange={(e) => setValue(e, newNameElement)}/>
    </label>
  )
}

export default Input
