import Image from "next/image";

const About = () => {
    return (
        <div className="about-container">
            <h2>Sobre mim</h2>
            <div className="flex-about">
                <div className="about-text">
                <p>
                        Tenho 17 anos, sou formada como técnica em informática e continuo me especializando na área. 
                         
                    </p>
                    <p>Sou desenvolvedora fullstack, e ao longo da minha carreira trabalhei em projetos com front e back end, 
                        engenharia de software, design de interfaces e banco de dados.
                        Já trabalhei com diversas tecnologias e frameworks, além de diversas linguagens de programação que seguem informados nas skills.</p>

                    <h3>Formação:</h3>
                    <p>Estudo técnico integrado em informática.</p>

                    <h3>Objetivos:</h3>
                    <p>Pretendo seguir carreira no ramo da informática dentro da área de back-end, onde pretendo me especializar em: Java,
                    PHP e Ruby. Pretendo fazer isso me formando em análise de sistemas, para assim, poder ministrar e também criar servidores
                    de forma mais limpa e clara.</p>


                    <h3>Experiência:</h3>
                    <p>Estagiária na empresa <a href='https://www.facebook.com/farmais.na/?locale=pt_BR'> Farmais-na</a>.</p>
                </div>
                <div className="about-img">
                    <Image src='/images/about.jpeg' className="profile-img" width={300} height={500} alt="Joe and animal relaxing and having fun" />
                </div>
            </div>
        </div>

    )
}

export default About;