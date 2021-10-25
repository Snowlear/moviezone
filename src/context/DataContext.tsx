import React, { useState, createContext, useEffect } from "react";
import { DataContextModel } from "../models/DataContextModel";
import { MovieInfoOverlayDataModel } from "../models/MovieInfoOverlayDataModel";
import { MovieModel } from "../models/MovieModel";
export const DataContext = createContext<DataContextModel>({});
export const DataState = ({ children }: any) => {
  const [hiddenMenu, setHiddenMenu] = useState(true);

  const [activeLink, setActiveLink] = useState("Popular");

  const [showPagination, setShowPagination] = useState(true);

  const [isLoading, setIsLoading] = useState(false);

  const [movies, setMovies] = useState([]);

  const [search, setSearch] = useState("");

  const [currentPage, setCurrentPage] = useState(1);

  const [popularMovies, setPopularMovies] = useState([]);

  const [movieInfoOverlayData, setmovieInfoOverlayData] =
    useState<MovieInfoOverlayDataModel>({});

  const [myList, setMyList] = useState<Array<MovieModel>>([]);

  const [laterList, setLaterList] = useState<Array<MovieModel>>([]);

  const API_KEY = "d4c03f4129a308e4d7ce300cedccd125";

  const getMovies = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${currentPage}`
    );
    const data = await response.json();
    if (search.trim() === "") {
      setMovies(data);
    }
  };

  const handleSearch = async (e: any) => {
    e.preventDefault();
    if (search.trim() === "") {
      return;
    }
    const searchResponse = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${search}&page=${currentPage}`
    );
    const searchData = await searchResponse.json();
    setMovies(searchData);
    setShowPagination(false);
  };

  const newPage = (direction: any) => {
    if (direction === "next") {
      setCurrentPage(currentPage + 1);
      setIsLoading(true);
    } else if (direction === "previous" && currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const getPopularMovies = async () => {
    const popularMoviesResponse = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
    );
    const popularMoviesData = await popularMoviesResponse.json();
    setPopularMovies(popularMoviesData);
  };

  const getMyListFromLocalStorage = () => {
    let myStoredData = localStorage.getItem("MyListData");
    if (!localStorage.getItem("MyListData")) {
      localStorage.setItem("MyListData", "[]");
      myStoredData = "[]";
    }
    let myData = JSON.parse(myStoredData!);
    setMyList(myData!);
  };

  const isMovieInList = (item: MovieModel) => {
    let myStoredData = localStorage.getItem("MyListData");
    if (!localStorage.getItem("MyListData")) {
      localStorage.setItem("MyListData", "[]");
      myStoredData = "[]";
    }
    let myData: Array<MovieModel> = JSON.parse(myStoredData!);
    return myData.filter((e) => e.id === item.id).length > 0;
  };

  const removeMovieFromList = (item: MovieModel) => {
    let myData: Array<MovieModel> = myList;
    myData = myData.filter((e) => e.id !== item.id);
    setMyListToLocalStorage(myData!);
    setMyList(myData!);
  };

  const addItemToMyList = (item: MovieModel) => {
    let myData: Array<MovieModel> = myList;
    myData.push(item);
    setMyListToLocalStorage(myData!);
    setMyList(myData!);
  };

  const setMyListToLocalStorage = async (list: Array<MovieModel>) => {
    localStorage.setItem("MyListData", JSON.stringify(list));
  };

  //

  const getLaterListFromLocalStorage = () => {
    let myStoredData = localStorage.getItem("LaterListData");
    if (!localStorage.getItem("LaterListData")) {
      localStorage.setItem("LaterListData", "[]");
      myStoredData = "[]";
    }
    let myData = JSON.parse(myStoredData!);
    setLaterList(myData!);
  };

  const isMovieInLaterList = (item: MovieModel) => {
    if (!item) {
      return false;
    }
    let myStoredData = localStorage.getItem("LaterListData");
    if (!localStorage.getItem("LaterListData")) {
      localStorage.setItem("LaterListData", "[]");
      myStoredData = "[]";
    }
    let myData: Array<MovieModel> = JSON.parse(myStoredData!);
    return myData.filter((e) => e.id === item.id).length > 0;
  };

  const removeMovieFromLaterList = (item: MovieModel) => {
    let myData: Array<MovieModel> = laterList;
    myData = myData.filter((e) => e.id !== item.id);
    setLaterListToLocalStorage(myData!);
    setLaterList(myData!);
  };

  const addItemToLaterList = (item: MovieModel) => {
    let myData: Array<MovieModel> = laterList;
    myData.push(item);
    setLaterListToLocalStorage(myData!);
    setLaterList(myData!);
  };

  const setLaterListToLocalStorage = async (list: Array<MovieModel>) => {
    localStorage.setItem("LaterListData", JSON.stringify(list));
  };

  useEffect(() => {
    getMyListFromLocalStorage();
    getPopularMovies();
    getLaterListFromLocalStorage();
  }, []);

  useEffect(() => {
    if (search.trim() === "") {
      setShowPagination(true);
    }
    getMovies();
  }, [search, currentPage]);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 1300);
    return () => clearTimeout(loadingTimeout);
  }, [movies, currentPage]);

  return (
    <DataContext.Provider
      value={{
        movies,
        setMovies,
        search,
        setSearch,
        activeLink,
        setActiveLink,
        handleSearch,
        currentPage,
        setCurrentPage,
        newPage,
        showPagination,
        setShowPagination,
        isLoading,
        setIsLoading,
        popularMovies,
        setPopularMovies,
        hiddenMenu,
        setHiddenMenu,
        myList,
        isMovieInList,
        addItemToMyList,
        removeMovieFromList,
        laterList,
        setLaterList,
        isMovieInLaterList,
        addItemToLaterList,
        removeMovieFromLaterList,
        movieInfoOverlayData,
        setmovieInfoOverlayData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
