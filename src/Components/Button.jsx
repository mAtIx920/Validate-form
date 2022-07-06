function Button({text, savingFunction}) {
  return (
    <button onClick={() => savingFunction()} className='btn btn-dark btn-outline-secondary w-50' type='button'>{text}</button>
  )
}

export default Button
