import React from 'react'

const Card = (props) => {
    return (
        <div className="card h-100" >
            <img src={props.image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 class="card-title">{props.titulo}</h5>
                <p className="card-text">{props.descripcion}</p>
                <a href="#" class="btn btn-primary">{props.button}</a>
            </div>
        </div>
    )
}

export default Card