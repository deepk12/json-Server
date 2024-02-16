import axios from 'axios';
// import { FETCH_POSTS, CREATE_POST, DELETE_POST } from './Types';

// import { FETCH_POSTS,CREATE_POST,DELETE_POST } from '../actions/Types';
 import { FETCH_POSTS, DELETE_POST, CREATE_POST } from './Types';
const API_URL = 'http://localhost:5000/posts';
 
export const fetchPosts = () => async (dispatch) => {
  const response = await axios.get(API_URL);
  dispatch({ type: FETCH_POSTS, payload: response.data });
};
 
export const createPost = (postData) => async (dispatch) => {
  const response = await axios.post(API_URL, postData);
  dispatch({ type: CREATE_POST, payload: response.data });
};
 
export const deletePost = (postId) => async (dispatch) => {
  await axios.delete(`${API_URL}/${postId}`);
  dispatch({ type: DELETE_POST, payload: postId });
};
 