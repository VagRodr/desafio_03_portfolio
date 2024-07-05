import Card from '../elements/Card'
import styles from './Projects.module.css'
import dncWeather from '../../Image/dncWeather.svg'
import lpdnc from '../../Image/lpdnc.svg'
import portfolio from '../../Image/portfolio.svg'
import encriptador from '../../Image/encriptador.svg'


function Projects() {
    return(
        
        <container className={styles.title}>

            <h1>Projetos</h1>

            <div id="Projects" className={styles.projects}>
            <div>
                <Card
                img={dncWeather}
                title="DNC Weather" 
                description="Aplicação que consome a API Busca CEP e a API de previsão do tempo" 
                repo="https://github.com/VagRodr/desafio02_dncWeather"
                site="https://dnc-weather-xi.vercel.app/"
                />
                <Card
                img={lpdnc}
                title="Landing Page DNC" 
                description="Desenvolvimento de uma landing page da escola DNC" 
                repo="https://github.com/VagRodr/projeto-landing-page"
                site="https://testelandingpage.netlify.app/"
                />
            </div>
            <div>
                <Card
                img={portfolio}
                title="Portfólio React" 
                description="Construção de um Portfólio utilizando React" 
                repo="https://github.com/VagRodr/portfolio-react"
                site="https://portfolio-kappa-teal-54.vercel.app/"
                />
                <Card
                img={encriptador}
                title="Encriptador" 
                description="Projeto que realiza a encriptação e desencriptação de palavras" 
                repo="https://github.com/VagRodr/encriptador"
                site="https://vagrodr.github.io/encriptador/"
                />
            </div>
        
        </div>



        </container>

    )
}

export default Projects