import React from 'react'
import "./CommentsPosted.scss"

function CommentsPosted(props) {
    return (
        <ul className='comments-posted'>
            {props.commentSectionComments &&
                props.commentSectionComments.map((comment) => (
                    <li className='comments-posted__list' key={comment.id}>
                        <div className='comments-posted__post'>
                            <div className='comments-posted__profilepic'></div>
                                <p className='comments-posted__user'>{comment.name}</p>
                                <p className='comments-posted__date'>
                                    {new Date(comment.timestamp).toLocaleDateString()}
                                </p>
                                <p className='comments-posted__comment'>{comment.comment}</p>
                        </div>
                    </li>
                ))}
            <p className='comments-posted__divider'> </p>
        </ul>
    )
}

export default CommentsPosted