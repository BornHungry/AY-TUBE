import React from "react";
import Layouts from "../component/Layouts";
import Discover from "../component/dicsover";
import Header from "../headers/header";
import "./Home.css";
const HomePage = () => {
  return (
    <div>
      <Layouts login="login">
        <Header title="Discover" />
        <Discover
          url="https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc"
          idRow="0"
        />

        <Header title="Top Rated" />
        <Discover
          url="https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1"
          idRow="1"
        />

        <Header title="Trending Now" />
        <Discover
          url="https://api.themoviedb.org/3/trending/movie/day?language=en-US"
          idRow="2"
        />

        <Header title="Rated" />
        <Discover
          url="https://api.themoviedb.org/3/movie/popular?language=en-US&page=1"
          idRow="3"
        />

        <Header title="Top Rated Series" />
        <Discover
          url="https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1"
          idRow="4"
        />

        <Header title="Popular Series" />
        <Discover
          url="https://api.themoviedb.org/3/tv/popular?language=en-US&page=1"
          idRow="5"
        />
      </Layouts>
    </div>
  );
};

export default HomePage;
