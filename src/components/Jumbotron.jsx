import React from 'react'

const Jumbotron = (props) => {
  return (
    <div className="p-5 mb-4 bg-secondary-subtle rounded-4">
        <div className="container-fluid py-5">
          <h1 className="display-5">{props.title}</h1>
          <p className="col-md-8 fs-4">{props.descripcion}</p>
          <button className="btn btn-primary btn-lg" type="button">{props.boton}</button>
        </div>
      </div>
  )
}

export default Jumbotron