import styles from './Button.module.css'

// eslint-disable-next-line react/prop-types
function Button({text, link}) {
    return(
        <div>
            <a href={link}>
                <button className={styles.btn}>{text}</button>
            </a>
            
        </div>
    )
}

export default Button