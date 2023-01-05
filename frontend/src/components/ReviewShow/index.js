import React from "react";
import './ReviewShow.css';

const Review = ({review}) => {
    const { author, body, createdAt, rating } = review;
    // const user = useSelector( state => state.session.user)
    return(
        <div>
            <ul>
                <li id="rating">
                    Rating: {rating}
                </li>
                <li id="time">
                    On {createdAt}
                </li>
                <li id="ReviewBody">
                    <span id="username">{author}</span> <span id="wrote">wrote</span> <span id="reviewBodyText">{body}</span>
                </li>
            </ul>
        </div>
    )
}

export default Review;