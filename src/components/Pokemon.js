import "../assets/pokemon.css";
import { useNavigate } from "react-router-dom";

function Pokemon(props) {
    const {id, name} = props;
    const navigate = useNavigate();

    function handleClick(event) {
        event.preventDefault();
        navigate(`pokemon/${id}`);
    }

    return (
        <>
            <div className="pokemon"
                onClick={handleClick}> {name} <br/>
            </div>
        </>
    )
}

export default Pokemon;