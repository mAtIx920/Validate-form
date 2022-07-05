function Form({children, submit}) {
  return (
    <form className="card p-3 shadow" onSubmit={e => submit(e)}>{children}</form>
  )
}

export default Form
