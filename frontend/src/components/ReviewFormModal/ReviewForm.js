import "./ReviewFormModal.css";

const ReviewForm = () => {

    return (
        <div id="wholeModal">
        {/* put business name for create title */}
            <h1 id="CreateTitle">Create a Review:</h1> 
            <form id ="form">

                <div id="reviewbox">
                    <label id ="ratingInput"> Rating: 
                        <label> 1
                            <input type="radio"></input> 
                        </label>
                        <label> 2
                            <input type="radio"></input> 
                        </label>
                        <label> 3
                            <input type="radio"></input> 
                        </label>
                        <label> 4
                            <input type="radio"></input> 
                        </label>
                        <label> 5
                            <input type="radio"></input> 
                        </label>     
                    </label>
                    
                        <input type="textarea" rows="5" cols="40" id="reviewInput" placeholder="Review"></input>
                    
                </div>

                <div id ="attachPhoto">
                    <label>Attach a photo: </label>
                    <input type="file"></input>
                </div>
            <button id ="formButton">Post Review</button>
            </form>
        </div>
    )
}

export default ReviewForm;