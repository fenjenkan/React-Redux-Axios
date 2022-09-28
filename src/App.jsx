import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addListPost, getData, deletePost } from "./features/post/postSlice";
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    getData().then((response) => {
      dispatch(addListPost(response));
    });
  }, []);
  return (
    <div className="bg-[url('/img/fondo.png')] bg-no-repeat bg-cover bg-fixed h-full  text-white">
      <div className="flex items-center justify-center ">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PostList />} />
            <Route path="/create-post" element={<PostForm />} />
            <Route path="/edit-post/:id" element={<PostForm />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
