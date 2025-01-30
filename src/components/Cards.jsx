import React from 'react'
import Card from './Card'

const Cards = (props) => {
    return (
        <div className="container-fluid">
            <div className='row'>
                <div className='ccol-md-3 col-sm-6  p-1'>
                    <Card
                        image="assets/img/BTS.jpg"
                        titulo="BangTan sonyeondan"
                        descripcion="BTS, Banda de Kpop que ha generado una revolucion en el mundo de la musica y en el de los fandoms teniendo el fandom mas grande de todo el mundo. Hacen de baladas, Hip-hop,pop, rock, etc"
                        button="Conocer mas"
                    />
                </div>

                <div className='col-md-3 col-sm-6  p-1'>
                    <Card
                        image="assets/img/SKZ.avif"
                        titulo="Stray Kids"
                        descripcion="SKZ, Banda de Kpop que ha creo un genero de musica llamado malataste, se compone por 8 personas, 6 coreanos y 2 australianos"
                        button="Conocer mas"
                    />
                </div>

                <div className='col-md-3 col-sm-6  p-1'>
                    <Card
                        image="assets/img/TOP.avif"
                        titulo="Twenty One Pilots"
                        descripcion="TOP, Banda gringa, ellos odian que les pregunten que tipo de música hacen ya que hay rock baladas y rap pero todo mezclado, conocidos por como Tyler (cantante) externalizo su depresion, tienen un lore muy interesante"
                        button="Conocer mas"
                    />
                </div>

                <div className='col-md-3 col-sm-6  p-1'>
                    <Card
                        image="assets/img/daft-punk.avif"
                        titulo="Daft Punk"
                        descripcion="Duo frances, su nombre viene a una critica que en sus comienzos salio en el diario. Si no fuera por ellos ya gran parte de la música actual y como se hace no seria igual, inventaron muchas maneras de hacer música con el sintetixador entre otras."
                        button="Conocer mas"
                    />
                </div>

            </div>
        </div>
    )
}

export default Cards







