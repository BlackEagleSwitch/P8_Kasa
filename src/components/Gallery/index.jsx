import logements from "./../../data/logements"
import Location from "./../Location"
import "./../../styles/Gallery.css"

function Gallery() {
    return (
        <div className="gallery-kasa">
            {logements.map(({ id, title, cover }) => (
                <Location key={id.toString()}
                    id={id}
                    title={title}
                    cover={cover}
                />
            ))}
        </div>
    )
}

export default Gallery