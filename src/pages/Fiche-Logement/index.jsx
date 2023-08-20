import { useState } from 'react'
import { useParams } from 'react-router-dom'

import Slider from '../../components/Slider'
import Profil from '../../components/Profil'
import Rating from '../../components/Rating'
import Collapse from '../../components/Collapse'

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

                    <div className="fl-divTitle">
                        <h1>{title}</h1>
                        <p>{location}</p>
                        {tags.map((tag) => (<span className='tag' key={tag}>{tag}</span>))}
                    </div>

                    <div className="fl-divNameRating">
                        <Profil host={host} />
                        <Rating rating={rating} />
                    </div>

                    <ul className="fl-details">
                        <Collapse title="description" texte={description} />     
                        <Collapse title="equipments" list={equipments} />       
                    </ul>                  
                </div>
            ))}
        </div>
    )
}

export default FicheLogement
