import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import MovieCard from "../../components/organisms/MovieCard";
import { DataContext, DataState } from "../../context/DataContext";
import "jest-fetch-mock";

let MockMovieData = {
  adult: false,
  backdrop_path: "/4KpNHvQIjyg1YFovRAoUXoFrGnR.jpg",
  genre_ids: [16, 12],
  id: 662708,
  original_language: "ja",
  original_title: "劇場版ポケットモンスター ココ",
  overview:
    "In the Forest of Okoya, Koko is a feral child who has been raised as a Pokémon by the Mythical Pokémon Zarude. Koko has grown up never doubting that he is a Pokémon even though he can't really use any sort of moves. Ash Ketchum and Pikachu meet Koko and help him protect the Great Tree from the crooked scientist Dr. Zed.",
  popularity: 1512.493,
  poster_path: "/vGcHyV9s1N2I7bJLSBODvqHTYLL.jpg",
  release_date: "2020-12-25",
  title: "Pokémon the Movie: Secrets of the Jungle",
  video: false,
  vote_average: 7.6,
  vote_count: 54,
};

describe("<MovieCard />", () => {
  it("renders <MovieCard /> component for a movie data.", async () => {
    render(
      <DataState>
        <MovieCard
          movieData={MockMovieData}
          keyValue={"test"}
          onClick={jest.fn()}
        />
      </DataState>
    );
    expect(screen.getByText(MockMovieData.title)).toBeInTheDocument();
  });
});
