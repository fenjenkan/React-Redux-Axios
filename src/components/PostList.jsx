import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addListPost, getData, deletePost } from "../features/post/postSlice";
import { FcFullTrash, FcKindle } from "react-icons/fc";

const PostList = () => {
  const dispatch = useDispatch();
  const postState = useSelector((state) => state.posts);
  const handelDelete = (id) => {
    dispatch(deletePost(id));
  };
  return (
    <div className="w-4/6 ">
      <header className="grid lg:grid-cols-3 gap-3 sm:grid-cols-1 p-6">
        <img src="img/logo_RANDOMblanco-01.png" alt="" />
        <h1 className="text-center text-4xl">Post List {postState.posts.length}</h1>
        <div className="flex items-center justify-end">
          <Link
          to="/create-post"
          className="bg-indigo-600 px-2 py-1 rounded-sm text-sm "
        >
          Create Post
        </Link>
        </div>
        
      </header>
      <div className="grid lg:grid-cols-3 gap-3 sm:grid-cols-1">
        {postState.posts.map((post) => (
          <div key={post.id} className="bg-lime-600 opacity-50  hover:opacity-100 shadow-2xl rounded-md p-4">
            <header className="flex justify-between mb-3">
              <h3 className="text-center font-bold">{post.title}</h3>
              <div className="flex gap-x-2">
                <button className="bg-red-500 px-2 py-1 text-lg rounded-md self-center" onClick={() => handelDelete(post.id)}><FcFullTrash/></button>
                <Link className="bg-cyan-400 px-2 py-1 text-lg rounded-md self-center" to={`/edit-post/${post.id}`}><FcKindle/></Link>
              </div>
            </header>
            <hr className="w-1/2"/>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostList;
