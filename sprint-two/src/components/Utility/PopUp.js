import React, { Component } from "react";

export default class PopUp extends Component {
    handleClick = () => {
        this.props.toggle();
    };
    render() {
        return (
            <div>
                    <span onClick={this.handleClick}>&times;    </span>
                    <p>Upload Submitted!</p>
            </div>
        );
    }
}