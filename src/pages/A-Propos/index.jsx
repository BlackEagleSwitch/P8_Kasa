import Banner from "./../../components/Banner"
import Collapse from "../../components/Collapse"

import propos from "./../../data/propos"
import imgBanner from "./../../assets/background_2.png"

import "./../../styles/Banner.css"

const APropos = () => {
    return (
        <div className="a_propos">
            <Banner>
                <div className="banner-kasa">
                    <img src={imgBanner} alt="paysage" />            
                    <p></p>
                </div>
            </Banner>
            <ul>
                {propos.map(({ title, texte }) => (
                    <div key={title}>
                        <Collapse 
                            title={title}
                            texte={texte}
                        />
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default APropos
