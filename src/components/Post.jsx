import React from 'react';
import '../css/Post.scss';

function Post(props) {

    return (
        <article
            className="post"
        >
            <h1
                className="title"
            >
                {props.title}
            </h1>
            <h5
                className="date"
            >
                {props.date}
            </h5>
            <p 
                className="content"
                dangerouslySetInnerHTML={{__html: props.content}} 
            >
            </p>
        </article>
    );
}

export default Post;


