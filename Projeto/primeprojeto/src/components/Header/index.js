import './header.css'
import { Link } from 'react-router-dom'

function Hedaer() {
    return (
        <header>
            <Link className='logo' to="/">Prime Flix</Link>
            <Link className='favoritos' to="/favoritos">Meus filmes</Link>
        </header>
    )
}

export default Hedaer