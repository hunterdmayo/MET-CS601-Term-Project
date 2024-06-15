import { useParams, useNavigate } from "react-router-dom";
import "../assets/photo-card.css";

function PhotoCard(props) {
  // Set up a defaultItem in case the desired item does not exist
  const defaultPhoto = {
    id: -1,
    description: "Photo Not Found",
    imageURL: ""
  };
  // Use the useParams hook to get the photoID from the URL
  let { photoID } = useParams();
  const { photoData } = props;
  const idx = photoData.findIndex((el) => el.id === Number(photoID));
  console.log(photoData[idx]);
  console.log(photoID);
  console.log(photoData[photoID]);
  const photo = photoData[idx] || defaultPhoto;

  // Handler to nagivate the user back to the Home page
  const navigate = useNavigate();
  function handleClick(event) {
    event.preventDefault();
    navigate("/photos");
  }

  return (
    <div className="details-container">
      <div className="details">
        <img id={`${photo.id}`} src={`${photo.imageURL}`} alt={`${photo.description}`} height="400" /> 
        <button onClick={handleClick}>Photo Gallery</button>
      </div>
    </div>
  );
}

export default PhotoCard;
