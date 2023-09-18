import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import Slider from '../../components/Slider'
import Profil from '../../components/Profil'
import Rating from '../../components/Rating'
import Collapse from '../../components/Collapse'

import logements from "./../../data/logements"
import "./../../styles/FicheLogement.css"

function FicheLogement() {

    const navigate = useNavigate()
    const { logementId } = useParams()
    const [slide, updateSlide] = useState(0)

    const logement = logements.find(({ id }) => id === logementId)    

    useEffect(() => {
        if (!logement) {
            navigate("*");
            return
        }
    }, [logement, navigate]);

    if (!logement) {
        return null;
    }

    return (
        <div className="fiche-logement">
            <div className="fl-container" key={logement.id}>
                <Slider slide={slide} updateSlide={updateSlide} title={logement.title} pictures={logement.pictures} />

                <div className="fl-divTitle">
                    <h1>{logement.title}</h1>
                    <p>{logement.location}</p>
                    {logement.tags.map((tag) => (<span className='tag' key={tag}>{tag}</span>))}
                </div>

                <div className="fl-divNameRating">
                    <Profil host={logement.host} />
                    <Rating rating={logement.rating} />
                </div>

                <ul className="fl-details">
                    <Collapse title="description" texte={logement.description} />
                    <Collapse title="equipments" list={logement.equipments} />
                </ul>
            </div>
        </div>
    )
}

export default FicheLogement
