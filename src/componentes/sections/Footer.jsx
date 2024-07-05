import styles from './Footer.module.css'
import { FaGithub, FaLinkedin, FaFigma } from "react-icons/fa"

function Footer() {
    return(
        <container id="Footer" className={styles.footer}>
            <div>
                <ul>
                    <li>Meu Contato:<br/>21-97669-9184</li>
                    <li>Email:<br/>vagnerlrg@gmail.com</li>
                </ul>
            </div>
            <aside>
                <ul>
                    <li><a href='https://github.com/VagRodr' target='_blank'><FaGithub size={30}/></a></li>
                    <li><a href='https://www.linkedin.com/in/vagnerlrg/' target='_blank'><FaLinkedin size={30}/></a></li>
                    <li><a href='https://www.figma.com/design/NgNr3E6JFCJJ9ZdjFuOJxr/Untitled?node-id=0-1&t=jqFZ8KmpISjoc3hk-1' target='_blank'><FaFigma size={30}/></a></li>
                </ul>
            </aside>
        </container>

    )
}

export default Footer