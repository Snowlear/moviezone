import { MovieInfoOverlayDataModel } from "./movieInfoOverlayDataModel";

export interface DataContextModel {
  movies?: any;
  setMovies?: any;
  search?: any;
  setSearch?: any;
  activeLink?: any;
  setActiveLink?: any;
  handleSearch?: any;
  currentPage?: any;
  setCurrentPage?: any;
  newPage?: any;
  showPagination?: any;
  setShowPagination?: any;
  isLoading?: any;
  setIsLoading?: any;
  popularMovies?: any;
  myList?: any;
  setMyList?: any;
  setPopularMovies?: any;
  hiddenMenu?: any;
  setHiddenMenu?: any;
  isMovieInList?: any;
  addItemToMyList?: any;
  removeMovieFromList?: any;
  laterList?: any;
  setLaterList?: any;
  isMovieInLaterList?: any;
  addItemToLaterList?: any;
  removeMovieFromLaterList?: any;
  movieInfoOverlayData?: MovieInfoOverlayDataModel;
  setmovieInfoOverlayData?: Function;
}
