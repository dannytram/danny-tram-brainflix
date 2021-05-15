import React from "react";

function CommentsPosted(props) {
    return (
        <ul className="comments-posted">
            {props.commentSectionComments.map((comment) => (
                <li className="comments-posted__list">
                    <div className="comments-posted__post">
                        <div className="comments-posted__profilepic"></div>
                        <p className="comments-posted__namc">{comment.name}</p>
                        <p className="comments-posted__date">{comment.timestamp}</p>
                        <p className="comments-posted__comment">{comment.comment}</p>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default CommentsPosted;
