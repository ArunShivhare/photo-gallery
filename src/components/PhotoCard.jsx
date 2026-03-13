function PhotoCard({ photo, favourites, toggleFavourite }) {
  const isFavourite = favourites.some((fav) => fav.id === photo.id);

  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <img
        src={photo.download_url}
        alt={photo.author}
        className="w-full h-60 object-cover"
      />

      <div className="p-4 flex justify-between items-center">
        <p className="text-sm font-medium">{photo.author}</p>

        <button onClick={() => toggleFavourite(photo)} className="text-xl">
          <img
            width={16}
            height={16}
            src={isFavourite ? "/heart.png" : "/like.png"}
            alt="like"
          />
        </button>
      </div>
    </div>
  );
}

export default PhotoCard;
