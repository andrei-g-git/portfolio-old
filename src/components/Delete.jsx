import React from 'react'

function Delete(props) {
    console.log(props)
    return (
        <div>
            <h1>{props.posts[0].title}</h1>
        </div>
    )
}

export default Delete
