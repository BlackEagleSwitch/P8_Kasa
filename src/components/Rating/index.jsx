function Rating({ rating }) {
    const range = [1, 2, 3, 4, 5]
    const score = parseInt(rating)
    
    return (
        <div>
            {range.map((e) => e <= score ? (
                <i key={e} className='fas fa-star'></i>
            ) : (
                <i key={e} className='fas fa-star grey'></i>
            ))}
        </div>
    )
}

export default Rating