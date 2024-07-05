import styles from './Navbar.module.css'
import { FaGithub, FaLinkedin } from "react-icons/fa"
import Nav from 'react-bootstrap/Nav'

function Navbar() {
    return(
        <container className={styles.navbar}>
            <div>
                <ul>
                    <li><Nav.Link href='#Projects'>Projetos</Nav.Link></li>
                    <li><Nav.Link href='#Technology' >Tecnologias</Nav.Link></li>
                    <li><Nav.Link href='#AboutMe'>Sobre Mim</Nav.Link></li>
                </ul>
            </div>
            <aside>
                <ul>
                    <li><a href='https://github.com/VagRodr' target='_blank'><FaGithub size={20}/></a></li>
                    <li><a href='https://www.linkedin.com/in/vagnerlrg/' target='_blank'><FaLinkedin size={20}/></a></li>
                </ul>
            </aside>
                    
        </container>
    )
}

export default Navbar