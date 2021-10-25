import React, { useContext, useState } from "react";
import Box from "../atoms/Box";
import MovieCardStyles from "./MovieCard.module.css";
import { MovieModel } from "../../models/MovieModel";
import ImageBox from "../atoms/ImageBox";
import { DataContext } from "../../context/DataContext";

export default function MovieCard({
  movieData,
  keyValue,
  onClick,
}: MovieCardProps) {
  const [favButtonHovered, setFavButtonHovered] = useState(false);
  const toggleFavButtonHover = () => setFavButtonHovered(!favButtonHovered);
  const [watchItLaterButtonHovered, setWatchItLaterButtonHovered] =
    useState(false);
  const toggleWatchItLaterButtonHover = () =>
    setWatchItLaterButtonHovered(!watchItLaterButtonHovered);
  const {
    isMovieInList,
    addItemToMyList,
    removeMovieFromList,
    isMovieInLaterList,
    addItemToLaterList,
    removeMovieFromLaterList,
  } = useContext(DataContext);
  return (
    <Box
      keyValue={"movieCardBox_" + keyValue}
      key={"movieCardBox_" + keyValue}
      styles={MovieCardStyles.movieCardOuter}
    >
      <Box
        styles={MovieCardStyles.addFavBtn + " " + MovieCardStyles.addWatchLater}
        onMouseEnter={toggleWatchItLaterButtonHover}
        onMouseLeave={toggleWatchItLaterButtonHover}
        onClick={() =>
          isMovieInLaterList(movieData)
            ? removeMovieFromLaterList(movieData)
            : addItemToLaterList(movieData)
        }
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
        styles={MovieCardStyles.addFavBtn}
        onMouseEnter={toggleFavButtonHover}
        onMouseLeave={toggleFavButtonHover}
        onClick={() =>
          isMovieInList(movieData)
            ? removeMovieFromList(movieData)
            : addItemToMyList(movieData)
        }
      >
        <i
          className={
            (isMovieInList(movieData) ? !favButtonHovered : favButtonHovered)
              ? "fas fa-heart"
              : "far fa-heart"
          }
        ></i>
      </Box>
      <Box
      keyValue={"movieCardBox_" + keyValue}
      key={"movieCardBox_" + keyValue}
      styles={MovieCardStyles.movieCardInner}
      onClick={() => onClick()}
    >
        <ImageBox
          url={
            movieData.poster_path != null
              ? `https://image.tmdb.org/t/p/w400/${movieData.poster_path}`
              : "/noimage.jpg"
          }
          keyValue={keyValue}
          alt="poster"
          styles={MovieCardStyles.posterImage}
          width={300}
          height={400}
        />
        <h2
          style={{
            textAlign: "center",
            width: "100%",
            margin: 3,
            maxHeight: 32,
            textOverflow: "ellipsis",
            overflow: "hidden",
            whiteSpace: "nowrap",
          }}
        >
          {movieData.title}
        </h2>
      </Box>
    </Box>
  );
}

interface MovieCardProps {
  movieData: MovieModel;
  keyValue: string;
  onClick: Function;
}
