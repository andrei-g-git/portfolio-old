import React from 'react';
import '../css/Post.scss';

function PostCard(props) {
    return (
        <article
            className="card" 
        >
            <h1
                className="card-title"
            >
                {props.title}
            </h1>
            <h5>
                <span
                    className="card-date"
                >
                    {props.date}
                </span>
            </h5>
            <div
                className="card-image"
            >
                <img 
                    src={extractCardImageAndParagraph(props.content).image.src} 
                    alt="n/a"                
                />
            </div>
            <p 
                className="card-content"
                dangerouslySetInnerHTML={{__html: extractCardImageAndParagraph(props.content).paragraph.innerHTML}} 
            >
            </p>            
        </article>
    )
}

// ### It should show, guaranteed, both the first image and the first paragraph --- maybe the paragraph should be first?
const extractCardImageAndParagraph =(content) => { 
    const contentElement = document.createElement("html");
    contentElement.innerHTML = content;
    const cardImage = contentElement.getElementsByTagName("img")[0]; //so the image to be shown on the card will always be the first    
    const cardParagraph =   contentElement.getElementsByTagName("p")[0]  ;
    return {
        image: cardImage,
        paragraph: cardParagraph
    }
}

export default PostCard
