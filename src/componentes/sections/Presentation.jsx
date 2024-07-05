import styles from './Presentation.module.css'
import Button from '../elements/Button'
import { useEffect, useState } from 'react'

function Presentation() {

    const [text, setText] = useState('');
    const toRotate = ['Vagner Rodrigues!', 'Desenvolvedor Full-Stack!'];
    const [loop, setLoop] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const period = 300;
    const [delta, setDelta] =useState(300);

    useEffect(()=>{
        let ticker = setInterval(()=>{
            toType()
        }, delta)
        return()=>{clearInterval(ticker)}
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[text])

const toType = () =>{
    let i = loop % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length-1) : fullText.substring(0, text.length+1);

    setText(updatedText);

    if(!isDeleting && updatedText === fullText){
        setIsDeleting(true);
        setDelta(period);
    }else if(isDeleting && updatedText === '') {
        setIsDeleting(false);
        setDelta(period);
        setLoop(loop+1)
    }
}

    return(
        <div id="Presentation" className={styles.presentation}>
            <h1>Olá, eu sou {text}</h1>
            <p>
                Sou uma pessoa proativa, com facilidade para trabalhos em equipe.<br/>
                Estou buscando me capacitar cada vez mais e uma oportunidade<br/> 
                de trabalho na área, para consolidar os conhecimentos adquiridos.<br/><br/>
                No momento estou migrando para a área de tecnologia e iniciei dois cursos:<br/>
                <ul>
                    <li>A formação em tecnologia da escola DNC (Full Stack);</li>
                    <li>Graduação em Tecnologia em Sistemas de Computação - UFF.</li>
                </ul>
            </p>
            <br/>
            <Button link='https://github.com/VagRodr' text='Saiba mais'/>
        </div>
    )
}

export default Presentation