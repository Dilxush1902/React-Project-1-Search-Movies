import React, {useState} from 'react';
import Fade from 'react-reveal/Fade';
const Header = ({searchMovies}) => {
 const [search,setSearch]=useState("hacker"),
   [type,setType]=useState("all")
 console.log(type)
const onSubmit = (e) => {
  e.preventDefault()
  searchMovies(search,type)
}
const typeClick = (e) => {
 setType(e.target.value)
 searchMovies(search,e.target.value)
}
 return (
   <div className="header__main">
    <Fade top>
     <nav className="navbar navbar-expand-lg  navbar-dark bg-black">
      <button
        onClick={(e)=>(searchMovies("Hacker","all"))}
        className="bg-transparent border-0 navbar-brand text-warning"
      >
       Search-Movies
      </button>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
       <span className="navbar-toggler-icon"> </span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
       <ul className="navbar-nav mr-auto">
        <li className="nav-item px-2 py-1">
         <button
           className=" btn btn-outline-warning"
           value="all"
           onClick={typeClick}
         >
          All
         </button>
        </li>
        <li className="nav-item px-2 py-1">
         <button
           className="btn btn-outline-warning"
           value="movie"
           onClick={typeClick}
         >
          Movies
         </button>
        </li>
        <li className="nav-item px-2 py-1">
         <button
           className="btn btn-outline-warning"
           value="series"
           onClick={typeClick}
         >
          Series
         </button>
        </li>
       </ul>
       <form onSubmit={onSubmit} className="form-inline my-2 my-lg-0 "  >
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search..."
          aria-label="Search"
          name="search"
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
        />
         <button className="btn btn-outline-warning my-2 " type="submit">Search</button>
       </form>
      </div>
     </nav>

    </Fade>
   </div>
 );
};

export default Header;