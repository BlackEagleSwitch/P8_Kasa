function Profil({ host }) {
    return (
        <div className='fl-profil' key={host.name}>
            <p>{host.name}</p>
            <img src={host.picture} alt={host.name} />            
        </div>
    )
}

export default Profil