import React from 'react';
import Post from './Post.jsx';
import { useState } from 'react';
import '../css/Blog.scss';

//delta-to-html
import { QuillDeltaToHtmlConverter } from 'quill-delta-to-html';


// const renderer  = require('quilljs-renderer');
// const Document  = renderer.Document;
// renderer.loadFormat('html');

function Blog(props) {

    const [posts, setPosts] = useState(props.posts); //won't need to update with props because the posts model is changed here exclusively, I just need it in Main so I can display featured posts there

    return (
        <div
            id="blog-container"
        >
            {
                posts.getPosts().map((post, index) => {//can delete posts, index bad

                    return post !== null

                    ?
                        <div className="post-test-wrapper">
                            <Post
                                title={post.title}
                                date={post.dateMonthYear} //replace with date
                                content={convertOpsToHtml(post.ops)}
                                key={index} //bad move
                            >
                            </Post>
                        </div>                            

                    :

                    <div> No posts yet! </div>
                })
            }
        </div>
    );

}

const convertOpsToHtml = (ops) => {
    // console.log(new Document(ops).convertTo('html'))
    // return new Document(ops).convertTo('html');

    var cfg = {inlineStyles: true};
    var converter = new QuillDeltaToHtmlConverter(ops, cfg);
    return converter.convert(); 
}

export default Blog;