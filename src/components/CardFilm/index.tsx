import {Props} from './interface';
import './style.css';
const cardFilm:React.FC<Props> = ({title,image,link}) => {
    return (
        <>
        <div className='card'>
        <h1 className="cartaz">{title}</h1>
            <img src={image} alt={title}/>
            <a href={link} target="_blank" className="botao">Assistir</a>
        </div>
        </>
    );
};

export default cardFilm;