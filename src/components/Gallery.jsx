import { useContext } from "react";
import { ImagesContext } from "../context/ImagesContext";
import IconHeart from "./IconHeart";

const Gallery = () => {
  const { images, changeLikedStatus } = useContext(ImagesContext);

  return (
    <main className="container">
      <div className="d-flex flex-wrap container">
        {images.map((e) => {
          return (
            <div key={e.id} >
              <a target="_blank" href={e.url}>
                <img src={e.src.large2x} alt={e.alt} width="100%" height="30%"/>
              </a>
              <span className="imageDescription">
                {e.alt !== "" ? e.alt : <span>Untitled</span>}
              </span>
              <div className="heartIcon">
                <button
                  className="iconButton"
                  onClick={() => changeLikedStatus(e.id)}
                >
                  <IconHeart liked={e.liked} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Gallery;
