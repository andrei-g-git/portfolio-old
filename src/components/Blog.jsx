import React from 'react';
import Post from './Post.jsx';
import PostCard from './PostCard.jsx';
import { useState } from 'react';
import '../css/Blog.scss';
import LinkButton from './LinkButton.jsx';
import {Route} from 'react-router-dom';
import { convertOpsToHtml} from '../js/contentAndUrlConversions.js';

function Blog(props) {
    return (
        <div
            id="blog-container"
        >
            <label
                id="latest-posts-label"
            >
                Latest Posts
            </label>

            <div>
            {
                props.posts.map((post) => {

                    return post !== null 

                    ?
                        <div className="post-test-wrapper">
                            <PostCard
                                title={post.title}
                                date={post.dayMonthYear}
                                content={convertOpsToHtml(post.ops)}
                                key={post.id} 
                            >
                            </PostCard>

                            <LinkButton
                                path={post.id}
                                handle="Continue Reading"
                            />
                        </div>                            

                    :

                    <div> No posts yet! </div>
                })              
            }
            </div>
        </div>
    );  
}

const convertToUrlFilePath = (date) => {
    const bp = 123;
    return date.replaceAll("/", "-");
}

export default Blog;

