import React from "react";
import profilepic from "../assets/images/Mohan-muruge.jpg";

function CommentSection(props) {
  return (
    <div>
      <section className="commentsection">
        <h2 className="commentsection__count">
          {props.commentSectionComments.length} Comments
        </h2>
        <div className="commentsection__add-comment">
          <img
            className="header__profilepic"
            src={profilepic}
            alt="Mystery Man Mohan's Profile"
          ></img>
          <form className="commentsection_form">
            <label className="commentsection__form-label">
              JOIN THE CONVERSATION
            </label>
            <textarea
              className="commentsection__textarea"
              name="commentsection"
              placeholder="That was easily the most spectacular BMX moment ever."
            ></textarea>
          </form>
        </div>
      </section>
    </div>
  );
}

export default CommentSection;
