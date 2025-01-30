import React from 'react'

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">{props.navbar}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active text-white bg-dark" aria-current="page" href="#">{props.item1}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white-50 bg-dark" href="#">{props.item2}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white-50 bg-dark" href="#">{props.item3}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white-50 bg-dark" href="#">{props.item4}</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  )
}

export default Navbar