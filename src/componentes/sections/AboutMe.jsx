import TimeLine from '../elements/TimeLine'
import styles from './AboutMe.module.css'


function AboutMe() {
    return(
        <div id="AboutMe"className={styles.aboutMe}>
            <h1>Sobre mim</h1>
            
            <TimeLine/>
        </div>
    )
}

export default AboutMe