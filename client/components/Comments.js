import React from 'react';
import CommentForm from './CommentForm'

const Comments = React.createClass({
    renderComment(comment, index) {
        return (
            <div className="comment" key={index}>
                <p>
                    <strong>{comment.user}</strong>
                    {comment.text}
                    <button className='remove-comment'>&times;</button>
                </p>
            </div>
        );
    },

    render() {
        return (
            <div className="comments">
                {this.props.postComments.map(this.renderComment)}
                <CommentForm {...this.props}/>
            </div>
        );
    }
});

export default Comments;