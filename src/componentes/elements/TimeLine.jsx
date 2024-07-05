import styles from './TimeLine.module.css'

function TimeLine() {
    return(
        <container>
            <div className={styles.timeline}>
                <div className={styles.checkpoint}>
                    <div>
                        <h3>Jan-2023</h3>
                        
                    </div>
                </div>
                <div className={styles.checkpoint}>
                    <div>
                        <h3>Out-2023</h3>
                        
                    </div>
                </div>
                <div className={styles.checkpoint}>
                    <div>
                        <h3>Fev-2024</h3>
                        
                    </div>
                </div>
                <div className={styles.checkpoint}>
                    <div>
                        <h3>Jun-2024</h3>
                        
                    </div>
                </div>
            </div>
            <div className={styles.timelinedow}>
                <div className={styles.checkpointdow}>
                    <div>
                        
                        <p>Inicio dos estudos na área de programação através do Programa Oracle Next Education</p>
                    </div>
                </div>
                <div className={styles.checkpointdow}>
                    <div>
                        
                        <p>Comecei a formação em tecnologia (full-stack) na escola DNC</p>
                    </div>
                </div>
                <div className={styles.checkpointdow}>
                    <div>
                        
                        <p>Início da graduação em Tecnologia em Sistemas de Computação - UFF</p>
                    </div>
                </div>
                <div className={styles.checkpointdow}>
                    <div>
                        
                        <p>Curso livre em Introdução a I.A.</p>
                    </div>
                </div>
            </div>
        </container>

        
    )
}

export default TimeLine

