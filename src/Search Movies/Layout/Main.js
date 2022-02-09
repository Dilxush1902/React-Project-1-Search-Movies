import React from 'react';
import PostItem from "../Components/Posts/PostItem";
import {BsEmojiSmile} from "react-icons/bs"
const Main = ({items=[]}) => {
 return (
   <div className="movies container-fluid py-3">
     { items.length ? (items.map((item)=>{
      const {imdbID,...newItems}=item
      return  <PostItem key={imdbID} {...newItems}/>
     }) ) : <h1 className="text-center text-warning"><BsEmojiSmile/> Sorry !</h1>
     }
   </div>
 );
};

export default Main;