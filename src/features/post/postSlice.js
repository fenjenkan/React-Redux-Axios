import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getData = async () =>{
    const url = "https://jsonplaceholder.typicode.com/posts";
    return await axios.get(url)
        .then((response) =>{
            const data = response.data
            return data
        })
}

const initialState = {
    posts: []
};

export const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers:{
        addListPost: (state,action) =>{
           state.posts = action.payload
        },

        addPost: (state,action) =>{
            state.posts.unshift(action.payload)
        },

        deletePost: (state,action) => {
           const postFound =  state.posts.find(post => post.id === action.payload)
           if(postFound){
            state.posts.splice(state.posts.indexOf(postFound),1)
           }
        },

        editPost: (state,action) => {
            const {id,title,body} = action.payload

            const foundPost = state.posts.find(post => post.id == id)
            if(foundPost){
                foundPost.title = title
                foundPost.body = body
            }
        }
    }
  })
  
  export const {addListPost,addPost,deletePost,editPost} = postSlice.actions

  export default postSlice.reducer