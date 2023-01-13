import React from "react";
import './ReviewShow.css';
import { formatDateTime } from '../util/dateUtil.js';

const Review = ({review}) => {
    const { author, body, createdAt, rating } = review;
    const created = formatDateTime(createdAt);

    return(
        <div>
            <ul>
                <li id="rating">
                    Rating: {rating}
                </li>
                <li id="time">
                    On {created}
                </li>
                <li id="ReviewBody">
                    <span id="username">{author}</span> <span id="wrote">wrote:</span> <span id="reviewBodyText">{body}</span>
                </li>
            </ul>
        </div>
    )
}

export default Review;