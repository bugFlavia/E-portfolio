import Link from "next/link";

const Navbar = () => {
    return (
        <div className="nav-container">
            <div className="logo">
            <header>
                <Link href="https://www.linkedin.com/in/flavia-nunes-b4480524b/">
                <h2>Flavia Nunes- Desenvolvedora Full Stack</h2>
                </Link>
            </header>  
            </div>
            <a href="https://docs.google.com/document/d/1S02IU1r-SAK7yxpZOhXxaVbJKw2_Wp8h2QqPgaU63C8/edit?usp=sharing" className="cta-btn">Currículo</a>
        </div>
    )
}

export default Navbar;