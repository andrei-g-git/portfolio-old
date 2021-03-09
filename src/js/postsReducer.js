//state should be somewhere else

import PostsModel from '../js/PostsModel.js';
import posts from '../data/posts/posts.json';

const initialState = {
    //postsModel: new PostsModel(posts) //unfortunately the react store doesn't deal with OOP models
                                        //can't have class objects with methods
    posts: posts
}

const postsReducer = (state = initialState, action) => {
    switch(action.type){
        default: 
            return state;
    }
}

export {postsReducer}