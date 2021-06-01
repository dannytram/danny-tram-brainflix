import React from 'react'
import profilepic from "../../assets/images/Mohan-muruge.jpg"
import "./CommentSection.scss"

function CommentSection(props) {
    return (
        <div>
            <section className='commentsection'>
                <h3 className='commentsection__count'>
                    {props.commentSectionComments && props.commentSectionComments.length} Comments</h3>
                <div className='commentsection__wrapper'>
                    <div className='commentsection__add-comment'>
                        <div className="header__profilepic">
                            <img
                                className='header__profileimg'
                                src={profilepic}
                                alt="Mystery Man Mohan's Profile"
                            />
                        </div>
                        <form className='commentsection__form'>
                            <label className='commentsection__form-label'>JOIN THE CONVERSATION</label>
                            <textarea
                                className='commentsection__text-area'
                                name='commentsection'
                                placeholder='Write comment here'
                            ></textarea>
                        </form>
                    </div>
                    <div className='commentsection__btn-wrapper'>
                        <button className='commentsection__btn' type='submit'>COMMENT</button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default CommentSection
