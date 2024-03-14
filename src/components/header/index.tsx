import Image from "next/image";
import "./styles.css";
const Header = () => {
    return (
        <>
        <header className="topo">
        <h1 className="titulo">Os melhores filmes estão aqui</h1>
        <Image src="/cineflix.png" alt="Logo" width="150" height="150" 
         />
        </header>
        </>
    );
};

export default Header;