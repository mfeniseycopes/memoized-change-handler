const changeHandler = comp => {
  const handlers = {}

  return (field) => {
    if (!handlers[field]) {
      handlers[field] = e => comp.setState({ [field]: e.currentTarget.value }) 
    } 

    return handlers[field]
  }
}

export default changeHandler
