import React, {useEffect, useState} from 'react';
import Header from "./Layout/Header";
import Main from "./Layout/Main";
import Footer from "./Layout/Footer";
import "./MoviesStyle.scss"
import Loader from "./Components/Loader/Loader";

const MoviesApp = () => {
 const [data,setData]=useState([]),
 [load,setLoad]=useState(false);
 useEffect(()=>{
  setLoad(true)
  fetch("https://www.omdbapi.com/?apikey=b3f1d43d&s=hacker")
    .then(response=>response.json())
    .then(data=>setData(()=>data.Search,setLoad(false)))
 },[])
 const searchMovies = (str,type="all") => {
  setLoad(true)
  fetch(`https://www.omdbapi.com/?apikey=b3f1d43d&s=${str}${type!=="all" ? `&type=${type}`:""}`)
    .then(response=>response.json())
    .then(data=>setData(()=>data.Search, setLoad(false)))
 }
 return (
   <div className="main">
    <div className="main_child">
     <Header searchMovies={searchMovies}/>
     <div className="content">
      {
       load ? <Loader/> : <Main items={data}/>
      }

     </div>
     <Footer/>
    </div>
   </div>
 );
};

export default MoviesApp;