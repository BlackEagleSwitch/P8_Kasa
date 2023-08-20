function Slider({ slide, updateSlide, title, pictures }) {
    const slideLength = pictures.length  - 1; 

    function previousSlide() {               
        slide === 0 ? updateSlide(slideLength) : updateSlide(slide - 1)
    }

    function nextSlide() {        
        slide === slideLength ? updateSlide(0) : updateSlide(slide + 1)        
    }

    return (
        <div className="slider">
            <img
                className="fl-cover"
                key={`${title}-${slide}`}
                src={pictures[slide]}
                alt="illustration"
            />
            {slideLength !== 0 && (
                <div>
                    <i
                        className="fas fa-angle-left arrow"
                        onClick={() => previousSlide()}
                    ></i>
                    <i
                        className="fas fa-angle-right arrow"
                        onClick={() => nextSlide()}
                    ></i>
                </div>
            )}
            
        </div>
    )
}

export default Slider
