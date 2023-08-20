import { useState } from "react"
import "./../../styles/Collapse.css"

function Collapse({ title, texte, list }) {
    
    const [collapseOpen, setOpenCollapse] = useState(false)

    return collapseOpen ? (
        <div className="collapse">
            <button onClick={() => setOpenCollapse(false)}>{title}...<i className="fas fa-angle-up"></i></button> 
            {texte ? (
                <p>{texte}</p>
            ) : (
                <ul>
                    {list.map((li) => (
                        <li key={li}>{li}</li>
                    ))}
                </ul>
            )}
        </div>
    ) : (
        <div className="collapse">
            <button onClick={() => setOpenCollapse(true)}>{title}<i className="fas fa-angle-down"></i></button> 
        </div>
    )
}

export default Collapse