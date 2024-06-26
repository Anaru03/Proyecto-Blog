import Potterhead from '@assets/potterhead.jpg'
import '@styles/Comunidad.css'

function Comunidad() {
    return (
        <div className='container'>
            <h1>Comunidad Potterhead</h1>
                <p>La comunidad Potterhead es un grupo de fanáticos de la serie Harry Potter. 
                    Estos fanáticos están profundamente interesados y apasionados por el mundo mágico creado por J.K. Rowling. 
                    Participan en discusiones, eventos, y comparten su amor por la saga a través de diversas plataformas en línea y fuera de línea. 
                    La comunidad Potterhead es diversa y abarca a personas de todas las edades, antecedentes y ubicaciones geográficas 
                    que comparten una conexión especial con la historia de Harry Potter y su mundo mágico.</p>
                <div className="text-center">
                    <img src={Potterhead} alt="Potterhead" className="center-img"/>
                </div>
        </div>

    )
}

export default Comunidad
