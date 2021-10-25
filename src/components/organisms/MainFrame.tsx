import React, { useContext, useEffect } from "react";
import { DataContext } from "../../context/DataContext";
import Box from "../atoms/Box";
import Footer from "../molecules/Footer";
import NavigationBar from "../molecules/NavigationBar";
import MovieInfoOverlay from "./MovieInfoOverlay";
import MovieTable from "./MovieTable";

export default function MainFrame({initialData} :any) {
    const { setPopularMovies, movieInfoOverlayData} = useContext(DataContext);
    useEffect(() => {        
        setPopularMovies(initialData);
      });
    
  return (
    <Box>
      {movieInfoOverlayData?.isVisible && movieInfoOverlayData.movieData && <MovieInfoOverlay movieData={movieInfoOverlayData.movieData}/>}
      <NavigationBar />
      <MovieTable />
      <Footer
        text={"Snowlear(Bekir Efe Cakir)"}
        link={"https://github.com/Snowlear/moviezone"}
      />
    </Box>
  );
}
