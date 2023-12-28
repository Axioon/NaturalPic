import Favorite from "../components/Favorite";

const Favorites = () => {
  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 gallery grid-columns-4">
        <Favorite/>
      </div>
    </div>
  );
};
export default Favorites;
