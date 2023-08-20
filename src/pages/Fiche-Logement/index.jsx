import { useState } from 'react'
import { useParams } from 'react-router-dom'

import Slider from '../../components/Slider'

import logements from "./../../data/logements"
import "./../../styles/FicheLogement.css"

function FicheLogement() {
    const { logementId } = useParams()
    
    const [slide, updateSlide] = useState(0)

    const logement = logements.filter(({ id }) => id === logementId)   

    return (
        <div className="fiche-logement">
            {logement.map(({ id, pictures, title, location, tags, host, rating, description, equipments }) => (                
                <div className="fl-container" key={id}>
                    <Slider slide={slide} updateSlide={updateSlide} title={title} pictures={pictures} />                               
                </div>
            ))}
        </div>
    )
}

export default FicheLogement
