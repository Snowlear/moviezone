import React, { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import Box from "../atoms/Box";
import Container from "../atoms/Container";
import LoadingOverlay from "./LoadingOverlay";
import MovieCard from "./MovieCard";
import MovieTableStyles from "./MovieTable.module.css";

export default function MovieTable() {
  const {
    activeLink,
    movies,
    popularMovies,
    isLoading,
    myList,
    laterList,
    setmovieInfoOverlayData,
  } = useContext(DataContext);
  let currentMovies;
  switch (activeLink) {
    case "Popular":
      currentMovies = popularMovies;
      break;
    case "Search Movie":
      currentMovies = movies;
      break;
    case "My Favourites":
      currentMovies = { results: myList };
      break;
    case "Watch Later":
      currentMovies = { results: laterList };
      break;
    default:
      currentMovies = movies;
  }
  return (
    <Box styles={MovieTableStyles.table}>
      <Container styles={MovieTableStyles.container}>
        {currentMovies.results &&
          currentMovies.results.length === 0 &&
          activeLink !== "My Favourites" &&
          activeLink !== "Watch Later" && (
            <h1 className={MovieTableStyles.error}>
              There are no resource based on your request :(
            </h1>
          )}
        {currentMovies.results &&
          currentMovies.results.length === 0 &&
          (activeLink === "My Favourites" || activeLink === "Watch Later") && (
            <h1 className={MovieTableStyles.error}>
              There are no movie in your {activeLink} list! Let`s add some in
              `Search Movie` section :)
            </h1>
          )}
        {!isLoading ? (
          currentMovies.results && (
            <React.Fragment>
              {activeLink !== "My Favourites" &&
                activeLink !== "Watch Later" && activeLink !== "Popular" && (
                  <h3 style={{ width: "100%", textAlign: "center" }}>
                    There are{" "}
                    {activeLink === "My Favourites"
                      ? currentMovies.results.length
                      : currentMovies.total_results}{" "}
                    results based on your search.
                  </h3>
                )}
              {currentMovies.results.map((movieItem: any, index: number) => (
                <MovieCard
                  movieData={movieItem}
                  keyValue={"movieCard_" + index}
                  key={"movieCard_" + index}
                  onClick={() =>
                    setmovieInfoOverlayData &&
                    setmovieInfoOverlayData({
                      isVisible: true,
                      movieData: movieItem,
                    })
                  }
                />
              ))}
            </React.Fragment>
          )
        ) : (
          <LoadingOverlay />
        )}
      </Container>
    </Box>
  );
}
