import React, {useEffect} from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css';
const PostListItem = ({items}) => {
 const {Title,Poster,Type,Year}=items;
 useEffect(()=>{
  AOS.init({
   offset: 120,
   delay: 600,
   easing: 'ease-in',
   duration: 600,})
 },[])
 return (
   <div data-aos="fade-up" className="card " style={{width: "16rem"}}>
    <img src={Poster} className="card-img-top" alt="Img"/>
     <div className="card-body text-warning">
      <h5 className="card-title">{Title}</h5>
      <div className="card-text d-flex justify-content-between text-capitalize">
      <p>Type: {Type} </p>
       <p>Year: {Year}</p>
      </div>
     </div>
   </div>
 );
};

export default PostListItem;
