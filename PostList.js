import React ,{useEffect}from 'react';
import {connect} from 'react-redux';
import { fetchPosts,deletePost } from '../actions/PostAction';

const PostList =({fetchPosts,deletePost,posts})=>{

    useEffect(()=>{

        fetchPosts();
    },[fetchPosts])

    return(
        <div>
            <h2>Posts</h2>
            <ul>
                {posts.map(post =>(
                    <li key={post.id}>
                        {post.title}{' '}
                        <button onClick={()=> deletePost(post.id)} >Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

const mapStateToProps =state=>({
    posts:state.posts.posts
});

export default connect(mapStateToProps,{fetchPosts,deletePost})(PostList);