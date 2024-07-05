import styles from './Card.module.css'
import ButtonCard from './ButtonCard'
import {useState} from 'react'


// eslint-disable-next-line react/prop-types
function Card({img, title, description, repo, site}) {

    const [info, setInfo] = useState(false)

    function infoOn() {
        setInfo(true)
    }

    function infoOff() {
        setInfo(false)
    }

    return(
        <div onMouseLeave={infoOff} onMouseEnter={infoOn} className={styles.card}>
            <a href={site}>
                <img src={img} width={280}/>
            </a>
            
            <div>
                <h4>{title}</h4>
                {info === true && (<p>{description}</p>)}
                
                <ButtonCard text='Repositório' link={repo}/>
            </div>

        </div>
    )
}

export default Card