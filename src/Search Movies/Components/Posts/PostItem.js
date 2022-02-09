import React from 'react';
import PostListItem from "./PostListItem";

const PostItem = (newItems) => {
 return (
   <div className="movies">
    <PostListItem items={newItems} />
   </div>
 );
};

export default PostItem;