import Banner from "./../../components/Banner"
import Gallery from "./../../components/Gallery"
import imgBanner from "./../../assets/background_1.png"
import "./../../styles/Banner.css"

function Home() {
    return (
        <div className="home">
            <Banner>
                <div className="littleBanner">
                    <img src={imgBanner} alt="paysage" />            
                    <p>Chez vous, partout ailleurs</p>
                </div>                
            </Banner>
            <Gallery />
        </div>
    )
}

export default Home
