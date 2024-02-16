import { FETCH_POSTS, CREATE_POST, DELETE_POST } from  '../actions/Types';
const initialState = {
    posts: []
  };
 
  // eslint-disable-next-line import/no-anonymous-default-export
  export default function (state = initialState, action) {
    switch (action.type) {
      case FETCH_POSTS:
        return {
          ...state,
          posts: action.payload
        };
      case CREATE_POST:
        return {
          ...state,
          posts: [...state.posts, action.payload]
        };
      case DELETE_POST:
        return {
          ...state,
          posts: state.posts.filter(post => post.id !== action.payload)
        };
      default:
        return state;
    }
  }