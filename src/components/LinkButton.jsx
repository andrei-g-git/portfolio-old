import React from 'react'
import { Link,} from 'react-router-dom';
import '../css/LinkButton.scss';

function LinkButton(props) {

    return (
        <Link
            className="link-button"
            role="button"
            to={"/post/" + props.path}
        >   
            {props.handle}
        </Link>
    )
}

export default LinkButton
