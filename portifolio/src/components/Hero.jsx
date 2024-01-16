import Image from "next/image";

const Hero = () => {
    return (
        <div className="hero-container">
            <Image src='/images/profile.jpg' className="profile-img" width={300} height={300} alt="Joe's personal headshot" />
            <div className="hero-text">
                <h1>Olá, eu sou a Flavia</h1>
                <p>
                    Sou técnica em informática e desenvolvedora fullstack no Brasil. Tenho preferência por desenvolvimento web e front-end, engenharia de software e banco de dados.
                </p>
                <div className="social-icons">
                    
                    <a
                        href="https://github.com/bugFlavia"
                        aria-label="GitHub"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/flavia-nunes-b4480524b/"
                        aria-label="LinkedIn"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Hero;