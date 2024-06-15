import Picture from './Picture';
import photoData from "../photoData.json";
import "../assets/photo-gallery.css";

function PhotoGallery() {
    return (
        <>
            <h1 className='title'>Photo Gallery</h1>
            <div className='container'>
                {photoData.map(photo =>
                    <Picture id={photo.id}
                             description={photo.description}
                             imageURL={photo.imageURL}
                    />)}
            </div>
        </>
    );
}

export default PhotoGallery;