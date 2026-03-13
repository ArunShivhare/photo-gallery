import PhotoCard from "./PhotoCard";

function Gallery({ photos, favourites, toggleFavourite }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

      {photos.map((photo) => (
        <PhotoCard
          key={photo.id}
          photo={photo}
          favourites={favourites}
          toggleFavourite={toggleFavourite}
        />
      ))}

    </div>
  );
}

export default Gallery;