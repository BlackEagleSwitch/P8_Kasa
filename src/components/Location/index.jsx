import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './../../styles/Location.css'

function Location({ id, title, cover }) {
    return (
        <Link className="location" to={`/fiche-logement/${id}`}>
            <img src={cover} alt={'picture ' + title} />
            <p>{title}</p>
        </Link>
    )
}

Location.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    cover: PropTypes.string,
}

export default Location
