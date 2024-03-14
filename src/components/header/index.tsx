import Image from "next/image";
import "./styles.css";
const Header = () => {
    return (
        <>
        <header className="topo">
        <Image src="/logo.jpg" alt="Logo" width="150" height="150" />
        <h1 className="titulo">Os melhores filmes estão aqui</h1>
        
        </header>
        </>
    );
};

export default Header;