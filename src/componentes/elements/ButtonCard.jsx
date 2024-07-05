import styles from './ButtonCard.module.css'

// eslint-disable-next-line react/prop-types
function ButtonCard({text, link}) {
    return(
        <div>
            <a href={link}>
            <button className={styles.btnCard}> {text} </button>
            </a>
            
        </div>
    )
}

export default ButtonCard