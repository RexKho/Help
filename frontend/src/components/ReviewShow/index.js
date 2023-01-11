import React, { useEffect } from "react";
import './ReviewShow.css';
import { formatDateTime } from '../util/dateUtil.js';
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";


const Review = ({review}) => {
    // const businessId =useParams();
    // const dispatch = useDispatch();
    const { author, body, createdAt, rating } = review;
    const created = formatDateTime(createdAt);

  

    // const user = useSelector( state => state.session.user)
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