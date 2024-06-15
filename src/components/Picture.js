import "../assets/picture.css";
import { useNavigate } from "react-router-dom";

function Picture(props) {
    const {id, description, imageURL} = props;
    const navigate = useNavigate();

    function handleClick(event) {
        event.preventDefault();
        navigate(`photo/${id}`);
    }

    return (
        <>
            <img className="item" onClick={handleClick} src={`${imageURL}`} alt={`${description}`} height="200" />
        </>
    )
}

export default Picture;