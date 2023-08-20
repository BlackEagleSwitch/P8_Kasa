import { Link } from 'react-router-dom'
import logo from './../../assets/kasa-logo.png'

import './../../styles/Header.css'

function Header() {
    return (
        <div className="header-kasa">
            <img src={logo} alt="kasa-logo" />
            <div>
                <Link to="/">Accueil</Link>
                <Link to="/a-propos">A Propos</Link>
            </div>
        </div>
    )
}

export default Header
