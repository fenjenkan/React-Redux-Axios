import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost, editPost } from "../features/post/postSlice";
import { v4 as uid } from "uuid";
import { useNavigate, useParams } from "react-router-dom";
import { FcUpLeft,FcCheckmark } from "react-icons/fc";


const PostForm = () => {
  const dispatch = useDispatch();
  const navegate = useNavigate();
  const params = useParams();
  const postState = useSelector((state) => state.posts);
  const [post, setPost] = useState({
    title: "",
    body: "",
  });

  const handleChange = (e) => {
    setPost({
      ...post,
      [e.target.name]: e.target.value,
    });
  };

  const handelSubmint = (e) => {
    e.preventDefault();
    if (params.id) {
      dispatch(editPost(post));
      navegate("/");
    } else {
      dispatch(
        addPost({
          ...post,
          id: uid(),
        })
      );
      navegate("/");
    }
  };

  useEffect(() => {
    if (params.id) {
      const postFound = postState.posts.find((post) => post.id == params.id);
      setPost({
        ...post,
        id: postFound.id,
        title: postFound.title,
        body: postFound.body,
      });
    }
  }, []);
  return (
    <div  className=" max-w-sm p-4 h-screen flex items-center">
      
      <form
        action=""
        onSubmit={handelSubmint}
      >
        <button className="text-4xl flex items-end"  onClick={() => navegate('/')}><FcUpLeft/></button>
        <h1 className="text-center text-4xl p-3 mb-5">Post Maker</h1>
        <label htmlFor="Title" className="block text-sm font-bold mb-2">Post:</label>
        <input
        className=" w-full p-2 rounded-md bg-zinc-300 mb-2 text-black"
          type="text"
          value={post.title}
          name="title"
          onChange={handleChange}
        />
        <label htmlFor="description" className="block text-sm font-bold mb-1">Descripcion:</label>
        <textarea
        className=" w-full p-2 rounded-md bg-zinc-300 mb-2 text-black"
          name="body"
          value={post.body}
          id=""
          cols="30"
          rows="5"
          onChange={handleChange}
        ></textarea>
        <div>
          <button className="bg-indigo-600  px-3 py-2 rounded-sm"><FcCheckmark className="inline"/>Done</button>
        </div>
      </form>
    </div>
  );
};

export default PostForm;
