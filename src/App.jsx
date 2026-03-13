import { useState, useCallback, useReducer, useEffect, useMemo } from "react";
import useFetchPhotos from "./hooks/useFetchPhotos";
import Gallery from "./components/Gallery";
import SearchBar from "./components/SearchBar";
import { favouritesReducer } from "./reducers/favouritesReducer";
import Spinner from "./components/Spinner";

function App() {
  const { photos, loading, error } = useFetchPhotos();

  const [search, setSearch] = useState("");

  const storedFavourites = JSON.parse(localStorage.getItem("favourites")) || [];

  const [favourites, dispatch] = useReducer(
    favouritesReducer,
    storedFavourites,
  );

  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  const handleSearchChange = useCallback((e) => {
    setSearch(e.target.value);
  }, []);

  const toggleFavourite = (photo) => {
    dispatch({
      type: "TOGGLE_FAVOURITE",
      payload: photo,
    });
  };

  const filteredPhotos = useMemo(() => {
    return photos.filter((photo) =>
      photo.author.toLowerCase().includes(search.toLowerCase()),
    );
  }, [photos, search]);

  if (loading) return <Spinner />;

  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Photo Gallery</h1>

      <SearchBar search={search} onSearchChange={handleSearchChange} />

      <Gallery
        photos={filteredPhotos}
        favourites={favourites}
        toggleFavourite={toggleFavourite}
      />
    </div>
  );
}

export default App;
