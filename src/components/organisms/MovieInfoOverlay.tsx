import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../context/DataContext";
import { MovieModel } from "../../models/MovieModel";
import MovieInfoLayoutStyles from "./MovieInfoOverlay.module.css";
import Box from "../atoms/Box";
import ImageBox from "../atoms/ImageBox";

export default function MovieInfoOverlay({ movieData }: MovieInfoOverlayProps) {
  const {
    setmovieInfoOverlayData,
    isMovieInList,
    isMovieInLaterList,
    removeMovieFromList,
    addItemToMyList,
    removeMovieFromLaterList,
    addItemToLaterList,
  } = useContext(DataContext);
  const [favButtonHovered, setFavButtonHovered] = useState(false);
  const toggleFavButtonHover = () => setFavButtonHovered(!favButtonHovered);
  const [watchItLaterButtonHovered, setWatchItLaterButtonHovered] =
    useState(false);
  const toggleWatchItLaterButtonHover = () =>
    setWatchItLaterButtonHovered(!watchItLaterButtonHovered);
  return (
    <Box styles={MovieInfoLayoutStyles.movieInfoLayoutOuter}>
      <Box styles={MovieInfoLayoutStyles.movieInfoLayout}>
        <Box styles={MovieInfoLayoutStyles.movieInfoCard}>
          <Box styles={MovieInfoLayoutStyles.moviePosterArea}>
            <ImageBox
              url={
                movieData.poster_path != null
                  ? `https://image.tmdb.org/t/p/w400/${movieData.poster_path}`
                  : "/noimage.jpg"
              }
              keyValue={"movie_poster"}
              alt="poster"
              styles={MovieInfoLayoutStyles.posterImage}
              width={300}
              height={400}
            />
          </Box>
          <Box styles={MovieInfoLayoutStyles.movieDataArea}>
            <h2>{movieData.title}</h2>
            <p className={MovieInfoLayoutStyles.movieInfoText}>{movieData.overview}</p>
          </Box>
        </Box>
        <Box styles={MovieInfoLayoutStyles.buttonBar}>
          <Box
            onClick={() => {
              setmovieInfoOverlayData && setmovieInfoOverlayData({});
            }}
            styles={MovieInfoLayoutStyles.infoPanelButton}
          >
            <i className={"far fa-times-circle"}></i>
          </Box>
          <Box
            onMouseEnter={toggleWatchItLaterButtonHover}
            onMouseLeave={toggleWatchItLaterButtonHover}
            onClick={() =>
              isMovieInLaterList(movieData)
                ? removeMovieFromLaterList(movieData)
                : addItemToLaterList(movieData)
            }
            styles={MovieInfoLayoutStyles.infoPanelButton}
          >
            <i
              className={
                (
                  isMovieInLaterList(movieData)
                    ? !watchItLaterButtonHovered
                    : watchItLaterButtonHovered
                )
                  ? "fas fa-check-circle"
                  : "far fa-clock"
              }
            ></i>
          </Box>
          <Box
            onMouseEnter={toggleFavButtonHover}
            onMouseLeave={toggleFavButtonHover}
            onClick={() =>
              isMovieInList(movieData)
                ? removeMovieFromList(movieData)
                : addItemToMyList(movieData)
            }
            styles={MovieInfoLayoutStyles.infoPanelButton}
          >
            <i
              className={
                (
                  isMovieInList(movieData)
                    ? !favButtonHovered
                    : favButtonHovered
                )
                  ? "fas fa-heart"
                  : "far fa-heart"
              }
            ></i>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

interface MovieInfoOverlayProps {
  movieData: MovieModel;
}
